import BakeryPhoto from '../components/BakeryPhoto';
import Reveal from '../components/Reveal';
import { business } from '../config/business';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-espresso text-cream">
      {/* Full-width interior bakery counter & neon sign background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <BakeryPhoto
          src="/images/royal-artisan-interior.jpg"
          alt="Royal Artisan Bakery interior counter displaying fresh pastries beneath the illuminated Royal Artisan sign"
          pictureClassName="block h-full w-full"
          className="h-full w-full object-cover object-[52%_48%] brightness-[0.95] contrast-[1.05] md:object-[50%_46%]"
        />
      </div>

      {/* Atmospheric ~65-75% espresso gradient overlay for crisp cream & copper typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(33,25,20,0.76)_0%,rgba(33,25,20,0.72)_50%,rgba(33,25,20,0.82)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(183,123,67,0.12),transparent_70%)]"
      />

      <Reveal className="relative z-10 mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 md:py-36">
        <h2 className="text-5xl font-semibold md:text-7xl">
          Your Next Favourite <span className="text-copper">Treat Awaits.</span>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#menu" className="btn btn-copper">
            Explore Our Menu
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            Get Directions
          </a>
          <a href="#contact" className="btn btn-outline-light">
            Contact Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
