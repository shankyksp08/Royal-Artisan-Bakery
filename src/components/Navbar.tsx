import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { business, navLinks } from '../config/business';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'bg-espresso/95 py-3 shadow-soft' : 'bg-transparent py-5'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Main"
      >
        <a
          href="#home"
          className="font-serif text-xl font-semibold tracking-wide text-cream sm:text-2xl"
        >
          Royal <span className="text-copper">Artisan</span> Bakery
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-cream/80 transition hover:text-copper"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={business.phoneHref} className="btn btn-copper !py-2">
              <Phone size={14} /> Call
            </a>
          </li>
        </ul>
        <button
          className="text-cream lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-5 lg:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-cream/10 py-3 text-cream/90"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a href={business.phoneHref} className="btn btn-copper w-full">
                <Phone size={14} /> {business.phoneDisplay}
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
