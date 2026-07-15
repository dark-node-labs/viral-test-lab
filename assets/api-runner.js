(function () {
  const $ = (id) => document.getElementById(id);
  const form = $('apiForm');
  if (!form) return;
  let lastCurl = '';
  let lastReport = '';
  const headers = () => {
    try { return JSON.parse($('apiHeaders').value || '{}'); } catch { return {}; }
  };
  const curl = () => {
    const method = $('apiMethod').value;
    const target = $('apiUrl').value.trim();
    let value = `curl -X ${method} '${target}'`;
    Object.entries(headers()).forEach(([key, item]) => { value += ` -H '${key}: ${String(item).replaceAll("'", "\\'")}'`; });
    if ($('apiBody').value.trim()) value += ` --data '${$('apiBody').value.trim().replaceAll("'", "\\'")}'`;
    return value;
  };
  const copy = async (value) => {
    try { await navigator.clipboard.writeText(value); $('apiStatus').textContent = 'Copied to clipboard.'; }
    catch { $('apiStatus').textContent = 'Clipboard unavailable; select the output manually.'; }
  };
  const render = (method, target, response, body, ms, viaProxy) => {
    let parsed;
    try { parsed = JSON.parse(body); } catch {}
    const assertion = $('apiAssertion').value;
    const pass = assertion === 'none' || (assertion === '2xx' ? response.status >= 200 && response.status < 300 : assertion === 'json' ? Boolean(parsed) : response.status === Number(assertion));
    const data = parsed ? JSON.stringify(parsed, null, 2) : body;
    lastCurl = curl();
    lastReport = `# API Integration Test Report\n\n- Method: ${method}\n- URL: ${target}\n- Status: ${response.status} ${response.statusText}\n- Latency: ${ms} ms\n- Assertion: ${assertion}\n- Transport: ${viaProxy ? 'Quick Test Hub secure proxy fallback' : 'Direct browser request'}\n- Result: ${pass ? 'PASS' : 'FAIL'}\n\n## Response\n\n\`\`\`json\n${data}\n\`\`\``;
    $('apiOutput').value = lastReport;
    $('apiBadge').textContent = pass ? 'PASS' : 'FAIL';
    $('apiStatus').textContent = `${pass ? 'Passed' : 'Failed'} in ${ms} ms${viaProxy ? ' via proxy fallback' : ''}.`;
  };
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    const started = performance.now();
    const method = $('apiMethod').value;
    const target = $('apiUrl').value.trim();
    const options = { method, headers: headers(), body: ["GET", "HEAD"].includes(method) ? undefined : $('apiBody').value.trim() || undefined };
    $('apiStatus').textContent = 'Trying direct browser request…';
    $('apiBadge').textContent = 'RUNNING';
    try {
      const response = await fetch(target, options);
      render(method, target, response, await response.text(), Math.round(performance.now() - started), false);
    } catch {
      $('apiStatus').textContent = 'Direct request blocked by CORS; trying secure proxy fallback…';
      try {
        const response = await fetch('/api/proxy', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ url: target, method, headers: headers(), body: options.body || '' }) });
        render(method, target, response, await response.text(), Math.round(performance.now() - started), true);
      } catch (error) {
        $('apiBadge').textContent = 'ERROR';
        $('apiStatus').textContent = `Request failed: ${error.message}`;
      }
    }
  }, true);
  $('copyCurl').onclick = () => copy(lastCurl || curl());
  $('copyReport').onclick = () => copy(lastReport || $('apiOutput').value);
}());
