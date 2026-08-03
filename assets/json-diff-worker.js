const type = (value) => value === null ? 'null' : Array.isArray(value) ? 'array' : typeof value;
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const pointer = (path, key) => `${path}/${String(key).replace(/~/g, '~0').replace(/\//g, '~1')}`;
function diff(a, b, path = '', ops = [], rows = [], strategy = 'ordered', arrayKey = 'id') {
  if (type(a) !== type(b)) { rows.push({ kind: 'type-changed', path: path || '/', before: a, after: b }); ops.push({ op: 'replace', path: path || '/', value: b }); return; }
  if (Array.isArray(a)) {
    if (strategy === 'key' && a.every(x => x && typeof x === 'object' && !Array.isArray(x)) && b.every(x => x && typeof x === 'object' && !Array.isArray(x))) {
      const am = new Map(a.map(x => [String(x[arrayKey]), x])), bm = new Map(b.map(x => [String(x[arrayKey]), x]));
      for (const [key, value] of am) if (!bm.has(key)) { const pathValue = pointer(path, a.indexOf(value)); rows.push({ kind: 'removed', path: pathValue, before: value }); ops.push({ op: 'remove', path: pathValue }); }
      for (const [key, value] of bm) if (!am.has(key)) { const pathValue = pointer(path, b.indexOf(value)); rows.push({ kind: 'added', path: pathValue, after: value }); ops.push({ op: 'add', path: pathValue, value }); }
      for (const [key, value] of bm) if (am.has(key)) diff(am.get(key), value, pointer(path, a.indexOf(am.get(key))), ops, rows, strategy, arrayKey);
      return;
    }
    if (strategy === 'set') {
      const used = new Set();
      for (let i = 0; i < a.length; i++) { const match = b.findIndex((value, index) => !used.has(index) && same(a[i], value)); if (match < 0) { const pathValue = pointer(path, i); rows.push({ kind: 'removed', path: pathValue, before: a[i] }); ops.push({ op: 'remove', path: pathValue }); } else used.add(match); }
      for (let i = 0; i < b.length; i++) if (!used.has(i)) { const pathValue = pointer(path, i); rows.push({ kind: 'added', path: pathValue, after: b[i] }); ops.push({ op: 'add', path: pathValue, value: b[i] }); }
      return;
    }
    const length = Math.max(a.length, b.length);
    for (let i = 0; i < length; i++) { const pathValue = pointer(path, i); if (i >= a.length) { rows.push({ kind: 'added', path: pathValue, after: b[i] }); ops.push({ op: 'add', path: pathValue, value: b[i] }); } else if (i >= b.length) { rows.push({ kind: 'removed', path: pathValue, before: a[i] }); ops.push({ op: 'remove', path: pathValue }); } else diff(a[i], b[i], pathValue, ops, rows, strategy, arrayKey); }
    return;
  }
  if (a && typeof a === 'object') { const keys = new Set([...Object.keys(a), ...Object.keys(b)]); for (const key of keys) { const pathValue = pointer(path, key); if (!(key in a)) { rows.push({ kind: 'added', path: pathValue, after: b[key] }); ops.push({ op: 'add', path: pathValue, value: b[key] }); } else if (!(key in b)) { rows.push({ kind: 'removed', path: pathValue, before: a[key] }); ops.push({ op: 'remove', path: pathValue }); } else diff(a[key], b[key], pathValue, ops, rows, strategy, arrayKey); } return; }
  if (a !== b) { rows.push({ kind: 'changed', path: path || '/', before: a, after: b }); ops.push({ op: 'replace', path: path || '/', value: b }); }
}
self.onmessage = (event) => { try { const { before, after, strategy, arrayKey } = event.data; const rows = [], ops = []; diff(before, after, '', ops, rows, strategy, arrayKey || 'id'); self.postMessage({ rows, ops }); } catch (error) { self.postMessage({ error: error.message || 'Worker comparison failed.' }); } };
