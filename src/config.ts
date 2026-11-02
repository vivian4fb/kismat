/**
 * SITE CONFIG. Edit everything here in one place. All pages read from this file.
 *
 * Phone number formats you need:
 *   Local (display):       07577 602743
 *   International (calls): +447577602743   (UK: drop leading 0, add +44)
 *   WhatsApp (wa.me):      447577602743    (no + , no spaces)
 *
 * Rule for this file: nothing goes in unless it came from Kismat's own website,
 * its ordering page or the owner. A blank value hides the thing that uses it.
 */
import { PREVIEW } from './mode.mjs';
import menu from './data/menu.json';

export { PREVIEW };

/**
 * Prefix an internal link with the site's base path so links work at the domain
 * root (live) and at /kismat/ (preview). Internal page links ONLY, never for
 * tel:/wa.me/mailto or external URLs.
 *
 * Page paths get a trailing slash: pages build to /page/index.html, so the host
 * 301-redirects /page to /page/. Linking to the slash form skips that hop.
 */
export const withBase = (path = '/') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  const [, pathname, suffix] = p.match(/^([^?#]*)(.*)$/)!;
  const isPage = !pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(pathname);
  return base + (isPage ? `${pathname}/` : pathname) + suffix;
};

// Responsive presets for <Image>: spread them in so phones get phone-sized files.
export const responsive = {
  hero: { widths: [480, 720, 960, 1280], sizes: '(max-width: 940px) calc(100vw - 40px), 520px', quality: 72 },
  card: { widths: [400, 640, 800], sizes: '(max-width: 860px) calc(100vw - 40px), 420px', quality: 70 },
  small: { widths: [240, 329], sizes: '(max-width: 860px) 60vw, 300px', quality: 74 },
  band: { widths: [640, 960, 1280, 1680], sizes: '100vw', quality: 58 },
};

// Stable JSON-LD @id for the business, so page-level schema can point at the
// single Restaurant entity that Base.astro emits sitewide.
export const businessSchemaId = (siteUrl?: URL) => String(new URL(withBase('/') + '#restaurant', siteUrl));

export const site = {
  businessName: 'Kismat',
  // Exact name on the Google Business Profile. Must match it character for character.
  googleBusinessName: 'Kismat',
  tagline: 'Kerala restaurant & takeaway in Leicester',

  // Contact (from kismatleicester.co.uk, 2 Nov 2026)
  phoneDisplay: '07577 602743',
  phoneIntl: '+447577602743',
  // Blank until the owner confirms the number takes WhatsApp. Blank hides every WhatsApp button.
  whatsappNumber: '',
  // Blank until the owner confirms the mailbox is read.
  email: '',

  address: {
    street: '52 Gateway Street',
    city: 'Leicester',
    postcode: 'LE2 7DP',
    region: 'Leicestershire',
    country: 'GB',
  },
  // LE2 7DP postcode centroid (postcodes.io), not the door. Replace with the Google pin.
  geo: { latitude: 52.628573, longitude: -1.137366 },

  orderUrl: 'https://order.kismatleicester.co.uk/',
  // Slug from the Just Eat API, listing 429697. Just Eat's page refuses automated checks.
  justEatUrl: 'https://www.just-eat.co.uk/restaurants-kismat-oadby/menu',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kismat%2C%2052%20Gateway%20Street%2C%20Leicester%20LE2%207DP',

  // Google Analytics (GA4). Paste the Measurement ID here, or set PUBLIC_GA_ID
  // (the env var wins). Blank keeps analytics off and the cookie banner away.
  googleAnalyticsId: '',
  // Search Console, HTML tag method. Or set PUBLIC_GSC_VERIFICATION.
  googleSiteVerification: '',

  // Google reviews, fetched at build time when GOOGLE_PLACES_API_KEY is set.
  googlePlaceQuery: 'Kismat, 52 Gateway Street, Leicester',
  googlePlaceId: '',
  // The g.page/r/.../review link from the Business Profile. Blank leaves /review unbuilt.
  googleWriteReviewUrl: '',

  // Real profiles only. The Facebook link on the old site belongs to another business.
  social: { instagram: '', facebook: '' },

  // From the owner, for the About page. Blank hides the block.
  story: { people: '', since: '' },

  // Opening hours (from kismatleicester.co.uk, 2 Nov 2026). 24h clock.
  hours: [
    { day: 'Monday', opens: '13:00', closes: '22:00' },
    { day: 'Tuesday', opens: '', closes: '' },
    { day: 'Wednesday', opens: '13:00', closes: '22:00' },
    { day: 'Thursday', opens: '13:00', closes: '22:00' },
    { day: 'Friday', opens: '13:00', closes: '23:00' },
    { day: 'Saturday', opens: '13:00', closes: '23:00' },
    { day: 'Sunday', opens: '13:00', closes: '23:00' },
  ],
};

// Proposed services. On for the owner's preview. On the live site each one needs
// an explicit true here, after the owner has agreed to run it.
export const features = {
  catering: PREVIEW,
  christmas: PREVIEW,
};

export const addressLine = `${site.address.street}, ${site.address.city} ${site.address.postcode}`;

export const formatTime = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  const suffix = h >= 12 ? 'pm' : 'am';
  const hour = h % 12 === 0 ? 12 : h % 12;
  return m ? `${hour}:${String(m).padStart(2, '0')}${suffix}` : `${hour}${suffix}`;
};

const wa = (text: string) =>
  site.whatsappNumber ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}` : '';

// Pre-built link helpers, used by buttons across the site.
export const links = {
  tel: `tel:${site.phoneIntl}`,
  email: site.email ? `mailto:${site.email}` : '',
  whatsapp: wa('Hi Kismat, '),
  order: site.orderUrl,
  justEat: site.justEatUrl,
  maps: site.mapsUrl,
  instagram: site.social.instagram ? `https://www.instagram.com/${site.social.instagram}/` : '',
  facebook: site.social.facebook ? `https://www.facebook.com/${site.social.facebook}` : '',
};

