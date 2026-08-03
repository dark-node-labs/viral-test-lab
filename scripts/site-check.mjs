import { readFile, readdir } from 'node:fs/promises';

const requiredPages = [
  'api-testing-tools',
  'api-contract-testing',
  'openapi-mock-server-generator',
  'methodology',
  'cron-expression-generator',
  'json-diff-checker',
  'yaml-validator',
  'json-formatter',
];
const excludedPages = ['csv-to-json-converter', 'openapi-validator', 'json-schema-validator'];
const sitemap = await readFile(new URL('../sitemap.xml', import.meta.url), 'utf8');
const worker = await readFile(new URL('../_worker.js', import.meta.url), 'utf8');
const homepage = await readFile(new URL('../index.html', import.meta.url), 'utf8');

for (const slug of requiredPages) {
  const html = await readFile(new URL(`../${slug}/index.html`, import.meta.url), 'utf8');
  for (const marker of ['<title>', 'name="description"', 'rel="canonical"', '<h1']) {
    if (!html.includes(marker)) throw new Error(`${slug}: missing ${marker}`);
  }
  if (!sitemap.includes(`https://quicktesthub.com/${slug}/`)) throw new Error(`${slug}: missing sitemap URL`);
  if (!worker.includes(`"/${slug}/"`)) throw new Error(`${slug}: missing Worker public route`);
}
for (const slug of excludedPages) {
  if (sitemap.includes(`https://quicktesthub.com/${slug}/`)) throw new Error(`${slug}: unresolved page remains in sitemap`);
  if (worker.includes(`"/${slug}/"`)) throw new Error(`${slug}: unresolved page remains in Worker public routes`);
}

const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (locations.length !== new Set(locations).size) throw new Error('sitemap contains duplicate URLs');
for (const location of locations) {
  const url = new URL(location);
  if (url.origin !== 'https://quicktesthub.com') throw new Error(`${location}: unexpected sitemap origin`);
  const relativePath = url.pathname === '/' ? '../index.html' : `..${url.pathname}index.html`;
  const html = await readFile(new URL(relativePath, import.meta.url), 'utf8');
  if (!html.includes(`rel="canonical" href="${location}"`)) throw new Error(`${location}: canonical mismatch`);
}
for (const slug of ['cron-expression-generator', 'json-diff-checker']) {
  if (!homepage.includes(`href="/${slug}/"`)) throw new Error(`${slug}: missing homepage entry`);
}
const files = await readdir(new URL('../assets/', import.meta.url));
if (!files.includes('json-diff-worker.js')) throw new Error('json-diff-worker.js is missing');
console.log(`site-check: ${locations.length} unique sitemap pages and ${requiredPages.length} required routes verified`);
