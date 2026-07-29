import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../data';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-brand-bg w-full pt-32 pb-24">
      <Helmet>
        <title>About Niki | Expert Luxury Bridal Makeup Artist for HNI Weddings</title>
        <meta name="description" content="Discover the artistry of Niki, a premier luxury bridal makeup artist with decades of global expertise. Creating timeless beauty for elite HNI clients across India and internationally." />
      </Helmet>
      {/* Intro Header */}
      <header className="max-w-4xl mx-auto text-center px-6 mb-24">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-secondary text-sm font-medium mb-6"
        >
          The Story Behind The Artist
        </motion.h4>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-8"
        >
          Two Decades of<br />
          <span className="italic">Bridal Excellence</span>
        </motion.h1>
      </header>

      {/* Main Story Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative aspect-[3/4]"
        >
          <img 
            src={IMAGES.about} 
            alt="Niki working" 
            className="w-full h-full object-cover object-[center_top] md:object-[center_20%]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-primary">The Art of Timeless Beauty</h2>
          <div className="space-y-6 text-primary/80 font-light leading-relaxed text-lg">
            <p>
              As a globally sought-after luxury bridal makeup artist, Niki's journey began after observing countless weddings and becoming fascinated by why some brides looked effortlessly exquisite while others missed the mark. This curiosity led to years of studying bridal aesthetics, facial harmony, and high-fashion makeup artistry.
            </p>
            <p>
              After working extensively as a luxury wedding makeup artist across India and Kenya, refining her craft with distinct cultures, skin tones, and grand celebrations, Niki established herself as a highly sought-after celebrity makeup artist and premium bridal professional.
            </p>
            <p>
              Today, she focuses on a deeply personalized approach. Her philosophy is simple: the makeup should enhance the bride's natural structure, not mask it. A bride should look in the mirror and see the most radiant, elevated version of herself.
            </p>
          </div>
          
          <div className="pt-8 border-t border-primary/10 mt-8 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-3xl text-primary mb-2">20+</h4>
              <p className="text-xs uppercase tracking-[0.2em] text-primary/60">Years Experience</p>
            </div>
            <div>
              <h4 className="font-serif text-3xl text-primary mb-2">India & Kenya</h4>
              <p className="text-xs uppercase tracking-[0.2em] text-primary/60">Global Expertise</p>
            </div>
          </div>

          {/* Instagram Live Work Section */}
          <div className="pt-12 mt-8 border-t border-primary/10 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-primary font-medium tracking-widest uppercase text-xs">Live Work Gallery</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary/50 hover:text-secondary text-xs tracking-widest uppercase transition-colors flex items-center space-x-2">
                 <span>@makeoversbyniki</span>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[IMAGES.portfolio[0], IMAGES.portfolio[1], IMAGES.portfolio[2], IMAGES.portfolio[3]].map((img, idx) => (
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" key={idx} className="block relative group overflow-hidden aspect-square border border-primary/10">
                  <img src={img} className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-secondary tracking-widest text-[10px] uppercase font-bold translate-y-2 group-hover:translate-y-0 transition-transform duration-500">View</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-[#111216] border-t border-white/5 text-white mt-32 py-32 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">A Personalized Luxury Experience</h2>
          <p className="text-white/70 font-light max-w-2xl mx-auto text-lg">
            Every booking is an exclusive commitment. We limit our taking to ensure that every bride receives unparalleled attention, patience, and absolute perfection on her wedding day.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {['Emotional Connection', 'Luxury Standards', 'Timeless Precision'].map((value, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-2 h-2 bg-secondary rounded-full mb-6" />
              <h3 className="font-serif text-2xl mb-4">{value}</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                We believe that the energy in the getting-ready room sets the tone for the entire day. Expect a calming, supportive, and highly professional environment.
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <Link to="/contact" className="px-10 py-4 bg-white/10 border border-white/20 text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300">
            Inquire About Your Date
          </Link>
        </div>
      </section>
    </div>
  );
}
