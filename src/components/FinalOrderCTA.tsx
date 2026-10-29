import { Instagram, Send, MapPin, Heart, Sparkles } from 'lucide-react';

export default function FinalOrderCTA() {
  return (
    <section className="py-28 sm:py-36 bg-[#20120B] text-[#F7F1E7] relative overflow-hidden">
      {/* Chocolate light bloom in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] rounded-full bg-[#4B2E1F]/50 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#C8A783]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual with warm bloom and tilt */}
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C8A783]/30 to-[#765039]/30 rounded-3xl blur-xl transition-all duration-700 group-hover:blur-2xl" />

              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden border border-[#4B2E1F] bg-[#29180F]/90 shadow-2xl p-5 backdrop-blur-md">
                <div className="rounded-2xl overflow-hidden aspect-square border border-[#4B2E1F]">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.11_PM__1__03c77957.jpeg"
                    alt="miel's bakery signature dessert"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-typewriter text-[#C8A783]">
                  <span>Small-batch dessert studio</span>
                  <span>📍 Dhaka, BD</span>
                </div>
              </div>

              {/* Little Stamp */}
              <div className="absolute -top-5 -right-5 w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#FFFCF6] border-2 border-[#C8A783] shadow-xl p-1 flex items-center justify-center rotate-6">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.10_PM_35e3e9f6.jpeg"
                  alt="miels logo stamp"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Closing Headline & Instagram DM Action */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 order-1 lg:order-2 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3D2316] border border-[#C8A783]/40 text-[#C8A783] text-xs font-typewriter uppercase tracking-widest w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A783]" />
              <span>Direct Ordering & Inquiries</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-[#FFFCF6] tracking-tight leading-[1.05]">
              Life’s sweeter with a little <span className="italic font-normal text-[#C8A783]">miel’s.</span>
            </h2>

            <p className="text-base sm:text-xl text-[#F7F1E7]/80 leading-relaxed font-light max-w-xl">
              Found your favourite? Send us a message and let’s make your next sweet moment happen.
            </p>

            {/* Ordering Instructions Box */}
            <div className="p-5 rounded-2xl bg-[#29180F]/80 border border-[#4B2E1F] max-w-xl space-y-2 text-xs font-typewriter text-[#C8A783]">
              <div className="flex items-center gap-2 font-semibold text-[#FFFCF6] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#C8A783]" />
                <span>Based in Dhaka, Bangladesh</span>
              </div>
              <p className="text-[#F7F1E7]/70 text-xs font-sans leading-relaxed">
                We take orders directly via Instagram direct message. Reach out to verify current batch availability, custom celebration gift-box arrangements, and delivery times across Dhaka.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/miels.bakes/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C8A783] hover:bg-[#dbb58e] text-[#20120B] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5 text-[#20120B] transition-transform group-hover:rotate-12" />
                <span>Let’s Order Something Sweet</span>
              </a>
            </div>

            <p className="text-xs font-typewriter text-[#C8A783]/70">
              * Direct messages handled with love · @miels.bakes
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
