import React from "react";
import { TeamMember } from "../types";

import founderImage from "../assets/team/founder.jpeg";
import womanBlack from "../assets/team/emp1.jpg";

const teamData: TeamMember[] = [
  {
    id: "t1",
    name: "Ayondi Rigters", // TODO
    role: "Makeup Artist",
    specialties: ["Glam Makeup", "Bridal Looks", "Braids & Styling"],
    imageUrl: womanBlack,
  },

];

const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="relative pt-24 md:pt-28 py-10 md:py-12 overflow-hidden scroll-mt-24 md:scroll-mt-28"
    >
      {/* soft glow */}
      <div className="absolute -top-24 right-0 h-72 w-72 bg-gold-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-72 w-72 bg-gold-500/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">
            Our People
          </span>

          <h1 className="font-display text-4xl md:text-5xl text-neutral-900 mt-3 mb-3">
            Meet the{" "}
            <span className="italic font-serif text-gold-600">Team</span>
          </h1>

          <div className="h-px w-20 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

          <p className="mt-4 max-w-2xl mx-auto text-sm text-neutral-600 leading-relaxed">
            The professionals behind Sparkle in Style — curated for quality,
            discipline, and real results.
          </p>
        </div>

        {/* Founder Feature Strip */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <img
              src={founderImage}
              alt="Founder of Sparkle in Style"
              loading="lazy"
              className="w-full h-[420px] object-cover rounded-3xl shadow-sm"
            />

            <div className="max-w-xl">
              <p className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                Founder
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-2">
                Ruby Pracht
              </h2>

              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-6">
                Founder &amp; Creative Director
              </p>

              <p className="text-neutral-600 leading-relaxed mb-4">
                Sparkle in Style was created with a clear vision: to build a space
                where beauty education and professional standards come together
                without compromise.
              </p>

              <p className="text-neutral-600 leading-relaxed">
                Every artist and mentor is selected not only for technical skill,
                but for professionalism, discipline, and the ability to guide
                others with confidence and care.
              </p>
            </div>
          </div>
        </div>

        {/* Team Intro */}
        <div className="text-center mb-8">
          <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">
            The Experts
          </span>

          <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mt-3 mb-3">
            Beauty teachers{" "}
            <span className="italic font-serif text-gold-600">&amp; Artists</span>
          </h2>

          <div className="h-px w-20 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </div>


{/* Lead Mentor Feature */}
<div className="mb-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* Text — LEFT */}
    <div className="max-w-xl order-2 lg:order-1">
      <p className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase mb-3">
        Lead Mentor
      </p>

      <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-2">
        Ayondi Rigters
      </h2>

      <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-6">
        Makeup Artist
      </p>

      <p className="text-neutral-600 leading-relaxed mb-4">
        Ayondi combines refined technique with real industry experience,
        guiding students toward confidence, professionalism, and excellence
        in every detail.
      </p>

      <p className="text-neutral-600 leading-relaxed">
        Her mentorship focuses on modern glam, bridal aesthetics, and the
        standards required in high-end beauty environments.
      </p>
    </div>

    {/* Image — RIGHT */}
    <div className="order-1 lg:order-2">
      <img
        src={womanBlack}
        alt="Ayondi Rigters"
        loading="lazy"
        className="w-full h-[420px] object-cover rounded-3xl shadow-sm"
      />
    </div>

  </div>
</div>


        {/* Closing line */}
        <div className="text-center mt-6 text-neutral-500 text-xs uppercase tracking-widest">
          Curated team • consistent quality • luxury standards
        </div>
      </div>
    </section>
  );
};

export default Team;
