import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../data';

const CATEGORIES = ['All', 'Bridal', 'Engagement', 'Reception', 'Destination', 'Details'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allPortfolioImages = useMemo(() => [
    { src: IMAGES.portfolio[0], category: 'Bridal' },
    { src: IMAGES.portfolio[1], category: 'Engagement' },
    { src: IMAGES.portfolio[2], category: 'Reception' },
    { src: IMAGES.portfolio[3], category: 'Destination' },
    { src: IMAGES.portfolio[4], category: 'Bridal' }
  ], []);

  const filterImages = (item: {src: string, category: string}) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  };

  const displayImages = allPortfolioImages.filter(filterImages);

  return (
    <div className="bg-brand-bg w-full pt-32 pb-24 min-h-screen">
      <Helmet>
        <title>Luxury Bridal Makeup Portfolio | HNI Indian & Global Weddings | Makeovers by Niki</title>
        <meta name="description" content="Explore our curated portfolio of luxury bridal makeup transformations. Exclusive, high-profile beauty services for HNI brides, royal Indian weddings, and global destinations." />
      </Helmet>
      <header className="max-w-4xl mx-auto text-center px-6 mb-16">
        <h4 className="uppercase tracking-[0.3em] text-secondary text-sm font-medium mb-6">The Galleries</h4>
        <h1 className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-8">
          The <span className="italic">Portfolio</span>
        </h1>
        <p className="text-primary/70 font-light text-lg max-w-2xl mx-auto">
          A curated selection of our favorite editorial and real bride moments across India and luxury destinations worldwide.
        </p>
      </header>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-wrap justify-center gap-6">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`uppercase tracking-widest text-xs font-medium transition-all duration-300 pb-1 border-b-2 
              ${activeFilter === cat ? 'border-secondary text-primary' : 'border-transparent text-primary/50 hover:text-primary'}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="max-w-[1600px] mx-auto px-6 relative min-h-[50vh]">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {displayImages.map((img, idx) => (
              <motion.div
                key={img.src + idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden group cursor-zoom-in rounded-sm shadow-sm aspect-[4/5]"
                onClick={() => setSelectedImage(img.src)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                  <span className="text-white text-sm tracking-widest uppercase font-medium drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.category}</span>
                </div>
                <img 
                  src={img.src} 
                  alt={`${img.category} Portfolio Piece`} 
                  className="w-full h-full object-cover object-[center_top] md:object-center transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {displayImages.length === 0 && (
          <div className="text-center py-32 text-primary/50 font-serif text-2xl italic">
            Expanding our archives. Check back soon.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white pb-1"
              onClick={() => setSelectedImage(null)}
            >
              <span className="uppercase tracking-widest text-xs">Close</span>
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
