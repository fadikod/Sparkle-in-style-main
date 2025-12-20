import React from "react";
import { Facebook, Instagram, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#FAF7F5] text-neutral-800 pt-10 pb-6 border-t border-neutral-200">
      <div className="container mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold-500" />
              <h3 className="font-display text-xl tracking-tight text-neutral-900">
                Sparkle
                <span className="italic text-gold-600 font-light mx-1">in</span>
                Style
              </h3>
            </div>

            <p className="text-neutral-600 text-sm leading-relaxed mb-4 max-w-sm">
              {t("footer.brandDescription")}
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-neutral-500 hover:text-gold-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-gold-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ACADEMY LINKS */}
          <div>
            <h4 className="font-display text-base mb-3 text-neutral-900">
              {t("footer.academyTitle")}
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a href="#" className="hover:text-gold-600 transition-colors">
                  {t("footer.academyLinks.makeup")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-600 transition-colors">
                  {t("footer.academyLinks.hair")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-600 transition-colors">
                  {t("footer.academyLinks.nails")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-600 transition-colors">
                  {t("footer.academyLinks.admissions")}
                </a>
              </li>
            </ul>
          </div>

          {/* SALON LINKS */}
          <div>
            <h4 className="font-display text-base mb-3 text-neutral-900">
              {t("footer.salonTitle")}
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a href="#" className="hover:text-gold-600 transition-colors">
                  {t("footer.salonLinks.book")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-600 transition-colors">
                  {t("footer.salonLinks.menu")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-600 transition-colors">
                  {t("footer.salonLinks.giftCards")}
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-display text-base mb-3 text-neutral-900">
              {t("footer.contactTitle")}
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>Zuidlarenstraat 57, Unit 2.16</li>
              <li>2545 VP Den Haag</li>
              <li>06-15371014</li>
              <li>
                <a
                  href="mailto:info@sparkleinstyle.nl"
                  className="hover:text-gold-600 transition-colors"
                >
                  info@sparkleinstyle.nl
                </a>
              </li>
              <li>
                <a
                  href="https://www.sparkleinstyle.nl"
                  className="hover:text-gold-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.sparkleinstyle.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="text-center text-xs text-neutral-500">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
