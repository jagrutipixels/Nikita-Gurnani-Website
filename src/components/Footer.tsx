import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Modal from './Modal';
import { LOGO_URL } from '../data';

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="bg-[#111216] border-t border-white/5 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-16">
        
        {/* Brand */}
        <div className="flex flex-col space-y-6 md:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-block">
            <img 
              src={LOGO_URL}
              alt="Makeovers by Niki"
              className="h-16 md:h-20 object-contain w-auto brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Creating timeless bridal transformations for discerning brides across India and destination weddings worldwide.
          </p>
        </div>

        {/* Explore */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-sans text-sm tracking-[0.2em] uppercase text-secondary">Explore</h4>
          <nav className="flex flex-col space-y-3">
            <Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm">About Niki</Link>
            <Link to="/experience" className="text-white/70 hover:text-white transition-colors text-sm">Signature Experience</Link>
            <Link to="/portfolio" className="text-white/70 hover:text-white transition-colors text-sm">Portfolio</Link>
            <Link to="/destination" className="text-white/70 hover:text-white transition-colors text-sm">Destination Weddings</Link>
            <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">Contact Us</Link>
          </nav>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-sans text-sm tracking-[0.2em] uppercase text-secondary">Inquiries</h4>
          <div className="flex flex-col space-y-4">
            <a href="mailto:hello@makeoversbyniki.com" className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors text-sm">
              <Mail size={16} />
              <span>hello@makeoversbyniki.com</span>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors text-sm">
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors text-sm">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </a>
            <div className="flex items-start space-x-3 text-white/70 text-sm">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>Available globally for luxury destination weddings and exclusive celebrations.</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-sans text-sm tracking-[0.2em] uppercase text-secondary">Connect</h4>
          <a 
            href="https://www.instagram.com/makeoversbyniki/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors text-sm"
          >
            <Instagram size={16} />
            <span>@makeoversbyniki</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-xs tracking-wider uppercase">
        <p>© 2026 website designed and maintained by <a href="https://www.icreatepixels.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@icreatepixels</a></p>
        <div className="mt-4 md:mt-0 flex space-x-6 items-center">
          <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors focus:outline-none tracking-widest">PRIVACY POLICY</button>
          <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors focus:outline-none tracking-widest">TERMS OF SERVICE</button>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title="Privacy Policy">
        <div className="space-y-6">
          <p>At Makeovers by Niki, safeguarding your privacy is of paramount importance to us. This Privacy Policy delineates the types of personal information we collect, how we utilize and protect it, and the circumstances under which we may disclose it.</p>
          
          <h3 className="text-lg font-serif text-primary">Information Collection</h3>
          <p>We gather personal data such as your name, contact details (email address and phone number), event dates, and locations when you inquire about our services or complete a booking form. We may also collect reference images or personal preferences you willingly provide to tailor our makeup services effectively.</p>
          
          <h3 className="text-lg font-serif text-primary">Use of Information</h3>
          <p>The information we collect is exclusively used to communicate with you regarding inquiries, finalize booking arrangements, customize our services to your specific requirements, and provide a seamless luxury bridal experience. We may occasionally send updates or related promotional content, from which you can easily unsubscribe at any given time.</p>
          
          <h3 className="text-lg font-serif text-primary">Data Protection and Sharing</h3>
          <p>Your personal information is stored robustly and is never sold, traded, or rented to third-party entities. We only share essential details with our internal team and trusted partners directly involved in delivering the booked services. Additionally, we may disclose information if required by law or to protect our rights.</p>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} title="Terms of Service">
        <div className="space-y-6">
          <p>Welcome to Makeovers by Niki. By securing our services, you agree to comply with the following terms, which represent a binding agreement between you and our studio.</p>
          
          <h3 className="text-lg font-serif text-primary">Bookings and Retainer</h3>
          <p>A non-refundable 50% retainer alongside a signed digital contract is required to officially secure your event date. Without these, dates remain available to other inquiring clients. The remaining balance must be paid in full prior to the commencement of services on the designated date.</p>
          
          <h3 className="text-lg font-serif text-primary">Cancellations</h3>
          <p>In the unlikely event that you must cancel the booking, the initial 50% retainer remains non-refundable as it secures our calendar and precludes us from accepting other bookings for that specific date. Cancellations made within 30 days of the event may incur additional fees dependent on the scope of the booking.</p>
          
          <h3 className="text-lg font-serif text-primary">Travel and Accommodation</h3>
          <p>For destination weddings outside of our primary location, all travel overheads, including round-trip airfare, ground transportation, safe hotel accommodations, and necessary visa fees for Niki and her team, must be covered by the client. These will be explicitly quoted during the confirmation phase.</p>
          
          <h3 className="text-lg font-serif text-primary">Media Rights</h3>
          <p>Unless formally opted out prior to the event, Makeovers by Niki reserves the right to capture photographs and videos of the makeup application and final look for promotional use on our official website, social media portfolios, and marketing collateral.</p>
        </div>
      </Modal>
    </footer>
  );
}