// Menu helpers. A dish name that isn't on the menu stops the build, so a page can
// never quote a dish or price the menu doesn't have.
export type Dish = { name: string; price: number; veg: boolean; desc: string };
const allDishes: Dish[] = menu.sections.flatMap((s) => s.items);
export const menuAsOf = new Date(`${menu.asOf}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const menuStats = {
  dishes: allDishes.length,
  sections: menu.sections.length,
  vegetarian: allDishes.filter((d) => d.veg).length,
};
export const dish = (name: string): Dish => {
  const found = allDishes.find((d) => d.name === name);
  if (!found) throw new Error(`Dish "${name}" is not on the menu (src/data/menu.json)`);
  return found;
};
export const gbp = (price: number) => `£${price.toFixed(2)}`;

// Short descriptions for dishes whose names need explaining. These describe the
// dish as it's traditionally made. The owner's own wording in the menu sheet wins.
export const descriptions: Record<string, string> = {
  'Chicken 65': 'Spiced, deep-fried chicken, the South Indian classic.',
  'Beef Cutlets': 'Crumbed patties of spiced beef and potato.',
  'Fish Cutlets': 'Crumbed patties of spiced fish and potato.',
  'Kanthari Grilled Paneer': 'Paneer grilled with kanthari, Kerala’s small, sharp bird’s-eye chilli.',
  'Kanthari Pan-Grilled Prawns': 'Prawns pan-grilled with kanthari chilli.',
  'Kerala Style Squid Roast': 'Squid roasted down in a thick, dark masala.',
  'Mathi Fry': 'Sardine.',
  'Ayala Fry': 'Mackerel.',
  'Karimeen Fry': 'Pearl spot, Kerala’s prized backwater fish.',
  'Nadan Chicken Curry': 'Home-style Kerala chicken curry.',
  'Chicken Stew': 'Mild and fragrant, in coconut milk. Traditionally eaten with appam.',
  'Mutton Stew': 'Mild and fragrant, in coconut milk. Traditionally eaten with appam.',
  'Nasrani Beef Curry': 'Beef curry in the style of Kerala’s Nasrani Christians.',
  'Achayan Beef Roast': 'Kerala Christian beef roast, cooked down dark with spices and curry leaves.',
  'Beef Coconut Fry': 'Beef fried with slivers of coconut.',
  'Fish Mango Curry': 'Fish curry soured with green mango.',
  'Prawns Mango Curry': 'Prawn curry soured with green mango.',
  'Fish Moilee': 'A gentle fish stew in coconut milk and turmeric.',
  'Shappu Fish Curry': 'Fiery red fish curry in the style of Kerala’s toddy shops.',
  'Malabari Chicken Dum Biriyani': 'Layered and sealed to steam, in the style of the Malabar coast.',
  'Pothi Biriyani': 'Biriyani parcelled in banana leaf.',
  'Chicken Mandi (Half)': 'Arabian-style rice with slow-cooked chicken.',
  'Chicken Mandi (Full)': 'Arabian-style rice with slow-cooked chicken. Made for sharing.',
  'Pal Kappa': 'Tapioca cooked in coconut milk.',
  'Kappa Vevichath': 'Tapioca cooked and mashed with coconut and spices.',
  'Kappa Biriyani': 'Tapioca cooked down with spiced meat.',
  'Chicken Kothu Porotta': 'Shredded porotta tossed on the griddle with chicken and spices.',
  'Mutton Kothu Porotta': 'Shredded porotta tossed on the griddle with mutton and spices.',
  'Mutton Kizhi Porotta': 'Porotta and mutton masala parcelled in banana leaf.',
  'Special Pothichoru': 'A rice meal with its sides, packed in banana leaf.',
  'Thattu Dosa': 'Small, thick and soft, the Kerala street-stall dosa.',
  'Ghee Roast': 'Thin, crisp dosa roasted with ghee.',
  'Thanjavur Podi Dosa': 'Dosa dusted with podi, a spiced lentil powder.',
  'Masala Dosa': 'Crisp dosa filled with spiced potato.',
  'Palappam (2pcs)': 'Soft rice pancakes with lacy edges.',
  'Kallappam (2pcs)': 'Soft, thick rice pancakes.',
  'Porotta (1pc)': 'Flaky, layered flatbread.',
  'Pathiri (5pcs)': 'Thin rice-flour flatbreads from Malabar.',
  'Puttu': 'Steamed cylinders of ground rice and coconut.',
  'Plain Matta Rice': 'Kerala’s red, parboiled rice.',
  'Adapradaman + Pazham + Pappadom': 'Rice-flake pudding with jaggery and coconut milk, with banana and pappadom.',
  'Knafeh': 'Middle Eastern shredded pastry with sweet cheese.',
};

// Homepage: dishes shown with a photo, and dishes set as type.
export const signatureText = [
  { name: 'Malabari Chicken Dum Biriyani', link: '/dishes/malabar-dum-biriyani' },
  { name: 'Kappa Biriyani', link: '/dishes/kappa-biriyani' },
  { name: 'Fish Moilee', link: '/dishes/kerala-fish-curry' },
  { name: 'Chicken Mandi (Full)', link: '/dishes/mandi' },
  { name: 'Mutton Kizhi Porotta', link: '/dishes/porotta-beef-roast' },
];

// New-to-Kerala glossary (homepage shows the first six, the guide shows them all).
export const glossary = [
  { term: 'Porotta', meaning: 'A flaky, many-layered flatbread of stretched and coiled dough. The bread most Kerala curries are waiting for.' },
  { term: 'Appam', meaning: 'A soft rice pancake with lacy edges. Our menu has palappam and the thicker kallappam.' },
  { term: 'Kappa', meaning: 'Tapioca, also called cassava. A Kerala staple, cooked with coconut or cooked down with meat.' },
  { term: 'Moilee', meaning: 'A mild stew of fish in coconut milk and turmeric.' },
  { term: 'Pothichoru', meaning: 'A rice meal with its sides, wrapped in banana leaf. Pothi means parcel.' },
  { term: 'Mandi', meaning: 'Slow-cooked meat over rice, from Yemen by way of Kerala’s long ties with the Gulf.' },
  { term: 'Puttu', meaning: 'Steamed cylinders of ground rice layered with grated coconut. Breakfast in Kerala, welcome at any hour.' },
  { term: 'Kothu', meaning: 'Porotta chopped and tossed on a hot griddle with meat and spices. Kothu means to chop.' },
  { term: 'Kizhi', meaning: 'A bundle. Kizhi porotta is porotta and masala wrapped in banana leaf and steamed or grilled.' },
  { term: 'Matta rice', meaning: 'Kerala’s fat-grained red rice, parboiled and nutty.' },
  { term: 'Kanthari', meaning: 'Kerala’s small bird’s-eye chilli. Tiny and very hot.' },
  { term: 'Nadan', meaning: 'Home-style, of the countryside. Nadan chicken curry is the version you’d get in a Kerala home.' },
  { term: 'Nasrani, Achayan', meaning: 'Nasrani is the old name for Kerala’s Saint Thomas Christians. Achayan is a respectful word for an older Christian man. Both mark their beef dishes.' },
  { term: 'Shappu', meaning: 'A toddy shop. Shappu curries are the fiery, red ones served there.' },
  { term: 'Pradhaman', meaning: 'A rich Kerala pudding. Ada pradhaman uses rice flakes, jaggery and coconut milk.' },
];

// FAQ, grouped. `faqs` below is flattened from these for the FAQPage structured data.
export const faqCategories = [
  {
    title: 'Visiting',
    items: [
      { q: 'Where is Kismat?', a: `${addressLine}. We’re on the edge of the De Montfort University campus.` },
      { q: 'What are your opening hours?', a: 'Monday, Wednesday and Thursday 1pm to 10pm. Friday, Saturday and Sunday 1pm to 11pm. Closed on Tuesdays.' },
      { q: 'Can I book a table?', a: `Online booking isn’t available at the moment. Call us on ${site.phoneDisplay} and we’ll sort it out.` },
    ],
  },
  {
    title: 'Ordering',
    items: [
      { q: 'How do I order for collection?', a: 'Use our ordering page, choose a time and pick it up from Gateway Street.' },
      { q: 'Do you deliver?', a: 'Yes, through Just Eat, in the postcodes it covers for us. Our own ordering page is for collection. Our delivery areas page lists the postcodes we’ve checked.' },
    ],
  },
  {
    title: 'Food',
    items: [
      { q: 'Is there anything for vegetarians?', a: `Yes. ${menuStats.vegetarian} of the ${menuStats.dishes} dishes on our menu are marked vegetarian, including dosas, paneer biriyani, kappa and vegetable curries.` },
      { q: 'Do you have food for children?', a: 'Yes. There’s a kids’ menu with chicken nuggets and fries, chicken strips, and mac and cheese.' },
      { q: 'I have a food allergy. What should I do?', a: `Please speak to us before you order, on ${site.phoneDisplay}. Don’t rely on a dish’s name or description to tell you what’s in it.` },
      { q: 'What is Kerala food like?', a: 'Coconut, curry leaves, black pepper and seafood from a long coast, with Christian, Muslim and Hindu cooking traditions side by side. Our Kerala food guide explains the dishes.' },
    ],
  },
];
export const faqs = faqCategories.flatMap((c) => c.items);
