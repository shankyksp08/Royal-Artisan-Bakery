/**
 * CENTRAL BUSINESS CONFIGURATION
 * Edit everything about the business here: contact details, opening hours,
 * products, gallery images, social links.
 * Anything set to null / empty is hidden or replaced with a safe fallback.
 */
export type ArtKind =
  | 'croissant'
  | 'pastry'
  | 'danish'
  | 'bread'
  | 'baguette'
  | 'brownie'
  | 'cheesecake'
  | 'cake'
  | 'savoury'
  | 'sandwich'
  | 'pizza'
  | 'coffee';

export interface Product {
  id: string;
  name: string;
  description: string;
  art: ArtKind;
  image: string;
  alt: string;
}

export const business = {
  name: 'Royal Artisan Bakery',
  tagline: 'Crafted with Passion. Baked to Perfection.',
  address: {
    line1: '84-86 Petty France',
    city: 'London',
    postcode: 'SW1H 9EA',
    country: 'United Kingdom',
  },
  phoneDisplay: '+44 20 7799 4999',
  phoneHref: 'tel:+442077994999',
  email: 'info@quartergroup.co.uk',
  website: 'https://quartergroup.co.uk/royal-artisan-bakery/',
  mapsUrl: 'https://maps.app.goo.gl/5wZfNEbmGApMNnpLA',
  mapsEmbed:
    'https://www.google.com/maps?q=Royal+Artisan+Bakery,+84-86+Petty+France,+London+SW1H+9EA&output=embed',
  /**
   * OPENING HOURS: not verified, so left empty. Confirm on Google Maps / the
   * official website, then fill in, e.g.:
   * [{ day: 'Monday – Friday', hours: '07:30 – 17:00' }]
   */
  openingHours: [] as { day: string; hours: string }[],
  /** Only add links you have verified. Empty string = hidden. */
  social: { instagram: '', facebook: '' },
  /** WhatsApp button appears only if filled, e.g. '447000000000' (no + or spaces). */
  whatsapp: '',
  /** Link used by the reviews call-to-action. */
  reviewsUrl: 'https://maps.app.goo.gl/5wZfNEbmGApMNnpLA',
};

export const products: Product[] = [
  {
    id: 'croissant',
    name: 'Butter Croissants',
    art: 'croissant',
    image: '/images/butter-croissant.jpg',
    alt: 'Freshly baked golden butter croissants with flaky laminated layers',
    description: 'Flaky, golden laminated pastry, baked for a crisp shell and soft layers.',
  },
  {
    id: 'pain-au-chocolat',
    name: 'Pain au Chocolat',
    art: 'pastry',
    image: '/images/pain-au-chocolat.jpg',
    alt: 'Warm golden pain au chocolat showing flaky pastry layers and dark chocolate',
    description: 'Classic viennoiserie wrapped around rich dark chocolate.',
  },
  {
    id: 'almond-danish',
    name: 'Almond Danish',
    art: 'danish',
    image: '/images/almond-danish.jpg',
    alt: 'Golden swirled almond danish pastry topped with toasted flaked almonds',
    description: 'A tender pastry finished with almond for a sweet, nutty bite.',
  },
  {
    id: 'artisan-bread',
    name: 'Artisan Bread',
    art: 'bread',
    image: '/images/artisan-bread.jpg',
    alt: 'Hand-crafted artisan sourdough loaves with scored golden crust',
    description: 'Hand-crafted loaves with a crackling crust and open crumb.',
  },
  {
    id: 'baguettes',
    name: 'Baguettes',
    art: 'baguette',
    image: '/images/baguette.jpg',
    alt: 'Three crisp golden French baguettes resting on a wooden board',
    description: 'Long, crisp-crusted baguettes in the French tradition.',
  },
  {
    id: 'brownies',
    name: 'Brownies',
    art: 'brownie',
    image: '/images/chocolate-brownie.jpg',
    alt: 'Rich fudgy dark chocolate brownies studded with walnuts',
    description: 'Dense, fudgy chocolate squares for the sweet-toothed.',
  },
  {
    id: 'raspberry-cheesecake',
    name: 'Raspberry Cheesecake',
    art: 'cheesecake',
    image: '/images/raspberry-cheesecake.jpg',
    alt: 'Creamy baked cheesecake squares topped with fresh raspberries',
    description: 'Creamy cheesecake brightened with fresh raspberry.',
  },
  {
    id: 'biscoff-cheesecake',
    name: 'Biscoff Cheesecake',
    art: 'cheesecake',
    image: '/images/biscoff-cheesecake.jpg',
    alt: 'Smooth Biscoff cheesecake slice topped with caramelised biscuit glaze and crumb',
    description: 'Smooth cheesecake with caramelised Biscoff flavour.',
  },
  {
    id: 'carrot-cake',
    name: 'Carrot Cake',
    art: 'cake',
    image: '/images/carrot-cake.jpg',
    alt: 'Spiced carrot cake slice layered with smooth cream cheese frosting and walnuts',
    description: 'Spiced, moist sponge layered with cream frosting.',
  },
  {
    id: 'savoury-pastries',
    name: 'Savoury Pastries',
    art: 'savoury',
    image: '/images/savoury-pastry.jpg',
    alt: 'Golden puff pastry roll baked with savoury herbs and seasoning',
    description: 'Golden pastries with savoury fillings for a lunchtime bite.',
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    art: 'sandwich',
    image: '/images/sandwich.jpg',
    alt: 'Freshly prepared artisan baguette sandwich filled with greens and savoury cuts',
    description: 'Freshly assembled sandwiches on bakery bread.',
  },
  {
    id: 'pizza-slices',
    name: 'Pizza Slices',
    art: 'pizza',
    image: '/images/pizza-slice.jpg',
    alt: 'Stone-baked margherita pizza topped with melted mozzarella and fresh basil leaves',
    description: 'Generous slices, ideal for a quick grab-and-go lunch.',
  },
];

export interface GalleryItem {
  label: string;
  art: ArtKind;
  image: string;
  alt: string;
}

export const gallery: GalleryItem[] = [
  {
    label: 'Pastries',
    art: 'croissant',
    image: '/images/bakery-story-pastry.jpg',
    alt: 'Freshly baked flaky pastry and confections plated on dark slate',
  },
  {
    label: 'Cakes',
    art: 'cheesecake',
    image: '/images/raspberry-cheesecake.jpg',
    alt: 'Hand-crafted raspberry cheesecake squares from the patisserie counter',
  },
  {
    label: 'Bread',
    art: 'bread',
    image: '/images/artisan-bread.jpg',
    alt: 'Rustic artisan sourdough loaves with blistered golden crust',
  },
  {
    label: 'Coffee',
    art: 'coffee',
    image: '/images/specialty-coffee.jpg',
    alt: 'Specialty espresso coffee topped with silky latte art',
  },
  {
    label: 'Savoury',
    art: 'savoury',
    image: '/images/savoury-pastry.jpg',
    alt: 'Warm golden savoury pastry baked with herbs',
  },
  {
    label: 'Sandwiches',
    art: 'sandwich',
    image: '/images/sandwich.jpg',
    alt: 'Crisp bakery baguette sandwich made fresh for lunch',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
  { label: 'Visit Us', href: '#visit' },
];
