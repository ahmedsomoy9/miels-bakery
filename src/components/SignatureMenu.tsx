import { useState } from 'react';
import { ArrowUpRight, Instagram, Sparkles, Heart } from 'lucide-react';
import { DessertItem } from '../types/dessert';
import DessertDetailModal from './DessertDetailModal';

const SIGNATURE_DESSERTS: DessertItem[] = [
  {
    id: 'classic-tiramisu',
    name: 'Classic Tiramisu',
    tagline: 'Coffee-kissed layers & delicate mascarpone',
    category: 'Tiramisu',
    description: 'Coffee-kissed layers, delicate cream, and a generous dusting of cocoa. Prepared fresh in individual artisanal kraft tubs and served on speckled ceramic stoneware.',
    tastingNotes: ['Specialty espresso soak', 'Velvety Italian mascarpone', '100% Dutch dark cocoa', 'Light ladyfingers'],
    features: ['Made fresh in small batches', 'Includes a personalized typewritten letter', 'Delivered chilled across Dhaka'],
    image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.11_PM__1__03c77957.jpeg',
    isAuthenticPhoto: true,
    typewrittenNote: 'a typewritten letter, on the house',
    badge: 'delivered across dhaka',
    accentColor: '#765039',
  },
  {
    id: 'brownie-tub',
    name: 'Brownie Tub',
    tagline: 'Deep chocolate flavour with a rich, fudgy finish',
    category: 'Brownie',
    description: 'Deep chocolate flavour with a rich, fudgy finish. Baked in an artisanal kraft paper tub with parchment wrap, creating a crackly crinkled top and warm molten chocolate center.',
    tastingNotes: ['Fudgy molten chocolate interior', 'Crispy paper-thin meringue crust', 'Roasted cocoa nibs', 'Deep butter richness'],
    features: ['Baked right inside kraft paper tub', 'Gift-boxed with satin ribbon & envelope', 'Warm to enjoy gooey center'],
    image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.28_PM_8e5c0500.jpeg',
    isAuthenticPhoto: true,
    typewrittenNote: 'gift-boxed, with an envelope',
    badge: 'gift-boxed with envelope',
    accentColor: '#4B2E1F',
  },
  {
    id: 'fudgy-brownies',
    name: 'Fudgy Brownies',
    tagline: 'Rich, chocolatey little squares for sweetest cravings',
    category: 'Brownie',
    description: 'Rich, chocolatey little squares made for your sweetest cravings. Dense, chewy edges with a glossy chocolate finish and generous dark chocolate chunks throughout.',
    tastingNotes: ['Dark Belgian couverture chocolate', 'Chewy edges with glossy crust', 'Melted chocolate pockets', 'Balanced sweetness'],
    features: ['Hand-cut squares', 'Crafted with premium cocoa', 'Perfect for pairing with coffee'],
    image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.28_PM_8e5c0500.jpeg',
    isAuthenticPhoto: true,
    typewrittenNote: 'baked fresh daily in dhaka',
    badge: 'small batch favourite',
    accentColor: '#29180F',
  },
  {
    id: 'dessert-gift-box',
    name: 'Dessert Gift Box',
    tagline: 'A little box of happiness, ready to make someone’s day',
    category: 'Gift Box',
    description: 'A little box of happiness, ready to make someone’s day. A sophisticated chocolate-brown round kraft box wrapped with a silky satin ribbon, custom typewritten letter, and delicious small-batch desserts.',
    tastingNotes: ['Custom curated dessert assortment', 'Satin ribbon & wax seal finish', 'Personalized typewritten note', 'Keepsake packaging'],
    features: ['The perfect birthday or celebration gift', 'Custom messages written on vintage typewriter', 'Hand-delivered in Dhaka'],
    image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.28_PM_8e5c0500.jpeg',
    isAuthenticPhoto: true,
    typewrittenNote: 'gift-boxed, with an envelope',
    badge: 'signature gifting',
    accentColor: '#C8A783',
  },
];

