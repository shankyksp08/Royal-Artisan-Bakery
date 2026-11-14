import { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import BakeryPhoto from '../components/BakeryPhoto';
import Reveal from '../components/Reveal';

type ShowcaseKey = 'croissant' | 'bread' | 'pain' | 'cake';

const items: {
  key: ShowcaseKey;
  label: string;
  note: string;
  image: string;
  alt: string;
}[] = [
  {
    key: 'croissant',
    label: 'Croissant',
    note: 'Layered, golden and buttery.',
    image: '/images/butter-croissant.jpg',
    alt: 'Freshly baked butter croissants stacked with visible flaky golden layers',
  },
  {
    key: 'bread',
    label: 'Artisan Bread',
    note: 'Scored, crusty and hand-shaped.',
    image: '/images/artisan-bread.jpg',
    alt: 'Hand-shaped artisan sourdough loaves with scored golden crust',
  },
  {
    key: 'pain',
    label: 'Pain au Chocolat',
    note: 'Flaky pastry around dark chocolate.',
    image: '/images/pain-au-chocolat.jpg',
    alt: 'Warm flaky pain au chocolat showing layered viennoiserie and rich dark chocolate',
  },
  {
    key: 'cake',
    label: 'Layered Cake',
    note: 'Spiced sponge, cream frosting and walnuts.',
    image: '/images/carrot-cake.jpg',
    alt: 'Slice of spiced layered carrot cake finished with smooth cream cheese frosting',
  },
];

export default function Showcase() {
  const [sel, setSel] = useState<ShowcaseKey>('croissant');
  const reduced = !!useReducedMotion();
  const cur = items.find((i) => i.key === sel)!;

  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const smoothX = useSpring(dragX, { stiffness: 160, damping: 22 });
  const smoothY = useSpring(dragY, { stiffness: 160, damping: 22 });
  const rotateY = useTransform(smoothX, [-1, 1], reduced ? [0, 0] : [-10, 10]);
  const rotateX = useTransform(smoothY, [-1, 1], reduced ? [0, 0] : [8, -8]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    dragX.set(nx);
    dragY.set(ny);
  };

  const handlePointerLeave = () => {
    dragX.set(0);
    dragY.set(0);
  };

  return (
    <section className="bg-espresso text-cream">
      <div className="section">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow">Signature Showcase</p>
          <h2 className="mt-3 text-4xl font-semibold md:text-6xl">Select it. Savour it.</h2>
          <p className="mt-3 text-cream/70">
            Explore our signature bakes with subtle interactive depth.
          </p>
        </Reveal>

        <div
          data-testid="showcase-canvas"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          style={{ perspective: 1200 }}
          className="relative mx-auto h-[360px] max-w-3xl overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_50%_40%,#3a2c22,#211914)] p-4 sm:h-[460px] sm:p-6"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={cur.key}
                initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full"
              >
                <BakeryPhoto
                  src={cur.image}
                  alt={cur.alt}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-espresso/15"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-copper">Signature Selection</p>
                <p className="mt-1 font-display text-2xl font-semibold text-cream sm:text-3xl">
                  {cur.label}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <p className="mt-4 text-center text-cream/80">{cur.note}</p>
        <div
          className="mt-6 flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Choose a product"
        >
          {items.map((i) => (
            <button
              key={i.key}
              role="tab"
              aria-selected={sel === i.key}
              onClick={() => setSel(i.key)}
              className={`btn ${sel === i.key ? 'btn-copper' : 'btn-outline-light'}`}
            >
              {i.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
