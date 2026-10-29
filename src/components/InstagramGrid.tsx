import { Instagram, ArrowUpRight } from 'lucide-react';

const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.11_PM__1__03c77957.jpeg',
    caption: 'tiramisu · a typewritten letter, on the house · delivered across dhaka',
    category: 'Tiramisu',
    span: 'md:col-span-4 md:row-span-2',
    aspect: 'aspect-square',
  },
  {
    id: 2,
    image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.28_PM_8e5c0500.jpeg',
    caption: 'brownie tub · gift-boxed, with an envelope · freshly baked fudgy center',
    category: 'Brownie Tub',
    span: 'md:col-span-4 md:row-span-1',
    aspect: 'aspect-square',
  },
  {
    id: 3,
    image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.10_PM_35e3e9f6.jpeg',
    caption: 'miel’s bakery · a little sweetness, made with love in dhaka',
    category: 'Identity',
    span: 'md:col-span-4 md:row-span-1',
    aspect: 'aspect-square',
  },
  {
    id: 4,
    image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.28_PM_8e5c0500.jpeg',
    caption: 'celebration ready · signature round kraft gift box with satin ribbon',
    category: 'Gifting',
    span: 'md:col-span-4 md:row-span-1',
    aspect: 'aspect-square',
  },
  {
    id: 5,
    image: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_11.03.11_PM__1__03c77957.jpeg',
    caption: 'speckled ceramic dish & fresh roasted coffee beans',
    category: 'Craft',
    span: 'md:col-span-4 md:row-span-1',
    aspect: 'aspect-square',
  },
];

export default function InstagramGrid() {
  return (
    <section id="instagram" className="py-24 bg-[#F7F1E7] border-b border-[#C8A783]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-typewriter uppercase tracking-widest text-[#765039] mb-3">
              <Instagram className="w-3.5 h-3.5 text-[#C8A783]" />
              <span>@miels.bakes · Daily Stories</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-editorial font-light text-[#29180F] tracking-tight">
              A little more of miel’s.
            </h2>
          </div>

          <a
            href="https://www.instagram.com/miels.bakes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFFCF6] hover:bg-[#FAF3E7] text-[#4B2E1F] border border-[#C8A783]/50 font-semibold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-[#765039]" />
            <span>Follow @miels.bakes</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#765039]" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/miels.bakes/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C8A783]/40 bg-[#FFFCF6] shadow-sm hover:shadow-xl transition-all duration-500 ${post.span}`}
            >
              <div className={`w-full ${post.aspect} overflow-hidden relative`}>
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-[#29180F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-[#FFFCF6]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-typewriter uppercase tracking-wider text-[#C8A783]">
                      {post.category}
                    </span>
                    <Instagram className="w-4 h-4 text-[#C8A783]" />
                  </div>

                  <div>
                    <p className="text-xs font-typewriter leading-relaxed line-clamp-3">
                      {post.caption}
                    </p>
                    <span className="inline-block mt-2 text-[10px] font-mono text-[#C8A783] underline">
                      View on Instagram →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Microcopy */}
        <div className="mt-8 text-center">
          <p className="text-xs font-typewriter text-[#765039]">
            Follow our Instagram @miels.bakes for new batch announcements, behind the scenes, and special holiday dessert drops in Dhaka.
          </p>
        </div>

      </div>
    </section>
  );
}
