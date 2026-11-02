// Runs after every build. A placeholder or a broken link in a deployed site is a build
// failure, not a cosmetic problem. The live build also fails while the owner's list is open.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PREVIEW, BASE } from '../src/mode.mjs';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const pending = JSON.parse(readFileSync(new URL('../src/pending.json', import.meta.url), 'utf8')).pending;
const problems = [];

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});
const files = walk(dist);
const pages = files.filter((f) => f.endsWith('.html'));
const textFiles = files.filter((f) => /\.(html|txt|xml)$/.test(f));
if (pages.length < 20) problems.push(`only ${pages.length} pages built, expected 20 or more`);

// Placeholders and traces of the wrong businesses on the old site.
const banned = ['YOUR_', 'XXXXX', 'TODO', 'info@', '+91 98765', 'lorem ipsum', 'Indian Nights', 'Naadanz', 'undefined', '[object Object]', 'NaN'];
for (const f of textFiles) {
  const text = readFileSync(f, 'utf8');
  for (const token of banned) {
    if (text.includes(token)) problems.push(`${relative(dist, f)}: contains "${token}"`);
  }
}

const base = BASE === '/' ? '' : BASE;
for (const f of pages) {
  const name = relative(dist, f).replaceAll('\\', '/');
  const html = readFileSync(f, 'utf8');
  const redirect = html.includes('http-equiv="refresh"');

  if (!/<title>[^<]{5,}<\/title>/.test(html)) problems.push(`${name}: no title`);
  if (!redirect) {
    const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
    if (h1s !== 1) problems.push(`${name}: ${h1s} h1 tags, expected 1`);
    if (!/<meta name="description" content="[^"]{40,}"/.test(html)) problems.push(`${name}: no meta description`);
    if (!html.includes('rel="canonical"')) problems.push(`${name}: no canonical`);
    if (PREVIEW && !html.includes('noindex')) problems.push(`${name}: preview page without noindex`);
    if (PREVIEW && !html.includes('data-preview-ribbon')) problems.push(`${name}: preview page without the ribbon`);
    if (!PREVIEW && html.includes('data-preview-ribbon')) problems.push(`${name}: live page with the preview ribbon`);
    if (!PREVIEW && name !== '404.html' && html.includes('noindex')) problems.push(`${name}: live page with noindex`);
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try { JSON.parse(m[1]); } catch { problems.push(`${name}: invalid JSON-LD`); }
  }
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt=/.test(m[0])) problems.push(`${name}: image without alt`);
  }
  // Internal links and assets must exist.
  for (const m of html.matchAll(/\s(?:href|src)="([^"#?]+)[^"]*"/g)) {
    const url = m[1];
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    if (base && !url.startsWith(`${base}/`)) { problems.push(`${name}: link missing the base path: ${url}`); continue; }
    const local = join(dist, decodeURIComponent(url.slice(base.length)));
    const found = existsSync(local) && (statSync(local).isFile() || existsSync(join(local, 'index.html')));
    if (!found) problems.push(`${name}: broken link ${url}`);
  }
}

if (!PREVIEW && pending.length) {
  problems.push(`PREVIEW is off but ${pending.length} items on the owner's list are still open:`);
  for (const p of pending) problems.push(`  ${p.id}. ${p.what}`);
}

if (problems.length) {
  console.error(`\ncheck-dist: ${problems.length} problem(s)`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log(`check-dist: ${pages.length} pages clean (${PREVIEW ? 'preview' : 'live'} mode, ${pending.length} owner items open)`);
