import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../data';
import { Mail, Phone, MessageCircle, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "Do you offer destination wedding packages?",
    answer: "Yes, we specialize in destination weddings globally. Our luxury travel protocol ensures a seamless experience anywhere in the world. Travel, accommodation, and visa arrangements for the team are typically factored into custom quotes."
  },
  {
    question: "How far in advance should I book my bridal makeup?",
    answer: "For HNI and destination weddings, we recommend booking 6 to 12 months in advance as our calendar fills quickly. We accept a limited number of brides per year to maintain our uncompromising standard of service."
  },
  {
    question: "Do you provide bridal trials?",
    answer: "Yes, we offer exclusive bridal previews at our studio. A preview session allows us to design your bespoke look, discuss skincare prep, and finalize the exact aesthetics for your event."
  },
  {
    question: "What is included in the signature bridal experience?",
    answer: "Our signature bridal package encompasses luxury skin prep, flawless HD or Airbrush makeup, sophisticated hairstyling, premium eyelash extensions, delicate draping, and touch-up assistance before you walk down the aisle."
  },
  {
    question: "How do we secure our date?",
    answer: "Dates are strictly secured upon the signing of our digital contract and receipt of a 50% non-refundable retainer. Availability is on a first-come, first-served basis."
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    if (openFaq === idx) {
      setOpenFaq(null);
    } else {
      setOpenFaq(idx);
    }
  };

  return (
    <div className="bg-brand-bg w-full pt-32 pb-24 min-h-screen">
      <Helmet>
        <title>Contact | Luxury Bridal Makeup Inquiries | HNI & Destination Weddings</title>
        <meta name="description" content="Inquire about date availability with Makeovers by Niki. Exclusive luxury bridal makeup services for HNI clients and global destination weddings across India and worldwide." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.3em] text-secondary text-sm font-medium mb-4"
          >
            Get In Touch
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-primary leading-tight mb-8"
          >
            Connect With <span className="italic">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-primary/70 font-light text-lg max-w-2xl mx-auto"
          >
            We take on a limited number of weddings each year to ensure the highest level of personalized service. Reach out directly via your preferred method to discuss your vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <motion.a 
            href="mailto:hello@makeoversbyniki.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group flex flex-col items-center justify-center p-12 bg-white/5 border border-white/10 hover:border-secondary hover:shadow-xl transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-secondary/20 group-hover:text-secondary transition-all duration-500">
              <Mail size={24} />
            </div>
            <h3 className="font-serif text-2xl text-primary mb-3">Email Us</h3>
            <p className="text-primary/60 font-light text-sm mb-6 text-center">For detailed inquiries and portfolio requests.</p>
            <span className="text-xs md:text-sm tracking-widest uppercase text-secondary font-medium">hello@makeoversbyniki.com</span>
          </motion.a>

          {/* WhatsApp */}
          <motion.a 
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="group flex flex-col items-center justify-center p-12 bg-white/5 border border-white/10 hover:border-[#25D366] hover:shadow-xl transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-[#25D366]/20 group-hover:text-[#25D366] transition-all duration-500">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-serif text-2xl text-primary mb-3">WhatsApp</h3>
            <p className="text-primary/60 font-light text-sm mb-6 text-center">For quick questions and date availability.</p>
            <span className="text-xs md:text-sm tracking-widest uppercase text-[#25D366] font-medium">Chat with us</span>
          </motion.a>

          {/* Call */}
          <motion.a 
            href="tel:+919876543210"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group flex flex-col items-center justify-center p-12 bg-white/5 border border-white/10 hover:border-secondary hover:shadow-xl transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-secondary/20 group-hover:text-secondary transition-all duration-500">
              <Phone size={24} />
            </div>
            <h3 className="font-serif text-2xl text-primary mb-3">Call</h3>
            <p className="text-primary/60 font-light text-sm mb-6 text-center">Speak directly with our team.</p>
            <span className="text-xs md:text-sm tracking-widest uppercase text-secondary font-medium">+91 98765 43210</span>
          </motion.a>
        </div>

        {/* FAQs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Frequently Asked <span className="italic">Questions</span></h2>
            <p className="text-primary/70 font-light text-lg">Details regarding our luxury bridal packages, travel, and booking.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 hover:border-secondary transition-colors duration-300">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-serif text-lg text-primary">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-secondary ml-4"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2 text-primary/70 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
