import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../data';
import { ChevronLeft, ChevronRight, X as CloseIcon, Instagram, Facebook, Twitter } from 'lucide-react';

const SLIDES = [
  {
    subtitle: "Editorial",
    title: "Captivating Looks for Unforgettable Nights",
    linkText: "READ MORE >",
    image: IMAGES.heroSlides[4]
  },
  {
    subtitle: "Signature HD",
    title: "Redefining Timeless Bridal Elegance",
    linkText: "READ MORE >",
    image: IMAGES.heroSlides[1]
  },
  {
    subtitle: "Airbrush",
    title: "Flawless Longevity & Weightless Feel",
    linkText: "READ MORE >",
    image: IMAGES.heroSlides[2]
  },
  {
    subtitle: "Destination",
    title: "Uncompromising Experience Anywhere",
    linkText: "READ MORE >",
    image: IMAGES.heroSlides[3]
  },
  {
    subtitle: "Luxury Bridal",
    title: "Curating Flawless Bridal Looks Globally",
    linkText: "READ MORE >",
    image: IMAGES.heroSlides[0]
  }
];

const CATEGORIES = [
  { title: "Luxury Bridal Makeup", image: "https://drive.google.com/thumbnail?id=11bTisad9hk9muFThyIgJ9YY_75byZLLO&sz=w800", position: "object-[80%_center]" },
  { title: "HD Bridal Makeup", image: "https://drive.google.com/thumbnail?id=1TkYZRkx6Bft1SKiE1LvKH4c3CwZdTNVo&sz=w800", position: "object-[center_top]" },
  { title: "Airbrush Bridal Makeup", image: "https://drive.google.com/thumbnail?id=173Zi3jXZkDhDghrvzhCsYUD-8mirpmAA&sz=w800", position: "object-[65%_top]" },
  { title: "Engagement & Reception Styling", image: "https://drive.google.com/thumbnail?id=1j1jVNPVbMysukBukRXcxOTYKs2NwDgNg&sz=w800", position: "object-center" },
  { title: "Destination Bridal Experience", image: "https://drive.google.com/thumbnail?id=1sl2XSexbz5oJvsiHNS5ClvZikh3vIu_g&sz=w800", position: "object-[30%_center]" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePanel, setActivePanel] = useState<'none' | 'categories' | 'about'>('none');
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    // Prevent global scrolling to match the fixed slider layout constraint
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const minSwipeDistance = 50;
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <div className="fixed top-20 md:top-24 h-[calc(100dvh-5rem)] md:h-[calc(100vh-6rem)] left-0 right-0 bg-[#0b0c10] text-white flex z-40 overflow-hidden font-sans">
      <Helmet>
        <title>Global Luxury Bridal Makeup Artist for HNI Weddings | Makeovers by Nikki</title>
        <meta name="description" content="Top luxury bridal makeup artist serving HNI clients across India and globally. Bespoke beauty transformations for elite destination weddings worldwide." />
      </Helmet>

      {/* Left Strip */}
      <div className="hidden md:flex md:w-20 border-r border-white/10 flex-col items-center h-full z-50 bg-black/50 backdrop-blur-md justify-center pb-8 shrink-0">
        <div className="flex flex-col items-center space-y-8">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-4 text-white/50 hover:text-white transition-colors group" aria-label="Twitter">
            <Twitter size={16} className="group-hover:text-secondary transition-colors" />
            <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] tracking-[0.25em] uppercase group-hover:text-secondary transition-colors">twitter</span>
          </a>
          <div className="w-1 h-1 rounded-full bg-secondary opacity-50"></div>
          <a href="https://www.instagram.com/makeoversbyniki" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-4 text-white/50 hover:text-white transition-colors group" aria-label="Instagram">
            <Instagram size={16} className="group-hover:text-secondary transition-colors" />
            <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] tracking-[0.25em] uppercase group-hover:text-secondary transition-colors">instagram</span>
          </a>
          <div className="w-1 h-1 rounded-full bg-secondary opacity-50"></div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-4 text-white/50 hover:text-white transition-colors group" aria-label="Facebook">
            <Facebook size={16} className="group-hover:text-secondary transition-colors" />
            <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] tracking-[0.25em] uppercase group-hover:text-secondary transition-colors">facebook</span>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div 
        className="flex-1 relative h-full bg-black overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div 
            key={currentSlide} 
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img 
              src={SLIDES[currentSlide].image.landscape} 
              alt={SLIDES[currentSlide].title} 
              className="absolute inset-0 w-full h-full object-cover object-[center_top] opacity-80 hidden md:block"
              referrerPolicy="no-referrer"
              loading={currentSlide === 0 ? "eager" : "lazy"}
            />
            <img 
              src={SLIDES[currentSlide].image.mobile} 
              alt={SLIDES[currentSlide].title} 
              className="absolute inset-0 w-full h-full object-cover object-[center_top] opacity-80 block md:hidden"
              referrerPolicy="no-referrer"
              loading={currentSlide === 0 ? "eager" : "lazy"}
            />
            {/* Dark overlay specifically to match NOVO dark tone */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-black/50 to-transparent opacity-90" />
          </motion.div>
        </AnimatePresence>

        {/* Text Area for Slider */}
        <div className="absolute inset-y-0 left-0 right-12 md:right-32 flex flex-col justify-end pb-32 md:pb-40 pl-6 pr-6 md:pl-16 md:pr-24 z-10 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="pointer-events-auto"
            >
              <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                <div className="w-6 md:w-8 h-[1px] bg-secondary" />
                <span className="text-white/80 tracking-[0.2em] text-xs md:text-sm uppercase drop-shadow-md">{SLIDES[currentSlide].subtitle}</span>
              </div>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-sans font-bold leading-[1.1] mb-6 md:mb-8 text-white max-w-3xl drop-shadow-2xl tracking-tight [text-shadow:_0_2px_15px_rgb(0_0_0_/_60%)]">
                {SLIDES[currentSlide].title.split('\n').map((line, i) => <div key={i}>{line}</div>) }
              </h1>
              <Link 
                to="/experience" 
                className="inline-flex items-center text-secondary hover:text-white uppercase tracking-[0.2em] text-sm font-semibold transition-colors drop-shadow-md"
              >
                {SLIDES[currentSlide].linkText}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination & Arrows */}
        <div className="absolute bottom-6 right-20 md:bottom-10 md:right-10 z-10 flex flex-col md:flex-row md:items-center items-end space-y-4 md:space-y-0 md:space-x-12">
          <div className="flex items-center space-x-3 md:space-x-6">
            {SLIDES.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setCurrentSlide(i)}
                className={`flex items-center cursor-pointer transition-colors ${i === currentSlide ? 'text-secondary' : 'text-white/40 hover:text-white/80'}`}
              >
                <span className="text-sm font-medium tracking-widest">{(i + 1).toString().padStart(2, '0')}</span>
                {i === currentSlide && <div className="hidden md:block w-8 md:w-12 h-[1px] bg-secondary ml-3 md:ml-6" />}
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronLeft size={20} className="text-white/70 hover:text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronRight size={20} className="text-white/70 hover:text-white" />
            </button>
          </div>
        </div>

        {/* Categories Overlay Panel */}
        <AnimatePresence>
          {activePanel === 'categories' && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0 bg-[#141517] z-30 flex flex-col md:flex-row"
            >
              {CATEGORIES.map((cat, i) => (
                <Link 
                  to="/experience" 
                  key={i} 
                  className="flex-1 relative group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-[#ffffff15] last:border-b-0 md:last:border-r-0 h-1/5 md:h-full block"
                >
                  <img src={cat.image} className={`absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ${cat.position}`} referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-black/40 to-transparent md:bg-gradient-to-t md:from-[#0b0c10] md:via-black/20 md:to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
                  
                  <div className="absolute bottom-6 md:bottom-12 left-4 md:left-8 pr-16 md:pr-24 flex flex-col md:flex-col md:justify-end md:items-start z-10 transition-transform duration-500 transform group-hover:-translate-y-2">
                    <span className="text-3xl md:text-5xl font-bold text-white/40 mb-1 md:mb-4 group-hover:text-secondary group-hover:drop-shadow-lg transition-colors duration-500 [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)]">{(i + 1).toString().padStart(2, '0')}</span>
                    <span className="text-sm md:text-2xl font-sans font-bold leading-tight group-hover:text-white transition-colors duration-500 [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)]">{cat.title}</span>
                  </div>
                </Link>
              ))}
              
              {/* Pagination indicators for categories overlay (dummy/aesthetic) */}
              <div className="absolute top-10 right-10 hidden md:flex space-x-2 z-40 bg-black/40 rounded-full">
                <button className="w-10 h-10 flex items-center justify-center hover:text-white transition-colors text-white/50"><ChevronLeft size={20} /></button>
                <button className="w-10 h-10 flex items-center justify-center hover:text-white transition-colors text-white/50"><ChevronRight size={20} /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* About Overlay Panel */}
        <AnimatePresence>
          {activePanel === 'about' && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0 bg-[#0d0e12] z-30 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 h-[35%] md:h-full relative overflow-hidden">
                <img src={IMAGES.about} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
              </div>
              <div className="w-full md:w-1/2 h-[65%] md:h-full flex flex-col justify-center px-6 md:px-20 py-8 relative bg-[#111216] overflow-y-auto overflow-x-hidden pb-24 md:pb-8">
                <p className="text-secondary tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-6 mt-4 md:mt-0 font-medium">About Me</p>
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-4 md:mb-8 text-white drop-shadow-sm">
                  My name is Niki,<br/>I'm a Makeup Artist.
                </h2>
                <div className="w-8 h-[1px] bg-white/20 mb-8" />
                <p className="text-white/60 leading-relaxed font-light mb-12 max-w-lg text-sm md:text-base">
                  The world without beauty will be meaningless to us if there is no light and color, which opens up our minds and expresses passion. My transformations are inspired by light, color, creative perspective, techniques & personalities.
                </p>
                <Link to="/about" className="inline-flex text-secondary text-sm font-semibold tracking-widest uppercase hover:text-white transition-colors select-none">
                  READ MORE &gt;
                </Link>
                
                <div className="absolute -bottom-8 md:-bottom-12 md:left-10 text-[6rem] md:text-[14rem] font-sans font-black text-white/[0.04] select-none pointer-events-none tracking-tighter">
                  About
                </div>

                <div className="absolute bottom-10 right-10 flex text-sm font-medium tracking-widest space-x-6 text-white/50">
                   <span>01</span>
                   <span className="text-secondary">02</span>
                   <span>03</span>
                   <div className="w-12 h-[1px] bg-white/20 mt-2.5 hidden md:block" />
                   <span>04</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Right Strip */}
      <div className="w-12 md:w-20 border-l border-white/10 flex flex-col items-center justify-center h-full z-50 bg-black/50 backdrop-blur-md shrink-0">
        <div className="flex flex-col items-center space-y-12">
          {activePanel === 'categories' ? (
            <button onClick={() => setActivePanel('none')} className="flex items-center hover:text-white transition-colors group">
              <span className="[writing-mode:vertical-rl] rotate-180 flex items-center text-xs tracking-widest font-medium uppercase text-white/70 group-hover:text-white transition-colors">
                <CloseIcon size={14} className="mb-2" /> CLOSE
              </span>
            </button>
          ) : (
            <button onClick={() => setActivePanel('categories')} className="group">
              <span className="[writing-mode:vertical-rl] rotate-180 text-xs tracking-widest font-medium uppercase text-white/50 group-hover:text-white transition-colors">CATEGORIES</span>
            </button>
          )}

          <div className="w-1 h-1 rounded-full bg-secondary"></div>

          {activePanel === 'about' ? (
            <button onClick={() => setActivePanel('none')} className="flex items-center hover:text-white transition-colors group">
              <span className="[writing-mode:vertical-rl] rotate-180 flex items-center text-xs tracking-widest font-medium uppercase text-white/70 group-hover:text-white transition-colors">
                <CloseIcon size={14} className="mb-2" /> CLOSE
              </span>
            </button>
          ) : (
            <button onClick={() => setActivePanel('about')} className="group">
              <span className="[writing-mode:vertical-rl] rotate-180 text-xs tracking-widest font-medium uppercase text-white/50 group-hover:text-white transition-colors hover:text-secondary">ABOUT</span>
            </button>
          )}
        </div>
      </div>
      
    </div>
  );
}
