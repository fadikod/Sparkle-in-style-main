import React from "react";
import { ArrowDown, CalendarClock, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 md:pt-32 pb-24 text-neutral-900 overflow-hidden"
    >
      {/* === BACKGROUND IMAGE === */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        {/* Strong left fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-50/100 via-neutral-50/96 to-neutral-50/35" />

        {/* Warm tone */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-cream/80 via-transparent to-luxury-sand/80" />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="max-w-2xl md:ml-0 lg:-ml-20 xl:-ml-35 space-y-8">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-neutral-50/90 px-5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-600 shadow-sm">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold-500/15">
              <Sparkles className="h-3 w-3 text-gold-500" />
            </span>
            {t("hero.breadcrumb")}
          </div>

          {/* Title */}
          <h1 className="font-serif font-semibold leading-[0.9] text-neutral-900">
            <span className="block text-[3.5rem] sm:text-[4.2rem] lg:text-[4.6rem]">
              {t("hero.titleLine1")}
            </span>
            <span className="mt-3 block text-[3rem] sm:text-[3.4rem] lg:text-[3.6rem] italic text-gold-500">
              {t("hero.titleLine2")}
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-[0.98rem] sm:text-base lg:text-lg leading-[1.55] text-neutral-700 max-w-xl mt-2">
            {t("hero.description")}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollToId("academy")}
              className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-neutral-900 shadow-md transition hover:bg-gold-400 hover:shadow-lg"
              type="button"
            >
              {t("hero.ctaPrograms")}
              <CalendarClock className="h-4 w-4" />
            </button>

            <button
              onClick={() => scrollToId("contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-gold-300 bg-neutral-50/90 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-neutral-700 shadow-sm transition hover:bg-neutral-50 hover:border-gold-400"
              type="button"
            >
              {t("hero.ctaIntake")}
            </button>
          </div>

          {/* Highlights */}
          <dl className="mt-7 grid gap-6 text-sm sm:grid-cols-3 text-neutral-600">
            <div>
              <dt className="font-semibold text-neutral-900 mb-1">
                {t("hero.highlights.teacherTitle")}
              </dt>
              <dd>{t("hero.highlights.teacherDesc")}</dd>
            </div>

            <div>
              <dt className="font-semibold text-neutral-900 mb-1">
                {t("hero.highlights.practicalTitle")}
              </dt>
              <dd>{t("hero.highlights.practicalDesc")}</dd>
            </div>

            <div>
              <dt className="font-semibold text-neutral-900 mb-1">
                {t("hero.highlights.flexibleTitle")}
              </dt>
              <dd>{t("hero.highlights.flexibleDesc")}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Scroll arrow */}
      <button
        type="button"
        onClick={() => scrollToId("services")}
        className="group absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-gold-300 bg-neutral-50/90 px-4 py-2 text-xs text-neutral-600 shadow-sm transition hover:bg-neutral-50"
      >
        <span className="flex items-center gap-2">
          {t("hero.scrollDown")}
          <ArrowDown className="h-3 w-3 text-gold-500 transition group-hover:translate-y-0.5" />
        </span>
      </button>
    </section>
  );
};

export default Hero;
