import { motion } from 'framer-motion';
import { business } from '../config/business';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-espresso"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      role="status"
      aria-label="Loading"
    >
      <motion.p
        className="font-serif text-3xl tracking-wide text-cream sm:text-4xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {business.name}
      </motion.p>
      <div className="mt-6 h-px w-40 overflow-hidden bg-cream/20">
        <motion.div
          className="h-full bg-copper"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
