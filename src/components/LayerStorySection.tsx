import { Sparkles, Layers } from 'lucide-react';
import ExplodedTiramisuScene from './3d/ExplodedTiramisuScene';

export default function LayerStorySection() {
  return (
    <section id="layers" className="py-24 sm:py-32 bg-[#29180F] text-[#F7F1E7] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] bg-[#4B2E1F]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[25rem] h-[25rem] bg-[#C8A783]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3D2316] border border-[#C8A783]/40 text-[#C8A783] text-xs font-typewriter uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-[#C8A783]" />
            <span>Interactive 3D Anatomy</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#FFFCF6] tracking-tight">
            Every layer tells a story.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#F7F1E7]/75 font-normal leading-relaxed">
            Drag the slider to explode the tiramisu in real time and inspect the delicate craft behind each element.
          </p>
        </div>

        {/* 3D Interactive Exploded Model View */}
        <ExplodedTiramisuScene />

      </div>
    </section>
  );
}
