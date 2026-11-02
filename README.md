# Kismat website

A fast, static Astro site for Kismat, a Kerala restaurant and takeaway at 52 Gateway Street, Leicester.

**Status: design preview for the owner.** It's served at https://vivian4fb.github.io/kismat/ with `noindex` on
every page and a ribbon saying it isn't the official site yet. Its details are still being confirmed.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321/kismat/
npm run build    # builds to ./dist, then runs scripts/check-dist.mjs
npm run preview  # preview the production build
```

## Customise everything from one file

`src/config.ts` holds contact details, opening hours, Google settings, proposed features, dish descriptions and FAQs.
A blank value hides whatever uses it, so nothing goes out half-filled.

| To change | Edit |
|---|---|
| Dishes and prices | `data/menu.csv`, then `npm run menu` |
| Dish pages | `src/data/dishPages.ts` |
| Delivery-area pages | `src/data/areaPages.ts`. Add an area only once delivery there has been checked |
| Colours and type | the tokens at the top of `src/styles/global.css` |
| Photos | `src/images/`, imported where they're used, so the build optimises them |

A dish named on a page that isn't on the menu stops the build, so a page can't quote a dish or price the menu doesn't have.

## Build checks

`scripts/check-dist.mjs` fails the build on placeholder text, broken internal links, a page without one `<h1>`, a title,
a description and a canonical, invalid JSON-LD, or an image without `alt`.

In preview it also fails if any page lacks `noindex` or the ribbon. On the live site it fails while anything is left in
`src/pending.json`, the items the owner has to confirm.

## Google Analytics (GA4)

Wired in and **off until an ID is set**. With no ID there are no extra requests and no cookie banner.

1. Create a GA4 property and a web stream. Copy the Measurement ID (`G-...`).
2. Add it as a repo secret: **Settings > Secrets and variables > Actions > `PUBLIC_GA_ID`**. Re-run the deploy.
3. In GA4, mark `generate_lead` as a key event (**Admin > Events**).
4. Add an event-scoped custom dimension for `method` (**Admin > Custom definitions**).

Every tap on these links sends `generate_lead`, with the method and the page:

| `method` | Link |
|---|---|
| `order_collection` | The ordering page |
| `order_just_eat` | Just Eat |
| `call` | `tel:` |
| `whatsapp` | `wa.me` |
| `email` | `mailto:` |
| `directions` | Google Maps |
| `catering_form`, `christmas_form` | The enquiry forms |

`gtag.js` loads only after the visitor accepts the cookie banner, and after the page has finished loading.

Analytics stops at the link to the ordering page, because that's a separate site. To measure completed orders, the
ordering provider has to add the same tag to their pages.

Tag the links you control so GA4 can tell them apart, for example the Business Profile website link:
`?utm_source=google&utm_medium=organic&utm_campaign=gbp`, and table QR codes: `?utm_source=qr&utm_medium=table`.

## Search Console and Google reviews

- **Search Console:** after going live, verify the domain by DNS TXT record, or set the `PUBLIC_GSC_VERIFICATION` secret.
  Submit `sitemap-index.xml`. About four weeks later, use its queries to decide which pages to add or change.
- **Live reviews:** set the `GOOGLE_PLACES_API_KEY` secret. Reviews are fetched at build time, and only from a listing at
  our postcode. With no key the section is left out. There's no fallback list.
- **`/review`:** set `site.googleWriteReviewUrl` to build a short link for customers. Send it to everyone: asking only
  happy customers breaks Google's policy.

## Search features built in

Restaurant, Menu, BreadcrumbList, FAQPage, Service and WebSite structured data. A unique title, description and canonical
per page. One page per search intent (`/dishes/*`). Delivery-area pages built from measured data (`/areas/*`). The full
menu as crawlable HTML. `sitemap-index.xml`, `robots.txt` and `llms.txt`.

Speed rules: CSS is inlined, fonts are self-hosted and preloaded, images are served at the size the device needs, each
page's first section never fades in, and `gtag.js` loads last.

## Deployment

Every push to `main` builds the site and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves
(`.github/workflows/deploy.yml`). `public/.nojekyll` stops Pages from hiding the `_astro` folder.

## Going live

Only once the owner has agreed and `src/pending.json` is empty.

1. In `src/mode.mjs`, set `PREVIEW = false`, `SITE_URL` to the real domain and `BASE = '/'`.
2. Add `public/CNAME` containing the domain.
3. Set `features` in `src/config.ts` to what the owner has agreed to run.
4. Push. Then in **Settings > Pages > Custom domain**, enter the domain.
5. At the DNS host, change **only** the root and `www` records. Leave the `order` subdomain and all email (MX) records alone,
   or the ordering page and email will break.

| Type | Host | Value |
|---|---|---|
| CNAME | www | `vivian4fb.github.io` |
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |

6. Once GitHub shows a green check, tick **Enforce HTTPS**. Only then cancel the old hosting.

## Gotchas

- **Don't `npm update` `@astrojs/sitemap`.** It's pinned to `3.2.1`: later versions crash the Astro 4 build.
- **Internal links go through `withBase()`**, so they work both at `/kismat/` and at the domain root.
- **Text in gold on ivory uses `--gold-text`**, which passes AA. `--gold` is for lines and ornament.
- `define:vars` wraps inline scripts in a function, so `gtag` is only global because the component sets `window.gtag = gtag`.
- GitHub Pages can't send real 301s or set security headers.
