import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_URL } from '../data';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Signature Experience', path: '/experience' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Destination', path: '/destination' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll for transparent -> solid background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0); // scroll to top on route change
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Is home page (transparent navbar at top)
  const isHome = location.pathname === '/';
  
  const navBackground = isHome 
    ? 'bg-[#0b0c10] text-white'
    : (isScrolled || isMobileMenuOpen 
        ? 'bg-brand-bg/95 backdrop-blur-md text-primary border-b border-primary/10' 
        : 'bg-transparent text-white');

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${navBackground}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center z-50">
            <img 
              src={LOGO_URL}
              alt="Makeovers by Niki"
              className="h-16 md:h-24 py-1 md:py-2 block w-auto object-contain transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium tracking-widest uppercase transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'opacity-70 hover:opacity-100'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/contact" 
              className={`px-6 py-2.5 border text-sm tracking-widest uppercase transition-all duration-300
                ${isScrolled || !isHome || isMobileMenuOpen
                  ? 'border-primary text-primary hover:bg-primary hover:text-brand-bg' 
                  : 'border-white text-white hover:bg-white hover:text-[#0b0c10]'}
              `}
            >
              Inquire
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2 border-none focus:outline-none outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-brand-bg pt-24 px-6 flex flex-col"
          >
            <div className="flex flex-col space-y-6 mt-12 text-center h-full">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path}
                  className={({ isActive }) => 
                    `text-2xl font-serif tracking-wide transition-colors ${isActive ? 'text-secondary' : 'text-primary'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-8">
                <Link 
                  to="/contact" 
                  className="inline-block px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-brand-bg uppercase tracking-widest text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
