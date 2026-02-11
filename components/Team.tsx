import React from "react";
import { useTranslation } from "react-i18next";
import { TeamMember } from "../types";

import founderImage from "../assets/team/founder.jpeg";
import womanBlack from "../assets/team/emp1.jpg";

const teamData: TeamMember[] = [
  {
    id: "t1",
    name: "Ayondi Rigters",
    role: "Makeup Artist",
    specialties: ["Glam Makeup", "Bridal Looks", "Braids & Styling"],
    imageUrl: womanBlack,
  },
];

const Team: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="team"
      className="relative pt-24 md:pt-28 py-10 md:py-12 overflow-hidden scroll-mt-24 md:scroll-mt-28"
    >
      {/* soft glow */}
      <div className="absolute -top-24 right-0 h-72 w-72 bg-gold-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-72 w-72 bg-gold-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-10">
          <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">
            {t("team.kicker")}
          </span>

          <h1 className="font-display text-4xl md:text-5xl text-neutral-900 mt-3 mb-3">
            {t("team.titlePrefix")}{" "}
            <span className="italic font-serif text-gold-600">
              {t("team.titleEmphasis")}
            </span>
          </h1>

          <div className="h-px w-20 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

          <p className="mt-4 max-w-2xl mx-auto text-sm text-neutral-600 leading-relaxed">
            {t("team.description")}
          </p>
        </div>

        {/* ================= FOUNDER ================= */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <img
              src={founderImage}
              alt={t("team.founder.imageAlt")}
              loading="lazy"
              className="w-full h-[420px] object-cover rounded-3xl shadow-sm"
            />

            <div className="max-w-xl">
              <p className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                {t("team.founder.kicker")}
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-2">
                {t("team.founder.name")}
              </h2>

              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-6">
                {t("team.founder.role")}
              </p>

              <p className="text-neutral-600 leading-relaxed mb-4">
                {t("team.founder.paragraph1")}
              </p>

              <p className="text-neutral-600 leading-relaxed">
                {t("team.founder.paragraph2")}
              </p>
            </div>
          </div>
        </div>

        {/* ================= TEAM INTRO ================= */}
        <div className="text-center mb-8">
          <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">
{t("team.kicker")}

          </span>

          <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mt-3 mb-3">
{t("team.titlePrefix")}{" "}
<span className="text-gold-600 italic">
  {t("team.titleEmphasis")}
</span>

          </h2>

          <div className="h-px w-20 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </div>

        {/* ================= LEAD MENTOR ================= */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* TEXT */}
            <div className="max-w-xl order-2 lg:order-1">
              <p className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                {t("team.leadMentor.kicker")}
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-2">
                {t("team.leadMentor.name")}
              </h2>

              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-6">
                {t("team.leadMentor.role")}
              </p>

              <p className="text-neutral-600 leading-relaxed mb-4">
                {t("team.leadMentor.paragraph1")}
              </p>

              <p className="text-neutral-600 leading-relaxed">
                {t("team.leadMentor.paragraph2")}
              </p>
            </div>

            {/* IMAGE */}
            <div className="order-1 lg:order-2">
              <img
                src={womanBlack}
                alt={t("team.leadMentor.imageAlt")}
                loading="lazy"
                className="w-full h-[420px] object-cover rounded-3xl shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* ================= CLOSING ================= */}
        <div className="text-center mt-6 text-neutral-500 text-xs uppercase tracking-widest">
          {t("team.closing")}
        </div>
      </div>
    </section>
  );
};

export default Team;
