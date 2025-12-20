import React from "react";
import Gallery from "../components/Gallery";

const GalleryPage: React.FC = () => {
  return (
    <main>
      <section className="bg-luxury-base border-y border-neutral-200/60">
        <div className="section-shell">
          <div className="section-inner">
            <p className="section-eyebrow text-gold-600">Gallery</p>
            <h1 className="section-title">Our Work & Space</h1>
            <p className="section-body mt-2 max-w-2xl">
              A look into our studio, sessions, and results.
            </p>
          </div>

          <div className="mt-8">
            <Gallery />
          </div>
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
