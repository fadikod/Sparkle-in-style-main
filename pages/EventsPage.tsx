import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Events from "../components/Events";

const EventsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="bg-luxury-warm">
      {/* Header */}
      <section className="border-b border-neutral-200/60">
        <div className="section-shell">
          <div className="section-inner">
            <p className="section-eyebrow text-gold-600">Academy</p>
            <h1 className="section-title">Workshops & Events</h1>
            <p className="section-body mt-2 max-w-2xl">
              Hands-on workshops, masterclasses, and special training moments at
              Sparkle in Style.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/#contact"
                className="px-6 py-3 rounded-full bg-gold-500 text-white hover:bg-gold-600 transition shadow-sm text-center"
              >
                Request Info
              </Link>

              <Link
                to="/gallery"
                className="px-6 py-3 rounded-full bg-white/70 hover:bg-white transition border border-gold-200 text-neutral-900 shadow-sm text-center"
              >
                See Our Space
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="border-b border-neutral-200/60">
        <div className="section-shell">
          <Events variant="page" />
        </div>
      </section>

      {/* Private */}
      <section>
        <div className="section-shell">
          <div className="section-inner">
            <div className="card-soft">
              <p className="section-eyebrow text-gold-600">Private groups</p>
              <h2 className="section-title">
                Custom training & private sessions
              </h2>
              <p className="section-body mt-2 max-w-2xl">
                Tell us what you need and we’ll tailor a session for you.
              </p>

              <div className="mt-6">
                <Link
                  to="/#contact"
                  className="inline-flex px-6 py-3 rounded-full bg-gold-500 text-white hover:bg-gold-600 transition shadow-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <p className="mt-6 text-xs text-neutral-500">
              Tip: extra sessions often open based on interest.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventsPage;
