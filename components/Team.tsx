import React from "react";
import { TeamMember } from "../types";

import founderImage from "../assets/team/founder.jpeg";
import womanBlack from "../assets/team/emp1.jpg";

const teamData: TeamMember[] = [
  {
    id: "t1",
    name: "Employee Name", // TODO
    role: "Makeup Artist",
    specialties: ["Glam Makeup", "Bridal Looks", "Braids & Styling"],
    imageUrl: womanBlack,
  },
  {
    id: "t2",
    name: "Milan de Vries",
    role: "Hair & Styling",
    specialties: ["Updos", "Salon Etiquette", "Client Advisory"],
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "t3",
    name: "Noor Alami",
    role: "Nail Styling",
    specialties: ["Gel Polish", "Acrylics", "Hygiene Protocol"],
    imageUrl:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=1200&q=80",
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
                Founder Name
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
            Mentors{" "}
            <span className="italic font-serif text-gold-600">&amp; Artists</span>
          </h2>

          <div className="h-px w-20 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <article
              key={member.id}
              className="bg-white/90 rounded-3xl p-6 shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl mb-5">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-60 object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              <h3 className="font-display text-lg text-neutral-900">
                {member.name}
              </h3>

              <p className="text-xs uppercase tracking-[0.18em] text-gold-600 mt-1">
                {member.role}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {member.specialties.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-neutral-200/70 rounded-full text-[10px] uppercase tracking-[0.16em] text-neutral-600 bg-gold-50/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
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
