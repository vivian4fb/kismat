import { defineConfig } from 'astro/config';
// Pinned to 3.2.1 in package.json: 3.4+ requires the `astro:routes:resolved`
// integration hook, which doesn't exist in Astro 4 and crashes the build.
// Don't `npm update` this package without upgrading Astro to 5 first.
import sitemap from '@astrojs/sitemap';
import { SITE_URL, BASE } from './src/mode.mjs';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE,
  trailingSlash: 'ignore',
  // Inline the stylesheet into every page: removes the one render-blocking
  // request, which matters for mobile LCP.
  build: { inlineStylesheets: 'always' },
  // /review only forwards to the Google review form, so keep it out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/review') })],
});
