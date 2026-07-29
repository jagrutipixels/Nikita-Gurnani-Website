import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('niki_lead_popup_closed');
    
    if (!hasSeenPopup && location.pathname !== '/contact') {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000); // Appears after 5 seconds
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('niki_lead_popup_closed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10 w-full max-w-3xl bg-[#0f1115] border border-white/5 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row text-white"
          >
            {/* Left Graphic / Icon Area */}
            <div className="md:w-1/3 bg-[#0a0c0f] border-r border-white/5 p-8 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-secondary/5" />
              <div className="w-32 h-32 rounded-full border border-secondary/20 flex items-center justify-center relative mb-6">
                <div className="absolute inset-0 bg-secondary/10 rounded-full blur-xl animate-pulse" />
                <div className="text-center p-2 z-10 bg-[#0f1115] w-24 h-24 rounded-full border border-secondary flex flex-col items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <span className="text-secondary font-serif text-xl font-bold leading-snug">Elite</span>
                  <span className="text-secondary/70 text-[10px] tracking-widest uppercase">Slots</span>
                </div>
              </div>
              <p className="text-center text-white/50 text-xs tracking-wider uppercase">Makeovers by Niki</p>
            </div>

            {/* Right Content Area */}
            <div className="md:w-2/3 p-8 md:p-10 relative">
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              
              <div className="mb-6">
                <span className="inline-block border border-secondary/50 text-secondary text-[10px] tracking-wider uppercase px-3 py-1 rounded-full mb-4 font-semibold">
                  Limited Availability
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 leading-tight text-white drop-shadow-md">
                  <span className="text-secondary">Exclusive Access</span> To Our <br/>Luxury Bridal Package
                </h3>
                <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">
                  Be among the elite brides to showcase timeless elegance with our signature bridal makeover. Ideal for destination and HNI weddings globally.
                </p>
              </div>

              {/* Progress Bar Area */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2 text-sm">
                  <div className="text-secondary font-medium"><span className="text-white font-bold">87 of 100 spots</span> claimed</div>
                  <div className="text-secondary font-medium tracking-wide">13 left!</div>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "87%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    className="h-full bg-secondary relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/30" />
                  </motion.div>
                </div>
              </div>

              {/* Actions Area */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link
                  to="/contact"
                  onClick={handleClose}
                  className="w-full sm:w-auto bg-secondary hover:bg-white text-white hover:text-[#0b0c10] font-medium py-3.5 px-8 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <span className="font-semibold tracking-wide text-sm">Secure Your Spot</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Footer text */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  Valid for first 100 brides only · No code needed
                </div>
                <button 
                  onClick={handleClose} 
                  className="hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-colors"
                >
                  Not interested
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
