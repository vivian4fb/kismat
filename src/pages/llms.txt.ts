import type { APIRoute } from 'astro';
import { site, withBase, addressLine, formatTime, features, menuStats } from '../config';
import { dishPages } from '../data/dishPages';
import { areaPages } from '../data/areaPages';

// /llms.txt: a plain-text map of the business for AI assistants (a community
// proposal: Google says it ignores it; other assistants may read it). Built from
// the same data as the site, so it never drifts from it.
export const GET: APIRoute = ({ site: siteUrl }) => {
  const abs = (path: string) => String(new URL(withBase(path), siteUrl));
  const hours = site.hours.map((h) => `${h.day} ${h.opens ? `${formatTime(h.opens)}-${formatTime(h.closes)}` : 'closed'}`).join('; ');

  const lines = [
    `# ${site.googleBusinessName}`,
    '',
    `> Kerala restaurant and takeaway at ${addressLine}, UK. ${menuStats.dishes} dishes including beef roast and porotta, ` +
      'kappa biriyani, Malabar dum biriyani, fish moilee, dosa, appam and mandi. Eat in, collection through its own ordering page, delivery through Just Eat.',
    '',
    '## Key facts',
    `- Address: ${addressLine}`,
    `- Phone: ${site.phoneDisplay}`,
    `- Opening hours: ${hours}`,
    `- Order for collection: ${site.orderUrl}`,
    `- Order for delivery: ${site.justEatUrl}`,
    `- Vegetarian dishes marked on the menu: ${menuStats.vegetarian} of ${menuStats.dishes}`,
    '- Online table booking is not available; call to arrange a table',
    '',
    '## Pages',
    `- [Menu with prices](${abs('/menu')})`,
    `- [Order](${abs('/order')})`,
    `- [Kerala food guide](${abs('/kerala-food-guide')})`,
    ...(features.catering ? [`- [Catering](${abs('/catering')})`] : []),
    `- [About](${abs('/about')})`,
    `- [Questions](${abs('/faq')})`,
    `- [Contact and directions](${abs('/contact')})`,
    '',
    '## Dishes',
    ...dishPages.map((d) => `- [${d.nav}](${abs(`/dishes/${d.slug}`)})`),
    '',
    '## Delivery areas checked',
    ...areaPages.map((a) => `- [${a.short}](${abs(`/areas/${a.slug}`)}) (${a.postcode})`),
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
