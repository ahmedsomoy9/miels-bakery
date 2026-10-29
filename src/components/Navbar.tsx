import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { ambientSound } from '../utils/audio';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const state = ambientSound.toggle();
    setIsPlayingAudio(state);
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'The Menu', id: 'menu' },
    { name: 'Story', id: 'story' },
    { name: '3D Layers', id: 'layers' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Instagram', id: 'instagram' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F1E7]/92 backdrop-blur-md border-b border-[#C8A783]/30 py-3.5 shadow-sm'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark & Emblem */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            {/* Real Logo circular asset from attachment */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#4B2E1F]/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.10_PM_35e3e9f6.jpeg"
                alt="miel's bakery logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-editorial text-2xl sm:text-2xl font-semibold tracking-tight text-[#29180F] block leading-none">
                miel&apos;s
              </span>
              <span className="text-[10px] tracking-[0.2em] font-typewriter uppercase text-[#765039] block mt-0.5">
                bakery · dhaka
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative text-xs uppercase tracking-widest text-[#4B2E1F] hover:text-[#29180F] font-medium py-1 group transition-colors focus:outline-none"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#765039] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Ambient Sound Toggle */}
            <button
              onClick={handleToggleSound}
              className={`p-2 rounded-full border transition-all ${
                isPlayingAudio
                  ? 'bg-[#C8A783]/20 border-[#C8A783] text-[#4B2E1F]'
                  : 'border-[#C8A783]/40 text-[#765039] hover:bg-[#ebdcc8]/50'
              }`}
              title={isPlayingAudio ? 'Mute ambient cafe sound' : 'Play ambient cafe sound'}
            >
              {isPlayingAudio ? (
                <Volume2 className="w-4 h-4 text-[#4B2E1F] animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#765039]" />
              )}
            </button>

            {/* Order Now CTA to Instagram */}
            <a
              href="https://www.instagram.com/miels.bakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4B2E1F] hover:bg-[#29180F] text-[#FFFCF6] text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C8A783] transition-transform group-hover:rotate-6" />
              <span>Order Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleToggleSound}
              className="p-2 rounded-full border border-[#C8A783]/40 text-[#765039]"
              title="Toggle ambient audio"
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4 text-[#4B2E1F]" /> : <VolumeX className="w-4 h-4 text-[#765039]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#4B2E1F]/10 text-[#4B2E1F] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F7F1E7]/98 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8 md:hidden">
          <div className="flex flex-col gap-5 pt-4">
            <p className="text-[11px] font-typewriter uppercase tracking-widest text-[#765039]">
              Navigation
            </p>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left font-editorial text-3xl font-normal text-[#29180F] hover:text-[#765039] transition-colors py-1"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-[#C8A783]/30">
            <div className="flex items-center gap-2 text-xs font-typewriter text-[#765039]">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A783]" />
              <span>Small-batch desserts made fresh in Dhaka</span>
            </div>

            <a
              href="https://www.instagram.com/miels.bakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full bg-[#4B2E1F] text-[#FFFCF6] font-semibold text-xs tracking-wider uppercase shadow-md"
            >
              <Instagram className="w-4 h-4 text-[#C8A783]" />
              <span>Order on Instagram @miels.bakes</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
