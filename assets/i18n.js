(function () {
  const langFromPath = (path) => {
    if (path.startsWith("/zh/") || path === "/zh") return "zh";
    if (path.startsWith("/fr/") || path === "/fr") return "fr";
    if (path.startsWith("/vi/") || path === "/vi") return "vi";
    return "en";
  };

  const sbtiTypeSlug = (path) => {
    const match = path.match(/^\/(?:(?:zh|fr|vi)\/)?sbti-types\/([^/]+)\/?$/);
    return match ? match[1] : "";
  };

  const routeKey = (path) => {
    if (path === "/" || path === "/zh/" || path === "/fr/" || path === "/vi/") return "home";
    if (sbtiTypeSlug(path)) return "sbti-type";
    if (path.includes("/sbti-types/")) return "sbti-types";
    if (path.includes("/sbti-test/")) return "sbti-test";
    if (path.includes("/reaction-time-test/")) return "reaction-test";
    if (path.includes("/typing-speed-test/")) return "typing-test";
    if (path.includes("/cps-test/")) return "cps-test";
    if (path.includes("/spacebar-clicker/")) return "spacebar-clicker";
    if (path.includes("/double-click-test/")) return "double-click-test";
    if (path.includes("/speed-tests/")) return "speed-tests";
    if (path.includes("/device-tests/")) return "device-tests";
    if (path.includes("/keyboard-test/")) return "keyboard-test";
    if (path.includes("/keyboard-polling-rate-test/")) return "keyboard-polling-test";
    if (path.includes("/mouse-test/")) return "mouse-test";
    if (path.includes("/microphone-test/")) return "microphone-test";
    if (path.includes("/mic-test/")) return "mic-test";
    if (path.includes("/webcam-test/")) return "webcam-test";
    if (path.includes("/camera-test/")) return "camera-test";
    if (path.includes("/gamepad-tester/")) return "gamepad-tester";
    if (path.includes("/controller-test/")) return "controller-test";
    if (path.includes("/click-test/")) return "click-test";
    if (path.includes("/mouse-click-test/")) return "mouse-click-test";
    if (path.includes("/iq-test")) return "iq-test";
    if (path.includes("/rice-purity-test-score-meaning/")) return "rice-score";
    if (path.includes("/rice-purity-test/") || path.includes("/test-de-purete/")) return "rice-test";
    if (path.includes("/best-fun-personality-tests/")) return "fun-tests";
    if (path.includes("/link-to-us/")) return "link-to-us";
    if (path.includes("/privacy/")) return "privacy";
    if (path.includes("/terms/")) return "terms";
    return "home";
  };

  const localizedPath = (lang, key, hash = "", slug = "") => {
    const routes = {
      en: {
        home: "/",
        "iq-test": "/iq-test/",
        "reaction-test": "/reaction-time-test/",
        "typing-test": "/typing-speed-test/",
        "cps-test": "/cps-test/",
        "spacebar-clicker": "/spacebar-clicker/",
        "double-click-test": "/double-click-test/",
        "speed-tests": "/speed-tests/",
        "device-tests": "/device-tests/",
        "keyboard-test": "/keyboard-test/",
        "keyboard-polling-test": "/keyboard-polling-rate-test/",
        "mouse-test": "/mouse-test/",
        "microphone-test": "/microphone-test/",
        "mic-test": "/mic-test/",
        "webcam-test": "/webcam-test/",
        "camera-test": "/camera-test/",
        "gamepad-tester": "/gamepad-tester/",
        "controller-test": "/controller-test/",
        "click-test": "/click-test/",
        "mouse-click-test": "/mouse-click-test/",
        "sbti-test": "/sbti-test/",
        "sbti-types": "/sbti-types/",
        "rice-test": "/rice-purity-test/",
        "rice-score": "/rice-purity-test-score-meaning/",
        "fun-tests": "/best-fun-personality-tests/",
        "link-to-us": "/link-to-us/",
        privacy: "/privacy/",
        terms: "/terms/"
      },
      zh: {
        home: "/zh/",
        "iq-test": "/zh/iq-test/",
        "reaction-test": "/zh/reaction-time-test/",
        "typing-test": "/zh/typing-speed-test/",
        "cps-test": "/zh/cps-test/",
        "spacebar-clicker": "/spacebar-clicker/",
        "double-click-test": "/double-click-test/",
        "speed-tests": "/speed-tests/",
        "device-tests": "/device-tests/",
        "keyboard-test": "/zh/keyboard-test/",
        "keyboard-polling-test": "/zh/keyboard-polling-rate-test/",
        "mouse-test": "/zh/mouse-test/",
        "microphone-test": "/microphone-test/",
        "mic-test": "/mic-test/",
        "webcam-test": "/webcam-test/",
        "camera-test": "/camera-test/",
        "gamepad-tester": "/gamepad-tester/",
        "controller-test": "/controller-test/",
        "click-test": "/click-test/",
        "mouse-click-test": "/mouse-click-test/",
        "sbti-test": "/zh/sbti-test/",
        "sbti-types": "/zh/sbti-types/",
        "rice-test": "/zh/rice-purity-test/",
        "rice-score": "/zh/rice-purity-test-score-meaning/",
        "fun-tests": "/best-fun-personality-tests/",
        "link-to-us": "/link-to-us/",
        privacy: "/privacy/",
        terms: "/terms/"
      },
      fr: {
        home: "/fr/",
        "iq-test": "/iq-test/",
        "reaction-test": "/fr/reaction-time-test/",
        "typing-test": "/fr/typing-speed-test/",
        "cps-test": "/fr/cps-test/",
        "spacebar-clicker": "/spacebar-clicker/",
        "double-click-test": "/double-click-test/",
        "speed-tests": "/speed-tests/",
        "device-tests": "/device-tests/",
        "keyboard-test": "/fr/keyboard-test/",
        "keyboard-polling-test": "/fr/keyboard-polling-rate-test/",
        "mouse-test": "/fr/mouse-test/",
        "microphone-test": "/microphone-test/",
        "mic-test": "/mic-test/",
        "webcam-test": "/webcam-test/",
        "camera-test": "/camera-test/",
        "gamepad-tester": "/gamepad-tester/",
        "controller-test": "/controller-test/",
        "click-test": "/click-test/",
        "mouse-click-test": "/mouse-click-test/",
        "sbti-test": "/fr/sbti-test/",
        "sbti-types": "/fr/sbti-types/",
        "rice-test": "/fr/test-de-purete/",
        "rice-score": "/fr/rice-purity-test-score-meaning/",
        "fun-tests": "/best-fun-personality-tests/",
        "link-to-us": "/link-to-us/",
        privacy: "/privacy/",
        terms: "/terms/"
      },
      vi: {
        home: "/vi/",
        "iq-test": "/iq-test/",
        "reaction-test": "/vi/reaction-time-test/",
        "typing-test": "/vi/typing-speed-test/",
        "cps-test": "/vi/cps-test/",
        "spacebar-clicker": "/spacebar-clicker/",
        "double-click-test": "/double-click-test/",
        "speed-tests": "/speed-tests/",
        "device-tests": "/device-tests/",
        "keyboard-test": "/vi/keyboard-test/",
        "keyboard-polling-test": "/vi/keyboard-polling-rate-test/",
        "mouse-test": "/vi/mouse-test/",
        "microphone-test": "/microphone-test/",
        "mic-test": "/mic-test/",
        "webcam-test": "/webcam-test/",
        "camera-test": "/camera-test/",
        "gamepad-tester": "/gamepad-tester/",
        "controller-test": "/controller-test/",
        "click-test": "/click-test/",
        "mouse-click-test": "/mouse-click-test/",
        "sbti-test": "/vi/sbti-test/",
        "sbti-types": "/vi/sbti-types/",
        "rice-test": "/vi/rice-purity-test/",
        "rice-score": "/vi/rice-purity-test-score-meaning/",
        "fun-tests": "/best-fun-personality-tests/",
        "link-to-us": "/link-to-us/",
        privacy: "/privacy/",
        terms: "/terms/"
      }
    };
    if (key === "sbti-type") {
      if (slug && lang === "en") return `/sbti-types/${slug}/` + hash;
      if (slug && lang === "zh") return `/zh/sbti-types/${slug}/` + hash;
      if (slug) return `/sbti-types/${slug}/` + hash;
      return routes[lang]["sbti-types"] + hash;
    }
    return (routes[lang][key] || routes[lang].home) + hash;
  };

  const currentLang = langFromPath(window.location.pathname);
  const storedLang = localStorage.getItem("siteLang");
  const key = routeKey(window.location.pathname);
  const currentTypeSlug = sbtiTypeSlug(window.location.pathname);

  if (currentLang !== "en") {
    localStorage.setItem("siteLang", currentLang);
  } else if (storedLang && storedLang !== currentLang && ["en", "zh", "fr", "vi"].includes(storedLang)) {
    const next = localizedPath(storedLang, key, window.location.hash, currentTypeSlug);
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
    const mapped = localizedPath(lang, routeKey(url.pathname), url.hash, sbtiTypeSlug(url.pathname));
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
      item.href = localizedPath(targetLang, key, window.location.hash, currentTypeSlug);
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
    link.setAttribute("href", localizedPath(targetLang, key, window.location.hash, currentTypeSlug));
    link.toggleAttribute("aria-current", targetLang === lang);
    link.addEventListener("click", () => localStorage.setItem("siteLang", targetLang));
  });
})();
