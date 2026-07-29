import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-bg w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col pointer-events-auto border border-primary/10 shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-primary/10">
                <h2 className="text-xl font-serif text-primary">{title}</h2>
                <button
                  onClick={onClose}
                  className="text-primary/60 hover:text-primary transition-colors focus:outline-none"
                  aria-label="Close"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>
              <div className="p-6 md:p-8 overflow-y-auto font-light text-primary/80 leading-relaxed text-sm md:text-base">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
