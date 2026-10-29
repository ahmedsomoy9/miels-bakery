import { useState } from 'react';
import { ArrowDown, Instagram, Sparkles, Box, Camera, Check } from 'lucide-react';
import HeroDessertScene from './3d/HeroDessertScene';

interface HeroProps {
  onDiscoverClick: () => void;
  onExplodeClick: () => void;
}

export default function Hero({ onDiscoverClick, onExplodeClick }: HeroProps) {
  const [viewMode, setViewMode] = useState<'3d' | 'photo'>('3d');

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#FFFCF6] via-[#F7F1E7] to-[#F1E9DB]">
      {/* Delicate floating background ambient blobs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#E8DFD5]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] rounded-full bg-[#C8A783]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left z-10 pt-4 lg:pt-0">
            {/* Small Brand Intro Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#C8A783]/40 text-[#4B2E1F] text-xs font-typewriter uppercase tracking-widest w-fit mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A783]" />
              <span>A Little World of Sweetness · Dhaka</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-[#29180F] tracking-tight leading-[1.08] mb-6">
              Some things are <br />
              <span className="font-normal italic text-[#4B2E1F] pr-1">simply better</span> with chocolate.
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-[#60402D] font-normal leading-relaxed max-w-xl mb-8">
              From coffee-kissed tiramisu to deeply chocolatey brownie tubs, discover little batches of happiness made fresh daily in Dhaka, Bangladesh.
            </p>

            {/* Authentic Brand Features Pill Strip */}
            <div className="flex flex-wrap gap-2.5 text-xs font-typewriter text-[#765039] mb-8">
              <span className="px-3 py-1 bg-[#FFFCF6] rounded-md border border-[#C8A783]/30 shadow-2xs">
                ✦ a typewritten letter, on the house
              </span>
              <span className="px-3 py-1 bg-[#FFFCF6] rounded-md border border-[#C8A783]/30 shadow-2xs">
                ✦ delivered across dhaka
              </span>
              <span className="px-3 py-1 bg-[#FFFCF6] rounded-md border border-[#C8A783]/30 shadow-2xs">
                ✦ small-batch fresh
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onDiscoverClick}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#4B2E1F] hover:bg-[#29180F] text-[#FFFCF6] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Discover Our Desserts</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#C8A783] transition-transform group-hover:translate-y-1" />
              </button>

              <a
                href="https://www.instagram.com/miels.bakes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FFFCF6] hover:bg-[#FAF3E7] text-[#4B2E1F] border border-[#C8A783]/60 font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <Instagram className="w-4 h-4 text-[#765039]" />
                <span>Order on Instagram</span>
              </a>
            </div>

            {/* Delivery Note */}
            <div className="mt-6 flex items-center gap-2 text-xs text-[#765039] font-typewriter">
              <span className="w-1.5 h-1.5 rounded-full bg-[#765039]"></span>
              <span>Direct messages on @miels.bakes for custom gifting & pre-orders</span>
            </div>
          </div>

          {/* Right Column: 3D Scene / Authentic Visual Showcase */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* View Mode Switcher Pill */}
            <div className="mb-2 self-center sm:self-end z-20 flex items-center p-1 rounded-full bg-[#FFFCF6]/90 backdrop-blur-md border border-[#C8A783]/40 shadow-sm text-xs font-sans">
              <button
                onClick={() => setViewMode('3d')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                  viewMode === '3d'
                    ? 'bg-[#4B2E1F] text-[#FFFCF6] font-medium shadow-2xs'
                    : 'text-[#60402D] hover:text-[#29180F]'
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D Interactive</span>
              </button>
              <button
                onClick={() => setViewMode('photo')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                  viewMode === 'photo'
                    ? 'bg-[#4B2E1F] text-[#FFFCF6] font-medium shadow-2xs'
                    : 'text-[#60402D] hover:text-[#29180F]'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Authentic Photo</span>
              </button>
            </div>

            {/* Visual Container */}
            <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[540px] flex items-center justify-center">
              {viewMode === '3d' ? (
                <div className="w-full h-full">
                  <HeroDessertScene onToggleExploded={onExplodeClick} />
                </div>
              ) : (
                /* Authentic Real Photo with 3D Depth Card */
                <div className="group relative w-full h-full p-4 sm:p-6 bg-[#FFFCF6] rounded-3xl border border-[#C8A783]/40 shadow-2xl transition-all duration-500 hover:shadow-3xl flex flex-col justify-between">
                  {/* Top Bar with Authentic Typewritten Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8DFD5]">
                    <div>
                      <span className="font-editorial text-2xl text-[#29180F] font-semibold tracking-tight">tiramisu</span>
                      <p className="text-[11px] font-typewriter text-[#765039]">a typewritten letter, on the house</p>
                    </div>
                    <img
                      src="/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.10_PM_35e3e9f6.jpeg"
                      alt="miel's"
                      className="w-8 h-8 rounded-full border border-[#4B2E1F]/20 object-cover"
                    />
                  </div>

                  {/* Authentic Photography Asset */}
                  <div className="relative my-3 rounded-2xl overflow-hidden aspect-square border border-[#E8DFD5]">
                    <img
                      src="/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.11_PM__1__03c77957.jpeg"
                      alt="miel's bakery signature classic tiramisu in Dhaka"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#FFFCF6]/90 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-typewriter text-[#4B2E1F] border border-[#C8A783]/30 shadow-xs">
                      📍 delivered across dhaka
                    </div>
                  </div>

                  {/* Bottom Metadata */}
                  <div className="pt-2 flex items-center justify-between text-xs text-[#765039] font-typewriter">
                    <span>Small-batch mascarpone & espresso</span>
                    <span className="text-[#4B2E1F] font-semibold">@miels.bakes</span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
