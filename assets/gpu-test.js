(function () {
  const root = document.getElementById("gpu-test");
  if (!root) return;

  let running = false;

  function render() {
    root.innerHTML = `
      <div class="tool-card browser-test-card">
        <p class="eyebrow">GPU.js Browser Benchmark</p>
        <h2>Measure graphics compute speed locally.</h2>
        <p>This quick matrix test compares a GPU.js WebGL kernel with a CPU fallback when available. It does not upload benchmark data.</p>
        <div class="result-metrics">
          <div><span>Backend</span><strong data-gpu-backend>Ready</strong></div>
          <div><span>Matrix</span><strong data-gpu-size>128×128</strong></div>
          <div><span>Time</span><strong data-gpu-time>--</strong></div>
          <div><span>Score</span><strong data-gpu-score>--</strong></div>
        </div>
        <div class="benchmark-bar" aria-label="GPU benchmark progress"><span data-gpu-progress></span></div>
        <div class="actions">
          <button class="button primary" type="button" data-start-gpu>Run GPU Test</button>
          <button class="button ghost" type="button" data-reset-gpu>Reset</button>
        </div>
        <div class="notice"><p data-gpu-message>Run the test when you are ready. Keep other heavy browser tabs closed for a cleaner comparison.</p></div>
      </div>
    `;
    root.querySelector("[data-start-gpu]").addEventListener("click", runTest);
    root.querySelector("[data-reset-gpu]").addEventListener("click", render);
  }

  function makeMatrix(size, seed) {
    return Array.from({ length: size }, (_, row) => Array.from({ length: size }, (_, column) => ((row * 17 + column * 13 + seed) % 97) / 97));
  }

  function cpuMultiply(a, b, size) {
    const result = new Array(size);
    for (let row = 0; row < size; row += 1) {
      const outputRow = new Array(size);
      for (let column = 0; column < size; column += 1) {
        let sum = 0;
        for (let index = 0; index < size; index += 1) sum += a[row][index] * b[index][column];
        outputRow[column] = sum;
      }
      result[row] = outputRow;
    }
    return result;
  }

  async function runTest() {
    if (running) return;
    running = true;
    const size = 128;
    const message = root.querySelector("[data-gpu-message]");
    const progress = root.querySelector("[data-gpu-progress]");
    const backend = root.querySelector("[data-gpu-backend]");
    const startButton = root.querySelector("[data-start-gpu]");
    startButton.disabled = true;
    progress.style.width = "12%";
    message.textContent = "Preparing local matrices…";
    if (typeof window.trackEvent === "function") window.trackEvent("tool_started", { tool_name: "gpu_test" });
    const a = makeMatrix(size, 3);
    const b = makeMatrix(size, 11);
    let elapsed;
    let selectedBackend = "CPU fallback";
    try {
      const GPUConstructor = typeof window.GPU === "function" ? window.GPU : window.GPU?.GPU;
      if (!GPUConstructor) throw new Error("GPU.js is unavailable");
      const gpu = new GPUConstructor({ mode: "gpu" });
      const kernel = gpu.createKernel(function (left, right) {
        let sum = 0;
        for (let i = 0; i < 128; i += 1) sum += left[this.thread.y][i] * right[i][this.thread.x];
        return sum;
      }).setOutput([size, size]);
      kernel(a, b);
      progress.style.width = "55%";
      const started = performance.now();
      kernel(a, b);
      elapsed = performance.now() - started;
      gpu.destroy();
      selectedBackend = "GPU.js WebGL";
    } catch {
      progress.style.width = "55%";
      const started = performance.now();
      cpuMultiply(a, b, size);
      elapsed = performance.now() - started;
      selectedBackend = "CPU fallback";
    }
    progress.style.width = "100%";
    const operations = size * size * size * 2;
    const score = Math.round(operations / Math.max(elapsed, 0.1));
    backend.textContent = selectedBackend;
    root.querySelector("[data-gpu-time]").textContent = `${elapsed.toFixed(1)} ms`;
    root.querySelector("[data-gpu-score]").textContent = `${score.toLocaleString()} ops/s`;
    message.textContent = selectedBackend === "CPU fallback" ? "GPU.js could not start a GPU kernel, so the page measured the same workload on the CPU." : "GPU.js completed a local WebGL compute run. Repeat the test on the same device when comparing changes.";
    if (typeof window.trackEvent === "function") window.trackEvent("tool_completed", { tool_name: "gpu_test", result_value: score, unit: "ops_per_second", backend: selectedBackend });
    startButton.disabled = false;
    running = false;
  }

  render();
})();
