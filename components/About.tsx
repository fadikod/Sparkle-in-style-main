import React from "react";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

// Interior image
import interiorImg from "../assets/interior.jpg";

const About: React.FC = () => {
  const { t } = useTranslation();

  // ✅ SAFELY read highlights from i18n
  const rawHighlights = t("about.highlights", {
    returnObjects: true,
    defaultValue: [],
  });

  const highlights: string[] = Array.isArray(rawHighlights)
    ? rawHighlights
    : [];

  return (
    <section id="about" className="relative py-12 md:py-14">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -top-10 right-0 h-56 w-56 rounded-full bg-gold-500/6 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[-4rem] h-56 w-56 rounded-full bg-gold-500/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-center">

          {/* IMAGE */}
          <div className="lg:w-[45%] relative">
            <div className="relative z-10 max-w-md mx-auto lg:mx-0 overflow-hidden rounded-3xl border border-gold-500/25 bg-white shadow-md">
              <div className="aspect-[5/4] w-full relative">
                <img
                  src={interiorImg}
                  alt={t("about.imageAlt")}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/5" />
              </div>
            </div>

            {/* Offset decorative frames */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-gold-500/20 rounded-3xl z-0 hidden md:block" />
            <div className="absolute -top-5 -left-5 w-2/3 h-2/3 bg-white/50 rounded-3xl z-0 hidden md:block" />
          </div>

          {/* CONTENT */}
          <div className="lg:w-[55%] space-y-4">
            <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">
              {t("about.kicker")}
            </span>

            <h2 className="font-display text-4xl md:text-5xl text-neutral-900 leading-[1.05]">
              {t("about.titleLine1")}
              <br />
              {t("about.titleLine2Prefix")}{" "}
              <span className="italic text-gold-600 font-serif">
                {t("about.titleLine2Emphasis")}
              </span>
              .
            </h2>

            <p className="text-neutral-600 font-light leading-[1.6] text-base md:text-[1.05rem]">
              {t("about.paragraph1.suffix")}
            </p>

            <p className="text-neutral-600 leading-[1.6] text-sm md:text-base">
              <span className="font-medium text-neutral-900">
                {t("about.spaceLabel")}
              </span>{" "}
              {t("about.spaceText")}
            </p>

            {/* HIGHLIGHTS — SAFE, NEVER CRASHES */}
            {highlights.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-white border border-neutral-200 shadow-sm">
                      <Star className="w-4 h-4 text-gold-500" />
                    </div>
                    <span className="text-sm text-neutral-800 font-medium tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
