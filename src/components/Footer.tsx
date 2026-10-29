import { Instagram, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C0D07] text-[#F7F1E7] border-t border-[#4B2E1F]/50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#4B2E1F]/60 items-start">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C8A783]/40">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.10_PM_35e3e9f6.jpeg"
                  alt="miel's bakery logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-editorial text-3xl font-semibold text-[#FFFCF6] tracking-tight">
                  miel&apos;s bakery
                </h3>
                <span className="text-[10px] font-typewriter uppercase tracking-[0.2em] text-[#C8A783] block">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>

            <p className="text-sm font-editorial italic text-[#C8A783] text-lg">
              “A little sweetness, made with love.”
            </p>

            <p className="text-xs text-[#F7F1E7]/70 font-light max-w-sm leading-relaxed">
              Small-batch desserts handcrafted fresh in Dhaka. Featuring creamy tiramisu in artisanal kraft tubs, fudgy brownie tubs, and personalized gift boxes.
            </p>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-typewriter uppercase tracking-widest text-[#C8A783] block mb-2">
              Explore
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wider text-[#F7F1E7]/80">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#C8A783] transition-colors focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#C8A783] transition-colors focus:outline-none"
                >
                  The Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-[#C8A783] transition-colors focus:outline-none"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('layers')}
                  className="hover:text-[#C8A783] transition-colors focus:outline-none"
                >
                  3D Layers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-[#C8A783] transition-colors focus:outline-none"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('instagram')}
                  className="hover:text-[#C8A783] transition-colors focus:outline-none"
                >
                  Instagram
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Ordering & Location (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-typewriter uppercase tracking-widest text-[#C8A783] block mb-2">
              Orders & Inquiries
            </span>
            <a
              href="https://www.instagram.com/miels.bakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFFCF6] hover:text-[#C8A783] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#C8A783]" />
              <span>@miels.bakes on Instagram</span>
            </a>
            <p className="text-xs text-[#F7F1E7]/60 font-typewriter pt-1">
              Delivered across Dhaka, Bangladesh
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#C8A783] hover:text-[#FFFCF6] transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-typewriter text-[#F7F1E7]/60">
          <p>© {currentYear} miel&apos;s bakery. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-xs">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#C8A783] fill-[#C8A783]" />
            <span>in Dhaka, Bangladesh</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
