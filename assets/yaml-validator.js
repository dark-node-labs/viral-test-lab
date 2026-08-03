(() => {
  const $ = (id) => document.getElementById(id);
  const sample = `name: Quick Test Hub\nversion: 1\nactive: true\nowners:\n  - qa\n  - developer\nservice:\n  endpoint: https://example.test/api\n  retries: 3\n  tags: [api, smoke]`;
  const invalidSample = `service:\n  name: demo\n    broken: true\n  name: duplicate`;

  class YamlError extends Error {
    constructor(message, line, column, path, type = 'syntax') {
      super(message); this.name = 'YamlError'; this.line = line; this.column = column; this.path = path; this.type = type;
    }
  }
  const pathOf = (path) => path || '$';
  const clone = (value) => value && typeof value === 'object' ? JSON.parse(JSON.stringify(value)) : value;
  const scalar = (raw, line, column, path, anchors) => {
    let text = raw.trim();
    if (!text) return { empty: true };
    let anchor = null;
    if (text[0] === '&') { const match = text.match(/^&([A-Za-z_][\w-]*)(?:\s+(.*))?$/); if (!match) throw new YamlError('Invalid anchor name.', line, column, path); anchor = match[1]; text = (match[2] || '').trim(); if (!text) return { anchor, empty: true }; }
    if (text[0] === '*') { const name = text.slice(1).trim(); if (!anchors[name]) throw new YamlError(`Unknown alias *${name}.`, line, column, path, 'reference'); return { value: clone(anchors[name]), anchor }; }
    if (text.startsWith('[') || text.startsWith('{')) {
      try { return { value: JSON.parse(text.replace(/'/g, '"')), anchor }; } catch (_) {
        if (text.startsWith('[') && text.endsWith(']')) {
          const items = text.slice(1, -1).trim();
          return { value: items ? items.split(',').map((item) => scalar(item.trim(), line, column, path, anchors).value) : [], anchor };
        }
        throw new YamlError('Flow collections must use JSON-like brackets and quotes.', line, column, path);
      }
    }
    if ((text[0] === '"' && text[text.length - 1] === '"') || (text[0] === "'" && text[text.length - 1] === "'")) {
      if (text[0] === '"') { try { return { value: JSON.parse(text), anchor }; } catch (_) { throw new YamlError('Invalid double-quoted string.', line, column, path); } }
      return { value: text.slice(1, -1).replace(/''/g, "'"), anchor };
    }
    const comment = text.search(/\s+#/); if (comment >= 0) text = text.slice(0, comment).trim();
    if (/^(null|Null|NULL|~)$/.test(text)) return { value: null, anchor };
    if (/^(true|True|TRUE)$/.test(text)) return { value: true, anchor };
    if (/^(false|False|FALSE)$/.test(text)) return { value: false, anchor };
    if (/^-?(?:0|[1-9]\d*)(?:\.\d+)?$/.test(text)) return { value: Number(text), anchor };
    return { value: text, anchor };
  };
  function parseYaml(input) {
    if (!input.trim()) throw new YamlError('Empty input. Add a YAML mapping or sequence.', 1, 1, '$', 'empty');
    if (input.length > 200000) throw new YamlError('Input is larger than 200 KB. Split the document before validating.', 1, 1, '$', 'size');
    const lines = input.replace(/\r\n?/g, '\n').split('\n').map((text, index) => ({ text, number: index + 1 }));
    const anchors = {};
    const meaningful = lines.filter((item) => { const t = item.text.trim(); return t && t !== '---' && t !== '...'; });
    if (!meaningful.length) throw new YamlError('The document contains no YAML values.', 1, 1, '$', 'empty');
    const rootIndent = meaningful[0].text.match(/^ */)[0].length;
    if (rootIndent) throw new YamlError('Root content must start at column 1.', meaningful[0].number, 1, '$');
    const parseBlock = (start, indent, path) => {
      let first = start;
      while (first < lines.length && (!lines[first].text.trim() || lines[first].text.trim() === '---' || lines[first].text.trim() === '...')) first++;
      if (first >= lines.length) return { value: null, next: first };
      const firstText = lines[first].text;
      const isArray = firstText.slice(0, indent).trim() === '' && firstText.slice(indent).startsWith('-');
      const result = isArray ? [] : {};
      let i = first;
      const keys = new Set();
      while (i < lines.length) {
        const item = lines[i]; const raw = item.text; const trimmed = raw.trim();
        if (!trimmed || trimmed === '---' || trimmed === '...') { i++; continue; }
        if (/\t/.test(raw.slice(0, raw.search(/\S|$/)))) throw new YamlError('Tabs cannot be used for indentation.', item.number, 1, pathOf(path));
        const spaces = raw.match(/^ */)[0].length;
        if (spaces < indent) break;
        if (spaces > indent) throw new YamlError(`Unexpected indentation; expected ${indent} spaces.`, item.number, spaces + 1, pathOf(path));
        const content = raw.slice(indent);
        if (isArray) {
          if (!content.startsWith('-')) throw new YamlError('Expected a list item beginning with -.', item.number, indent + 1, pathOf(path));
          const rest = content.slice(1).trim(); const childPath = `${pathOf(path)}[${result.length}]`;
          if (!rest) { const child = parseBlock(i + 1, indent + 2, childPath); result.push(child.value); i = child.next; continue; }
          const pair = rest.match(/^([^:#][^:]*):(?:\s+(.*))?$/);
          if (pair) { const obj = {}; const key = pair[1].trim(); const parsed = scalar(pair[2] || '', item.number, indent + 3 + key.length, `${childPath}.${key}`, anchors); if (parsed.empty) { const child = parseBlock(i + 1, indent + 2, `${childPath}.${key}`); obj[key] = child.value; i = child.next; } else { obj[key] = parsed.value; if (parsed.anchor) anchors[parsed.anchor] = clone(parsed.value); i++; } while (i < lines.length && !lines[i].text.trim()) i++; if (i < lines.length && lines[i].text.match(/^ */)[0].length === indent + 2 && !lines[i].text.slice(indent + 2).startsWith('-')) { const child = parseBlock(i, indent + 2, childPath); Object.assign(obj, child.value); i = child.next; } result.push(obj); continue; }
          const parsed = scalar(rest, item.number, indent + 2, childPath, anchors); if (parsed.empty) throw new YamlError('A list item needs a value or nested block.', item.number, indent + 2, childPath); result.push(parsed.value); if (parsed.anchor) anchors[parsed.anchor] = clone(parsed.value); i++; continue;
        }
        const pair = content.match(/^([^:#][^:]*):(?:\s+(.*))?$/); if (!pair) throw new YamlError('Expected a mapping entry in the form key: value.', item.number, indent + 1, pathOf(path));
        const key = pair[1].trim(); const childPath = path === '$' ? `$[${JSON.stringify(key)}]` : `${path}.${key}`;
        if (keys.has(key)) throw new YamlError(`Duplicate key "${key}".`, item.number, indent + 1, childPath, 'duplicate'); keys.add(key);
        const parsed = scalar(pair[2] || '', item.number, indent + key.length + 2, childPath, anchors);
        if (parsed.empty) { const child = parseBlock(i + 1, indent + 2, childPath); result[key] = child.value; i = child.next; if (parsed.anchor) anchors[parsed.anchor] = clone(child.value); }
        else { result[key] = parsed.value; if (parsed.anchor) anchors[parsed.anchor] = clone(parsed.value); i++; }
      }
      return { value: result, next: i };
    };
    return parseBlock(0, 0, '$').value;
  }
  const quote = (value) => { if (value === '') return "''"; if (/^[A-Za-z_][\w-]*$/.test(value) && !/^(true|false|null|yes|no|on|off|~)$/i.test(value)) return value; if (/^[^\s:#\[\]{},&*!|>'"%@`-][^:#]*$/.test(value)) return value; return `'${value.replace(/'/g, "''")}'`; };
  const toYaml = (value, level = 0) => { const pad = ' '.repeat(level * 2); if (Array.isArray(value)) return value.length ? value.map((item) => (item && typeof item === 'object' ? `${pad}-\n${toYaml(item, level + 1)}` : `${pad}- ${toYaml(item, 0)}`)).join('\n') : `${pad}[]`; if (value && typeof value === 'object') return Object.entries(value).map(([key, item]) => item && typeof item === 'object' ? `${pad}${quote(key)}:\n${toYaml(item, level + 1)}` : `${pad}${quote(key)}: ${toYaml(item, 0)}`).join('\n'); if (value === null) return 'null'; if (typeof value === 'string') return quote(value); return String(value); };
  const escape = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[char]));
  function validate() { const input = $('yamlInput').value; if (!input.trim()) { $('yamlStatus').textContent = 'Nothing to validate.'; $('yamlMessage').innerHTML = '<p class="yaml-error">Empty input. Paste YAML or load an example.</p>'; $('yamlJson').value = ''; $('yamlOutput').value = ''; return null; } try { const value = parseYaml(input); $('yamlJson').value = JSON.stringify(value, null, 2); $('yamlOutput').value = toYaml(value); $('yamlMessage').innerHTML = '<p class="yaml-success"><strong>Valid common YAML.</strong> Parsed locally in this browser and converted to JSON.</p>'; $('yamlStatus').textContent = `Valid YAML. ${input.length.toLocaleString()} characters processed.`; return value; } catch (error) { $('yamlJson').value = ''; $('yamlOutput').value = ''; $('yamlMessage').innerHTML = `<p class="yaml-error"><strong>${escape(error.type === 'duplicate' ? 'Duplicate key' : 'YAML error')}:</strong> ${escape(error.message)}<br>Line ${error.line}, column ${error.column}, path ${escape(pathOf(error.path))}.</p>`; $('yamlStatus').textContent = 'Could not validate YAML. Your input was not changed.'; return null; } }
  const copy = (value, label) => { if (!value) { $('yamlStatus').textContent = `Nothing to copy for ${label}.`; return; } const promise = navigator.clipboard?.writeText(value); if (!promise) { $('yamlStatus').textContent = 'Clipboard unavailable; select the text manually.'; return; } promise.then(() => { $('yamlStatus').textContent = `${label} copied.`; }).catch(() => { $('yamlStatus').textContent = 'Clipboard unavailable; select the text manually.'; }); };
  const download = (value, filename, type) => { if (!value) { $('yamlStatus').textContent = `Nothing to download for ${filename}.`; return; } const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([value], { type })); link.download = filename; link.click(); URL.revokeObjectURL(link.href); $('yamlStatus').textContent = `${filename} downloaded.`; };
  $('loadYamlExample').onclick = () => { $('yamlInput').value = sample; validate(); }; $('loadInvalidYaml').onclick = () => { $('yamlInput').value = invalidSample; validate(); }; $('validateYaml').onclick = () => validate(); $('formatYaml').onclick = () => { if (validate()) $('yamlStatus').textContent = 'YAML formatted and validated.'; }; $('clearYaml').onclick = () => { $('yamlInput').value = ''; $('yamlOutput').value = ''; $('yamlJson').value = ''; $('yamlMessage').innerHTML = '<p class="empty-state">No YAML has been parsed yet.</p>'; $('yamlStatus').textContent = 'Cleared.'; }; $('copyYaml').onclick = () => copy($('yamlOutput').value, 'YAML'); $('copyJson').onclick = () => copy($('yamlJson').value, 'JSON'); $('downloadYaml').onclick = () => download($('yamlOutput').value, 'validated.yaml', 'text/yaml;charset=utf-8'); $('downloadJson').onclick = () => download($('yamlJson').value, 'validated.json', 'application/json;charset=utf-8');
})();
