import React from "react";
import { Facebook, Instagram, Sparkles, MapPin, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF7F5] text-neutral-800 pt-14 pb-10 border-t border-neutral-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* LEFT — BRAND + SOCIAL */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold-500" />
              <h3 className="font-display text-2xl tracking-tight text-neutral-900">
                Sparkle
                <span className="italic text-gold-600 font-light mx-1">in</span>
                Style
              </h3>
            </div>

            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Professional beauty education and luxury salon services — built on
              passion, skill, and creativity.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/sparkleinstyle.beautysalon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-500 hover:text-gold-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/SiSBeautySalon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-neutral-500 hover:text-gold-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT — CONTACT */}
          <div className="text-sm text-neutral-600 space-y-4">
            <h4 className="font-display text-lg text-neutral-900 mb-2">
              Contact
            </h4>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold-500 mt-0.5" />
              <div>
                <p>Sparkle in Style</p>
                <p>Zuidlarenstraat 57 / Unit 2.16</p>
                <p>2545 VP Den Haag</p>
                <p className="mt-1 text-xs text-neutral-500">
                  Beauty Salon: Speelzijde 8, 2543 XZ Den Haag
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold-500" />
              <a
                href="tel:+31615371014"
                className="hover:text-gold-600 transition"
              >
                06 15371014
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold-500" />
              <a
                href="mailto:info@sparkleinstyle.nl"
                className="hover:text-gold-600 transition"
              >
                info@sparkleinstyle.nl
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-neutral-200 mt-10 pt-6 text-xs text-neutral-500 text-center">
          © {new Date().getFullYear()} Sparkle in Style. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
