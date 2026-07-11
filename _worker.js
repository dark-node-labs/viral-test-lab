const ADSENSE_CLIENT = "ca-pub-3196187117350639";
const ADSENSE_SCRIPT = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}"
     crossorigin="anonymous"></script>`;

const PUBLIC_PAGE_PATHS = new Set([
  "/", "/about/", "/ai-agent-replay-debugging/", "/click-test/", "/contact/", "/cookies/",
  "/cps-test/", "/device-tests/", "/double-click-test/", "/gamepad-tester/",
  "/jira-test-case-template/", "/keyboard-polling-rate-test/", "/keyboard-test/",
  "/microphone-test/", "/mouse-test/", "/privacy/", "/reaction-time-test/", "/sbti-test/",
  "/sbti-types/", "/spacebar-clicker/", "/speed-tests/", "/terms/", "/test-data-generator/",
  "/test-plan-template/", "/typing-speed-test/", "/webcam-test/",
  "/zh/", "/zh/reaction-time-test/", "/zh/typing-speed-test/", "/zh/cps-test/",
  "/zh/keyboard-test/", "/zh/keyboard-polling-rate-test/", "/zh/mouse-test/",
  "/fr/", "/fr/reaction-time-test/", "/fr/typing-speed-test/", "/fr/cps-test/",
  "/fr/keyboard-test/", "/fr/keyboard-polling-rate-test/", "/fr/mouse-test/",
  "/vi/", "/vi/reaction-time-test/", "/vi/typing-speed-test/", "/vi/cps-test/",
  "/vi/keyboard-test/", "/vi/keyboard-polling-rate-test/", "/vi/mouse-test/"
]);

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
      body = html.includes(ADSENSE_CLIENT) ? html : html.replace("</head>", `    ${ADSENSE_SCRIPT}\n  </head>`);
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
