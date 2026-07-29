import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../data';
import { Link } from 'react-router-dom';

const LOCATIONS = ['Goa', 'Jaipur', 'Udaipur', 'Dubai', 'Italy', 'Thailand'];

export default function Destination() {
  return (
    <div className="bg-brand-bg w-full">
      <Helmet>
        <title>Luxury Destination Wedding Makeup Artist | Global & India | Makeovers by Niki</title>
        <meta name="description" content="Seamless luxury destination wedding makeup artistry across India, Dubai, Italy, and beyond. Exclusive bridal packages for HNI and international clientele." />
      </Helmet>
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src={IMAGES.destination} 
          alt="Destination Weddings" 
          className="absolute inset-0 w-full h-full object-cover object-[center_75%] md:object-[center_85%] text-transparent"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 text-white">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.3em] text-secondary text-sm font-medium mb-6 drop-shadow-md"
          >
            Global Artistry
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif leading-tight mb-8 drop-shadow-lg"
          >
            Luxury Beauty For<br />
            <span className="italic">Destination Weddings</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8">Seamless Luxury, Anywhere in the World</h2>
            <div className="space-y-6 text-primary/70 font-light leading-relaxed text-lg mb-12">
              <p>
                Planning a wedding from afar requires immense trust in your creative team. As a premier destination wedding makeup artist in India, we bring the luxury studio experience directly to your resort, palace, or chateau.
              </p>
              <p>
                Whether you are hosting an intimate celebration at a serene international location or a grand affair anywhere across the globe, our expertise ensures absolute perfection. From meticulous packing of environment-specific products to seamlessly managing global travel logistics, our team guarantees your beauty preparation is flawless, luxurious, and deeply relaxing.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-12">
              {LOCATIONS.map(loc => (
                <div key={loc} className="flex items-center space-x-3 text-primary/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="font-serif italic text-xl">{loc}</span>
                </div>
              ))}
              <div className="flex items-center space-x-3 text-primary/80">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-serif italic text-xl">And Beyond...</span>
              </div>
            </div>

            <Link to="/contact" className="self-start px-10 py-4 bg-primary text-brand-bg uppercase tracking-widest text-sm hover:bg-secondary hover:text-white transition-all duration-300">
              Request Travel Quote
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <img src={IMAGES.portfolio[4]} alt="Travel" className="w-full h-full object-cover object-left aspect-[3/4] mt-12" referrerPolicy="no-referrer" loading="lazy" />
            <img src={IMAGES.portfolio[3]} alt="Travel Bride" className="w-full h-full object-cover object-center aspect-[3/4]" referrerPolicy="no-referrer" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}
