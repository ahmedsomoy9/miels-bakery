import { Heart, Sparkles, MapPin, Mail, Package } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#FFFCF6] relative overflow-hidden border-b border-[#C8A783]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Layered Depth */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#C8A783]/40 bg-[#F7F1E7] p-4 sm:p-5">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-[#E8DFD5]">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.28_PM_8e5c0500.jpeg"
                    alt="miel's bakery brownie tub and gift box"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Microcopy note beneath */}
                <div className="pt-4 flex items-center justify-between text-xs font-typewriter text-[#765039]">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#C8A783]" />
                    <span>a typewritten letter, on the house</span>
                  </div>
                  <span className="font-semibold text-[#4B2E1F]">@miels.bakes</span>
                </div>
              </div>

              {/* Overlapping Emblem Badge */}
              <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-xl border-2 border-[#FFFCF6] overflow-hidden bg-[#4B2E1F]">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.10_PM_35e3e9f6.jpeg"
                  alt="miel's bakery brandmark"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Pill Accent */}
              <div className="absolute -top-4 -left-4 bg-[#FFFCF6] px-4 py-2 rounded-full border border-[#C8A783]/40 shadow-md text-xs font-typewriter text-[#4B2E1F] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C8A783]" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F1E7] border border-[#C8A783]/40 text-[#4B2E1F] text-xs font-typewriter uppercase tracking-widest w-fit shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A783]" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#29180F] tracking-tight leading-[1.12]">
              Little batches. <br />
              <span className="font-normal italic text-[#4B2E1F]">Lots of love.</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#60402D] font-normal leading-relaxed">
              At <strong className="font-semibold text-[#29180F]">miel’s bakery</strong>, we believe the sweetest things are often the simplest. From coffee-kissed tiramisu to deeply chocolatey brownies, our desserts are made in small batches with care, bringing a little sweetness to everyday moments.
            </p>

            <blockquote className="border-l-2 border-[#C8A783] pl-4 sm:pl-6 py-1 text-base sm:text-lg font-editorial italic text-[#4B2E1F]">
              “Thoughtfully made. Beautifully enjoyed.”
            </blockquote>

            {/* Signature Brand Touches */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#F7F1E7]/70 border border-[#C8A783]/30">
                <div className="flex items-center gap-2.5 text-xs font-typewriter uppercase tracking-wider text-[#4B2E1F] font-semibold mb-1.5">
                  <Package className="w-4 h-4 text-[#C8A783]" />
                  <span>Artisanal Kraft Tubs</span>
                </div>
                <p className="text-xs text-[#60402D] leading-relaxed">
                  Baked directly in eco-conscious kraft tubs with parchment liners to seal in moisture and aroma.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F1E7]/70 border border-[#C8A783]/30">
                <div className="flex items-center gap-2.5 text-xs font-typewriter uppercase tracking-wider text-[#4B2E1F] font-semibold mb-1.5">
                  <Mail className="w-4 h-4 text-[#C8A783]" />
                  <span>Typewritten Letters</span>
                </div>
                <p className="text-xs text-[#60402D] leading-relaxed">
                  Every order includes a personal letter typed on a vintage typewriter, tucked into a kraft envelope.
                </p>
              </div>
            </div>

            {/* Location & Instagram Notice */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-typewriter text-[#765039]">
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#C8A783]" />
                <span>Made to order daily in Dhaka</span>
              </span>
              <span>•</span>
              <a 
                href="https://www.instagram.com/miels.bakes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4B2E1F] font-semibold hover:underline"
              >
                Follow our baking journey on Instagram →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
