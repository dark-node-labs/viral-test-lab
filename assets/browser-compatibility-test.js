(function () {
  const root = document.getElementById("browser-compatibility-test");
  if (!root) return;

  const tests = [
    ["WebRTC camera and mic", () => Boolean(navigator.mediaDevices?.getUserMedia)],
    ["Screen sharing", () => Boolean(navigator.mediaDevices?.getDisplayMedia)],
    ["WebGL", () => Boolean(document.createElement("canvas").getContext("webgl"))],
    ["WebGL 2", () => Boolean(document.createElement("canvas").getContext("webgl2"))],
    ["WebGPU", () => Boolean(navigator.gpu)],
    ["WebAssembly", () => typeof WebAssembly === "object"],
    ["Local storage", () => {
      try { const key = "qth-compatibility-test"; localStorage.setItem(key, "1"); localStorage.removeItem(key); return true; } catch { return false; }
    }],
    ["Service workers", () => "serviceWorker" in navigator],
    ["Touch input", () => "ontouchstart" in window || navigator.maxTouchPoints > 0]
  ];

  function render(states = null) {
    root.innerHTML = `
      <div class="tool-card browser-test-card">
        <p class="eyebrow">Modernizr Browser Check</p>
        <h2>See which web features this browser supports.</h2>
        <p>Run a local compatibility scan for media, graphics, storage, WebAssembly, and touch APIs. Results describe this browser and device only.</p>
        <div class="compat-list">
          ${tests.map(([name], index) => {
            const state = states ? states[index] : null;
            return `<div class="compat-row"><span>${name}</span><strong class="${state === true ? "is-supported" : state === false ? "is-unsupported" : ""}">${state === true ? "Supported" : state === false ? "Not detected" : "Not tested"}</strong></div>`;
          }).join("")}
        </div>
        <div class="actions">
          <button class="button primary" type="button" data-run-compat>Run Compatibility Test</button>
          <button class="button ghost" type="button" data-copy-compat>Copy Report</button>
        </div>
        <div class="notice"><p data-compat-message>Modernizr-style feature detection runs locally and does not require an account.</p></div>
      </div>
    `;
    root.querySelector("[data-run-compat]").addEventListener("click", runTests);
    root.querySelector("[data-copy-compat]").addEventListener("click", copyReport);
  }

  function runTests() {
    const states = tests.map(([, check]) => {
      try { return Boolean(check()); } catch { return false; }
    });
    render(states);
    root.querySelector("[data-compat-message]").textContent = `${states.filter(Boolean).length} of ${states.length} features detected in this browser. A missing feature is not automatically a browser problem; some APIs need HTTPS, permissions, or a compatible device.`;
    if (typeof window.trackEvent === "function") window.trackEvent("tool_completed", { tool_name: "browser_compatibility_test", result_value: states.filter(Boolean).length, unit: "features" });
  }

  async function copyReport() {
    const values = tests.map(([name, check]) => `${name}: ${(() => { try { return check() ? "Supported" : "Not detected"; } catch { return "Not detected"; } })()}`).join("\n");
    try {
      await navigator.clipboard.writeText(`Quick Test Hub browser compatibility report\n${values}`);
      root.querySelector("[data-compat-message]").textContent = "Compatibility report copied to your clipboard.";
    } catch {
      root.querySelector("[data-compat-message]").textContent = "Clipboard access is unavailable. Run the test and copy the visible results manually.";
    }
  }

  render();
})();
