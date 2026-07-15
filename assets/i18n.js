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
    if (path === "/account/" || path === "/zh/account/" || path === "/fr/account/" || path === "/vi/account/") return "account";
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
    if (path.includes("/test-data-generator/")) return "test-data-generator";
    if (path.includes("/api-integration-testing/")) return "api-integration-testing";
    if (path.includes("/jira-test-case-template/")) return "jira-test-case-template";
    if (path.includes("/test-plan-template/")) return "test-plan-template";
    if (path.includes("/ai-agent-replay-debugging/")) return "ai-agent-replay-debugging";
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
    if (path.includes("/about/")) return "about";
    if (path.includes("/contact/")) return "contact";
    if (path.includes("/privacy/")) return "privacy";
    if (path.includes("/terms/")) return "terms";
    if (path.includes("/cookies/")) return "cookies";
    return "home";
  };

  const localizedPath = (lang, key, hash = "", slug = "") => {
    const routes = {
      en: {
        home: "/",
        account: "/account/",
        "iq-test": "/iq-test/",
        "reaction-test": "/reaction-time-test/",
        "typing-test": "/typing-speed-test/",
        "cps-test": "/cps-test/",
        "spacebar-clicker": "/spacebar-clicker/",
        "double-click-test": "/double-click-test/",
        "speed-tests": "/speed-tests/",
        "device-tests": "/device-tests/",
        "test-data-generator": "/test-data-generator/",
        "api-integration-testing": "/api-integration-testing/",
        "jira-test-case-template": "/jira-test-case-template/",
        "test-plan-template": "/test-plan-template/",
        "ai-agent-replay-debugging": "/ai-agent-replay-debugging/",
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
        about: "/about/",
        contact: "/contact/",
        privacy: "/privacy/",
        terms: "/terms/",
        cookies: "/cookies/"
      },
      zh: {
        home: "/zh/",
        account: "/zh/account/",
        "iq-test": "/zh/iq-test/",
        "reaction-test": "/zh/reaction-time-test/",
        "typing-test": "/zh/typing-speed-test/",
        "cps-test": "/zh/cps-test/",
        "spacebar-clicker": "/spacebar-clicker/",
        "double-click-test": "/double-click-test/",
        "speed-tests": "/speed-tests/",
        "device-tests": "/device-tests/",
        "test-data-generator": "/test-data-generator/",
        "api-integration-testing": "/api-integration-testing/",
        "jira-test-case-template": "/jira-test-case-template/",
        "test-plan-template": "/test-plan-template/",
        "ai-agent-replay-debugging": "/ai-agent-replay-debugging/",
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
        about: "/about/",
        contact: "/contact/",
        privacy: "/privacy/",
        terms: "/terms/",
        cookies: "/cookies/"
      },
      fr: {
        home: "/fr/",
        account: "/fr/account/",
        "iq-test": "/iq-test/",
        "reaction-test": "/fr/reaction-time-test/",
        "typing-test": "/fr/typing-speed-test/",
        "cps-test": "/fr/cps-test/",
        "spacebar-clicker": "/spacebar-clicker/",
        "double-click-test": "/double-click-test/",
        "speed-tests": "/speed-tests/",
        "device-tests": "/device-tests/",
        "test-data-generator": "/test-data-generator/",
        "api-integration-testing": "/api-integration-testing/",
        "jira-test-case-template": "/jira-test-case-template/",
        "test-plan-template": "/test-plan-template/",
        "ai-agent-replay-debugging": "/ai-agent-replay-debugging/",
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
        about: "/about/",
        contact: "/contact/",
        privacy: "/privacy/",
        terms: "/terms/",
        cookies: "/cookies/"
      },
      vi: {
        home: "/vi/",
        account: "/vi/account/",
        "iq-test": "/iq-test/",
        "reaction-test": "/vi/reaction-time-test/",
        "typing-test": "/vi/typing-speed-test/",
        "cps-test": "/vi/cps-test/",
        "spacebar-clicker": "/spacebar-clicker/",
        "double-click-test": "/double-click-test/",
        "speed-tests": "/speed-tests/",
        "device-tests": "/device-tests/",
        "test-data-generator": "/test-data-generator/",
        "api-integration-testing": "/api-integration-testing/",
        "jira-test-case-template": "/jira-test-case-template/",
        "test-plan-template": "/test-plan-template/",
        "ai-agent-replay-debugging": "/ai-agent-replay-debugging/",
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
        about: "/about/",
        contact: "/contact/",
        privacy: "/privacy/",
        terms: "/terms/",
        cookies: "/cookies/"
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
    const href = link.getAttribute("href");
    if (href.startsWith("/auth/")) return;
    const url = new URL(href, window.location.origin);
    const mapped = localizedPath(lang, routeKey(url.pathname), url.hash, sbtiTypeSlug(url.pathname));
    link.setAttribute("href", mapped);
  });

  document.querySelectorAll(".language-menu").forEach((menu) => {
    const labels = {
      en: { short: "EN", native: "English" },
      zh: { short: "中文", native: "中文" },
      fr: { short: "FR", native: "Français" },
      vi: { short: "VI", native: "Tiếng Việt" }
    };
    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.setAttribute("aria-label", "Language");
    Object.entries(labels).forEach(([targetLang, language]) => {
      const item = document.createElement("a");
      item.href = localizedPath(targetLang, key, window.location.hash, currentTypeSlug);
      item.textContent = language.short;
      item.title = language.native;
      item.setAttribute("aria-label", language.native);
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

  if (!window.location.pathname.endsWith("/account/") && !document.querySelector(".nav-login")) {
    const labels = { en: "Sign in", zh: "登录", fr: "Se connecter", vi: "Đăng nhập" };
    const login = document.createElement("a");
    login.className = "nav-login";
    login.href = localizedPath(lang, "account");
    login.textContent = labels[lang] || labels.en;
    (document.querySelector(".home-nav-actions") || document.querySelector(".nav-links"))?.prepend(login);
  }
})();
