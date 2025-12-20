import React, { useMemo, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import sisLogo from "../assets/1.png";

const navLinkClass = "hover:text-gold-500 transition";
const activeNavLinkClass = "text-gold-600";

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const currentLang = useMemo(() => {
    const lng = (i18n.language || "en").toLowerCase();
    return lng.startsWith("nl") ? "nl" : "en";
  }, [i18n.language]);

  const setLanguage = (lng: "en" | "nl") => {
    i18n.changeLanguage(lng);
  };

  const goToSection = (id: string) => {
    setOpen(false);

    // If we're already on home, scroll instantly
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Otherwise go home with hash (App.tsx will handle scrolling)
    navigate(`/#${id}`);
  };

  const goToEvents = () => {
    setOpen(false);
    navigate("/events");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/70 backdrop-blur-md border-b border-neutral-200/40">
      {/* ✅ 3-column layout: left logo, center links, right actions
          Fixes overlap when Dutch CTA is longer */}
      <nav className="mx-auto flex max-w-6xl items-center px-4 py-2">
        {/* LEFT — Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={sisLogo}
            alt="Sparkle in Style logo"
            className="h-16 w-16 md:h-20 md:w-20 object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-xl md:text-2xl font-semibold text-neutral-900">
              Sparkle in Style
            </span>
            <span className="text-[11px] md:text-[13px] uppercase tracking-[0.20em] text-neutral-500">
              Academy &amp; Salon
            </span>
          </div>
        </Link>

        {/* CENTER — Desktop links (no absolute centering anymore) */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <ul className="flex items-center gap-7 text-sm font-medium text-neutral-700">
            <li>
              <button
                type="button"
                onClick={() => goToSection("services")}
                className={navLinkClass}
              >
                {t("nav.services")}
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToSection("academy")}
                className={navLinkClass}
              >
                {t("nav.academy")}
              </button>
            </li>

            <li>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeNavLinkClass : ""}`
                }
              >
                {t("nav.team")}
              </NavLink>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToSection("about")}
                className={navLinkClass}
              >
                {t("nav.about")}
              </button>
            </li>

            <li>
              <NavLink
                to="/podcast"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeNavLinkClass : ""}`
                }
              >
                {t("nav.podcast")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* RIGHT — Desktop actions (CTA then language, aligned to the far right) */}
        <div className="ml-auto hidden md:flex items-center gap-3 justify-end shrink-0">
          {/* CTA */}
          <button
            type="button"
            onClick={goToEvents}
            className="rounded-full border border-gold-200 px-4 py-2 text-xs uppercase tracking-[0.18em] text-gold-700 bg-gold-50/60 hover:bg-gold-100 transition whitespace-nowrap"
          >
            {t("nav.upcomingEvents")}
          </button>

          {/* Language toggle (fixed widths so it doesn't “jump”) */}
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 backdrop-blur p-1 shrink-0">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`w-[44px] rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                currentLang === "en"
                  ? "bg-gold-50 text-gold-800 border border-gold-200"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
              aria-pressed={currentLang === "en"}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => setLanguage("nl")}
              className={`w-[44px] rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                currentLang === "nl"
                  ? "bg-gold-50 text-gold-800 border border-gold-200"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
              aria-pressed={currentLang === "nl"}
            >
              NL
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto text-neutral-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-neutral-50/95 backdrop-blur-lg border-t border-neutral-200">
          <div className="px-6 pt-4">
            {/* Mobile language toggle (also fixed widths) */}
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 backdrop-blur p-1">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`w-[44px] rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                  currentLang === "en"
                    ? "bg-gold-50 text-gold-800 border border-gold-200"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
                aria-pressed={currentLang === "en"}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => setLanguage("nl")}
                className={`w-[44px] rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                  currentLang === "nl"
                    ? "bg-gold-50 text-gold-800 border border-gold-200"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
                aria-pressed={currentLang === "nl"}
              >
                NL
              </button>
            </div>
          </div>

          <ul className="flex flex-col gap-4 px-6 py-6 text-sm text-neutral-700">
            <li>
              <button
                type="button"
                onClick={() => goToSection("services")}
                className="text-left hover:text-gold-500 transition"
              >
                {t("nav.services")}
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToSection("academy")}
                className="text-left hover:text-gold-500 transition"
              >
                {t("nav.academy")}
              </button>
            </li>

            <li>
              <Link to="/team" onClick={() => setOpen(false)}>
                {t("nav.team")}
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToSection("about")}
                className="text-left hover:text-gold-500 transition"
              >
                {t("nav.about")}
              </button>
            </li>

            <li>
              <Link to="/podcast" onClick={() => setOpen(false)}>
                {t("nav.podcast")}
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={goToEvents}
                className="mt-2 w-full rounded-full border border-gold-200 px-4 py-2 text-xs uppercase tracking-[0.18em] text-gold-700 bg-gold-50/60 text-center hover:bg-gold-100 transition whitespace-nowrap"
              >
                {t("nav.upcomingEvents")}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
