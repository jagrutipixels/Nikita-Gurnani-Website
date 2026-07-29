import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import GoToTopButton from './GoToTopButton';
import WhatsAppButton from './WhatsAppButton';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <GoToTopButton />
      <WhatsAppButton />
    </div>
  );
}
