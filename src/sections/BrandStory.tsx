import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import BakeryPhoto from '../components/BakeryPhoto';
import Reveal from '../components/Reveal';

export default function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-30, 50]);

  return (
    <section id="about" ref={ref} className="section grid items-center gap-12 md:grid-cols-2">
      <Reveal>
        <p className="eyebrow">Our Story</p>
        <h2 className="mt-3 text-4xl font-semibold leading-tight text-espresso md:text-6xl">
          The warm taste of home baking, in the heart of Westminster.
        </h2>
        <p className="mt-6 leading-relaxed">
          Royal Artisan Bakery is an artisan bakery, pastry shop and café on Petty France. Our
          baking draws on British, European and Mediterranean traditions, from laminated pastries
          and crusty bread to cakes, savoury bakes and sandwiches.
        </p>
        <p className="mt-4 leading-relaxed">
          Whether it is a morning coffee, a lunchtime bite or a slice of cake, we welcome you to
          stop by.
        </p>
      </Reveal>
      <div className="relative grid grid-cols-2 gap-4">
        <motion.div
          style={{ y: y1 }}
          className="aspect-[3/4] self-start overflow-hidden rounded-3xl shadow-soft"
        >
          <BakeryPhoto
            src="/images/bakery-story-bread.jpg"
            alt="Artisan bakery counter with freshly baked croissants and hot cross buns on marble"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="mt-10 aspect-[3/4] self-start overflow-hidden rounded-3xl shadow-soft"
        >
          <BakeryPhoto
            src="/images/bakery-story-pastry.jpg"
            alt="Golden baked croissant dusted with toasted nuts on dark espresso slate"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
