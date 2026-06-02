export default {
  fetch(request, env) {
    const url = new URL(request.url);
    const sensitiveSbtiPath = /^\/(?:zh\/)?sbti-types\/(?:dead|drunk|fuck|poor|sexy|shit)\/?$/;

    if (url.hostname === "www.quicktesthub.com") {
      url.hostname = "quicktesthub.com";
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

    if (sensitiveSbtiPath.test(url.pathname)) {
      return env.ASSETS.fetch(request).then((response) => {
        const headers = new Headers(response.headers);
        headers.set("x-robots-tag", "noindex, follow");
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers
        });
      });
    }

    return env.ASSETS.fetch(request);
  }
};
