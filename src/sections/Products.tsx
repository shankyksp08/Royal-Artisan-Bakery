import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import { products } from '../config/business';

export default function Products() {
  return (
    <section id="menu" className="bg-[#eadfcb]">
      <div className="section">
        <Reveal className="mb-12 max-w-2xl">
          <p className="eyebrow">Signature Collection</p>
          <h2 className="mt-3 text-4xl font-semibold text-espresso md:text-6xl">Our Menu</h2>
          <p className="mt-4 text-ink/80">
            A selection of what the bakery offers. For current availability and prices, please call
            or visit.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
