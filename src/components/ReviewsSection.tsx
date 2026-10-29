import { Heart, Instagram, MessageCircle, Sparkles } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#FFFCF6] relative border-b border-[#C8A783]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F1E7] border border-[#C8A783]/40 text-[#4B2E1F] text-xs font-typewriter uppercase tracking-widest mb-6">
          <Heart className="w-3.5 h-3.5 text-[#C8A783]" />
          <span>Sweet Words From You</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#29180F] tracking-tight mb-8">
          Your words mean the world.
        </h2>

        {/* Core Message Card */}
        <div className="relative bg-[#F7F1E7] rounded-3xl p-8 sm:p-14 border border-[#C8A783]/50 shadow-sm max-w-3xl mx-auto my-8">
          <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#FFFCF6] flex items-center justify-center text-[#765039] border border-[#C8A783]/40">
            <MessageCircle className="w-6 h-6 text-[#765039]" />
          </div>

          <p className="font-editorial text-2xl sm:text-3xl lg:text-4xl italic text-[#4B2E1F] leading-snug mb-6">
            “Your kind words make our little bakery’s day.”
          </p>

          <p className="text-sm sm:text-base text-[#60402D] leading-relaxed max-w-xl mx-auto font-light">
            Every direct message, heartfelt gift recipient reaction, and sweet review we receive on Instagram keeps our ovens warm and our hearts full. Read authentic customer stories, unboxing reactions, and reviews on our Instagram highlights.
          </p>

          {/* Typewritten note footer */}
          <div className="mt-8 pt-6 border-t border-[#C8A783]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-typewriter text-[#765039]">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A783]" />
              <span>Real stories on @miels.bakes highlights</span>
            </span>
            <span className="text-[#4B2E1F] font-semibold">Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Direct CTA */}
        <div className="mt-8">
          <a
            href="https://www.instagram.com/miels.bakes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#4B2E1F] hover:bg-[#29180F] text-[#FFFCF6] font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Instagram className="w-4 h-4 text-[#C8A783]" />
            <span>Visit Our Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
}
