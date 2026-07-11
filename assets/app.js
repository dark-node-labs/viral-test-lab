function byId(id) {
  return document.getElementById(id);
}

function trackEvent(name, params = {}) {
  if (typeof window.gtag !== "function") return;
  const normalizedName = name === "tool_start" ? "tool_started" : name === "tool_complete" ? "tool_completed" : name;
  const isToolKeyEvent = normalizedName === "tool_started" || normalizedName === "tool_completed";
  const legacyName = normalizedName === "tool_started" ? "tool_start" : normalizedName === "tool_completed" ? "tool_complete" : null;
  const hasParam = (key) => Object.prototype.hasOwnProperty.call(params, key);
  const normalizedParams = {
    ...params,
    ...(hasParam("value") && !hasParam("result_value") ? { result_value: params.value } : {}),
    ...(hasParam("duration") && !hasParam("duration_seconds") ? { duration_seconds: params.duration } : {})
  };
  window.gtag("event", normalizedName, {
    ...(isToolKeyEvent ? {
      event_category: "tool_engagement",
      key_event: true,
      conversion: true
    } : {}),
    page_path: window.location.pathname,
    ...normalizedParams
  });
  if (legacyName && legacyName !== name) {
    window.gtag("event", legacyName, {
      event_category: "tool_engagement",
      page_path: window.location.pathname,
      ...normalizedParams
    });
  }
}

function currentPageLang() {
  const lang = document.documentElement.lang || "en";
  if (lang.startsWith("zh")) return "zh";
  if (lang.startsWith("fr")) return "fr";
  if (lang.startsWith("vi")) return "vi";
  return "en";
}

const dynamicTextTranslations = {
  zh: {
    "Reaction Time Test": "反应速度测试",
    "Click when the screen turns green.": "屏幕变绿时立即点击。",
    "Run five rounds to measure your average visual reaction time. Wait for the green signal, then click or tap as quickly as you can.": "完成 5 轮测试，测量你的平均视觉反应时间。等待绿色信号，然后尽快点击或轻点。",
    "rounds": "轮",
    "result": "结果",
    "Tap": "轻点",
    "friendly": "适配",
    "Start Test": "开始测试",
    "Wait for green...": "等待变绿...",
    "Do not click yet": "还不要点击",
    "Click now": "现在点击",
    "Fast and clean": "快速点击",
    "Too Soon": "太早了",
    "Wait for the green signal.": "请等待绿色信号。",
    "This round does not count. Try again and keep your cursor or finger relaxed until the color changes.": "本轮不计入结果。再试一次，颜色变化前保持手指放松。",
    "Retry Round": "重试本轮",
    "Next Round": "下一轮",
    "Your Reaction Time": "你的反应时间",
    "Elite reflex range": "顶级反应范围",
    "Fast reaction range": "快速反应范围",
    "Typical reaction range": "常见反应范围",
    "Steady but improvable": "稳定但可提升",
    "Average": "平均值",
    "Best": "最佳",
    "Rounds": "轮数",
    "Range": "范围",
    "Share Result": "分享结果",
    "Try Again": "再试一次",
    "CPS Test": "CPS 测试",
    "Click as fast as you can for 5 seconds.": "在 5 秒内尽可能快地点击。",
    "Start clicking": "开始点击",
    "clicks": "次点击",
    "test": "测试",
    "Reset": "重置",
    "Your CPS Result": "你的 CPS 结果",
    "Very fast clicking": "点击非常快",
    "Solid clicking speed": "点击速度不错",
    "Casual clicking speed": "休闲点击速度",
    "Typing Speed Test": "打字速度测试",
    "Type the sample text exactly.": "准确输入示例文本。",
    "Start typing here...": "从这里开始输入...",
    "accuracy": "准确率",
    "errors": "错误",
    "Your Typing Speed": "你的打字速度",
    "Fast typing speed": "打字速度很快",
    "Comfortable typing speed": "打字速度舒适",
    "Practice typing speed": "练习级打字速度",
    "Speed": "速度",
    "Accuracy": "准确率",
    "Time": "时间",
    "Errors": "错误",
    "Keyboard Test": "键盘测试",
    "Press keys to test your keyboard.": "按键测试你的键盘。",
    "Click inside this panel, then press keys. Working keys light up and the latest key appears below.": "点击这个面板，然后按下按键。正常工作的键会亮起，最新按键会显示在下方。",
    "Last key": "最新按键",
    "Code": "键码",
    "Keys tested": "已测按键",
    "None yet": "暂无",
    "Waiting": "等待中",
    "Focus Test": "聚焦测试",
    "Keyboard Polling Rate Test": "键盘轮询率测试",
    "Alternate two keys for 10 seconds.": "交替按两个键 10 秒。",
    "Click Start Test, then quickly press A and S back and forth. The tool ignores held-key repeats and estimates keyboard Hz from real keydown intervals.": "点击开始测试，然后快速交替按 A 和 S。本工具会忽略长按重复，并根据真实按键间隔估算键盘 Hz。",
    "For a cleaner result, alternate two keys instead of holding one key. Holding a key often measures OS repeat behavior.": "为了获得更干净的结果，请交替按两个键，不要长按单键。长按通常测到的是系统重复速度。",
    "Open Keyboard Test": "打开键盘测试",
    "Testing Keyboard Hz": "正在测试键盘 Hz",
    "Press A and S alternately.": "交替按 A 和 S。",
    "Current": "当前",
    "Time Left": "剩余时间",
    "Peak": "峰值",
    "Events": "事件数",
    "Min Interval": "最小间隔",
    "Waiting for key presses...": "等待按键...",
    "Stop Early": "提前停止",
    "First key": "第一个按键",
    "Your Keyboard Hz Result": "你的键盘 Hz 结果",
    "Gaming keyboard range": "游戏键盘范围",
    "Very good input rate": "非常好的输入频率",
    "Good input rate": "良好的输入频率",
    "Standard input rate": "标准输入频率",
    "Keep testing": "继续测试",
    "Run a longer test": "请测试更久一点",
    "Average Hz": "平均 Hz",
    "Peak Hz": "峰值 Hz",
    "Stability": "稳定性",
    "Stable": "稳定",
    "Moderate": "中等",
    "Unstable": "不稳定",
    "Jitter": "抖动",
    "Max Interval": "最大间隔",
    "Ignored Holds": "忽略长按",
    "Browser tests estimate event timing. Results can vary with browser, OS settings, CPU load, wireless connection, and pressing rhythm.": "浏览器测试是在估算事件时序。结果会受到浏览器、系统设置、CPU 负载、无线连接和按键节奏影响。",
    "Mouse Test": "鼠标测试",
    "Click, scroll, and move inside the test area.": "在测试区域内点击、滚动和移动。",
    "Move pointer here, click each button, double-click, and scroll.": "把指针移到这里，点击每个按键，双击并滚动。",
    "Left": "左键",
    "Middle": "中键",
    "Right": "右键",
    "Double": "双击",
    "Wait": "等待",
    "wheel": "滚轮"
  },
  fr: {
    "Reaction Time Test": "Test de Réaction",
    "Click when the screen turns green.": "Cliquez quand l’écran devient vert.",
    "Start Test": "Commencer",
    "Wait for green...": "Attendez le vert...",
    "Do not click yet": "Ne cliquez pas encore",
    "Click now": "Cliquez maintenant",
    "Too Soon": "Trop tôt",
    "Retry Round": "Réessayer",
    "Next Round": "Manche suivante",
    "Your Reaction Time": "Votre temps de réaction",
    "Average": "Moyenne",
    "Best": "Meilleur",
    "Rounds": "Manches",
    "Range": "Écart",
    "Share Result": "Partager",
    "Try Again": "Réessayer",
    "CPS Test": "Test CPS",
    "Click as fast as you can for 5 seconds.": "Cliquez aussi vite que possible pendant 5 secondes.",
    "Start clicking": "Commencez à cliquer",
    "Reset": "Réinitialiser",
    "Your CPS Result": "Votre résultat CPS",
    "Typing Speed Test": "Test de Vitesse de Frappe",
    "Type the sample text exactly.": "Tapez exactement le texte exemple.",
    "Start typing here...": "Commencez à taper ici...",
    "Your Typing Speed": "Votre vitesse de frappe",
    "Speed": "Vitesse",
    "Accuracy": "Précision",
    "Time": "Temps",
    "Errors": "Erreurs",
    "Keyboard Test": "Test Clavier",
    "Press keys to test your keyboard.": "Appuyez sur les touches pour tester votre clavier.",
    "Last key": "Dernière touche",
    "Code": "Code",
    "Keys tested": "Touches testées",
    "None yet": "Aucune",
    "Waiting": "En attente",
    "Focus Test": "Activer le test",
    "Keyboard Polling Rate Test": "Test de Polling Rate Clavier",
    "Alternate two keys for 10 seconds.": "Alternez deux touches pendant 10 secondes.",
    "Open Keyboard Test": "Ouvrir le test clavier",
    "Testing Keyboard Hz": "Test des Hz clavier",
    "Press A and S alternately.": "Appuyez sur A et S en alternance.",
    "Current": "Actuel",
    "Time Left": "Temps restant",
    "Peak": "Pic",
    "Events": "Événements",
    "Min Interval": "Intervalle min.",
    "Waiting for key presses...": "En attente des touches...",
    "Stop Early": "Arrêter",
    "First key": "Première touche",
    "Your Keyboard Hz Result": "Votre résultat clavier Hz",
    "Average Hz": "Hz moyen",
    "Peak Hz": "Pic Hz",
    "Stability": "Stabilité",
    "Stable": "Stable",
    "Moderate": "Moyen",
    "Unstable": "Instable",
    "Jitter": "Jitter",
    "Max Interval": "Intervalle max.",
    "Ignored Holds": "Maintiens ignorés",
    "Mouse Test": "Test Souris",
    "Click, scroll, and move inside the test area.": "Cliquez, faites défiler et bougez dans la zone.",
    "Left": "Gauche",
    "Middle": "Milieu",
    "Right": "Droite",
    "Double": "Double",
    "Wait": "Attente"
  },
  vi: {
    "Reaction Time Test": "Test Phản Xạ",
    "Click when the screen turns green.": "Bấm khi màn hình chuyển xanh.",
    "Start Test": "Bắt đầu",
    "Wait for green...": "Chờ màu xanh...",
    "Do not click yet": "Chưa bấm",
    "Click now": "Bấm ngay",
    "Too Soon": "Quá sớm",
    "Retry Round": "Thử lại vòng này",
    "Next Round": "Vòng tiếp theo",
    "Your Reaction Time": "Thời gian phản xạ của bạn",
    "Average": "Trung bình",
    "Best": "Tốt nhất",
    "Rounds": "Vòng",
    "Range": "Khoảng",
    "Share Result": "Chia sẻ",
    "Try Again": "Thử lại",
    "CPS Test": "CPS Test",
    "Click as fast as you can for 5 seconds.": "Bấm nhanh nhất có thể trong 5 giây.",
    "Start clicking": "Bắt đầu bấm",
    "Reset": "Đặt lại",
    "Your CPS Result": "Kết quả CPS của bạn",
    "Typing Speed Test": "Test Tốc Độ Gõ",
    "Type the sample text exactly.": "Gõ chính xác đoạn mẫu.",
    "Start typing here...": "Bắt đầu gõ ở đây...",
    "Your Typing Speed": "Tốc độ gõ của bạn",
    "Speed": "Tốc độ",
    "Accuracy": "Chính xác",
    "Time": "Thời gian",
    "Errors": "Lỗi",
    "Keyboard Test": "Test Bàn Phím",
    "Press keys to test your keyboard.": "Nhấn phím để test bàn phím.",
    "Last key": "Phím cuối",
    "Code": "Mã",
    "Keys tested": "Phím đã test",
    "None yet": "Chưa có",
    "Waiting": "Đang chờ",
    "Focus Test": "Focus test",
    "Keyboard Polling Rate Test": "Test Polling Rate Bàn Phím",
    "Alternate two keys for 10 seconds.": "Bấm luân phiên hai phím trong 10 giây.",
    "Open Keyboard Test": "Mở test bàn phím",
    "Testing Keyboard Hz": "Đang test keyboard Hz",
    "Press A and S alternately.": "Bấm A và S luân phiên.",
    "Current": "Hiện tại",
    "Time Left": "Còn lại",
    "Peak": "Đỉnh",
    "Events": "Sự kiện",
    "Min Interval": "Khoảng min",
    "Waiting for key presses...": "Đang chờ phím...",
    "Stop Early": "Dừng sớm",
    "First key": "Phím đầu",
    "Your Keyboard Hz Result": "Kết quả keyboard Hz",
    "Average Hz": "Hz trung bình",
    "Peak Hz": "Hz đỉnh",
    "Stability": "Ổn định",
    "Stable": "Ổn định",
    "Moderate": "Trung bình",
    "Unstable": "Không ổn định",
    "Jitter": "Jitter",
    "Max Interval": "Khoảng max",
    "Ignored Holds": "Giữ phím bỏ qua",
    "Mouse Test": "Test Chuột",
    "Click, scroll, and move inside the test area.": "Bấm, cuộn và di chuyển trong vùng test.",
    "Left": "Trái",
    "Middle": "Giữa",
    "Right": "Phải",
    "Double": "Double",
    "Wait": "Chờ"
  }
};

