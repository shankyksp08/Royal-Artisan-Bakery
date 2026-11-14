import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import LoadingScreen from './components/LoadingScreen';
import BrandStory from './sections/BrandStory';
import Products from './sections/Products';
import About from './sections/About';
import Reviews from './sections/Reviews';
import Location from './sections/Location';
import FinalCTA from './sections/FinalCTA';

const Showcase = lazy(() => import('./sections/Showcase'));

export default function App() {
  const [loading, setLoading] = useState(
    () =>
      typeof window === 'undefined' ||
      new URLSearchParams(window.location.search).get('autostart') !== '1',
  );

  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(t);
  }, [loading]);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <Navbar />
        <main>
          <Hero />
          <BrandStory />
          <Products />
          <Suspense fallback={<div className="h-96 bg-espresso" />}>
            <Showcase />
          </Suspense>
          <About />
          <Gallery />
          <Reviews />
          <Location />
          <FinalCTA />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

