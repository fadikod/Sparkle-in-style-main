import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

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
  const { ready } = useTranslation();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFloat, setShowFloat] = useState(false);

  const openBrochure = () => setIsModalOpen(true);
  const closeBrochure = () => setIsModalOpen(false);

  // ⛔ VERY IMPORTANT: wait for i18n before rendering anything
  if (!ready) {
    return null; // or loader later
  }

  // Floating brochure button visibility
  useEffect(() => {
    const handleScroll = () => setShowFloat(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hash scroll support: /#services, /#about, etc.
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);

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
              <section id="hero">
                <Hero />
              </section>

              <section id="services" className="bg-luxury-base">
                <Services onOpenBrochure={openBrochure} />
              </section>

              <section className="bg-luxury-warm border-y border-neutral-200/60">
                <Testimonials />
              </section>

              <section
                id="about"
                className="bg-luxury-sand border-y border-neutral-200/40"
              >
                <div className="section-shell">
                  <About />
                </div>
              </section>

              <section
                id="contact"
                className="bg-luxury-base border-y border-neutral-200/60"
              >
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

      {/* Brochure Modal */}
      <BrochureModal isOpen={isModalOpen} onClose={closeBrochure} />


    </div>
  );
};

export default App;
