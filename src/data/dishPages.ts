// One page per search, each keyed by slug. `dishes` must match menu names exactly:
// a name that isn't on the menu stops the build. Facts here describe how each dish
// is traditionally made, never a claim about Kismat's own kitchen.
// Write body strings with curly apostrophes inside single-quoted strings.
import beefRoast from '../images/beef-roast-clay-pot.jpg';
import dosa from '../images/masala-dosa.jpg';
import fish from '../images/fish-fry.jpg';

export const dishPages = [
  {
    slug: 'porotta-beef-roast',
    nav: 'Porotta & beef roast',
    h1: 'Porotta and beef roast in Leicester',
    metaTitle: 'Porotta & Beef Roast in Leicester | Kismat, Gateway Street',
    metaDescription: 'Kerala beef roast and flaky porotta at Kismat, 52 Gateway Street, Leicester. Achayan Beef Roast, Nasrani Beef Curry and Beef Coconut Fry. Eat in or order for collection.',
    lead: 'Beef roast with porotta is one of Kerala’s best-known plates. You’ll find it at 52 Gateway Street, to eat in, to collect, or delivered through Just Eat.',
    img: beefRoast,
    alt: 'Dark Kerala beef roast with curry leaves and dried red chillies in a clay pot lined with banana leaf',
    sections: [
      {
        h2: 'What is Kerala beef roast?',
        body: [
          'Beef roast, or beef ularthiyathu, is cooked in two stages. The meat is simmered with spices until tender, then fried down with onions, curry leaves and black pepper until the masala clings dark to every piece. It ends up closer to a dry fry than a curry, which is why it suits bread so well.',
          'The dish is closely tied to Kerala’s Christian households, and you can read that in the names on our menu. Achayan is a respectful word for an older Christian man. Nasrani is the old name for the Saint Thomas Christians, one of the oldest Christian communities in India.',
        ],
      },
      {
        h2: 'Why porotta?',
        body: [
          'Porotta is made from a soft plain-flour dough that’s oiled, stretched thin, coiled and griddled. Cooks then crush the hot bread between their hands so the layers fall open. Those layers are what catch the masala.',
          'If you’d rather have something softer with your beef, palappam and puttu are both on the menu too.',
        ],
      },
    ],
    dishes: ['Achayan Beef Roast', 'Nasrani Beef Curry', 'Beef Coconut Fry', 'Beef Dry Fry', 'Porotta (1pc)', 'Mutton Kizhi Porotta'],
    faqs: [
      { q: 'Is porotta the same as paratha?', a: 'They’re related, but different breads. North Indian paratha is usually made with wholewheat flour. Kerala porotta uses plain flour and is stretched and coiled for many more layers.' },
      { q: 'Is beef roast very hot?', a: 'It’s usually warm rather than fierce, with the heat coming from black pepper and chilli. If you’re unsure, call us before you order.' },
      { q: 'Can I have it delivered?', a: 'Yes, through Just Eat, in the postcodes it covers for us. For collection, use our ordering page.' },
    ],
  },
  {
    slug: 'kappa-biriyani',
    nav: 'Kappa biriyani',
    h1: 'Kappa biriyani in Leicester',
    metaTitle: 'Kappa Biriyani in Leicester | Kerala Tapioca Dishes at Kismat',
    metaDescription: 'Kappa biriyani, pal kappa and kappa vevichath at Kismat, 52 Gateway Street, Leicester. Kerala’s tapioca dishes, to eat in or order for collection.',
    lead: 'Kappa biriyani has no rice in it. It’s tapioca cooked down with spiced meat, and it’s a long way from the biriyani most people expect.',
    sections: [
      {
        h2: 'What is kappa?',
        body: [
          'Kappa is tapioca, the root also known as cassava. It reached Kerala from South America and became a staple in the nineteenth century, when it was grown to get people through food shortages. It’s starchy and mild, and it takes on whatever it’s cooked with.',
          'That makes it a good partner for strong flavours. In Kerala it’s often eaten boiled and mashed, with a sharp fish curry on the side.',
        ],
      },
      {
        h2: 'What makes it a biriyani?',
        body: [
          'The name is used loosely. Traditional kappa biriyani, also called ellum kappayum, cooks tapioca with meat on the bone and its masala until the two are one thick, savoury mass. It’s a familiar dish at Kerala Christian gatherings and is heavy enough to be a meal on its own.',
          'Pal kappa and kappa vevichath are the gentler versions. Pal means milk: the tapioca is cooked in coconut milk. Vevichath means cooked, usually with coconut and spices. Both are marked vegetarian on our ordering page.',
        ],
      },
    ],
    dishes: ['Kappa Biriyani', 'Pal Kappa', 'Kappa Vevichath', 'Shappu Fish Curry'],
    faqs: [
      { q: 'Is kappa biriyani vegetarian?', a: 'No. Kappa biriyani contains meat. Pal kappa and kappa vevichath are the ones marked vegetarian on our ordering page.' },
      { q: 'What does kappa taste like?', a: 'Mild and slightly sweet, with a firmer texture than potato. Most of the flavour comes from what it’s cooked with.' },
      { q: 'What should I eat it with?', a: 'Kappa biriyani stands alone. Plainer kappa goes well with a sharp fish curry.' },
    ],
  },
  {
    slug: 'malabar-dum-biriyani',
    nav: 'Malabar dum biriyani',
    h1: 'Malabar dum biriyani in Leicester',
    metaTitle: 'Malabar Dum Biriyani in Leicester | Kismat, Gateway Street',
    metaDescription: 'Malabari chicken dum biriyani from £9.45, plus mutton, beef, prawn, fish and pothi biriyani, at Kismat, 52 Gateway Street, Leicester. Eat in or order for collection.',
    lead: 'Malabar biriyani comes from Kerala’s northern coast, where centuries of trade with Arabia shaped the cooking. It’s gentler and more fragrant than the biriyanis most people in Britain know.',
    sections: [
      {
        h2: 'What makes Malabar biriyani different?',
        body: [
          'The best-known versions come from Thalassery and Kozhikode. Rice and meat are cooked separately, then layered with fried onions, ghee and whole spices. Traditionally the rice is a small-grained, aromatic variety rather than long basmati.',
          'Heat isn’t the point. The flavour leans towards fennel, cardamom and fried onion, and the meat is cooked gently in its masala.',
        ],
      },
      {
        h2: 'What does dum mean?',
        body: [
          'Dum is the last step. The layered pot is sealed so the rice and meat finish in their own steam, and the aromas stay in the pot until it’s opened.',
          'Pothi biriyani takes the idea one step further. Pothi means parcel: the biriyani is wrapped in banana leaf, which adds its own scent.',
        ],
      },
    ],
    dishes: ['Malabari Chicken Dum Biriyani', 'Mutton Biriyani', 'Beef Biriyani', 'Prawns Biriyani', 'Fish Biriyani', 'Pothi Biriyani', 'Paneer Biriyani', 'Veg Biriyani'],
    faqs: [
      { q: 'Is Malabar biriyani spicy?', a: 'It’s usually fragrant rather than hot. If you’re sensitive to chilli, call us before you order.' },
      { q: 'Do you have a vegetarian biriyani?', a: 'Yes. Veg Biriyani and Paneer Biriyani are both marked vegetarian on our ordering page.' },
      { q: 'How is it served?', a: 'Traditionally with a raita-style salad and a sour pickle. Ask us what comes with yours.' },
    ],
  },
  {
    slug: 'mandi',
    nav: 'Mandi',
    h1: 'Chicken and Irani mandi in Leicester',
    metaTitle: 'Mandi in Leicester | Chicken & Irani Mandi at Kismat',
    metaDescription: 'Chicken mandi and Irani mandi, half or full, at Kismat, 52 Gateway Street, Leicester. Half from £10.49, full from £18.99. Eat in or order for collection.',
    lead: 'Mandi is slow-cooked meat over spiced rice, and it’s the dish on our menu that shows how far Kerala’s links with Arabia go. Order it half or full.',
    sections: [
      {
        h2: 'What is mandi?',
        body: [
          'Mandi comes from Yemen. Meat is traditionally slow-cooked in a pit oven over the rice, so the juices and smoke drip down into the grains. It’s lightly spiced compared with a biriyani, and the point is the tender meat and the rice underneath it.',
          'Northern Kerala has traded across the Arabian Sea for centuries, and generations of Keralites have worked in the Gulf. Mandi came home with them, and it’s now a familiar dish in Kerala.',
        ],
      },
      {
        h2: 'Half or full?',
        body: [
          'A mandi is the kind of dish people order to share, with everyone eating from one platter. Our menu has chicken and Irani mandi in both half and full portions.',
        ],
      },
    ],
    dishes: ['Chicken Mandi (Half)', 'Chicken Mandi (Full)', 'Irani Mandi (Half)', 'Irani Mandi (Full)'],
    faqs: [
      { q: 'How is mandi different from biriyani?', a: 'Biriyani layers rice with a rich masala. Mandi cooks meat above lightly spiced rice, so the flavour is smokier and milder.' },
      { q: 'Can I get mandi for collection?', a: 'Yes. All four mandi portions are on our ordering page.' },
    ],
  },
  {
    slug: 'dosa',
    nav: 'Dosa',
    h1: 'Masala dosa and Kerala dosa in Leicester',
    metaTitle: 'Dosa in Leicester | Masala, Ghee Roast & Thattu Dosa at Kismat',
    metaDescription: 'Masala dosa, ghee roast, thattu dosa and Thanjavur podi dosa at Kismat, 52 Gateway Street, Leicester. From £5.49. Eat in or order for collection.',
    lead: 'Our dosa corner runs from the crisp ghee roast to the soft, thick thattu dosa you’d get at a Kerala street stall, with chicken and mutton versions for anyone who wants a full meal of it.',
    img: dosa,
    imgSmall: true,
    alt: 'Golden masala dosa on a dark plate with white and orange chutneys',
    sections: [
      {
        h2: 'What is a dosa?',
        body: [
          'A dosa is a pancake made from a fermented batter of rice and black gram. The fermentation gives it a slight sourness and its crisp, lacy surface. It’s cooked on one side on a hot griddle and is usually served with chutney and sambar.',
        ],
      },
      {
        h2: 'Which one should I order?',
        body: [
          'For a first dosa, have the masala: crisp pancake, spiced potato inside. Ghee roast is thinner and richer, cooked with ghee until it snaps. Thanjavur podi dosa is dusted with podi, a dry, spiced lentil powder from Tamil Nadu that’s sometimes called gunpowder.',
          'Thattu dosa is the odd one out. Thattu comes from thattukada, the Kerala roadside food stall, and this dosa is small, thick and soft enough to mop up a curry.',
        ],
      },
    ],
    dishes: ['Masala Dosa', 'Ghee Roast', 'Thattu Dosa', 'Thanjavur Podi Dosa', 'Egg Dosa', 'Chicken Dosa', 'Mutton Dosa'],
    faqs: [
      { q: 'Are your dosas vegetarian?', a: 'Masala, ghee roast, thattu and Thanjavur podi dosa are marked vegetarian on our ordering page. Egg, chicken and mutton dosa are not.' },
      { q: 'What do you eat a dosa with?', a: 'Traditionally with chutney and sambar. Thattu dosa also goes well with any of our curries.' },
    ],
  },
  {
    slug: 'kerala-fish-curry',
    nav: 'Kerala fish curry',
    h1: 'Kerala fish curry in Leicester',
    metaTitle: 'Kerala Fish Curry in Leicester | Fish Moilee & Mango Curry at Kismat',
    metaDescription: 'Fish moilee, fish mango curry, shappu fish curry and karimeen fry at Kismat, 52 Gateway Street, Leicester. Kerala seafood to eat in or order for collection.',
    lead: 'Kerala has nearly 600 km of coast and a great many ways of cooking fish. Our menu covers the two ends of the scale: the gentle, coconut-rich moilee and the fiery red shappu curry.',
    img: fish,
    alt: 'Spiced fried fish fillets on a speckled plate with sliced red onion, lemon and a small dish of green sauce',
    sections: [
      {
        h2: 'How Kerala fish curries differ',
        body: [
          'Sourness does the work that cream does elsewhere. Traditional Kerala fish curries are soured with kudampuli, a smoked fruit also called Malabar tamarind, or with green mango, and they’re often better the next day.',
          'Fish moilee goes the other way. It’s a mild stew in coconut milk and turmeric, with influences often traced to the Portuguese traders who once held the coast. Have it with appam.',
        ],
      },
      {
        h2: 'Toddy-shop curry and the fry',
        body: [
          'Shappu means toddy shop, the roadside bars of Kerala, whose fish curries are famously red and hot. They’re meant to be eaten with kappa or rice.',
          'If you’d rather have your fish dry, our fish fry section runs from sardine (mathi) and mackerel (ayala) to karimeen, the pearl spot fish that comes from Kerala’s backwaters.',
        ],
      },
    ],
    dishes: ['Fish Moilee', 'Fish Mango Curry', 'Prawns Mango Curry', 'Shappu Fish Curry', 'King Fish Tawa Fry', 'Whole Fish Tawa Fry', 'Karimeen Fry', 'Mathi Fry', 'Ayala Fry'],
    faqs: [
      { q: 'Which fish curry is mildest?', a: 'Fish moilee. It’s a gentle stew in coconut milk. Shappu fish curry is the hottest of the three.' },
      { q: 'What should I eat with fish curry?', a: 'Matta rice is the traditional partner. Moilee goes well with appam, and shappu curry with kappa.' },
    ],
  },
];
