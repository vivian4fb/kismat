// One page per neighbourhood where delivery was MEASURED, never assumed.
// Source: Just Eat's public API, listing 429697, checked 2 November 2026, one sample
// postcode per area. `miles` converts the driveDistanceMeters it reported. A page is only
// added here once Just Eat lists Kismat at that postcode.
export const areasCheckedOn = '2 November 2026';

// Postcodes checked the same day where Just Eat did not list Kismat.
export const notListed = [
  'Aylestone (LE2 8)', 'Oadby (LE2 4)', 'Wigston (LE18 1)', 'Braunstone (LE3 1)', 'Glenfield (LE3 8)',
  'Evington (LE5 6)', 'Hamilton (LE5 1)', 'Thurmaston (LE4 8)', 'Birstall (LE4 3)',
];

export const areaPages = [
  {
    slug: 'de-montfort-university',
    name: 'De Montfort University',
    short: 'DMU',
    postcode: 'LE2 7',
    miles: 0.1,
    h1: 'Kerala food at De Montfort University',
    metaTitle: 'Kerala Food at DMU, Leicester | Kismat, Gateway Street',
    metaDescription: 'Kismat is on Gateway Street, on the edge of the DMU campus. Biriyani, dosa and porotta to eat in, collect, or have delivered through Just Eat.',
    intro: 'Gateway Street runs along the edge of the DMU campus, so for most of the university we’re a walk rather than a delivery. Come in between lectures, or order ahead on our ordering page and collect on the way home.',
    popular: [
      { name: 'Thattu Dosa', why: 'Small, soft and filling, and easy on a student budget.' },
      { name: 'Malabari Chicken Dum Biriyani', why: 'A full meal in one box, good for taking back to halls.' },
      { name: 'Chicken 65', why: 'The one to share with the table.' },
    ],
  },
  {
    slug: 'leicester-city-centre',
    name: 'Leicester city centre',
    short: 'City centre',
    postcode: 'LE1 5',
    miles: 0.1,
    h1: 'Kerala food in Leicester city centre',
    metaTitle: 'Kerala Restaurant in Leicester City Centre | Kismat',
    metaDescription: 'Kerala food at the western edge of Leicester city centre. Porotta and beef roast, biriyani and fish curries at 52 Gateway Street, LE2 7DP. Eat in, collect or have it delivered.',
    intro: 'We’re at the western edge of the city centre, close to the Newarke and the DMU campus. If you’re in town for the evening, it’s an easy place to come for something different.',
    popular: [
      { name: 'Achayan Beef Roast', why: 'The Kerala plate to try first, with porotta.' },
      { name: 'Fish Moilee', why: 'Mild and coconut-rich, for anyone new to Kerala food.' },
      { name: 'Mutton Kothu Porotta', why: 'Chopped and tossed on the griddle, the way a Kerala street stall does it.' },
    ],
  },
  {
    slug: 'clarendon-park',
    name: 'Clarendon Park',
    short: 'Clarendon Park',
    postcode: 'LE2 1',
    miles: 1.0,
    h1: 'Kerala food delivered to Clarendon Park',
    metaTitle: 'Kerala Food Delivery in Clarendon Park, Leicester | Kismat',
    metaDescription: 'Kerala food for Clarendon Park, about a mile from Kismat on Gateway Street. Delivered through Just Eat, or order for collection. Dosa, appam, moilee and biriyani.',
    intro: 'Clarendon Park is about a mile from our kitchen, just beyond Victoria Park. Just Eat lists us for delivery here, and collection is a short drive if you’d rather come to us.',
    popular: [
      { name: 'Masala Dosa', why: 'A familiar place to start, and marked vegetarian.' },
      { name: 'Fish Moilee', why: 'Gentle and fragrant. Add palappam to soak it up.' },
      { name: 'Palappam (2pcs)', why: 'Soft rice pancakes that go with any stew on the menu.' },
    ],
  },
  {
    slug: 'highfields',
    name: 'Highfields',
    short: 'Highfields',
    postcode: 'LE2 0',
    miles: 1.1,
    h1: 'Kerala food delivered to Highfields',
    metaTitle: 'Kerala Food Delivery in Highfields, Leicester | Kismat',
    metaDescription: 'Kerala biriyani, mandi and beef roast for Highfields, about a mile from Kismat on Gateway Street. Delivered through Just Eat, or order for collection.',
    intro: 'Highfields is just over a mile from us, on the other side of the city centre. Just Eat lists us for delivery here. If you’re feeding a household, the full mandi is the place to start.',
    popular: [
      { name: 'Chicken Mandi (Full)', why: 'Made for sharing from one platter.' },
      { name: 'Beef Biriyani', why: 'Layered Malabar-style, a meal on its own.' },
      { name: 'Nasrani Beef Curry', why: 'Beef with more sauce than the roast. Good with rice.' },
    ],
  },
  {
    slug: 'stoneygate',
    name: 'Stoneygate',
    short: 'Stoneygate',
    postcode: 'LE2 2',
    miles: 1.8,
    h1: 'Kerala food delivered to Stoneygate',
    metaTitle: 'Kerala Food Delivery in Stoneygate, Leicester | Kismat',
    metaDescription: 'Kerala fish curries, roasts and biriyani for Stoneygate, under two miles from Kismat on Gateway Street. Delivered through Just Eat, or order for collection.',
    intro: 'Stoneygate is just under two miles from us along the London Road side of the city. Just Eat lists us for delivery here, and it’s a good evening for trying something you can’t easily make at home.',
    popular: [
      { name: 'Whole Fish Tawa Fry', why: 'The dish to order for a proper dinner at home.' },
      { name: 'Prawns Mango Curry', why: 'Soured with green mango, the Kerala way.' },
      { name: 'Ghee Rice', why: 'Rich enough to carry any curry on the menu.' },
    ],
  },
  {
    slug: 'west-end-narborough-road',
    name: 'the West End and Narborough Road',
    short: 'West End',
    postcode: 'LE3 0',
    miles: 2.3,
    h1: 'Kerala food on Narborough Road and in the West End',
    metaTitle: 'Kerala Food Delivery, Narborough Road & West End | Kismat Leicester',
    metaDescription: 'Kerala food for Leicester’s West End and Narborough Road. Kappa biriyani, kizhi porotta and fish fry from Kismat on Gateway Street, delivered through Just Eat or for collection.',
    intro: 'The West End is just across the river from us. Just Eat lists us for delivery here, or you can come over the bridge and collect.',
    popular: [
      { name: 'Kappa Biriyani', why: 'Tapioca and meat cooked down together, a Kerala favourite.' },
      { name: 'Mutton Kizhi Porotta', why: 'Porotta and masala parcelled in banana leaf.' },
      { name: 'Mathi Fry', why: 'Sardine, fried the Kerala way.' },
    ],
  },
  {
    slug: 'belgrave',
    name: 'Belgrave',
    short: 'Belgrave',
    postcode: 'LE4 5',
    miles: 2.8,
    h1: 'Kerala food delivered to Belgrave',
    metaTitle: 'Kerala Food Delivery in Belgrave, Leicester | Kismat',
    metaDescription: 'South Indian and Kerala vegetarian dishes for Belgrave, delivered through Just Eat from Kismat on Gateway Street. Paneer biriyani, pal kappa, dosa and more.',
    intro: 'Belgrave’s Golden Mile already has plenty of North Indian and Gujarati cooking. What we add is the far south: kappa, coconut, curry leaves and rice pancakes. Just Eat lists us for delivery here, and many of the dishes are vegetarian.',
    popular: [
      { name: 'Pal Kappa', why: 'Tapioca in coconut milk, marked vegetarian.' },
      { name: 'Paneer Biriyani', why: 'Malabar-style layers, marked vegetarian.' },
      { name: 'Kerala Fried Cauliflower', why: 'A starter that’s marked vegetarian and worth ordering for its own sake.' },
    ],
  },
];
