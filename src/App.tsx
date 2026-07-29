import { useState, lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Experience = lazy(() => import('./pages/Experience'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Destination = lazy(() => import('./pages/Destination'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <BrowserRouter>
        <Suspense fallback={<div className="h-screen w-screen bg-brand-bg flex items-center justify-center"><span className="text-secondary tracking-widest text-sm uppercase">Loading...</span></div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="experience" element={<Experience />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="destination" element={<Destination />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
