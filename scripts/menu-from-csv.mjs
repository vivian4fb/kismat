// Turns data/menu.csv (the sheet the owner corrects) into src/data/menu.json.
// Run with: npm run menu
//
// Owner columns win over the site's own values when filled in. Fails loudly on a
// missing price rather than publishing a dish without one. Duplicates are dropped
// (first listing wins), rows marked "Keep? = N" are dropped, and anything the
// ordering site marks unavailable today stays off the printed menu.
import { readFileSync, writeFileSync } from 'node:fs';

const raw = readFileSync(new URL('../data/menu.csv', import.meta.url), 'utf8').replace(/^﻿/, '');

function parseCsv(text) {
  const rows = [];
  let row = [], cell = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') quoted = false;
      else cell += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); cell = '';
      if (row.some((v) => v.trim() !== '')) rows.push(row);
      row = [];
    } else cell += c;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

const [header, ...body] = parseCsv(raw);
const col = (name) => {
  const i = header.indexOf(name);
  if (i < 0) throw new Error(`menu.csv: column "${name}" not found`);
  return i;
};
const C = {
  section: col('Section'), dish: col('Dish on the site today'), price: col('Site price (GBP)'),
  veg: col('Site says veg'), off: col('Unavailable today'), keep: col('Keep? (Y/N)'),
  name: col('Correct name'), newPrice: col('Correct price (GBP)'), desc: col('One-line description'),
};

// Display order and names. A section in the sheet but not here fails the build,
// so a new section can't silently vanish from the site.
const SECTIONS = [
  ['Starters', 'Starters'],
  ['Fry', 'Fish Fry'],
  ['Non Veg Curries', 'Meat & Fish Curries'],
  ['Veg Curries', 'Vegetarian Curries'],
  ['Biriyani', 'Biriyani'],
  ['Arabian', 'Mandi'],
  ['Kappa', 'Kappa'],
  ['Specials', 'Specials'],
  ['Kismath Dosa Corner', 'Dosa Corner'],
  ['Bread', 'Breads & Appam'],
  ['Rice', 'Rice'],
  ['Chinese Corner', 'Chinese Corner'],
  ['Kids Menu', 'Kids'],
  ['Desserts', 'Desserts'],
  ['Drinks', 'Drinks'],
];
// Listed under the wrong heading on the ordering site, or with a label the section already gives.
const MOVE = { 'Pepsi - 1.5 L': ['Drinks', 'Pepsi (1.5 litre)'] };
const tidy = (name) => name.replace(/ - Kids$/, '');
const byKey = new Map(SECTIONS.map(([k, label]) => [k, { label, items: [] }]));
const seen = new Set();
let dropped = 0;

for (const r of body) {
  const rawName = (r[C.name] || r[C.dish]).trim();
  const key = MOVE[rawName]?.[0] ?? r[C.section].trim();
  const section = byKey.get(key);
  if (!section) throw new Error(`menu.csv: unknown section "${key}". Add it to SECTIONS.`);
  const name = MOVE[rawName]?.[1] ?? tidy(rawName);
  if (r[C.keep].trim().toUpperCase() === 'N' || r[C.off].trim().toUpperCase() === 'Y') { dropped++; continue; }
  if (seen.has(name.toLowerCase())) { dropped++; continue; }
  seen.add(name.toLowerCase());
  const price = Number((r[C.newPrice] || r[C.price]).trim());
  if (!Number.isFinite(price) || price <= 0) throw new Error(`menu.csv: no valid price for "${name}"`);
  section.items.push({
    name,
    price,
    veg: r[C.veg].trim().toUpperCase() === 'Y',
    desc: r[C.desc].trim(),
  });
}

const menu = {
  asOf: process.env.MENU_AS_OF || new Date().toISOString().slice(0, 10),
  sections: SECTIONS.map(([key]) => byKey.get(key)).filter((s) => s.items.length),
};
const total = menu.sections.reduce((n, s) => n + s.items.length, 0);
if (total < 50) throw new Error(`menu.csv: only ${total} dishes parsed, expected 50 or more`);
writeFileSync(new URL('../src/data/menu.json', import.meta.url), JSON.stringify(menu, null, 2) + '\n');
console.log(`menu.json: ${total} dishes in ${menu.sections.length} sections, ${dropped} rows dropped, as of ${menu.asOf}`);
