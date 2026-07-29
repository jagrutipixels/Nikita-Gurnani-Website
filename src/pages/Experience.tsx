import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../data';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    title: "Luxury Bridal Makeup",
    desc: "The quintessential bespoke service for the modern bride seeking premium bridal makeup globally. Includes personalized pre-wedding skin consultation, elite global products, and a flawless, long-wearing application naturally suited to luxury wedding aesthetics."
  },
  {
    title: "HD Bridal Makeup",
    desc: "Designed specifically for modern photography and videography. High Definition products are seamlessly blended to create a skin-like texture that looks absolute perfection both in-person and on camera."
  },
  {
    title: "Airbrush Bridal Makeup",
    desc: "The ultimate luxury finish. A micro-fine mist of foundation provides unparalleled flawless coverage with a weightless feel. Sweat, tear, and transfer resistant for the longest days."
  },
  {
    title: "Engagement & Reception Styling",
    desc: "Curated looks for pre-and-post wedding events. Whether you desire a soft, romantic engagement glow or a bold, glamorous reception transformation, we ensure harmonious transitions."
  },
  {
    title: "Destination Bridal Experience",
    desc: "A comprehensive luxury package by a leading destination wedding makeup artist in India. Ensures consistent beauty, touch-ups, and look changes across a multi-day international or domestic itinerary."
  },
  {
    title: "Bridal Party Styling",
    desc: "Exclusive cohesive beauty services for the mother-of-the-bride, sisters, and bridesmaids, ensuring the entire bridal party looks elegant while allowing the bride to stand out."
  }
];

export default function Experience() {
  return (
    <div className="bg-brand-bg w-full pt-32 pb-24">
      <Helmet>
        <title>Signature Bridal Makeup Services | HNI Wedding Experience | Makeovers by Niki</title>
        <meta name="description" content="Discover bespoke luxury bridal services, including flawless HD and Airbrush makeup techniques. Elite wedding beauty experiences tailored for HNI and global brides." />
      </Helmet>
      <header className="max-w-4xl mx-auto text-center px-6 mb-24">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-secondary text-sm font-medium mb-6"
        >
          Bespoke Artistry
        </motion.h4>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-8"
        >
          Signature Bridal<br />
          <span className="italic">Experience</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-primary/70 font-light text-lg max-w-2xl mx-auto"
        >
          Every service is meticulously crafted to ensure you feel calm, confident, and impossibly beautiful. We use only the finest international luxury brands.
        </motion.p>
      </header>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start pb-24 border-b border-primary/10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:sticky lg:top-32 aspect-square"
        >
          <img src={IMAGES.experience} alt="Bridal Experience" className="w-full h-full object-cover object-[center_top] md:object-[center_20%]" referrerPolicy="no-referrer" />
        </motion.div>
        
        <div className="flex flex-col space-y-16">
          {SERVICES.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4 flex items-start md:items-center">
                <span className="text-secondary mr-4 tex-lg font-sans font-light mt-1 md:mt-0">{(idx + 1).toString().padStart(2, '0')}</span>
                {s.title}
              </h3>
              <p className="text-primary/70 font-light leading-relaxed text-lg pl-12 border-l border-transparent group-hover:border-secondary transition-colors duration-500">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-6 mt-24">
        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8">Ready to begin your journey?</h2>
        <p className="text-primary/70 font-light text-lg mb-12">
          Consultations are complimentary but required to ensure alignment of vision and availability for your dates.
        </p>
        <Link to="/contact" className="px-10 py-4 bg-primary text-brand-bg uppercase tracking-widest text-sm hover:bg-secondary hover:text-white transition-all duration-300">
          Schedule Consultation
        </Link>
      </div>
    </div>
  );
}
