import { gallery } from '../config/business';
import BakeryPhoto from './BakeryPhoto';
import Reveal from './Reveal';

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <Reveal className="mb-12 text-center">
        <p className="eyebrow">Gallery</p>
        <h2 className="mt-3 text-4xl font-semibold text-espresso md:text-6xl">
          A Taste of the Bakery
        </h2>
      </Reveal>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
        {gallery.map((g, i) => (
          <Reveal
            key={g.label}
            delay={i * 0.05}
            className={i === 0 || i === 3 ? 'md:row-span-2' : ''}
          >
            <figure className="group relative h-full min-h-[11rem] overflow-hidden rounded-3xl bg-espresso/5">
              <BakeryPhoto
                src={g.image}
                alt={g.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/90 to-transparent p-4 text-sm tracking-wide text-cream">
                {g.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