export default function SignatureMenu() {
  const [selectedDessert, setSelectedDessert] = useState<DessertItem | null>(null);

  return (
    <section id="menu" className="py-24 bg-[#F7F1E7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#C8A783]/40 text-[#4B2E1F] text-xs font-typewriter uppercase tracking-widest mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A783]" />
            <span>The Signature Collection</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-editorial font-light text-[#29180F] tracking-tight leading-tight">
            Meet your next obsession.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#60402D] font-normal leading-relaxed">
            Small batches. Beautiful textures. A little moment of happiness.
          </p>
        </div>

        {/* Asymmetrical Editorial Product Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Card 1: Classic Tiramisu (Featured Large Card, 7 cols) */}
          <div className="md:col-span-7 group">
            <div 
              onClick={() => setSelectedDessert(SIGNATURE_DESSERTS[0])}
              className="cursor-pointer bg-[#FFFCF6] rounded-3xl p-6 sm:p-8 border border-[#C8A783]/40 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD5] mb-6">
                  <div>
                    <span className="text-xs font-typewriter uppercase text-[#765039]">Product 01</span>
                    <h3 className="font-editorial text-3xl sm:text-4xl font-medium text-[#29180F] mt-1">
                      {SIGNATURE_DESSERTS[0].name}
                    </h3>
                  </div>
                  <div className="p-3 rounded-full bg-[#F7F1E7] text-[#4B2E1F] group-hover:bg-[#4B2E1F] group-hover:text-[#FFFCF6] transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Visual */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-[#E8DFD5]">
                  <img
                    src={SIGNATURE_DESSERTS[0].image}
                    alt={SIGNATURE_DESSERTS[0].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFFCF6]/95 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-typewriter text-[#4B2E1F] border border-[#C8A783]/30">
                    {SIGNATURE_DESSERTS[0].badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#29180F]/85 backdrop-blur-sm px-3 py-1 rounded-md text-[11px] font-typewriter text-[#FFFCF6]">
                    Authentic Dhaka Bake
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#60402D] leading-relaxed mb-4">
                  {SIGNATURE_DESSERTS[0].description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DFD5] flex items-center justify-between">
                <span className="text-xs font-typewriter text-[#765039] italic">
                  “{SIGNATURE_DESSERTS[0].typewrittenNote}”
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4B2E1F] group-hover:underline">
                  View Tasting Notes →
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Brownie Tub (5 cols) */}
          <div className="md:col-span-5 group">
            <div 
              onClick={() => setSelectedDessert(SIGNATURE_DESSERTS[1])}
              className="cursor-pointer bg-[#FFFCF6] rounded-3xl p-6 sm:p-8 border border-[#C8A783]/40 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD5] mb-6">
                  <div>
                    <span className="text-xs font-typewriter uppercase text-[#765039]">Product 02</span>
                    <h3 className="font-editorial text-3xl font-medium text-[#29180F] mt-1">
                      {SIGNATURE_DESSERTS[1].name}
                    </h3>
                  </div>
                  <div className="p-3 rounded-full bg-[#F7F1E7] text-[#4B2E1F] group-hover:bg-[#4B2E1F] group-hover:text-[#FFFCF6] transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Visual */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 border border-[#E8DFD5]">
                  <img
                    src={SIGNATURE_DESSERTS[1].image}
                    alt={SIGNATURE_DESSERTS[1].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFFCF6]/95 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-typewriter text-[#4B2E1F] border border-[#C8A783]/30">
                    {SIGNATURE_DESSERTS[1].badge}
                  </div>
                </div>

                <p className="text-sm text-[#60402D] leading-relaxed mb-4">
                  {SIGNATURE_DESSERTS[1].description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DFD5] flex items-center justify-between">
                <span className="text-xs font-typewriter text-[#765039] italic">
                  “{SIGNATURE_DESSERTS[1].typewrittenNote}”
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4B2E1F] group-hover:underline">
                  View Tasting Notes →
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Fudgy Brownies (5 cols) */}
          <div className="md:col-span-5 group">
            <div 
              onClick={() => setSelectedDessert(SIGNATURE_DESSERTS[2])}
              className="cursor-pointer bg-[#FFFCF6] rounded-3xl p-6 sm:p-8 border border-[#C8A783]/40 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD5] mb-6">
                  <div>
                    <span className="text-xs font-typewriter uppercase text-[#765039]">Product 03</span>
                    <h3 className="font-editorial text-3xl font-medium text-[#29180F] mt-1">
                      {SIGNATURE_DESSERTS[2].name}
                    </h3>
                  </div>
                  <div className="p-3 rounded-full bg-[#F7F1E7] text-[#4B2E1F] group-hover:bg-[#4B2E1F] group-hover:text-[#FFFCF6] transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Visual */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 border border-[#E8DFD5] bg-[#29180F]/5">
                  <img
                    src={SIGNATURE_DESSERTS[2].image}
                    alt={SIGNATURE_DESSERTS[2].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFFCF6]/95 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-typewriter text-[#4B2E1F] border border-[#C8A783]/30">
                    {SIGNATURE_DESSERTS[2].badge}
                  </div>
                </div>

                <p className="text-sm text-[#60402D] leading-relaxed mb-4">
                  {SIGNATURE_DESSERTS[2].description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DFD5] flex items-center justify-between">
                <span className="text-xs font-typewriter text-[#765039] italic">
                  “{SIGNATURE_DESSERTS[2].typewrittenNote}”
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4B2E1F] group-hover:underline">
                  View Tasting Notes →
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Dessert Gift Box (7 cols) */}
          <div className="md:col-span-7 group">
            <div 
              onClick={() => setSelectedDessert(SIGNATURE_DESSERTS[3])}
              className="cursor-pointer bg-[#FFFCF6] rounded-3xl p-6 sm:p-8 border border-[#C8A783]/40 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD5] mb-6">
                  <div>
                    <span className="text-xs font-typewriter uppercase text-[#765039]">Product 04</span>
                    <h3 className="font-editorial text-3xl sm:text-4xl font-medium text-[#29180F] mt-1">
                      {SIGNATURE_DESSERTS[3].name}
                    </h3>
                  </div>
                  <div className="p-3 rounded-full bg-[#F7F1E7] text-[#4B2E1F] group-hover:bg-[#4B2E1F] group-hover:text-[#FFFCF6] transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Visual */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-[#E8DFD5]">
                  <img
                    src={SIGNATURE_DESSERTS[3].image}
                    alt={SIGNATURE_DESSERTS[3].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFFCF6]/95 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-typewriter text-[#4B2E1F] border border-[#C8A783]/30">
                    {SIGNATURE_DESSERTS[3].badge}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#FFFCF6]/95 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-typewriter text-[#765039]">
                    Includes custom vintage typewritten card
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#60402D] leading-relaxed mb-4">
                  {SIGNATURE_DESSERTS[3].description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DFD5] flex items-center justify-between">
                <span className="text-xs font-typewriter text-[#765039] italic">
                  “{SIGNATURE_DESSERTS[3].typewrittenNote}”
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4B2E1F] group-hover:underline">
                  View Gifting Details →
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Global Instagram Inquiry Note */}
        <div className="mt-16 text-center">
          <p className="text-xs font-typewriter text-[#765039] mb-4">
            * All desserts are prepared in limited batches. Current daily availability and seasonal flavors are confirmed via Instagram DM.
          </p>
          <a
            href="https://www.instagram.com/miels.bakes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4B2E1F] hover:bg-[#29180F] text-[#FFFCF6] font-semibold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md"
          >
            <Instagram className="w-4 h-4 text-[#C8A783]" />
            <span>Message @miels.bakes on Instagram</span>
          </a>
        </div>

      </div>

      {/* Detail Modal */}
      <DessertDetailModal
        dessert={selectedDessert}
        onClose={() => setSelectedDessert(null)}
      />
    </section>
  );
}
