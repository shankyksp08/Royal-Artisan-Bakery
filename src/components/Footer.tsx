import { business, navLinks } from '../config/business';

export default function Footer() {
  const { instagram, facebook } = business.social;
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-cream">
            Royal <span className="text-copper">Artisan</span> Bakery
          </p>
          <p className="mt-3 max-w-xs text-sm">
            Artisan bakery, pastry shop and café in Westminster, London.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a className="hover:text-copper" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <address className="text-sm not-italic leading-relaxed">
          {business.address.line1}
          <br />
          {business.address.city} {business.address.postcode}
          <br />
          {business.address.country}
          <br />
          <a className="hover:text-copper" href={business.phoneHref}>
            {business.phoneDisplay}
          </a>
          <br />
          <a
            className="hover:text-copper"
            href={business.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Official website
          </a>
          {(instagram || facebook) && (
            <span className="mt-2 block">
              {instagram && (
                <a
                  className="mr-4 hover:text-copper"
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              )}
              {facebook && (
                <a
                  className="hover:text-copper"
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              )}
            </span>
          )}
        </address>
      </div>
      <p className="border-t border-cream/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </p>
    </footer>
  );
}
