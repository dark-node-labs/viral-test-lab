const ADSENSE_CLIENT = "ca-pub-3196187117350639";
const ADSENSE_SCRIPT = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}"
     crossorigin="anonymous"></script>`;

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
    const sensitiveSbtiPath = /^\/(?:zh\/)?sbti-types\/(?:dead|drunk|fuck|poor|sexy|shit)\/?$/;
    const matureQuizPath = /^\/(?:(?:zh|vi)\/rice-purity-test|(?:zh|vi|fr)\/rice-purity-test-score-meaning|rice-purity-test|rice-purity-test-score-meaning|fr\/test-de-purete)\/?$/;
    const aliasRedirects = new Map([
      ["/camera-test/", "/webcam-test/"],
      ["/controller-test/", "/gamepad-tester/"],
      ["/mic-test/", "/microphone-test/"],
      ["/mouse-click-test/", "/click-test/"]
    ]);

    if (url.hostname === "www.quicktesthub.com") {
      url.hostname = "quicktesthub.com";
      return Response.redirect(url.toString(), 301);
    }

    const normalizedPath = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
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

    if (sensitiveSbtiPath.test(url.pathname) || matureQuizPath.test(url.pathname)) {
      const response = await env.ASSETS.fetch(request);
      return await withSeoAndCacheHeaders(request, response, { xRobotsTag: "noindex, follow", skipAdsense: true });
    }

    const response = await env.ASSETS.fetch(request);
    return await withSeoAndCacheHeaders(request, response);
  }
};
