import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const reviews = useMemo(
    () => [
      {
        id: 1,
        quote: t("testimonials.reviews.0.quote"),
        author: t("testimonials.reviews.0.author"),
        course: t("testimonials.reviews.0.course"),
      },
      {
        id: 2,
        quote: t("testimonials.reviews.1.quote"),
        author: t("testimonials.reviews.1.author"),
        course: t("testimonials.reviews.1.course"),
      },
      {
        id: 3,
        quote: t("testimonials.reviews.2.quote"),
        author: t("testimonials.reviews.2.author"),
        course: t("testimonials.reviews.2.course"),
      },
    ],
    [t]
  );

  return (
    // ❗ background comes from App.tsx
    <section id="stories" className="relative py-10 md:py-12 overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute -top-20 right-0 h-64 w-64 bg-gold-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-64 w-64 bg-gold-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">
            {t("testimonials.kicker")}
          </span>

          <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mt-3 mb-3">
            {t("testimonials.titlePrefix")}{" "}
            <span className="italic font-serif text-gold-600">
              {t("testimonials.titleEmphasis")}
            </span>
          </h2>

          <div className="h-px w-20 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-white/90 rounded-3xl p-6 shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-7 h-7 text-gold-500 opacity-80 mb-4" />

              <p className="text-neutral-700 italic leading-relaxed mb-5">
                “{review.quote}”
              </p>

              <div>
                <h3 className="font-display text-lg text-neutral-900">
                  {review.author}
                </h3>
                <p className="text-xs uppercase tracking-[0.18em] text-gold-600 mt-1">
                  {review.course}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Rating */}
        <div className="text-center mt-6 text-neutral-500 text-xs uppercase tracking-widest">
          {t("testimonials.rating")}
        </div>

        {/* Podcast teaser */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <p className="text-sm text-neutral-600 text-center">
            {t("testimonials.podcastTeaser")}
          </p>
          <Link
            to="/podcast"
            className="inline-flex items-center rounded-full border border-gold-300 bg-gold-50/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-800 hover:bg-gold-100 transition"
          >
            {t("testimonials.podcastCta")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
