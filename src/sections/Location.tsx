import { Clock, MapPin, Phone } from 'lucide-react';
import Contact from '../components/Contact';
import Reveal from '../components/Reveal';
import { business } from '../config/business';

export default function Location() {
  const { address: a, openingHours } = business;
  return (
    <section id="visit" className="section">
      <Reveal className="mb-12 text-center">
        <p className="eyebrow">Visit Us</p>
        <h2 className="mt-3 text-4xl font-semibold text-espresso md:text-6xl">Find the bakery</h2>
      </Reveal>
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <address className="not-italic">
            <p className="flex gap-3 text-lg">
              <MapPin className="mt-1 shrink-0 text-copper" />
              <span>
                <strong>{business.name}</strong>
                <br />
                {a.line1}
                <br />
                {a.city} {a.postcode}
                <br />
                {a.country}
              </span>
            </p>
            <p className="mt-4 flex gap-3 text-lg">
              <Phone className="shrink-0 text-copper" />
              <a href={business.phoneHref} className="hover:text-copper">
                {business.phoneDisplay}
              </a>
            </p>
          </address>
          <div className="mt-6 flex gap-3 text-sm">
            <Clock className="shrink-0 text-copper" />
            {openingHours.length ? (
              <ul>
                {openingHours.map((h) => (
                  <li key={h.day}>
                    {h.day}: {h.hours}
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                Opening hours are shown on Google Maps. Please check there or call before visiting.
              </p>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={business.phoneHref} className="btn btn-copper">
              <Phone size={16} /> Call now
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              <MapPin size={16} /> Get directions
            </a>
          </div>
          <iframe
            title="Royal Artisan Bakery on Google Maps"
            src={business.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-8 h-72 w-full rounded-3xl border-0 shadow-soft"
          />
        </Reveal>
        <Reveal delay={0.1} className="scroll-mt-24">
          <div id="contact">
            <Contact />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
