(function () {
  const root = document.getElementById("webrtc-device-test");
  if (!root) return;

  let screenStream = null;

  function render() {
    root.innerHTML = `
      <div class="tool-card browser-test-card">
        <p class="eyebrow">WebRTC Device Scan</p>
        <h2>Check browser media devices and screen sharing.</h2>
        <p>Scan the devices your browser exposes, then run a local screen-share preview. Camera and microphone tests above request permission only after you start them.</p>
        <div class="result-metrics">
          <div><span>Cameras</span><strong data-device-cameras>--</strong></div>
          <div><span>Microphones</span><strong data-device-mics>--</strong></div>
          <div><span>Speakers</span><strong data-device-speakers>--</strong></div>
          <div><span>Screen share</span><strong data-screen-status>Ready</strong></div>
        </div>
        <div class="webrtc-preview" data-screen-preview-wrap hidden>
          <video data-screen-preview autoplay muted playsinline></video>
        </div>
        <div class="actions">
          <button class="button primary" type="button" data-scan-devices>Scan Devices</button>
          <button class="button secondary" type="button" data-start-screen>Test Screen Share</button>
          <button class="button ghost" type="button" data-stop-screen>Stop</button>
        </div>
        <div class="notice"><p data-webrtc-message>Device labels may remain hidden until you grant camera or microphone permission.</p></div>
      </div>
    `;
    root.querySelector("[data-scan-devices]").addEventListener("click", scanDevices);
    root.querySelector("[data-start-screen]").addEventListener("click", startScreenShare);
    root.querySelector("[data-stop-screen]").addEventListener("click", stopScreenShare);
  }

  async function scanDevices() {
    const message = root.querySelector("[data-webrtc-message]");
    if (!navigator.mediaDevices?.enumerateDevices) {
      message.textContent = "This browser does not expose the Media Devices API.";
      return;
    }
    const devices = await navigator.mediaDevices.enumerateDevices();
    const count = (kind) => devices.filter((device) => device.kind === kind).length;
    root.querySelector("[data-device-cameras]").textContent = count("videoinput");
    root.querySelector("[data-device-mics]").textContent = count("audioinput");
    root.querySelector("[data-device-speakers]").textContent = count("audiooutput");
    message.textContent = "Device scan complete. Counts are read locally from this browser session.";
    if (typeof window.trackEvent === "function") window.trackEvent("tool_completed", { tool_name: "webrtc_device_scan", result_value: devices.length, unit: "devices" });
  }

  async function startScreenShare() {
    const message = root.querySelector("[data-webrtc-message]");
    if (!navigator.mediaDevices?.getDisplayMedia) {
      root.querySelector("[data-screen-status]").textContent = "Unsupported";
      message.textContent = "This browser does not support screen sharing through getDisplayMedia.";
      return;
    }
    stopScreenShare(false);
    try {
      screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
      const video = root.querySelector("[data-screen-preview]");
      video.srcObject = screenStream;
      root.querySelector("[data-screen-preview-wrap]").hidden = false;
      root.querySelector("[data-screen-status]").textContent = "Live";
      message.textContent = "Screen sharing is live in this tab. Stop it when you finish checking the preview.";
      screenStream.getVideoTracks()[0]?.addEventListener("ended", () => stopScreenShare());
      if (typeof window.trackEvent === "function") window.trackEvent("tool_completed", { tool_name: "webrtc_screen_share", result_value: 1, unit: "permission" });
    } catch (error) {
      root.querySelector("[data-screen-status]").textContent = error.name === "NotAllowedError" ? "Cancelled" : "Failed";
      message.textContent = "Screen sharing was cancelled or blocked. Try again and choose a tab, window, or screen.";
    }
  }

  function stopScreenShare(update = true) {
    if (screenStream) screenStream.getTracks().forEach((track) => track.stop());
    screenStream = null;
    const video = root.querySelector("[data-screen-preview]");
    if (video) video.srcObject = null;
    const preview = root.querySelector("[data-screen-preview-wrap]");
    if (preview) preview.hidden = true;
    if (update) {
      root.querySelector("[data-screen-status]").textContent = "Stopped";
      root.querySelector("[data-webrtc-message]").textContent = "The screen-share stream has been stopped.";
    }
  }

  window.addEventListener("pagehide", () => stopScreenShare(false));
  render();
})();
