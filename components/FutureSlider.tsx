import React from "react";
import { Link } from "react-router-dom";

import nail from "../assets/future/nagel.jpg";
import hair from "../assets/future/kapper.jpg";
import lash from "../assets/future/lashbrow.jpg";
import makeup from "../assets/future/makeup.jpg";
import fashion from "../assets/future/fashion.jpg";
import ondernemen from "../assets/future/ondernemen.jpg";

const items = [
  { title: "Nagelstyliste", image: nail, link: "/opleidingen/nagel" },
  { title: "Kapper", image: hair, link: "/opleidingen/haar" },
  { title: "Lash & Brow", image: lash, link: "/opleidingen/lash-brow" },
  { title: "Make-up Artist", image: makeup, link: "/opleidingen/makeup" },
  { title: "Fashion Stylist", image: fashion, link: "/opleidingen/fashion" },
  { title: "Ondernemen", image: ondernemen, link: "/opleidingen/ondernemen" },
];

const FutureSlider: React.FC = () => {
  return (
    <section className="bg-[#f7f3ee] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-center font-serif text-3xl md:text-4xl text-neutral-800">
          Jouw toekomst bij Sparkle in Style
        </h2>
        <p className="mb-10 text-center text-neutral-600 max-w-2xl mx-auto">
          Ontdek welke richting bij jou past en welke mogelijkheden er voor jou
          openstaan.
        </p>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="group relative min-w-[260px] overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-xl text-white drop-shadow">
                  {item.title}
                </h3>
                <span className="mt-1 inline-block text-sm text-white/80">
                  Bekijk opleiding →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSlider;
