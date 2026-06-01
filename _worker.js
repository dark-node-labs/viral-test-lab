export default {
  fetch(request, env) {
    const url = new URL(request.url);

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

    return env.ASSETS.fetch(request);
  }
};
