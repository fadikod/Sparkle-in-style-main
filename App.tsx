import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Download } from "lucide-react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BrochureModal from "./components/BrochureModal";
import Podcast from "./components/Podcast";

import TeamPage from "./pages/TeamPage";
import GalleryPage from "./pages/GalleryPage";
import EventsPage from "./pages/EventsPage";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFloat, setShowFloat] = useState(false);

  const location = useLocation();

  const openBrochure = () => setIsModalOpen(true);
  const closeBrochure = () => setIsModalOpen(false);

  // Floating brochure button visibility
  useEffect(() => {
    const handleScroll = () => setShowFloat(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Hash scroll support: /#services, /#academy, /#about, /#contact...
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);

    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-luxury-base overflow-x-hidden selection:bg-gold-200 selection:text-neutral-900">
      <Navigation />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <main>
              {/* HERO */}
              <section>
                <Hero />
              </section>

              {/* SERVICES */}
              <section className="bg-luxury-base">
                <div className="section-shell">
                  {/* ✅ Pass opener so the Services button can open the modal */}
                  <Services onOpenBrochure={openBrochure} />
                </div>
              </section>

              {/* TESTIMONIALS */}
              <section className="bg-luxury-warm border-y border-neutral-200/60">
                <div className="section-shell">
                  <Testimonials />
                </div>
              </section>

              {/* ABOUT */}
              <section className="bg-luxury-sand border-y border-neutral-200/40">
                <div className="section-shell">
                  <About />
                </div>
              </section>

              {/* CONTACT */}
              <section className="bg-luxury-base border-y border-neutral-200/60">
                <div className="section-shell">
                  <Contact />
                </div>
              </section>
            </main>
          }
        />

        {/* SUBPAGES */}
        <Route path="/team" element={<TeamPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/podcast" element={<Podcast />} />
      </Routes>

      <Footer />

      {/* ✅ Modal lives once at app level */}
      <BrochureModal isOpen={isModalOpen} onClose={closeBrochure} />

      {/* Floating Brochure Button */}
      <button
        onClick={openBrochure}
        className={`fixed bottom-8 right-8 z-40 bg-gold-500 text-white p-4 rounded-full shadow-2xl hover:bg-gold-600 transition-all duration-500 hover:scale-110 flex items-center gap-2 group ${
          showFloat ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        aria-label="Open brochure"
        type="button"
      >
        <Download className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-xs uppercase tracking-widest whitespace-nowrap">
          Get Brochure
        </span>
      </button>
    </div>
  );
};

export default App;
