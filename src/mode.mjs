// The one switch between the owner's preview and the real site.
//
// PREVIEW = true:  served at vivian4fb.github.io/kismat, noindex on every page,
//                  preview ribbon on every page, proposed services switched on.
// PREVIEW = false: served at the real domain. scripts/check-dist.mjs fails the
//                  build while anything in src/pending.json is still open.
//
// Going live: set PREVIEW to false, SITE_URL to the real domain, BASE to '/',
// add public/CNAME, then follow "Going live" in README.md.
export const PREVIEW = true;
export const SITE_URL = 'https://vivian4fb.github.io';
export const BASE = '/kismat';
