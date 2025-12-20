import React from 'react';
import { GalleryImage } from '../types';

const images: GalleryImage[] = [
  {
    id: '1',
    category: 'hair',
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop',
    title: 'Golden Hour Highlights',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: '2',
    category: 'nails',
    url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop',
    title: 'Minimalist Nail Art',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '3',
    category: 'makeup',
    url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop',
    title: 'Bridal Elegance',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '4',
    category: 'hair',
    url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop',
    title: 'Editorial Cut',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: '5',
    category: 'academy',
    url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop',
    title: 'Academy Training',
    span: 'col-span-1 row-span-1',
  },
];

const Gallery: React.FC = () => {
  return (
    // ❗ Removed bg-[#FAF5F4] so App.tsx controls the background
    <section id="gallery" className="relative py-12 overflow-hidden">

      {/* soft gold glow */}
      <div className="pointer-events-none absolute -top-10 left-0 h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-3rem] h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div>
            <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase block mb-1">
              Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-2">
              Visual{' '}
              <span className="italic text-gold-600 font-serif">Impression</span>
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
          </div>

          <p className="text-neutral-500 font-light text-xs sm:text-sm tracking-wide max-w-xs md:text-right">
            A curated selection of academy and salon work.
          </p>
        </div>

        {/* More compact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[170px] gap-3">
          {images.map((img) => (
            <article
              key={img.id}
              className={`relative group overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50/60 shadow-sm hover:shadow-lg transition-all duration-500 ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover:opacity-40 transition-opacity duration-400" />

              <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <h3 className="font-display text-sm text-neutral-900 italic">
                    {img.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Instagram link */}
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-gold-600 transition-colors border-b border-transparent hover:border-gold-600 pb-0.5"
          >
            View Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
