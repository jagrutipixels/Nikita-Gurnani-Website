import { motion } from 'motion/react';
import { useEffect } from 'react';
import { LOGO_URL } from '../data';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500); // 2.5s display time
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F8F6F2] select-none"
    >
      <motion.img
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        src={LOGO_URL}
        alt="Makeovers by Niki"
        className="h-24 md:h-32 object-contain mb-8"
        referrerPolicy="no-referrer"
      />
      <div className="w-32 h-[1px] bg-primary/20 overflow-hidden relative">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-primary"
          initial={{ width: "0%", left: "0%" }}
          animate={{ width: ["0%", "50%", "0%"], left: ["0%", "25%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
