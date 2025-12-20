import React from "react";
import { TeamMember } from "../types";

import founderImage from "../assets/team/founder.jpeg"; // <-- put woman in red here
import womanBlack from "../assets/team/emp1.jpg";      // woman in black

const teamData: TeamMember[] = [
  {
    id: "t1",
    name: "Employee Name", // <-- replace with her real name
    role: "Makeup Artist", // <-- adjust role
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
    <section id="team" className="relative section-shell">
      {/* soft decorative glow */}
      <div className="pointer-events-none absolute -top-10 -left-16 h-40 w-40 rounded-full bg-gold-500/6 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-gold-500/5 blur-3xl" />

      <div className="section-inner relative z-10">
        {/* Page Header */}
        <div className="mb-10 max-w-2xl">
          <span className="section-eyebrow">Our People</span>

          <h1 className="section-title font-display">
            Meet the{" "}
            <span className="italic font-serif text-gold-600">Team</span>
          </h1>

          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-4" />

          <p className="section-body">
            The professionals behind Sparkle in Style — selected for skill,
            standards, and real results.
          </p>
        </div>

        {/* Founder Section (image LEFT) */}
        <div className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <img
                src={founderImage}
                alt="Founder of Sparkle in Style"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-3xl object-cover aspect-[4/5] shadow-sm"
              />
            </div>

            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-gold-600 mb-4">
                Founder
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-2">
                Founder Name
              </h2>

              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 mb-6">
                Founder &amp; Creative Director
              </p>

              <p className="text-neutral-600 leading-relaxed mb-4">
                Sparkle in Style was created with a clear vision: to build a
                space where beauty education and professional standards come
                together without compromise.
              </p>

              <p className="text-neutral-600 leading-relaxed">
                Every artist and mentor within the academy is selected not only
                for technical skill, but for professionalism, discipline, and
                the ability to guide others with confidence and care.
              </p>
            </div>
          </div>
        </div>

        {/* Small philosophy divider */}
        <div className="mb-10 max-w-3xl">
          <p className="text-neutral-600 leading-relaxed">
            We keep the team intentionally curated — so every client and student
            receives consistent quality, care, and results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mb-6 max-w-2xl">
          <span className="section-eyebrow">The Experts</span>

          <h2 className="section-title font-display">
            Mentors{" "}
            <span className="italic font-serif text-gold-600">&amp; Artists</span>
          </h2>

          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-4" />

          <p className="section-body">
            Experienced professionals from the beauty industry — practical,
            involved, and focused on real salon results.
          </p>
        </div>

        <div className="card-grid-3">
          {teamData.map((member) => (
            <article
              key={member.id}
              className="group card-soft-tight overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="pt-3 pb-4 px-3 md:px-4">
                <h3 className="font-display text-lg md:text-xl text-neutral-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gold-600 font-medium text-[11px] tracking-[0.18em] uppercase mb-3">
                  {member.role}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 border border-neutral-200/70 rounded-full text-[10px] uppercase tracking-[0.16em] text-neutral-500 bg-luxury-cream/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
