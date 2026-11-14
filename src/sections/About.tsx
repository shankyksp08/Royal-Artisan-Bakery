import { Coffee, Croissant, Globe2, HandHeart, Sandwich, Wheat } from 'lucide-react';
import Reveal from '../components/Reveal';

const points = [
  { icon: Wheat, title: 'Artisan-style baking', text: 'Breads and pastries made with care.' },
  {
    icon: Globe2,
    title: 'Global influences',
    text: 'British, European and Mediterranean inspiration.',
  },
  {
    icon: Croissant,
    title: 'Sweet and savoury',
    text: 'Cakes and pastries alongside savoury bakes.',
  },
  { icon: Sandwich, title: 'Lunchtime favourites', text: 'Sandwiches and pizza slices to go.' },
  { icon: Coffee, title: 'Coffee and drinks', text: 'Specialty beverages to pair with your treat.' },
  { icon: HandHeart, title: 'Welcoming café', text: 'A relaxed bakery-café on Petty France.' },
];

export default function About() {
  return (
    <section id="why" className="section">
      <Reveal className="mb-12 text-center">
        <p className="eyebrow">Why Choose Us</p>
        <h2 className="mt-3 text-4xl font-semibold text-espresso md:text-6xl">Baked with care</h2>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <div className="h-full rounded-3xl border border-ink/10 bg-white/60 p-7 transition hover:shadow-soft">
              <p.icon className="text-copper" size={28} />
              <h3 className="mt-4 text-2xl font-semibold text-espresso">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/80">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
