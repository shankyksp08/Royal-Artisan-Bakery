import { motion } from 'framer-motion';
import type { Product } from '../config/business';
import BakeryPhoto from './BakeryPhoto';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-soft"
    >
      <div className="aspect-[4/3] overflow-hidden bg-espresso/5">
        <BakeryPhoto
          src={product.image}
          alt={product.alt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-espresso">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/80">{product.description}</p>
      </div>
    </motion.article>
  );
}
