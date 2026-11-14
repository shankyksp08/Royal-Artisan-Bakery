import { lazy, Suspense, useMemo, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { business } from '../config/business';
import { hasWebGL, useIsMobile } from '../hooks/useEnv';
import BakeryPhoto from './BakeryPhoto';

const BakeryScene = lazy(() => import('../scenes/BakeryScene'));

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mobile = useIsMobile();
  const reduced = !!useReducedMotion();
  const webgl = useMemo(() => hasWebGL(), []);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 24 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 72]);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduced || mobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(-nx * 22);
    pointerY.set(-ny * 16);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative min-h-screen overflow-hidden bg-espresso text-cream"
    >
      {/* Full-bleed storefront photographic hero with subtle pointer & scroll parallax */}
      <motion.div
        style={reduced ? undefined : { x: smoothX, y: smoothY }}
        className="pointer-events-none absolute -inset-4 overflow-hidden"
      >
        <motion.div style={{ y: scrollY }} className="h-full w-full scale-[1.06]">
          <BakeryPhoto
            src="/images/royal-artisan-storefront.jpg"
            alt="Royal Artisan Bakery exterior storefront on Petty France in Westminster showing dark framed windows and bakery signage"
            eager
            pictureClassName="block h-full w-full"
            className="h-full w-full object-cover object-[52%_46%] brightness-[0.96] contrast-[1.04] md:object-[68%_46%]"
          />
        </motion.div>
      </motion.div>

      {/* Calibrated 60-75% espresso-brown gradient overlay preserving left headline contrast and right-side signage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(33,25,20,0.94)_0%,rgba(33,25,20,0.82)_46%,rgba(33,25,20,0.54)_74%,rgba(33,25,20,0.78)_100%)] md:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(33,25,20,0.90)_0%,rgba(33,25,20,0.74)_44%,rgba(33,25,20,0.50)_72%,rgba(33,25,20,0.56)_100%)] md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_48%,rgba(183,123,67,0.16),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-espresso to-transparent"
      />

      {/* Subtle WebGL ambient warm particle depth layer (no geometric food models) */}
      {webgl && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Suspense fallback={null}>
            <BakeryScene mobile={mobile} reduced={reduced} />
          </Suspense>
        </div>
      )}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 md:justify-center md:pb-0">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Artisan Bakery · Pastry · Café · Westminster
        </motion.p>
        <motion.h1
          className="mt-4 max-w-2xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          Crafted with Passion. <span className="text-copper">Baked to Perfection.</span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-md text-base leading-relaxed text-cream/85 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Breads, pastries and cakes made with care, with British, European and Mediterranean
          influences, at {business.address.line1}, Westminster.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a href="#menu" className="btn btn-copper">
            Explore Our Menu <ArrowRight size={16} />
          </a>
          <a href="#visit" className="btn btn-outline-light">
            <MapPin size={16} /> Visit Our Bakery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
