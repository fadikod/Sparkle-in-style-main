// src/components/Events.tsx
import React from "react";

type EventsProps = {
  variant?: "home" | "page";
};

const Events: React.FC<EventsProps> = ({ variant = "home" }) => {
  return (
    <section
      id={variant === "home" ? "events" : undefined}
      className={`border-neutral-200/60 ${
        variant === "home"
          ? "bg-[#fdf7f0] py-14 md:py-20 border-t scroll-mt-28"
          : "bg-transparent py-10 md:py-14"
      }`}
    >
      <div className="mx-auto max-w-5xl px-4">
        {variant === "home" && (
          <>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-600 mb-2">
              Upcoming Events
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-4">
              Workshops &amp; Masterclasses
            </h2>
            <p className="text-neutral-600 max-w-2xl mb-10">
              Join our beauty events to learn new techniques, meet our trainers,
              and experience Sparkle in Style from the inside.
            </p>
          </>
        )}

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Event 1 */}
          <article className="rounded-2xl bg-white shadow-sm border border-neutral-100 p-5 flex flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold-600 mb-1">
                18 Jan · The Hague
              </p>
              <h3 className="font-semibold text-neutral-900 mb-1">
                Bridal Makeup Masterclass
              </h3>
              <p className="text-[11px] inline-flex rounded-full bg-gold-50 px-2 py-1 text-gold-700 uppercase tracking-[0.16em] mb-3">
                Workshop
              </p>
              <p className="text-sm text-neutral-600 mb-4">
                Learn long-lasting bridal looks with our senior artists.
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-xs text-neutral-500">Few spots left</span>
              <button className="font-medium text-gold-700 hover:text-gold-800">
                Reserve →
              </button>
            </div>
          </article>

          {/* Event 2 */}
          <article className="rounded-2xl bg-white shadow-sm border border-neutral-100 p-5 flex flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold-600 mb-1">
                25 Jan · The Hague
              </p>
              <h3 className="font-semibold text-neutral-900 mb-1">
                Lash Lift & Brow Lamination
              </h3>
              <p className="text-[11px] inline-flex rounded-full bg-gold-50 px-2 py-1 text-gold-700 uppercase tracking-[0.16em] mb-3">
                Professional Training
              </p>
              <p className="text-sm text-neutral-600 mb-4">
                Hands-on salon-ready lash & brow techniques.
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-xs text-neutral-500">
                Certificate included
              </span>
              <button className="font-medium text-gold-700 hover:text-gold-800">
                Join →
              </button>
            </div>
          </article>

          {/* Event 3 */}
          <article className="rounded-2xl bg-white shadow-sm border border-neutral-100 p-5 flex flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold-600 mb-1">
                2 Feb · Evening
              </p>
              <h3 className="font-semibold text-neutral-900 mb-1">
                Model Night · Open Day
              </h3>
              <p className="text-[11px] inline-flex rounded-full bg-gold-50 px-2 py-1 text-gold-700 uppercase tracking-[0.16em] mb-3">
                Open Day
              </p>
              <p className="text-sm text-neutral-600 mb-4">
                Meet the team and book model treatments.
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-xs text-neutral-500">
                Limited spots
              </span>
              <button className="font-medium text-gold-700 hover:text-gold-800">
                Attend →
              </button>
            </div>
          </article>
        </div>

        {variant === "home" && (
          <p className="mt-8 text-xs text-neutral-500">
            Looking for a private or custom event?{" "}
            <span className="text-gold-700 font-medium">
              Contact us to plan one.
            </span>
          </p>
        )}
      </div>
    </section>
  );
};

export default Events;
