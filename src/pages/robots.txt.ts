import type { APIRoute } from 'astro';
import { PREVIEW, withBase } from '../config';

// The preview's real protection is the noindex tag on every page: crawlers only read
// robots.txt at a domain's root, not at /kismat/robots.txt. This becomes the
// site's real robots file once it's live at the domain root.
export const GET: APIRoute = ({ site }) => {
  const body = PREVIEW
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL(withBase('/sitemap-index.xml'), site)}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
