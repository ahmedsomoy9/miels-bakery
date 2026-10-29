import { X, Instagram, Heart, Sparkles, Send, MapPin, Gift } from 'lucide-react';
import { DessertItem } from '../types/dessert';

interface DessertDetailModalProps {
  dessert: DessertItem | null;
  onClose: () => void;
}

export default function DessertDetailModal({ dessert, onClose }: DessertDetailModalProps) {
  if (!dessert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#29180F]/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#FFFCF6] rounded-3xl border border-[#C8A783]/50 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#29180F]/10 hover:bg-[#29180F]/20 text-[#29180F] transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Side */}
        <div className="w-full md:w-1/2 relative bg-[#F7F1E7] p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-[#E8DFD5]">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md border border-[#E8DFD5]">
            <img
              src={dessert.image}
              alt={dessert.name}
              className="w-full h-full object-cover"
            />
            {dessert.badge && (
              <div className="absolute top-3 left-3 bg-[#FFFCF6]/95 backdrop-blur-sm px-3 py-1 rounded-md text-[11px] font-typewriter text-[#4B2E1F] border border-[#C8A783]/40 shadow-xs">
                {dessert.badge}
              </div>
            )}
          </div>

          {dessert.typewrittenNote && (
            <div className="mt-4 w-full bg-[#FFFCF6] p-3 rounded-xl border border-[#C8A783]/30 text-center font-typewriter text-xs text-[#765039]">
              “{dessert.typewrittenNote}”
            </div>
          )}
        </div>

        {/* Details Side */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-typewriter uppercase tracking-widest text-[#765039]">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A783]" />
              <span>{dessert.category} · Small Batch</span>
            </div>

            <h3 className="text-3xl font-editorial font-medium text-[#29180F] leading-tight">
              {dessert.name}
            </h3>

            <p className="text-sm text-[#60402D] leading-relaxed">
              {dessert.description}
            </p>

            {/* Tasting Notes */}
            <div className="space-y-1.5 pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#4B2E1F] block">
                Tasting Notes:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {dessert.tastingNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#F7F1E7] border border-[#C8A783]/30 text-[#4B2E1F] font-typewriter"
                  >
                    • {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Craft details */}
            <div className="space-y-1 pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#4B2E1F] block">
                Batch Highlights:
              </span>
              <ul className="text-xs text-[#765039] space-y-1">
                {dessert.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A783]"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Direct Instagram Action */}
          <div className="pt-6 mt-4 border-t border-[#E8DFD5] space-y-3">
            <div className="flex items-center gap-2 text-[11px] text-[#765039] font-typewriter">
              <MapPin className="w-3.5 h-3.5 text-[#C8A783]" />
              <span>Dhaka, Bangladesh · DM for current batch availability</span>
            </div>

            <a
              href="https://www.instagram.com/miels.bakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#4B2E1F] hover:bg-[#29180F] text-[#FFFCF6] font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
            >
              <Instagram className="w-4 h-4 text-[#C8A783]" />
              <span>Ask About {dessert.name}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
