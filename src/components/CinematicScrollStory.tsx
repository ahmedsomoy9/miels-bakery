import { useState } from 'react';
import { Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

const SCENES = [
  {
    step: '01',
    phase: 'The Chocolate',
    headline: 'Rich in every little detail.',
    description: 'We begin with deep, dark cocoa and melted chocolate — slow-folded to achieve an intensely fudgy crumb with glossy, crackled surfaces.',
    bgTone: 'from-[#20120B] via-[#29180F] to-[#1C0D07]',
    accentTone: '#C8A783',
    visualImage: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.28_PM_8e5c0500.jpeg',
    badge: 'Molten Fudge & Pure Cocoa',
    quote: 'Deep, bittersweet comfort baked into each tub.',
  },
  {
    step: '02',
    phase: 'The Cream',
    headline: 'Layers of little moments.',
    description: 'Fresh mascarpone is gently folded into an ethereal, velvety custard, lightly kissed by Madagascar vanilla and stacked against espresso-soaked ladyfingers.',
    bgTone: 'from-[#2A170F] via-[#351E13] to-[#20120B]',
    accentTone: '#E8DFD5',
    visualImage: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.11_PM__1__03c77957.jpeg',
    badge: 'Italian Mascarpone & Espresso',
    quote: 'Whipped to an airy, cloud-like consistency.',
  },
  {
    step: '03',
    phase: 'The Finishing Touch',
    headline: 'Made to make your day sweeter.',
    description: 'Finished with an even dusting of Dutch cocoa, tied with ribbon, and accompanied by a custom letter typed on an antique typewriter.',
    bgTone: 'from-[#1E0D06] via-[#29180F] to-[#20120B]',
    accentTone: '#C8A783',
    visualImage: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.11_PM__1__03c77957.jpeg',
    badge: 'Typewritten Letter on the House',
    quote: 'Handcrafted with love from our Dhaka kitchen.',
  },
];

export default function CinematicScrollStory() {
  const [activeScene, setActiveScene] = useState(0);

  const scene = SCENES[activeScene];

  return (
    <section className="relative py-28 bg-[#20120B] text-[#F7F1E7] overflow-hidden border-y border-[#4B2E1F]/50">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4B2E1F]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4B2E1F]/60 border border-[#C8A783]/40 text-[#C8A783] text-xs font-typewriter uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A783]" />
            <span>From Cocoa to Cream · The Process</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#FFFCF6] tracking-tight leading-tight">
            Made with care. <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#C8A783]">Remembered</span> with every bite.
          </h2>
        </div>

        {/* Scene Navigation Pill Strip */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex p-1.5 rounded-full bg-[#29180F] border border-[#4B2E1F] shadow-lg">
            {SCENES.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveScene(idx)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs font-typewriter uppercase tracking-wider transition-all duration-300 ${
                  activeScene === idx
                    ? 'bg-[#C8A783] text-[#20120B] font-bold shadow-md'
                    : 'text-[#F7F1E7]/70 hover:text-[#FFFCF6]'
                }`}
              >
                <span>{s.step}</span>
                <span className="hidden sm:inline">{s.phase}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Scene Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#29180F]/80 rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#4B2E1F]/60 shadow-2xl backdrop-blur-md">
          
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#4B2E1F] shadow-2xl group">
              <img
                src={scene.visualImage}
                alt={scene.phase}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20120B]/90 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-[#20120B]/85 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-[#C8A783]/40 text-xs font-typewriter text-[#C8A783]">
                {scene.badge}
              </div>

              {/* Bottom Quote inside Image */}
              <div className="absolute bottom-4 left-4 right-4 text-xs sm:text-sm font-editorial italic text-[#F7F1E7]/90 bg-[#20120B]/70 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                “{scene.quote}”
              </div>
            </div>
          </div>

          {/* Text & Phase Story (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-typewriter text-[#C8A783] uppercase tracking-widest">
                <span>Phase {scene.step}</span>
                <span>·</span>
                <span>{scene.phase}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-editorial font-normal text-[#FFFCF6] leading-tight">
                {scene.headline}
              </h3>

              <p className="text-sm sm:text-base text-[#F7F1E7]/80 leading-relaxed font-light">
                {scene.description}
              </p>

              {/* Authenticity Guarantee Card */}
              <div className="p-4 rounded-xl bg-[#20120B]/70 border border-[#4B2E1F] space-y-2 text-xs font-typewriter text-[#C8A783]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8A783]"></span>
                  <span className="font-semibold uppercase tracking-wider text-[#FFFCF6]">Dhaka Small-Batch Craft</span>
                </div>
                <p className="text-[#F7F1E7]/70 text-[11px] leading-normal font-sans">
                  Never mass-produced or frozen. Every single tub and tiramisu is baked to order and delivered across Dhaka.
                </p>
              </div>
            </div>

            {/* Stepper Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-[#4B2E1F]">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveScene((prev) => (prev > 0 ? prev - 1 : SCENES.length - 1))}
                  className="p-2.5 rounded-full bg-[#20120B] border border-[#4B2E1F] text-[#F7F1E7] hover:border-[#C8A783] hover:text-[#C8A783] transition-colors"
                  aria-label="Previous scene"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveScene((prev) => (prev < SCENES.length - 1 ? prev + 1 : 0))}
                  className="p-2.5 rounded-full bg-[#20120B] border border-[#4B2E1F] text-[#F7F1E7] hover:border-[#C8A783] hover:text-[#C8A783] transition-colors"
                  aria-label="Next scene"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <span className="text-xs font-mono text-[#C8A783]">
                {scene.step} / 03
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
