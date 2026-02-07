import React, { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import sisLogo from "../assets/1.png";

const navLinkClass = "hover:text-gold-500 transition";
const activeNavLinkClass = "text-gold-600";

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const currentLang = useMemo(() => {
    const lng = (i18n.language || "en").toLowerCase();
    return lng.startsWith("nl") ? "nl" : "en";
  }, [i18n.language]);

  const setLanguage = (lng: "en" | "nl") => {
    i18n.changeLanguage(lng);
  };

  /* ================= SERVICES NAV ================= */
  const goToServices = (tab: "academy" | "salon") => {
    setOpen(false);

    // Go to HOME with query param
    navigate(`/?tab=${tab}`);

    // Scroll AFTER navigation
    requestAnimationFrame(() => {
      const el = document.getElementById("services");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  const goToSection = (id: string) => {
    setOpen(false);

    navigate("/");

    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/70 backdrop-blur-md border-b border-neutral-200/40">
      <nav className="mx-auto flex max-w-6xl items-center px-4 py-2">
        {/* LOGO */}
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

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <ul className="flex items-center gap-7 text-sm font-medium text-neutral-700">
            <li>
              <button
                type="button"
                onClick={() => goToServices("academy")}
                className={navLinkClass}
              >
                {t("nav.academy")}
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => goToServices("salon")}
                className={navLinkClass}
              >
                {t("nav.services")}
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

        {/* LANGUAGE SWITCH */}
        <div className="ml-auto hidden md:flex items-center gap-3">
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 p-1">
            {(["en", "nl"] as const).map((lng) => (
              <button
                key={lng}
                onClick={() => setLanguage(lng)}
                className={`w-[44px] px-3 py-1 text-[11px] font-semibold uppercase rounded-full ${
                  currentLang === lng
                    ? "bg-gold-50 text-gold-800 border border-gold-200"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-neutral-50 border-t">
          <ul className="flex flex-col gap-4 px-6 py-6 text-sm">
            <li>
              <button onClick={() => goToServices("academy")}>
                {t("nav.academy")}
              </button>
            </li>
            <li>
              <button onClick={() => goToServices("salon")}>
                {t("nav.services")}
              </button>
            </li>
            <li>
              <Link to="/team" onClick={() => setOpen(false)}>
                {t("nav.team")}
              </Link>
            </li>
            <li>
              <button onClick={() => goToSection("about")}>
                {t("nav.about")}
              </button>
            </li>
            <li>
              <Link to="/podcast" onClick={() => setOpen(false)}>
                {t("nav.podcast")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
