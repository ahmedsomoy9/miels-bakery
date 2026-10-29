import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignatureMenu from './components/SignatureMenu';
import CinematicScrollStory from './components/CinematicScrollStory';
import BrandStory from './components/BrandStory';
import LayerStorySection from './components/LayerStorySection';
import WhyMielsStrip from './components/WhyMielsStrip';
import ReviewsSection from './components/ReviewsSection';
import InstagramGrid from './components/InstagramGrid';
import FinalOrderCTA from './components/FinalOrderCTA';
import Footer from './components/Footer';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [introFading, setIntroFading] = useState(false);

  // Quick elegant cinematic intro (finishes in ~1.8s or immediately on user click)
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIntroFading(true);
    }, 1400);

    const timer2 = setTimeout(() => {
      setIntroFinished(true);
    }, 1900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleSkipIntro = () => {
    setIntroFading(true);
    setTimeout(() => setIntroFinished(true), 300);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F1E7] text-[#29180F] selection:bg-[#C8A783] selection:text-[#29180F] relative">
      
      {/* Cinematic Intro Splash Screen */}
      {!introFinished && (
        <div
          onClick={handleSkipIntro}
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFCF6] cursor-pointer transition-opacity duration-700 ${
            introFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          aria-label="Click anywhere to enter miel's bakery"
        >
          {/* Subtle Cocoa Particle specks */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-[#765039]/40 animate-ping" />
            <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-[#C8A783]/40 animate-pulse" />
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-[#4B2E1F]/30" />
          </div>

          <div className="text-center p-6 space-y-4 max-w-sm">
            {/* Emblem */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full overflow-hidden border-2 border-[#C8A783]/40 shadow-lg animate-scaleUp">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.10_PM_35e3e9f6.jpeg"
                alt="miel's"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Wordmark */}
            <div className="space-y-1">
              <h1 className="font-editorial text-4xl sm:text-5xl font-light text-[#29180F] tracking-widest uppercase">
                miel&apos;s bakery
              </h1>
              <p className="text-[11px] font-typewriter tracking-[0.25em] uppercase text-[#765039]">
                SMALL-BATCH DESSERTS · DHAKA
              </p>
            </div>

            <p className="text-[10px] font-mono text-[#C8A783] pt-4">
              Click anywhere to enter
            </p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero with 3D Dessert Experience */}
        <Hero
          onDiscoverClick={() => handleNavigate('menu')}
          onExplodeClick={() => handleNavigate('layers')}
        />

        {/* 2. Signature Desserts Editorial Product Gallery */}
        <SignatureMenu />

        {/* 3. Cinematic Scroll Story: From Cocoa to Cream */}
        <CinematicScrollStory />

        {/* 4. Brand Story: Little batches. Lots of love. */}
        <BrandStory />

        {/* 5. Interactive 3D Exploded Layer Detail */}
        <LayerStorySection />

        {/* 6. Why Miel's — Elegant Motion Strip */}
        <WhyMielsStrip />

        {/* 7. Reviews: Sweet Words From You */}
        <ReviewsSection />

        {/* 8. Instagram Gallery: A little more of miel's */}
        <InstagramGrid />

        {/* 9. Final Order Section: The Chocolate World */}
        <FinalOrderCTA />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