function localizeDynamicDom() {
  const lang = currentPageLang();
  if (lang === "en") return;
  const map = dynamicTextTranslations[lang];
  if (!map || !document.body) return;
  document.querySelectorAll("textarea[placeholder]").forEach((input) => {
    const translated = map[input.getAttribute("placeholder")];
    if (translated) input.setAttribute("placeholder", translated);
  });
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const value = node.nodeValue;
    const trimmed = value.trim();
    if (!trimmed || !map[trimmed]) return;
    node.nodeValue = value.replace(trimmed, map[trimmed]);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  localizeDynamicDom();
  const observer = new MutationObserver(() => localizeDynamicDom());
  observer.observe(document.body, { childList: true, subtree: true });
});

function attachShare(button, text, params = {}) {
  if (!button) return;
  button.addEventListener("click", async () => {
    trackEvent("result_share", params);
    const shareData = { title: "Quick Test Hub", text, url: window.location.href };
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${text} ${window.location.href}`);
      button.textContent = "Copied";
      setTimeout(() => (button.textContent = "Share Result"), 1300);
    }
  });
}

function initQuizStartTracking() {
  const quizRoot = byId("sbti-quiz") || byId("rice-quiz");
  if (!quizRoot) return;
  let started = false;
  const quizName = byId("sbti-quiz") ? "sbti_quiz" : "rice_purity_quiz";
  function markStarted() {
    if (started) return;
    started = true;
    trackEvent("quiz_started", { quiz_name: quizName });
    trackEvent("quiz_start", { quiz_name: quizName });
  }
  quizRoot.addEventListener("click", markStarted, { once: true });
  quizRoot.addEventListener("keydown", markStarted, { once: true });
  document.querySelectorAll(`a[href*="#${quizRoot.id}"]`).forEach((link) => {
    link.addEventListener("click", markStarted, { once: true });
  });
}

function initReactionTimeTest() {
  const root = byId("reaction-test");
  if (!root) return;

  const state = {
    phase: "idle",
    timeoutId: null,
    readyAt: 0,
    rounds: [],
    round: 0
  };
  const totalRounds = 5;

  function average(values) {
    return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
  }

  function bestLabel(ms) {
    if (ms <= 190) return "Elite reflex range";
    if (ms <= 240) return "Fast reaction range";
    if (ms <= 310) return "Typical reaction range";
    return "Steady but improvable";
  }

  function renderStart() {
    state.phase = "idle";
    root.innerHTML = `
      <div class="tool-card reaction-idle" data-reaction-pad>
        <p class="eyebrow">Reaction Time Test</p>
        <h2>Click when the screen turns green.</h2>
        <p>Run five rounds to measure your average visual reaction time. Wait for the green signal, then click or tap as quickly as you can.</p>
        <div class="tool-stats">
          <span><strong>5</strong> rounds</span>
          <span><strong>ms</strong> result</span>
          <span><strong>Tap</strong> friendly</span>
        </div>
        <button class="button primary" data-reaction-start>Start Test</button>
      </div>
    `;
    root.querySelector("[data-reaction-start]").addEventListener("click", startRound);
  }

  function startRound() {
    if (state.round === 0 && state.rounds.length === 0) {
      trackEvent("tool_start", { tool_name: "reaction_time", duration_rounds: totalRounds });
    }
    window.clearTimeout(state.timeoutId);
    state.phase = "waiting";
    state.round += 1;
    const delay = 1400 + Math.random() * 3200;
    root.innerHTML = `
      <button class="tool-card reaction-pad reaction-waiting" data-reaction-pad>
        <span>Round ${state.round} / ${totalRounds}</span>
        <strong>Wait for green...</strong>
        <em>Do not click yet</em>
      </button>
    `;
    root.querySelector("[data-reaction-pad]").addEventListener("click", tooSoon);
    state.timeoutId = window.setTimeout(() => {
      state.phase = "ready";
      state.readyAt = performance.now();
      root.innerHTML = `
        <button class="tool-card reaction-pad reaction-ready" data-reaction-pad>
          <span>Round ${state.round} / ${totalRounds}</span>
          <strong>Click now</strong>
          <em>Fast and clean</em>
        </button>
      `;
      root.querySelector("[data-reaction-pad]").addEventListener("click", captureReaction);
    }, delay);
  }

  function tooSoon() {
    if (state.phase !== "waiting") return;
    window.clearTimeout(state.timeoutId);
    state.phase = "early";
    root.innerHTML = `
      <div class="tool-card reaction-early">
        <p class="eyebrow">Too Soon</p>
        <h2>Wait for the green signal.</h2>
        <p>This round does not count. Try again and keep your cursor or finger relaxed until the color changes.</p>
        <button class="button primary" data-retry-round>Retry Round</button>
      </div>
    `;
    state.round -= 1;
    root.querySelector("[data-retry-round]").addEventListener("click", startRound);
  }

  function captureReaction() {
    if (state.phase !== "ready") return;
    const ms = Math.round(performance.now() - state.readyAt);
    state.rounds.push(ms);
    if (state.rounds.length >= totalRounds) {
      renderResult();
      return;
    }
    root.innerHTML = `
      <div class="tool-card">
        <p class="eyebrow">Round ${state.round} Result</p>
        <div class="tool-number">${ms}<small>ms</small></div>
        <p>${totalRounds - state.rounds.length} rounds left. Keep the same hand position for a fair average.</p>
        <button class="button primary" data-next-round>Next Round</button>
      </div>
    `;
    root.querySelector("[data-next-round]").addEventListener("click", startRound);
  }

  function renderResult() {
    const avg = average(state.rounds);
    const best = Math.min(...state.rounds);
    const worst = Math.max(...state.rounds);
    trackEvent("tool_complete", { tool_name: "reaction_time", value: avg, result_value: avg, unit: "ms", duration_rounds: totalRounds, best_ms: best, worst_ms: worst });
    root.innerHTML = `
      <div class="result-card tool-result">
        <p class="eyebrow">Your Reaction Time</p>
        <div class="tool-number">${avg}<small>ms</small></div>
        <h2>${bestLabel(avg)}</h2>
        <p>Your best round was ${best}ms and your slowest round was ${worst}ms. For a cleaner comparison, retake the test on the same device and avoid background distractions.</p>
        <div class="result-metrics">
          <div><span>Average</span><strong>${avg}ms</strong></div>
          <div><span>Best</span><strong>${best}ms</strong></div>
          <div><span>Rounds</span><strong>${totalRounds}</strong></div>
          <div><span>Range</span><strong>${worst - best}ms</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-share-reaction>Share Result</button>
          <button class="button ghost" data-restart-reaction>Try Again</button>
        </div>
      </div>
    `;
    attachShare(root.querySelector("[data-share-reaction]"), `My reaction time average is ${avg}ms`);
    root.querySelector("[data-restart-reaction]").addEventListener("click", () => {
      state.rounds = [];
      state.round = 0;
      renderStart();
    });
  }

  renderStart();
}

function initCpsTest() {
  const root = byId("cps-test");
  if (!root) return;

  const durations = [1, 5, 10, 30];
  const storageKey = "quicktesthub_cps_history";
  let duration = 5;
  let clicks = 0;
  let seconds = duration;
  let timerId = null;
  let running = false;

  function loadHistory() {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(parsed) ? parsed.filter((item) => item && Number.isFinite(Number(item.cps))) : [];
    } catch (error) {
      return [];
    }
  }

  function saveResult(result) {
    try {
      const history = [result, ...loadHistory()].slice(0, 8);
      localStorage.setItem(storageKey, JSON.stringify(history));
      return history;
    } catch (error) {
      return [result];
    }
  }

  function bestForDuration(history, secondsValue) {
    return history
      .filter((item) => Number(item.duration) === secondsValue)
      .reduce((best, item) => Number(item.cps) > Number(best?.cps || 0) ? item : best, null);
  }

  function recentSummary(history) {
    return history.slice(0, 3).map((item) => `${Number(item.duration)}s ${Number(item.cps).toFixed(1)} CPS`).join(" · ") || "No recent attempts yet";
  }

  function render() {
    root.innerHTML = `
      <div class="tool-card cps-card">
        <p class="eyebrow">CPS Test</p>
        <h2>Click as fast as you can for ${duration} second${duration === 1 ? "" : "s"}.</h2>
        <div class="duration-options" aria-label="Choose click test duration">
          ${durations.map((item) => `<button class="duration-option${item === duration ? " selected" : ""}" type="button" data-cps-duration="${item}"${running ? " disabled" : ""}>${item}s</button>`).join("")}
        </div>
        <button class="click-zone" data-click-zone>
          <strong>${clicks}</strong>
          <span>${running ? `${seconds.toFixed(1)}s left` : "Start clicking"}</span>
        </button>
        <div class="tool-stats">
          <span><strong data-cps-score>${(clicks / duration).toFixed(1)}</strong> CPS</span>
          <span><strong data-cps-clicks>${clicks}</strong> clicks</span>
          <span><strong>${duration}s</strong> test</span>
        </div>
        <div class="actions">
          <button class="button ghost" data-reset-cps>Reset</button>
        </div>
      </div>
    `;
    root.querySelector("[data-click-zone]").addEventListener("click", click);
    root.querySelector("[data-reset-cps]").addEventListener("click", reset);
    root.querySelectorAll("[data-cps-duration]").forEach((button) => {
      button.addEventListener("click", () => setDuration(Number(button.dataset.cpsDuration)));
    });
  }

  function click() {
    if (!running && seconds > 0) start();
    if (!running) return;
    clicks += 1;
    const number = root.querySelector(".click-zone strong");
    const cps = root.querySelector("[data-cps-score]");
    const total = root.querySelector("[data-cps-clicks]");
    if (number) number.textContent = clicks;
    if (cps) cps.textContent = (clicks / duration).toFixed(1);
    if (total) total.textContent = clicks;
  }

  function start() {
    trackEvent("tool_start", { tool_name: "cps_test", duration_seconds: duration });
    running = true;
    const startedAt = performance.now();
    root.querySelectorAll("[data-cps-duration]").forEach((button) => {
      button.disabled = true;
    });
    timerId = window.setInterval(() => {
      seconds = Math.max(0, duration - (performance.now() - startedAt) / 1000);
      const label = root.querySelector(".click-zone span");
      if (label) label.textContent = `${seconds.toFixed(1)}s left`;
      if (seconds <= 0) finish();
    }, 80);
  }

  function finish() {
    window.clearInterval(timerId);
    running = false;
    const cps = (clicks / duration).toFixed(1);
    const result = { cps: Number(cps), clicks, duration, createdAt: new Date().toISOString() };
    const history = saveResult(result);
    const best = bestForDuration(history, duration);
    const isBest = best && best.createdAt === result.createdAt;
    trackEvent("tool_complete", { tool_name: "cps_test", value: Number(cps), result_value: Number(cps), unit: "cps", duration_seconds: duration, click_count: clicks, personal_best: isBest });
    root.innerHTML = `
      <div class="result-card tool-result">
        <p class="eyebrow">Your CPS Result</p>
        <div class="tool-number">${cps}<small>CPS</small></div>
        <h2>${Number(cps) >= 9 ? "Very fast clicking" : Number(cps) >= 6 ? "Solid clicking speed" : "Casual clicking speed"}</h2>
        <p>You made ${clicks} clicks in ${duration} second${duration === 1 ? "" : "s"}. ${isBest ? "This is your best saved score for this timer on this browser." : `Your best saved ${duration}s score is ${Number(best?.cps || cps).toFixed(1)} CPS.`}</p>
        <div class="result-metrics">
          <div><span>Timer</span><strong>${duration}s</strong></div>
          <div><span>Total</span><strong>${clicks}</strong></div>
          <div><span>Best ${duration}s</span><strong>${Number(best?.cps || cps).toFixed(1)}</strong></div>
          <div><span>Recent</span><strong>${history.length}</strong></div>
        </div>
        <div class="notice"><p>Recent scores are stored only in this browser with localStorage. They are not uploaded or connected to an account.</p></div>
        <p class="hero-score-note">Recent attempts: ${recentSummary(history)}</p>
        <div class="actions">
          <button class="button primary" data-share-cps>Share Result</button>
          <button class="button ghost" data-reset-cps>Try Again</button>
        </div>
      </div>
    `;
    attachShare(root.querySelector("[data-share-cps]"), `My ${duration}s click speed test result is ${cps} CPS (${clicks} clicks).`);
    root.querySelector("[data-reset-cps]").addEventListener("click", reset);
  }

  function setDuration(nextDuration) {
    if (running || !durations.includes(nextDuration)) return;
    duration = nextDuration;
    clicks = 0;
    seconds = duration;
    render();
  }

  function reset() {
    window.clearInterval(timerId);
    clicks = 0;
    seconds = duration;
    running = false;
    render();
  }

  render();
}

function initSpacebarClicker() {
  const root = byId("spacebar-clicker");
  if (!root) return;

  let presses = 0;
  let seconds = 10;
  let timerId = null;
  let running = false;
  let startedAt = 0;

  function render() {
    root.innerHTML = `
      <div class="tool-card cps-card">
        <p class="eyebrow">Spacebar Clicker</p>
        <h2>Press the spacebar as fast as you can for 10 seconds.</h2>
        <button class="click-zone keyboard-zone" data-spacebar-zone>
          <strong>${presses}</strong>
          <span>${running ? `${seconds.toFixed(1)}s left` : "Press Space to start"}</span>
        </button>
        <div class="tool-stats">
          <span><strong>${(presses / 10).toFixed(1)}</strong> SPS</span>
          <span><strong>${presses}</strong> presses</span>
          <span><strong>10s</strong> test</span>
        </div>
        <div class="actions">
          <button class="button primary" data-start-spacebar>Start Test</button>
          <button class="button ghost" data-reset-spacebar>Reset</button>
        </div>
        <div class="notice"><p>Focus the test area, then press Space. Holding the key down does not count repeated browser key events.</p></div>
      </div>
    `;
    const zone = root.querySelector("[data-spacebar-zone]");
    zone.addEventListener("click", () => zone.focus());
    zone.addEventListener("keydown", handleKeydown);
    root.querySelector("[data-start-spacebar]").addEventListener("click", () => {
      zone.focus();
      if (!running) start();
    });
    root.querySelector("[data-reset-spacebar]").addEventListener("click", reset);
  }

  function handleKeydown(event) {
    if (event.code !== "Space") return;
    event.preventDefault();
    if (event.repeat) return;
    if (!running && seconds > 0) start();
    if (!running) return;
    presses += 1;
    const number = root.querySelector(".click-zone strong");
    const sps = root.querySelector(".tool-stats span strong");
    if (number) number.textContent = presses;
    if (sps) sps.textContent = (presses / 10).toFixed(1);
  }

  function start() {
    if (running) return;
    trackEvent("tool_start", { tool_name: "spacebar_clicker", duration_seconds: 10 });
    running = true;
    startedAt = performance.now();
    const label = root.querySelector(".click-zone span");
    if (label) label.textContent = `${seconds.toFixed(1)}s left`;
    timerId = window.setInterval(() => {
      seconds = Math.max(0, 10 - (performance.now() - startedAt) / 1000);
      const currentLabel = root.querySelector(".click-zone span");
      if (currentLabel) currentLabel.textContent = `${seconds.toFixed(1)}s left`;
      if (seconds <= 0) finish();
    }, 80);
  }

  function finish() {
    window.clearInterval(timerId);
    running = false;
    const sps = (presses / 10).toFixed(1);
    trackEvent("tool_complete", { tool_name: "spacebar_clicker", value: Number(sps), result_value: Number(sps), unit: "sps", duration_seconds: 10, press_count: presses });
    root.innerHTML = `
      <div class="result-card tool-result">
        <p class="eyebrow">Your Spacebar Result</p>
        <div class="tool-number">${sps}<small>SPS</small></div>
        <h2>${Number(sps) >= 8 ? "Very fast spacebar speed" : Number(sps) >= 5 ? "Solid spacebar speed" : "Casual spacebar speed"}</h2>
        <p>You pressed Space ${presses} times in 10 seconds. Retake the test on the same keyboard when comparing attempts.</p>
        <div class="result-metrics">
          <div><span>Speed</span><strong>${sps} SPS</strong></div>
          <div><span>Presses</span><strong>${presses}</strong></div>
          <div><span>Time</span><strong>10s</strong></div>
          <div><span>Input</span><strong>Space</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-share-spacebar>Share Result</button>
          <button class="button ghost" data-reset-spacebar>Try Again</button>
        </div>
      </div>
    `;
    attachShare(root.querySelector("[data-share-spacebar]"), `My spacebar clicker result is ${sps} presses per second`);
    root.querySelector("[data-reset-spacebar]").addEventListener("click", reset);
  }

  function reset() {
    window.clearInterval(timerId);
    presses = 0;
    seconds = 10;
    running = false;
    startedAt = 0;
    render();
  }

  render();
}

function initDoubleClickTest() {
  const root = byId("double-click-test");
  if (!root) return;

  let clicks = 0;
  let doubleClicks = 0;
  let fastestDouble = 0;
  let lastClickAt = 0;
  let seconds = 10;
  let timerId = null;
  let running = false;
  let startedAt = 0;

  function render() {
    root.innerHTML = `
      <div class="tool-card mouse-card">
        <p class="eyebrow">Double Click Test</p>
        <h2>Click the test area for 10 seconds.</h2>
        <button class="click-zone double-click-zone" data-double-click-zone>
          <strong>${doubleClicks}</strong>
          <span>${running ? `${seconds.toFixed(1)}s left` : "Start clicking"}</span>
        </button>
        <div class="result-metrics">
          <div><span>Clicks</span><strong data-clicks>${clicks}</strong></div>
          <div><span>Double Clicks</span><strong data-double-clicks>${doubleClicks}</strong></div>
          <div><span>Fastest Pair</span><strong data-fastest-double>${fastestDouble ? `${fastestDouble}ms` : "--"}</strong></div>
          <div><span>Timer</span><strong data-double-time>${seconds.toFixed(1)}s</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-start-double-click>Start Test</button>
          <button class="button ghost" data-reset-double-click>Reset</button>
        </div>
        <div class="notice"><p>Use normal single clicks if you are checking for unwanted double-click behavior. Intentional rapid double-clicks will also be counted.</p></div>
      </div>
    `;
    const zone = root.querySelector("[data-double-click-zone]");
    zone.addEventListener("click", handleClick);
    zone.addEventListener("dblclick", handleDoubleClick);
    root.querySelector("[data-start-double-click]").addEventListener("click", () => {
      zone.focus();
      if (!running) start();
    });
    root.querySelector("[data-reset-double-click]").addEventListener("click", reset);
  }

  function handleClick() {
    if (!running && seconds > 0) start();
    if (!running) return;
    const now = performance.now();
    clicks += 1;
    if (lastClickAt) {
      const gap = Math.round(now - lastClickAt);
      if (gap <= 300) fastestDouble = fastestDouble ? Math.min(fastestDouble, gap) : gap;
    }
    lastClickAt = now;
    updateLive();
  }

  function handleDoubleClick(event) {
    event.preventDefault();
    if (!running) return;
    doubleClicks += 1;
    updateLive();
  }

  function start() {
    if (running) return;
    trackEvent("tool_start", { tool_name: "double_click_test", duration_seconds: 10 });
    running = true;
    startedAt = performance.now();
    timerId = window.setInterval(() => {
      seconds = Math.max(0, 10 - (performance.now() - startedAt) / 1000);
      updateLive();
      if (seconds <= 0) finish();
    }, 80);
  }

  function updateLive() {
    const clickItem = root.querySelector("[data-clicks]");
    const doubleItem = root.querySelector("[data-double-clicks]");
    const fastestItem = root.querySelector("[data-fastest-double]");
    const timeItem = root.querySelector("[data-double-time]");
    const zoneNumber = root.querySelector(".click-zone strong");
    const zoneLabel = root.querySelector(".click-zone span");
    if (clickItem) clickItem.textContent = clicks;
    if (doubleItem) doubleItem.textContent = doubleClicks;
    if (fastestItem) fastestItem.textContent = fastestDouble ? `${fastestDouble}ms` : "--";
    if (timeItem) timeItem.textContent = `${seconds.toFixed(1)}s`;
    if (zoneNumber) zoneNumber.textContent = doubleClicks;
    if (zoneLabel) zoneLabel.textContent = `${seconds.toFixed(1)}s left`;
  }

  function finish() {
    window.clearInterval(timerId);
    running = false;
    const ratio = clicks ? ((doubleClicks / clicks) * 100).toFixed(1) : "0.0";
    const label = doubleClicks === 0 ? "No browser double-clicks detected" : doubleClicks <= 2 ? "A few double-click events detected" : "Frequent double-click events detected";
    trackEvent("tool_complete", { tool_name: "double_click_test", value: doubleClicks, result_value: doubleClicks, unit: "events", duration_seconds: 10, click_count: clicks, double_click_count: doubleClicks, fastest_double_ms: fastestDouble || 0 });
    root.innerHTML = `
      <div class="result-card tool-result">
        <p class="eyebrow">Your Double Click Test Result</p>
        <div class="tool-number">${doubleClicks}<small>events</small></div>
        <h2>${label}</h2>
        <p>The browser recorded ${clicks} clicks and ${doubleClicks} double-click events in 10 seconds. If you were only using slow single clicks, repeated double-click events can point to a mouse switch issue.</p>
        <div class="result-metrics">
          <div><span>Clicks</span><strong>${clicks}</strong></div>
          <div><span>Double Clicks</span><strong>${doubleClicks}</strong></div>
          <div><span>Ratio</span><strong>${ratio}%</strong></div>
          <div><span>Fastest Pair</span><strong>${fastestDouble ? `${fastestDouble}ms` : "--"}</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-share-double-click>Share Result</button>
          <button class="button ghost" data-reset-double-click>Try Again</button>
        </div>
      </div>
    `;
    attachShare(root.querySelector("[data-share-double-click]"), `My double click test recorded ${doubleClicks} double-click events in 10 seconds`);
    root.querySelector("[data-reset-double-click]").addEventListener("click", reset);
  }

  function reset() {
    window.clearInterval(timerId);
    clicks = 0;
    doubleClicks = 0;
    fastestDouble = 0;
    lastClickAt = 0;
    seconds = 10;
    running = false;
    startedAt = 0;
    render();
  }

  render();
}

function initTypingSpeedTest() {
  const root = byId("typing-test");
  if (!root) return;

  const samples = [
    "Quick tests work best when the task is simple, the result is instant, and the page explains what the score means.",
    "A steady typing rhythm usually beats a rushed start, especially when accuracy matters as much as raw speed.",
    "Online tools can be useful when they give people a clear answer without asking for personal information."
  ];
  const text = samples[Math.floor(Math.random() * samples.length)];
  let startedAt = 0;
  let done = false;
  let lastValue = "";

  function render() {
    root.innerHTML = `
      <div class="tool-card typing-card">
        <p class="eyebrow">Typing Speed Test</p>
        <h2>Type the sample text exactly.</h2>
        <div class="typing-sample" data-typing-sample>${text}</div>
        <textarea class="typing-input" data-typing-input rows="5" placeholder="Start typing here..."></textarea>
        <div class="tool-stats">
          <span><strong data-wpm>0</strong> WPM</span>
          <span><strong data-accuracy>100%</strong> accuracy</span>
          <span><strong data-errors>0</strong> errors</span>
        </div>
        <div class="actions">
          <button class="button ghost" data-reset-typing>Reset</button>
        </div>
      </div>
    `;
    root.querySelector("[data-typing-input]").addEventListener("input", update);
    root.querySelector("[data-reset-typing]").addEventListener("click", () => window.location.reload());
  }

  function update(event) {
    if (done) return;
    const value = event.target.value;
    if (value.length - lastValue.length > 8) {
      event.target.value = lastValue;
      const sample = root.querySelector("[data-typing-sample]");
      if (sample) sample.dataset.warning = "Type the passage manually instead of pasting it.";
      return;
    }
    if (!startedAt && value.length) startedAt = performance.now();
    if (startedAt && value.length === 1) {
      trackEvent("tool_start", { tool_name: "typing_speed", target_chars: text.length });
    }
    let errors = 0;
    for (let index = 0; index < value.length; index += 1) {
      if (value[index] !== text[index]) errors += 1;
    }
    const minutes = Math.max((performance.now() - startedAt) / 60000, 1 / 60000);
    const correctChars = Math.max(0, value.length - errors);
    const wpm = Math.round((correctChars / 5) / minutes);
    const accuracy = value.length ? Math.max(0, Math.round((correctChars / value.length) * 100)) : 100;
    root.querySelector("[data-wpm]").textContent = wpm;
    root.querySelector("[data-accuracy]").textContent = `${accuracy}%`;
    root.querySelector("[data-errors]").textContent = errors;
    paintSample(value);
    lastValue = value;
    if (value === text) finish(wpm, accuracy, errors);
  }

  function paintSample(value) {
    const html = text.split("").map((char, index) => {
      const typed = value[index];
      const className = typed == null ? "" : typed === char ? "ok" : "bad";
      return `<span class="${className}">${char === " " ? "&nbsp;" : char}</span>`;
    }).join("");
    root.querySelector("[data-typing-sample]").innerHTML = html;
  }

  function finish(wpm, accuracy, errors) {
    done = true;
    const seconds = Math.round((performance.now() - startedAt) / 1000);
    trackEvent("tool_complete", { tool_name: "typing_speed", value: wpm, result_value: wpm, unit: "wpm", accuracy, error_count: errors, duration_seconds: seconds });
    root.innerHTML = `
      <div class="result-card tool-result">
        <p class="eyebrow">Your Typing Speed</p>
        <div class="tool-number">${wpm}<small>WPM</small></div>
        <h2>${wpm >= 70 ? "Fast typing speed" : wpm >= 40 ? "Comfortable typing speed" : "Practice typing speed"}</h2>
        <p>You finished in ${seconds} seconds with ${accuracy}% accuracy and ${errors} errors.</p>
        <div class="result-metrics">
          <div><span>Speed</span><strong>${wpm} WPM</strong></div>
          <div><span>Accuracy</span><strong>${accuracy}%</strong></div>
          <div><span>Time</span><strong>${seconds}s</strong></div>
          <div><span>Errors</span><strong>${errors}</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-share-typing>Share Result</button>
          <button class="button ghost" data-reset-typing>Try Again</button>
        </div>
      </div>
    `;
    attachShare(root.querySelector("[data-share-typing]"), `My typing speed is ${wpm} WPM with ${accuracy}% accuracy`);
    root.querySelector("[data-reset-typing]").addEventListener("click", () => window.location.reload());
  }

  render();
}

function initKeyboardTest() {
  const root = byId("keyboard-test");
  if (!root) return;

  const tested = new Map();
  let started = false;
  let completed = false;
  const keys = [
    ["Escape", "Esc"], ["Digit1", "1"], ["Digit2", "2"], ["Digit3", "3"], ["Digit4", "4"], ["Digit5", "5"], ["Digit6", "6"], ["Digit7", "7"], ["Digit8", "8"], ["Digit9", "9"], ["Digit0", "0"], ["Backspace", "Back"],
    ["Tab", "Tab"], ["KeyQ", "Q"], ["KeyW", "W"], ["KeyE", "E"], ["KeyR", "R"], ["KeyT", "T"], ["KeyY", "Y"], ["KeyU", "U"], ["KeyI", "I"], ["KeyO", "O"], ["KeyP", "P"], ["Enter", "Enter"],
    ["CapsLock", "Caps"], ["KeyA", "A"], ["KeyS", "S"], ["KeyD", "D"], ["KeyF", "F"], ["KeyG", "G"], ["KeyH", "H"], ["KeyJ", "J"], ["KeyK", "K"], ["KeyL", "L"],
    ["ShiftLeft", "Shift"], ["KeyZ", "Z"], ["KeyX", "X"], ["KeyC", "C"], ["KeyV", "V"], ["KeyB", "B"], ["KeyN", "N"], ["KeyM", "M"], ["ShiftRight", "Shift"],
    ["ControlLeft", "Ctrl"], ["AltLeft", "Alt"], ["Space", "Space"], ["AltRight", "Alt"], ["ControlRight", "Ctrl"]
  ];

  function render(last = null) {
    const testedCount = tested.size;
    root.innerHTML = `
      <div class="tool-card keyboard-card" tabindex="0" data-keyboard-area>
        <p class="eyebrow">Keyboard Test</p>
        <h2>Press keys to test your keyboard.</h2>
        <p>Click inside this panel, then press keys. Working keys light up and the latest key appears below.</p>
        <div class="keyboard-status">
          <div><span>Last key</span><strong>${last?.key || "None yet"}</strong></div>
          <div><span>Code</span><strong>${last?.code || "Waiting"}</strong></div>
          <div><span>Keys tested</span><strong>${testedCount}</strong></div>
        </div>
        <div class="keyboard-grid">
          ${keys.map(([code, label]) => `<span class="${tested.has(code) ? "tested" : ""}" data-key-code="${code}">${label}</span>`).join("")}
        </div>
        <div class="actions">
          <button class="button primary" data-focus-keyboard>Focus Test</button>
          <button class="button ghost" data-reset-keyboard>Reset</button>
        </div>
      </div>
    `;
    const area = root.querySelector("[data-keyboard-area]");
    area.addEventListener("keydown", keydown);
    root.querySelector("[data-focus-keyboard]").addEventListener("click", () => area.focus());
    root.querySelector("[data-reset-keyboard]").addEventListener("click", () => {
      tested.clear();
      render();
    });
    if (last) area.focus();
  }

  function keydown(event) {
    event.preventDefault();
    if (!started) {
      started = true;
      trackEvent("tool_started", { tool_name: "keyboard_test" });
    }
    tested.set(event.code, event.key);
    if (!completed && tested.size >= 3) {
      completed = true;
      trackEvent("tool_completed", { tool_name: "keyboard_test", value: tested.size, result_value: tested.size, unit: "keys", key_count: tested.size });
    }
    render({ key: event.key === " " ? "Space" : event.key, code: event.code });
  }

  render();
}

function initKeyboardPollingRateTest() {
  const root = byId("keyboard-polling-test");
  if (!root) return;

  const durationMs = 10000;
  const state = {
    running: false,
    startedAt: 0,
    timerId: null,
    events: [],
    lastTime: 0,
    lastCode: "",
    ignoredRepeats: 0
  };

  function formatMs(value) {
    return Number.isFinite(value) ? `${value.toFixed(2)}ms` : "--";
  }

  function hzFromInterval(interval) {
    return interval > 0 ? 1000 / interval : 0;
  }

  function stats() {
    const intervals = state.events.slice(1).map((event, index) => event.time - state.events[index].time).filter((value) => value > 0);
    const rates = intervals.map(hzFromInterval).filter((value) => Number.isFinite(value) && value > 0);
    const avgHz = rates.length ? Math.round(rates.reduce((sum, value) => sum + value, 0) / rates.length) : 0;
    const peakHz = rates.length ? Math.round(Math.max(...rates)) : 0;
    const minInterval = intervals.length ? Math.min(...intervals) : 0;
    const maxInterval = intervals.length ? Math.max(...intervals) : 0;
    const meanInterval = intervals.length ? intervals.reduce((sum, value) => sum + value, 0) / intervals.length : 0;
    const variance = intervals.length ? intervals.reduce((sum, value) => sum + Math.pow(value - meanInterval, 2), 0) / intervals.length : 0;
    const jitter = Math.sqrt(variance);
    const stability = jitter <= 8 && intervals.length >= 12 ? "Stable" : jitter <= 18 && intervals.length >= 8 ? "Moderate" : "Unstable";
    const label = avgHz >= 900 ? "Gaming keyboard range" : avgHz >= 500 ? "Very good input rate" : avgHz >= 250 ? "Good input rate" : avgHz >= 120 ? "Standard input rate" : "Keep testing";

    return { intervals, rates, avgHz, peakHz, minInterval, maxInterval, jitter, stability, label };
  }

  function renderStart() {
    window.clearInterval(state.timerId);
    state.running = false;
    root.innerHTML = `
      <div class="tool-card polling-card" tabindex="0" data-polling-area>
        <p class="eyebrow">Keyboard Polling Rate Test</p>
        <h2>Alternate two keys for 10 seconds.</h2>
        <p>Click Start Test, then quickly press A and S back and forth. The tool ignores held-key repeats and estimates keyboard Hz from real keydown intervals.</p>
        <div class="polling-keys" aria-label="Suggested keys">
          <span>A</span>
          <span>S</span>
        </div>
        <div class="tool-stats">
          <span><strong>10s</strong> test</span>
          <span><strong>Hz</strong> result</span>
          <span><strong>ms</strong> interval</span>
        </div>
        <div class="notice"><p>For a cleaner result, alternate two keys instead of holding one key. Holding a key often measures OS repeat behavior.</p></div>
        <div class="actions">
          <button class="button primary" data-start-polling>Start Test</button>
          <a class="button secondary" href="/keyboard-test/">Open Keyboard Test</a>
        </div>
      </div>
    `;
    const area = root.querySelector("[data-polling-area]");
    root.querySelector("[data-start-polling]").addEventListener("click", () => start(area));
  }

  function start(area) {
    trackEvent("tool_start", { tool_name: "keyboard_polling_rate", duration_seconds: durationMs / 1000 });
    Object.assign(state, {
      running: true,
      startedAt: performance.now(),
      events: [],
      lastTime: 0,
      lastCode: "",
      ignoredRepeats: 0
    });
    renderRunning();
    root.querySelector("[data-polling-area]").focus();
    state.timerId = window.setInterval(updateRunning, 80);
  }

  function renderRunning() {
    root.innerHTML = `
      <div class="tool-card polling-card polling-active" tabindex="0" data-polling-area>
        <p class="eyebrow">Testing Keyboard Hz</p>
        <h2>Press A and S alternately.</h2>
        <div class="polling-meter">
          <div>
            <span>Current</span>
            <strong data-current-hz>0 Hz</strong>
          </div>
          <div>
            <span>Time Left</span>
            <strong data-time-left>10.0s</strong>
          </div>
        </div>
        <div class="result-metrics">
          <div><span>Average</span><strong data-avg-hz>0 Hz</strong></div>
          <div><span>Peak</span><strong data-peak-hz>0 Hz</strong></div>
          <div><span>Events</span><strong data-events>0</strong></div>
          <div><span>Min Interval</span><strong data-min-interval>--</strong></div>
        </div>
        <p class="polling-live" data-live-message>Waiting for key presses...</p>
        <div class="actions">
          <button class="button ghost" data-stop-polling>Stop Early</button>
        </div>
      </div>
    `;
    const area = root.querySelector("[data-polling-area]");
    area.addEventListener("keydown", handleKeydown);
    root.querySelector("[data-stop-polling]").addEventListener("click", finish);
  }

  function handleKeydown(event) {
    if (!state.running) return;
    event.preventDefault();
    if (event.repeat) {
      state.ignoredRepeats += 1;
      return;
    }
    const now = performance.now();
    const interval = state.lastTime ? now - state.lastTime : 0;
    state.events.push({ time: now, code: event.code, key: event.key });
    state.lastTime = now;
    state.lastCode = event.code;

    const currentHz = interval ? Math.round(hzFromInterval(interval)) : 0;
    const current = root.querySelector("[data-current-hz]");
    const live = root.querySelector("[data-live-message]");
    if (current) current.textContent = currentHz ? `${currentHz} Hz` : "First key";
    if (live) live.textContent = `Last key: ${event.key === " " ? "Space" : event.key} (${event.code})`;
    updateNumbers();
  }

  function updateNumbers() {
    const result = stats();
    const avg = root.querySelector("[data-avg-hz]");
    const peak = root.querySelector("[data-peak-hz]");
    const events = root.querySelector("[data-events]");
    const minInterval = root.querySelector("[data-min-interval]");
    if (avg) avg.textContent = `${result.avgHz} Hz`;
    if (peak) peak.textContent = `${result.peakHz} Hz`;
    if (events) events.textContent = state.events.length;
    if (minInterval) minInterval.textContent = formatMs(result.minInterval || NaN);
  }

  function updateRunning() {
    if (!state.running) return;
    const elapsed = performance.now() - state.startedAt;
    const remaining = Math.max(0, durationMs - elapsed);
    const timeLeft = root.querySelector("[data-time-left]");
    if (timeLeft) timeLeft.textContent = `${(remaining / 1000).toFixed(1)}s`;
    if (remaining <= 0) finish();
  }

  function finish() {
    if (!state.running && state.events.length === 0) {
      renderStart();
      return;
    }
    window.clearInterval(state.timerId);
    state.running = false;
    const result = stats();
    const responseMs = result.avgHz ? 1000 / result.avgHz : 0;
    const enoughData = state.events.length >= 8;
    trackEvent("tool_complete", { tool_name: "keyboard_polling_rate", value: result.avgHz || 0, result_value: result.avgHz || 0, unit: "hz", duration_seconds: durationMs / 1000, event_count: state.events.length, peak_hz: result.peakHz || 0, stability: result.stability });
    root.innerHTML = `
      <div class="result-card tool-result polling-result">
        <p class="eyebrow">Your Keyboard Hz Result</p>
        <div class="tool-number">${result.avgHz || "--"}<small>Hz</small></div>
        <h2>${enoughData ? result.label : "Run a longer test"}</h2>
        <p>${enoughData ? `Your average was ${result.avgHz}Hz with a peak of ${result.peakHz}Hz. The estimated average input interval is ${formatMs(responseMs)}.` : "There were not enough key presses for a reliable estimate. Try again and alternate A and S for the full 10 seconds."}</p>
        <div class="result-metrics">
          <div><span>Average Hz</span><strong>${result.avgHz || "--"}</strong></div>
          <div><span>Peak Hz</span><strong>${result.peakHz || "--"}</strong></div>
          <div><span>Min Interval</span><strong>${formatMs(result.minInterval || NaN)}</strong></div>
          <div><span>Stability</span><strong>${enoughData ? result.stability : "--"}</strong></div>
        </div>
        <div class="result-metrics">
          <div><span>Events</span><strong>${state.events.length}</strong></div>
          <div><span>Jitter</span><strong>${formatMs(result.jitter || NaN)}</strong></div>
          <div><span>Max Interval</span><strong>${formatMs(result.maxInterval || NaN)}</strong></div>
          <div><span>Ignored Holds</span><strong>${state.ignoredRepeats}</strong></div>
        </div>
        <div class="notice"><p>Browser tests estimate event timing. Results can vary with browser, OS settings, CPU load, wireless connection, and pressing rhythm.</p></div>
        <div class="actions">
          <button class="button primary" data-share-polling>Share Result</button>
          <button class="button ghost" data-restart-polling>Try Again</button>
        </div>
      </div>
    `;
    attachShare(root.querySelector("[data-share-polling]"), `My keyboard polling rate test result is ${result.avgHz || 0}Hz`);
    root.querySelector("[data-restart-polling]").addEventListener("click", renderStart);
  }

  renderStart();
}

function initMouseTest() {
  const root = byId("mouse-test");
  if (!root) return;
  let started = false;
  let completed = false;

  const state = {
    left: false,
    middle: false,
    right: false,
    double: false,
    wheel: 0,
    x: 0,
    y: 0
  };

  function render() {
    root.innerHTML = `
      <div class="tool-card mouse-card">
        <p class="eyebrow">Mouse Test</p>
        <h2>Click, scroll, and move inside the test area.</h2>
        <div class="mouse-zone" data-mouse-zone>
          <div class="mouse-shape">
            <span class="${state.left ? "active" : ""}">Left</span>
            <span class="${state.middle ? "active" : ""}">Wheel</span>
            <span class="${state.right ? "active" : ""}">Right</span>
          </div>
          <p>Move pointer here, click each button, double-click, and scroll.</p>
        </div>
        <div class="result-metrics">
          <div><span>Left</span><strong>${state.left ? "OK" : "Wait"}</strong></div>
          <div><span>Middle</span><strong>${state.middle ? "OK" : "Wait"}</strong></div>
          <div><span>Right</span><strong>${state.right ? "OK" : "Wait"}</strong></div>
          <div><span>Double</span><strong>${state.double ? "OK" : "Wait"}</strong></div>
        </div>
        <div class="tool-stats">
          <span><strong>${state.wheel}</strong> wheel</span>
          <span><strong>${state.x}</strong> x</span>
          <span><strong>${state.y}</strong> y</span>
        </div>
        <div class="actions">
          <button class="button ghost" data-reset-mouse>Reset</button>
        </div>
      </div>
    `;
    const zone = root.querySelector("[data-mouse-zone]");
    zone.addEventListener("contextmenu", (event) => event.preventDefault());
    zone.addEventListener("mousedown", updateButton);
    zone.addEventListener("dblclick", () => {
      state.double = true;
      render();
    });
    zone.addEventListener("wheel", (event) => {
      event.preventDefault();
      state.wheel += event.deltaY > 0 ? 1 : -1;
      render();
    });
    zone.addEventListener("mousemove", (event) => {
      const rect = zone.getBoundingClientRect();
      state.x = Math.round(event.clientX - rect.left);
      state.y = Math.round(event.clientY - rect.top);
      const x = root.querySelector(".tool-stats span:nth-child(2) strong");
      const y = root.querySelector(".tool-stats span:nth-child(3) strong");
      if (x) x.textContent = state.x;
      if (y) y.textContent = state.y;
    });
    root.querySelector("[data-reset-mouse]").addEventListener("click", () => {
      Object.assign(state, { left: false, middle: false, right: false, double: false, wheel: 0, x: 0, y: 0 });
      render();
    });
  }

  function updateButton(event) {
    if (!started) {
      started = true;
      trackEvent("tool_started", { tool_name: "mouse_test" });
    }
    if (event.button === 0) state.left = true;
    if (event.button === 1) state.middle = true;
    if (event.button === 2) state.right = true;
    if (!completed && state.left && state.right) {
      completed = true;
      trackEvent("tool_completed", { tool_name: "mouse_test", value: 2, result_value: 2, unit: "buttons", button_count: 2 });
    }
    render();
  }

  render();
}

function initMicrophoneTest() {
  const root = byId("microphone-test");
  if (!root) return;

  let stream = null;
  let audioContext = null;
  let analyser = null;
  let frameId = null;
  let peak = 0;

  function render() {
    root.innerHTML = `
      <div class="tool-card media-test-card">
        <p class="eyebrow">Microphone Test</p>
        <h2>Check your mic level in the browser.</h2>
        <p>Start the test, allow microphone access, then speak normally. The meter shows live input level without uploading audio.</p>
        <div class="mic-meter" aria-label="Microphone input meter">
          <span data-mic-level style="width:0%"></span>
        </div>
        <div class="result-metrics">
          <div><span>Status</span><strong data-mic-status>Waiting</strong></div>
          <div><span>Live Level</span><strong data-mic-live>0%</strong></div>
          <div><span>Peak</span><strong data-mic-peak>0%</strong></div>
          <div><span>Privacy</span><strong>Local</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-start-mic>Start Mic Test</button>
          <button class="button ghost" data-stop-mic>Stop</button>
        </div>
        <div class="notice"><p data-mic-message>Your browser will ask for permission before the test can read microphone input.</p></div>
        <div class="device-help" aria-label="Microphone troubleshooting">
          <strong>If the mic test does not move</strong>
          <ul>
            <li>Allow microphone access in the browser prompt.</li>
            <li>Select an input device in system sound settings.</li>
            <li>Close meeting, recording, or streaming apps that may be using the mic.</li>
          </ul>
        </div>
      </div>
    `;
    root.querySelector("[data-start-mic]").addEventListener("click", start);
    root.querySelector("[data-stop-mic]").addEventListener("click", stop);
  }

  function setMessage(message) {
    const item = root.querySelector("[data-mic-message]");
    if (item) item.textContent = message;
  }

  function setStatus(status) {
    const item = root.querySelector("[data-mic-status]");
    if (item) item.textContent = status;
  }

  async function start() {
    trackEvent("tool_start", { tool_name: "microphone_test" });
    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("Unsupported");
      setMessage("This browser does not expose microphone testing through getUserMedia.");
      return;
    }
    stop(false);
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 512;
      audioContext.createMediaStreamSource(stream).connect(analyser);
      peak = 0;
      setStatus("Listening");
      setMessage("Speak into the microphone and watch the level meter move.");
      trackEvent("tool_complete", { tool_name: "microphone_test", status: "permission_granted", result_value: 1, unit: "permission" });
      tick();
    } catch (error) {
      setStatus(error.name === "NotFoundError" ? "No mic" : "Blocked");
      setMessage(mediaAccessMessage(error, "microphone"));
    }
  }

  function tick() {
    if (!analyser) return;
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteTimeDomainData(data);
    const sum = data.reduce((total, value) => total + Math.abs(value - 128), 0);
    const level = Math.min(100, Math.round((sum / data.length) * 3.2));
    peak = Math.max(peak, level);
    const bar = root.querySelector("[data-mic-level]");
    const live = root.querySelector("[data-mic-live]");
    const peakItem = root.querySelector("[data-mic-peak]");
    if (bar) bar.style.width = `${level}%`;
    if (live) live.textContent = `${level}%`;
    if (peakItem) peakItem.textContent = `${peak}%`;
    frameId = window.requestAnimationFrame(tick);
  }

  function stop(update = true) {
    if (frameId) window.cancelAnimationFrame(frameId);
    frameId = null;
    if (stream) stream.getTracks().forEach((track) => track.stop());
    stream = null;
    if (audioContext) audioContext.close().catch(() => {});
    audioContext = null;
    analyser = null;
    if (update) {
      setStatus("Stopped");
      setMessage("The microphone stream has been stopped.");
    }
  }

  window.addEventListener("pagehide", () => stop(false));
  render();
}

function initWebcamTest() {
  const root = byId("webcam-test");
  if (!root) return;

  let stream = null;

  function render() {
    root.innerHTML = `
      <div class="tool-card media-test-card">
        <p class="eyebrow">Webcam Test</p>
        <h2>Preview your camera and take a local snapshot.</h2>
        <p>Allow camera access to check focus, framing, brightness, and browser detection. Nothing is uploaded by this page.</p>
        <div class="webcam-frame">
          <video data-webcam-video autoplay muted playsinline></video>
          <canvas data-webcam-canvas hidden></canvas>
          <img data-webcam-shot alt="Captured webcam snapshot" hidden>
        </div>
        <div class="result-metrics">
          <div><span>Status</span><strong data-webcam-status>Waiting</strong></div>
          <div><span>Resolution</span><strong data-webcam-resolution>--</strong></div>
          <div><span>Snapshot</span><strong data-webcam-snapshot>No</strong></div>
          <div><span>Privacy</span><strong>Local</strong></div>
        </div>
        <div class="actions">
          <button class="button primary" data-start-webcam>Start Camera</button>
          <button class="button secondary" data-snapshot-webcam>Snapshot</button>
          <button class="button ghost" data-stop-webcam>Stop</button>
        </div>
        <div class="notice"><p data-webcam-message>Your browser will ask for permission before the camera preview starts.</p></div>
        <div class="device-help" aria-label="Camera troubleshooting">
          <strong>If the camera test is blocked</strong>
          <ul>
            <li>Allow camera access in the browser prompt.</li>
            <li>Check operating system privacy settings for this browser.</li>
            <li>Close other apps that may already be using the camera.</li>
          </ul>
        </div>
      </div>
    `;
    root.querySelector("[data-start-webcam]").addEventListener("click", start);
    root.querySelector("[data-snapshot-webcam]").addEventListener("click", snapshot);
    root.querySelector("[data-stop-webcam]").addEventListener("click", stop);
  }

  function setText(selector, text) {
    const item = root.querySelector(selector);
    if (item) item.textContent = text;
  }

  async function start() {
    trackEvent("tool_start", { tool_name: "webcam_test" });
    if (!navigator.mediaDevices?.getUserMedia) {
      setText("[data-webcam-status]", "Unsupported");
      setText("[data-webcam-message]", "This browser does not expose camera testing through getUserMedia.");
      return;
    }
    stop(false);
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false });
      const video = root.querySelector("[data-webcam-video]");
      video.srcObject = stream;
      await video.play();
      setText("[data-webcam-status]", "Live");
      setText("[data-webcam-resolution]", `${video.videoWidth || "--"}x${video.videoHeight || "--"}`);
      setText("[data-webcam-message]", "Camera preview is live. Use Snapshot to capture a local still image.");
      trackEvent("tool_complete", { tool_name: "webcam_test", status: "permission_granted", result_value: 1, unit: "permission", resolution: `${video.videoWidth || "--"}x${video.videoHeight || "--"}` });
    } catch (error) {
      setText("[data-webcam-status]", error.name === "NotFoundError" ? "No camera" : "Blocked");
      setText("[data-webcam-message]", mediaAccessMessage(error, "camera"));
    }
  }

  function snapshot() {
    const video = root.querySelector("[data-webcam-video]");
    const canvas = root.querySelector("[data-webcam-canvas]");
    const image = root.querySelector("[data-webcam-shot]");
    if (!stream || !video.videoWidth) {
      setText("[data-webcam-message]", "Start the camera before taking a snapshot.");
      return;
    }
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    image.src = canvas.toDataURL("image/png");
    image.hidden = false;
    setText("[data-webcam-snapshot]", "Yes");
    setText("[data-webcam-message]", "Snapshot captured locally in this page.");
  }

  function stop(update = true) {
    if (stream) stream.getTracks().forEach((track) => track.stop());
    stream = null;
    const video = root.querySelector("[data-webcam-video]");
    if (video) video.srcObject = null;
    if (update) {
      setText("[data-webcam-status]", "Stopped");
      setText("[data-webcam-message]", "The camera stream has been stopped.");
    }
  }

  window.addEventListener("pagehide", () => stop(false));
  render();
}

function initGamepadTester() {
  const root = byId("gamepad-tester");
  if (!root) return;

  let frameId = null;
  let running = false;
  let reportedConnection = false;

  function render() {
    root.innerHTML = `
      <div class="tool-card gamepad-card">
        <p class="eyebrow">Gamepad Tester</p>
        <h2>Press any controller button to test inputs.</h2>
        <p>Connect a gamepad or controller, press a button, then start the live tester. Browsers often hide controllers until the first button press.</p>
        <div class="result-metrics">
          <div><span>Status</span><strong data-gamepad-status>Waiting</strong></div>
          <div><span>Name</span><strong data-gamepad-name>None</strong></div>
          <div><span>Buttons</span><strong data-gamepad-buttons>0</strong></div>
          <div><span>Axes</span><strong data-gamepad-axes>0</strong></div>
        </div>
        <div class="gamepad-live">
          <div>
            <h3>Buttons</h3>
            <div class="gamepad-buttons" data-gamepad-button-grid></div>
          </div>
          <div>
            <h3>Axes</h3>
            <div class="gamepad-axes" data-gamepad-axis-grid></div>
          </div>
        </div>
        <div class="actions">
          <button class="button primary" data-start-gamepad>Start Tester</button>
          <button class="button ghost" data-stop-gamepad>Stop</button>
        </div>
        <div class="notice"><p data-gamepad-message>For best results, plug in the controller and press any button once before starting.</p></div>
        <div class="device-help" aria-label="Controller troubleshooting">
          <strong>If no controller appears</strong>
          <ul>
            <li>Reconnect the controller with USB or Bluetooth.</li>
            <li>Press any controller button while this tab is focused.</li>
            <li>Try Chrome or Edge if the current browser does not expose gamepads.</li>
          </ul>
        </div>
      </div>
    `;
    root.querySelector("[data-start-gamepad]").addEventListener("click", start);
    root.querySelector("[data-stop-gamepad]").addEventListener("click", stop);
  }

  function setText(selector, text) {
    const item = root.querySelector(selector);
    if (item) item.textContent = text;
  }

  function currentGamepad() {
    return Array.from(navigator.getGamepads?.() || []).find(Boolean);
  }

  function start() {
    trackEvent("tool_start", { tool_name: "gamepad_tester" });
    if (!navigator.getGamepads) {
      setText("[data-gamepad-status]", "Unsupported");
      setText("[data-gamepad-message]", "This browser does not expose the Gamepad API.");
      return;
    }
    running = true;
    reportedConnection = false;
    setText("[data-gamepad-status]", "Scanning");
    tick();
  }

  function tick() {
    if (!running) return;
    const gamepad = currentGamepad();
    if (!gamepad) {
      setText("[data-gamepad-status]", "No gamepad");
      setText("[data-gamepad-message]", "Press a controller button or reconnect the gamepad, then keep this page focused.");
      frameId = window.requestAnimationFrame(tick);
      return;
    }
    setText("[data-gamepad-status]", "Connected");
    setText("[data-gamepad-name]", gamepad.id || "Gamepad");
    setText("[data-gamepad-buttons]", gamepad.buttons.length);
    setText("[data-gamepad-axes]", gamepad.axes.length);
    setText("[data-gamepad-message]", "Inputs are updating live. Press buttons and move sticks or triggers.");
    if (!reportedConnection) {
      reportedConnection = true;
      trackEvent("tool_complete", { tool_name: "gamepad_tester", status: "connected", result_value: 1, unit: "connection", buttons: gamepad.buttons.length, axes: gamepad.axes.length });
    }

    const buttonGrid = root.querySelector("[data-gamepad-button-grid]");
    const axisGrid = root.querySelector("[data-gamepad-axis-grid]");
    if (buttonGrid) {
      buttonGrid.innerHTML = gamepad.buttons.map((button, index) => `
        <span class="${button.pressed ? "pressed" : ""}">B${index}<strong>${button.value.toFixed(2)}</strong></span>
      `).join("");
    }
    if (axisGrid) {
      axisGrid.innerHTML = gamepad.axes.map((axis, index) => {
        const offset = Math.round(((axis + 1) / 2) * 100);
        return `
          <div class="axis-row">
            <span>A${index}</span>
            <div><i style="left:${offset}%"></i></div>
            <strong>${axis.toFixed(2)}</strong>
          </div>
        `;
      }).join("");
    }
    frameId = window.requestAnimationFrame(tick);
  }

  function stop() {
    running = false;
    if (frameId) window.cancelAnimationFrame(frameId);
    frameId = null;
    setText("[data-gamepad-status]", "Stopped");
    setText("[data-gamepad-message]", "The live gamepad tester is stopped.");
  }

  window.addEventListener("gamepadconnected", () => {
    if (!running) setText("[data-gamepad-status]", "Detected");
  });
  window.addEventListener("pagehide", stop);
  render();
}

function mediaAccessMessage(error, deviceName) {
  if (error?.name === "NotAllowedError" || error?.name === "SecurityError") {
    return `${capitalize(deviceName)} permission was blocked. Use the browser site settings to allow access, then start the test again.`;
  }
  if (error?.name === "NotFoundError" || error?.name === "DevicesNotFoundError") {
    return `No ${deviceName} device was detected. Connect or enable one in system settings, then try again.`;
  }
  if (error?.name === "NotReadableError" || error?.name === "TrackStartError") {
    return `The ${deviceName} is present but another app or system setting may be using it. Close other apps and retry.`;
  }
  return `${capitalize(deviceName)} access failed. Check browser permission, system privacy settings, and connected devices.`;
}

function capitalize(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : "";
}

initReactionTimeTest();
initQuizStartTracking();
initCpsTest();
initSpacebarClicker();
initDoubleClickTest();
initTypingSpeedTest();
initKeyboardTest();
initKeyboardPollingRateTest();
initMouseTest();
initMicrophoneTest();
initWebcamTest();
initGamepadTester();
