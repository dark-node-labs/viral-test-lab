(function () {
  const langFromPath = (path) => {
    if (path.startsWith("/zh/") || path === "/zh") return "zh";
    if (path.startsWith("/fr/") || path === "/fr") return "fr";
    if (path.startsWith("/vi/") || path === "/vi") return "vi";
    return "en";
  };

  const routeKey = (path) => {
    if (path === "/" || path === "/zh/" || path === "/fr/" || path === "/vi/") return "home";
    if (path.includes("/sbti-types/")) return "sbti-types";
    if (path.includes("/sbti-test/")) return "sbti-test";
    if (path.includes("/rice-purity-test-score-meaning/")) return "rice-score";
    if (path.includes("/rice-purity-test/") || path.includes("/test-de-purete/")) return "rice-test";
    if (path.includes("/privacy/")) return "privacy";
    if (path.includes("/terms/")) return "terms";
    return "home";
  };

  const localizedPath = (lang, key, hash = "") => {
    const routes = {
      en: {
        home: "/",
        "sbti-test": "/sbti-test/",
        "sbti-types": "/sbti-types/",
        "rice-test": "/rice-purity-test/",
        "rice-score": "/rice-purity-test-score-meaning/",
        privacy: "/privacy/",
        terms: "/terms/"
      },
      zh: {
        home: "/zh/",
        "sbti-test": "/zh/sbti-test/",
        "sbti-types": "/zh/sbti-types/",
        "rice-test": "/zh/rice-purity-test/",
        "rice-score": "/zh/rice-purity-test-score-meaning/",
        privacy: "/privacy/",
        terms: "/terms/"
      },
      fr: {
        home: "/fr/",
        "sbti-test": "/fr/sbti-test/",
        "sbti-types": "/fr/sbti-types/",
        "rice-test": "/fr/test-de-purete/",
        "rice-score": "/fr/rice-purity-test-score-meaning/",
        privacy: "/privacy/",
        terms: "/terms/"
      },
      vi: {
        home: "/vi/",
        "sbti-test": "/vi/sbti-test/",
        "sbti-types": "/vi/sbti-types/",
        "rice-test": "/vi/rice-purity-test/",
        "rice-score": "/vi/rice-purity-test-score-meaning/",
        privacy: "/privacy/",
        terms: "/terms/"
      }
    };
    return (routes[lang][key] || routes[lang].home) + hash;
  };

  const currentLang = langFromPath(window.location.pathname);
  const storedLang = localStorage.getItem("siteLang");
  const key = routeKey(window.location.pathname);

  if (storedLang && storedLang !== currentLang && ["en", "zh", "fr", "vi"].includes(storedLang)) {
    const next = localizedPath(storedLang, key, window.location.hash);
    if (next !== window.location.pathname + window.location.hash) {
      window.location.replace(next);
      return;
    }
  } else {
    localStorage.setItem("siteLang", currentLang);
  }

  const lang = localStorage.getItem("siteLang") || currentLang;

  document.querySelectorAll("a[href^='/']").forEach((link) => {
    if (link.closest(".language-popover")) return;
    const url = new URL(link.getAttribute("href"), window.location.origin);
    const mapped = localizedPath(lang, routeKey(url.pathname), url.hash);
    link.setAttribute("href", mapped);
  });

  document.querySelectorAll(".language-menu").forEach((menu) => {
    const labels = {
      en: "EN",
      zh: "中文",
      fr: "FR",
      vi: "VI"
    };
    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.setAttribute("aria-label", "Language");
    Object.entries(labels).forEach(([targetLang, label]) => {
      const item = document.createElement("a");
      item.href = localizedPath(targetLang, key, window.location.hash);
      item.textContent = label;
      item.dataset.lang = targetLang;
      if (targetLang === lang) item.setAttribute("aria-current", "true");
      item.addEventListener("click", () => localStorage.setItem("siteLang", targetLang));
      switcher.appendChild(item);
    });
    menu.replaceWith(switcher);
  });

  document.querySelectorAll(".language-popover a").forEach((link) => {
    const targetLang = link.dataset.lang || (link.textContent.includes("中文") ? "zh" : link.textContent.includes("Français") ? "fr" : link.textContent.includes("Tiếng") ? "vi" : "en");
    link.setAttribute("href", localizedPath(targetLang, key, window.location.hash));
    link.toggleAttribute("aria-current", targetLang === lang);
    link.addEventListener("click", () => localStorage.setItem("siteLang", targetLang));
  });
})();
