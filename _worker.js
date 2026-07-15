const ADSENSE_CLIENT = "ca-pub-3196187117350639";
const ADSENSE_SCRIPT = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}"
     crossorigin="anonymous"></script>`;

const BLOCKED_PROXY_HOSTS = /^(localhost|127\.|0\.0\.0\.0|10\.|192\.168\.|169\.254\.|172\.(?:1[6-9]|2\d|3[0-1])\.|\[?::1\]?|.*\.local$|.*\.internal$)/i;

function proxyError(message, status = 400) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "https://quicktesthub.com", "cache-control": "no-store" }
  });
}

async function handleApiProxy(request) {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: { "access-control-allow-origin": "https://quicktesthub.com", "access-control-allow-methods": "POST, OPTIONS", "access-control-allow-headers": "content-type" } });
  }
  if (request.method !== "POST") return proxyError("Use POST for API proxy requests.", 405);
  let input;
  try { input = await request.json(); } catch { return proxyError("Request body must be valid JSON."); }
  if (!input || typeof input.url !== "string" || input.url.length > 2048) return proxyError("Enter a valid target URL.");
  let target;
  try { target = new URL(input.url); } catch { return proxyError("Target URL is invalid."); }
  if (target.protocol !== "https:") return proxyError("Only HTTPS API targets are allowed.");
  if (BLOCKED_PROXY_HOSTS.test(target.hostname)) return proxyError("Private and local network targets are not allowed.", 403);
  const method = String(input.method || "GET").toUpperCase();
  if (!["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"].includes(method)) return proxyError("HTTP method is not allowed.");
  const rawBody = typeof input.body === "string" ? input.body : "";
  if (rawBody.length > 262144) return proxyError("Request body is limited to 256 KB.", 413);
  const outgoing = new Headers();
  if (input.headers && typeof input.headers === "object") {
    Object.entries(input.headers).slice(0, 30).forEach(([key, value]) => {
      if (/^(host|cookie|origin|referer|connection|content-length)$/i.test(key)) return;
      if (typeof value === "string" && value.length <= 2048) outgoing.set(key, value);
    });
  }
  let upstream;
  try { upstream = await fetch(target.toString(), { method, headers: outgoing, body: ["GET", "HEAD"].includes(method) ? undefined : rawBody }); }
  catch { return proxyError("The target API could not be reached.", 502); }
  const responseBody = await upstream.text();
  if (responseBody.length > 524288) return proxyError("Response is limited to 512 KB.", 413);
  const headers = new Headers({ "content-type": upstream.headers.get("content-type") || "text/plain; charset=utf-8", "access-control-allow-origin": "https://quicktesthub.com", "cache-control": "no-store", "x-qth-proxy": "browser-api-test" });
  return new Response(responseBody, { status: upstream.status, statusText: upstream.statusText, headers });
}

const PUBLIC_PAGE_PATHS = new Set([
  "/", "/about/", "/ai-agent-replay-debugging/", "/click-test/", "/contact/", "/cookies/",
  "/cps-test/", "/device-tests/", "/double-click-test/", "/gamepad-tester/",
  "/jira-test-case-template/", "/keyboard-polling-rate-test/", "/keyboard-test/",
  "/microphone-test/", "/mouse-test/", "/privacy/", "/reaction-time-test/", "/sbti-test/",
  "/sbti-types/", "/spacebar-clicker/", "/speed-tests/", "/terms/", "/test-data-generator/", "/openapi-mock-server-generator/", "/acceptance-criteria-generator/",
  "/test-plan-template/", "/typing-speed-test/", "/webcam-test/", "/api-integration-testing/", "/api-testing-tools/", "/api-contract-testing/",
  "/auth/callback/",
  "/zh/", "/zh/reaction-time-test/", "/zh/typing-speed-test/", "/zh/cps-test/",
  "/zh/keyboard-test/", "/zh/keyboard-polling-rate-test/", "/zh/mouse-test/",
  "/fr/", "/fr/reaction-time-test/", "/fr/typing-speed-test/", "/fr/cps-test/",
  "/fr/keyboard-test/", "/fr/keyboard-polling-rate-test/", "/fr/mouse-test/",
  "/vi/", "/vi/reaction-time-test/", "/vi/typing-speed-test/", "/vi/cps-test/",
  "/vi/keyboard-test/", "/vi/keyboard-polling-rate-test/", "/vi/mouse-test/",
  "/account/", "/zh/account/", "/fr/account/", "/vi/account/"
]);

function jsonResponse(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...extraHeaders }
  });
}

function getBearerToken(request) {
  const authorization = request.headers.get("authorization") || "";
  if (/^Bearer\s+/i.test(authorization)) return authorization.replace(/^Bearer\s+/i, "").trim();
  const cookie = request.headers.get("cookie") || "";
  const match = cookie.match(/(?:^|;\s*)qth_access_token=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "";
}

function authConfigResponse(env) {
  return jsonResponse({
    provider: "supabase",
    configured: Boolean(env.SUPABASE_URL && env.SUPABASE_ANON_KEY),
    supabaseUrl: env.SUPABASE_URL || "",
    supabaseAnonKey: env.SUPABASE_ANON_KEY || ""
  });
}

async function authUserResponse(request, env) {
  const token = getBearerToken(request);
  if (!token) return jsonResponse({ authenticated: false, configured: Boolean(env.SUPABASE_URL && env.SUPABASE_ANON_KEY) });
  if (!env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) return jsonResponse({ authenticated: false, configured: false });
  try {
    const response = await fetch(`${env.SUPABASE_URL.replace(/\/$/, "")}/auth/v1/user`, {
      headers: { apikey: env.SUPABASE_ANON_KEY, authorization: `Bearer ${token}` }
    });
    if (!response.ok) return jsonResponse({ authenticated: false, configured: true }, 200);
    const user = await response.json();
    return jsonResponse({ authenticated: true, configured: true, user: { id: user.id, email: user.email, name: user.user_metadata?.full_name || user.user_metadata?.name || "" } });
  } catch {
    return jsonResponse({ authenticated: false, configured: true }, 200);
  }
}

function authSignoutResponse() {
  return jsonResponse({ ok: true }, 200, { "set-cookie": "qth_access_token=; Max-Age=0; Path=/; Secure; SameSite=Lax" });
}

async function withSeoAndCacheHeaders(request, response, options = {}) {
  const url = new URL(request.url);
  const headers = new Headers(response.headers);
  const contentType = headers.get("content-type") || "";
  let body = response.body;

  if (options.xRobotsTag) {
    headers.set("x-robots-tag", options.xRobotsTag);
  }

  if (url.pathname.startsWith("/assets/")) {
    headers.set("cache-control", "public, max-age=31536000, immutable");
  } else if (contentType.includes("text/html")) {
    headers.set("cache-control", "public, max-age=600, s-maxage=86400, stale-while-revalidate=604800");

    if (!options.skipAdsense) {
      const html = await response.text();
      const adsenseHtml = html.includes(ADSENSE_CLIENT) ? html : html.replace("</head>", `    ${ADSENSE_SCRIPT}\n  </head>`);
      body = url.pathname === "/api-contract-testing/"
        ? adsenseHtml
            .replace("This MVP focuses on a quick properties and required-field compatibility check.", "This focused checker covers common properties, required fields, types, enums, and OpenAPI component schema changes.")
            .replace("or a full OpenAPI document with a component schema selected by the helper.", "or a full OpenAPI document with component schemas.")
            .replace("</body>", '    <script src="/assets/api-contract.js?v=20260712-1"></script>\n  </body>')
        : url.pathname === "/api-integration-testing/"
          ? adsenseHtml
              .replace("The request is sent directly from your browser to the URL you enter. Quick Test Hub does not proxy requests. The target API must allow browser CORS requests.", "The tool tries a direct browser request first. If CORS blocks it, a limited Quick Test Hub proxy fallback can forward HTTPS requests without storing them. Private and local targets are blocked, and request and response sizes are limited.")
              .replace("This page does not proxy requests through Quick Test Hub. Your browser sends the request directly to the target URL, so CORS and the target server policy apply.", "The page tries a direct browser request first and can use a limited HTTPS proxy fallback when CORS blocks it. The proxy does not store requests, blocks private and local targets, and applies size limits.")
              .replace("</body>", '    <script src="/assets/api-runner.js?v=20260712-1"></script>\n  </body>')
          : adsenseHtml;
      headers.delete("content-length");
    }
  }

  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const retiredEntertainmentPath = /^\/(?:(?:zh|fr|vi)\/)?(?:rice-purity-test(?:-score-meaning)?|test-de-purete|iq-test|best-fun-personality-tests|link-to-us)\/$/;
    const aliasRedirects = new Map([
      ["/camera-test/", "/webcam-test/"],
      ["/click-speed-test/", "/click-test/"],
      ["/controller-test/", "/gamepad-tester/"],
      ["/mic-test/", "/microphone-test/"],
      ["/mouse-click-test/", "/click-test/"]
    ]);

    if (url.hostname === "www.quicktesthub.com") {
      url.hostname = "quicktesthub.com";
      return Response.redirect(url.toString(), 301);
    }

    const normalizedPath = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;

    if (url.pathname === "/api/proxy") return handleApiProxy(request);
    if (url.pathname === "/api/auth/config" && request.method === "GET") return authConfigResponse(env);
    if (url.pathname === "/api/auth/user" && request.method === "GET") return authUserResponse(request, env);
    if (url.pathname === "/api/auth/signout" && request.method === "POST") return authSignoutResponse();

    if (url.pathname === "/cdn-cgi/l/email-protection") {
      url.pathname = "/contact/";
      url.search = "";
      url.hash = "";
      return Response.redirect(url.toString(), 301);
    }

    if (retiredEntertainmentPath.test(normalizedPath)) {
      return new Response(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>Page retired | Quick Test Hub</title>
  </head>
  <body>
    <main>
      <h1>This page has been retired</h1>
      <p>Quick Test Hub now focuses on browser-based device checks, speed tests, and practical QA tools.</p>
      <p><a href="/">Browse current tools</a></p>
    </main>
  </body>
</html>`, {
        status: 410,
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=300, s-maxage=86400",
          "x-robots-tag": "noindex, nofollow"
        }
      });
    }

    const canonicalPath = aliasRedirects.get(normalizedPath);
    if (canonicalPath) {
      url.pathname = canonicalPath;
      return Response.redirect(url.toString(), 301);
    }

    if (url.searchParams.has("add-to-cart") || url.pathname.startsWith("/product/")) {
      return new Response("Gone", {
        status: 410,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "x-robots-tag": "noindex"
        }
      });
    }

    const looksLikeStaticFile = url.pathname.startsWith("/assets/") || /\/[^/]+\.[a-z0-9]+$/i.test(url.pathname);
    if (!PUBLIC_PAGE_PATHS.has(normalizedPath) && !looksLikeStaticFile) {
      const notFoundRequest = new Request(new URL("/404.html", request.url), request);
      const notFoundResponse = await env.ASSETS.fetch(notFoundRequest);
      const headers = new Headers(notFoundResponse.headers);
      headers.set("cache-control", "public, max-age=300, s-maxage=3600");
      headers.set("x-robots-tag", "noindex, nofollow");
      headers.delete("content-length");
      return new Response(notFoundResponse.body, { status: 404, headers });
    }

    const assetCacheBustPaths = new Set(["/about/", "/contact/", "/privacy/", "/terms/", "/test-data-generator/"]);
    let assetRequest = request;
    if (assetCacheBustPaths.has(normalizedPath)) {
      const assetUrl = new URL(request.url);
      assetUrl.searchParams.set("__qth_asset_v", "20260710-email2");
      assetRequest = new Request(assetUrl.toString(), request);
    }

    const response = await env.ASSETS.fetch(assetRequest);
    return await withSeoAndCacheHeaders(request, response);
  }
};
