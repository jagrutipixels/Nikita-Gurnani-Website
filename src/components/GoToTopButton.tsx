import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-brand-bg rounded-full shadow-lg hover:shadow-xl hover:bg-secondary transition-colors"
          aria-label="Go to Top"
        >
          <ChevronUp size={28} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
