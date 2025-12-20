import React, { useMemo, useState } from "react";
import { ServiceItem } from "../types";
import {
  Scissors,
  Palette,
  GraduationCap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

type ServicesProps = {
  onOpenBrochure: () => void;
};

const servicesData: ServiceItem[] = [
  // Academy
  {
    id: "a1",
    title: "Make-up & Beauty Styling",
    description:
      "From essential techniques to editorial looks, including a professional portfolio day.",
    category: "academy",
    isAcademy: true,
    duration: "3–6 Months",
  },
  {
    id: "a2",
    title: "Hair & Styling",
    description:
      "Cutting, blow-drying, and updos, plus salon etiquette and client consultation.",
    category: "academy",
    isAcademy: true,
    duration: "3–6 Months",
  },
  {
    id: "a3",
    title: "Nail Styling",
    description:
      "Gel polish, acrylics, and nail care with complete hygiene protocol training.",
    category: "academy",
    isAcademy: true,
    duration: "3–6 Months",
  },
  {
    id: "a4",
    title: "Lash & Brow Styling",
    description:
      "Brow shaping, tinting, lamination, and lash lifting to create long-lasting, defined looks.",
    category: "academy",
    isAcademy: true,
    duration: "3–6 Months",
  },
  {
    id: "a5",
    title: "Fashion Styling",
    description:
      "Wardrobe curation, color theory, and styling for shoots, events, and personal branding.",
    category: "academy",
    isAcademy: true,
    duration: "3–6 Months",
  },
  {
    id: "a6",
    title: "Beauty Business & Entrepreneurship",
    description:
      "Build your own brand: pricing, client communication, social media, and beauty business basics.",
    category: "academy",
    isAcademy: true,
    duration: "3–6 Months",
  },

  // Salon - Hair
  {
    id: "h1",
    title: "Signature Cut & Style",
    description:
      "Precision cutting tailored to your face shape with a luxury blowout.",
    price: "€65",
    category: "hair",
  },
  {
    id: "h2",
    title: "Balayage & Gloss",
    description: "Hand-painted highlights for a natural, sun-kissed dimension.",
    price: "€140+",
    category: "hair",
  },

  // Salon - Nails
  {
    id: "n1",
    title: "Gel Couture Manicure",
    description: "Detailed cuticle care, shaping, and long-lasting gel polish.",
    price: "€45",
    category: "nails",
  },
  {
    id: "n2",
    title: "Luxury Pedicure",
    description: "Exfoliating scrub, mask, hot stone massage, and polish.",
    price: "€60",
    category: "nails",
  },

  // Salon - Makeup
  {
    id: "m1",
    title: "Event Makeup",
    description: "Long-wearing HD makeup for special occasions.",
    price: "€75",
    category: "makeup",
  },
  {
    id: "m2",
    title: "Bridal Package",
    description: "Trial session plus wedding day application.",
    price: "€250",
    category: "makeup",
  },
];

const Services: React.FC<ServicesProps> = ({ onOpenBrochure }) => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState<"academy" | "salon">("salon");
  const [academyPage, setAcademyPage] = useState(0);

  const academyPrograms = useMemo(
    () => servicesData.filter((s) => s.category === "academy"),
    []
  );

  const itemsPerPage = 2;
  const maxAcademyPage = Math.ceil(academyPrograms.length / itemsPerPage) - 1;

  const handlePrevAcademy = () => {
    setAcademyPage((prev) => (prev === 0 ? maxAcademyPage : prev - 1));
  };

  const handleNextAcademy = () => {
    setAcademyPage((prev) => (prev === maxAcademyPage ? 0 : prev + 1));
  };

  const catLabel = (cat: "hair" | "nails" | "makeup") =>
    t(`services.salonCategories.${cat}`);

  return (
    <section id="services" className="py-14 md:py-16 relative">
      {/* Background decorative letter */}
      <div className="absolute top-10 right-0 text-[14rem] lg:text-[16rem] font-serif text-gold-500/5 leading-none select-none pointer-events-none">
        S
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Anchor */}
        <div id="academy" className="h-0" />

        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-4">
            {t("services.titlePrefix")}{" "}
            <span className="italic text-gold-600 font-serif">
              {t("services.titleEmphasis")}
            </span>
          </h2>

          <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-5" />

          {/* Main Toggle */}
          <div className="flex justify-center gap-8">
            <button
              type="button"
              onClick={() => setActiveTab("salon")}
              className={`text-xs sm:text-sm uppercase tracking-[0.2em] pb-2 border-b transition-all duration-300 ${
                activeTab === "salon"
                  ? "text-neutral-900 border-gold-600"
                  : "text-neutral-400 border-transparent hover:text-neutral-600"
              }`}
            >
              {t("services.tabs.salon")}
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("academy");
                setAcademyPage(0);
              }}
              className={`text-xs sm:text-sm uppercase tracking-[0.2em] pb-2 border-b transition-all duration-300 ${
                activeTab === "academy"
                  ? "text-neutral-900 border-gold-600"
                  : "text-neutral-400 border-transparent hover:text-neutral-600"
              }`}
            >
              {t("services.tabs.academy")}
            </button>
          </div>
        </div>

        {/* Academy View */}
        {activeTab === "academy" && (
          <div className="relative max-w-5xl mx-auto">
            {/* Left arrow (desktop) */}
            <button
              type="button"
              onClick={handlePrevAcademy}
              className="hidden md:flex items-center justify-center absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border bg-white/80 backdrop-blur shadow-sm border-gold-300 text-gold-600 hover:bg-gold-50 hover:shadow-md transition-all"
              aria-label={t("services.academy.ariaPrev")}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right arrow (desktop) */}
            <button
              type="button"
              onClick={handleNextAcademy}
              className="hidden md:flex items-center justify-center absolute -right-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border bg-white/80 backdrop-blur shadow-sm border-gold-300 text-gold-600 hover:bg-gold-50 hover:shadow-md transition-all"
              aria-label={t("services.academy.ariaNext")}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Mobile arrows */}
            <div className="flex md:hidden justify-center gap-6 mb-4">
              <button
                type="button"
                onClick={handlePrevAcademy}
                className="flex items-center justify-center w-9 h-9 rounded-full border bg-white/90 border-gold-300 text-gold-600 hover:bg-gold-50 transition-all"
                aria-label={t("services.academy.ariaPrev")}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNextAcademy}
                className="flex items-center justify-center w-9 h-9 rounded-full border bg-white/90 border-gold-300 text-gold-600 hover:bg-gold-50 transition-all"
                aria-label={t("services.academy.ariaNext")}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                style={{ transform: `translateX(-${academyPage * 100}%)` }}
              >
                {academyPrograms.map((program) => (
                  <div
                    key={program.id}
                    className="w-full md:w-1/2 flex-shrink-0 px-2 md:px-4"
                  >
                    <article className="group relative bg-white/95 p-1 rounded-3xl border border-neutral-100 shadow-lg shadow-neutral-200/40 hover:shadow-xl hover:shadow-gold-500/12 transition-all duration-500 h-full">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-300 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                      <div className="p-6 h-full flex flex-col">
                        <div className="mb-5 p-4 bg-luxury-sand rounded-full w-16 h-16 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
                          <GraduationCap className="w-8 h-8" />
                        </div>

                        <h3 className="font-display text-2xl text-neutral-900 mb-2 group-hover:text-gold-700 transition-colors">
                          {program.title}
                        </h3>

                        <p className="text-neutral-500 font-light leading-relaxed mb-6 flex-grow">
                          {program.description}
                        </p>

                        <div className="flex justify-between items-center border-t border-neutral-100 pt-4">
                          <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                            {program.duration}
                          </span>
                          <button
                            type="button"
                            className="text-xs uppercase tracking-[0.18em] text-gold-600 font-medium hover:text-neutral-900 transition-colors"
                          >
                            {t("services.academy.enroll")}
                          </button>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Salon View */}
        {activeTab === "salon" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 animate-fade-in">
              {(["hair", "nails", "makeup"] as const).map((cat) => (
                <div key={cat}>
                  <div className="flex items-center gap-3 mb-6">
                    {cat === "hair" && (
                      <Scissors className="w-5 h-5 text-gold-500" />
                    )}
                    {cat === "nails" && (
                      <Palette className="w-5 h-5 text-gold-500" />
                    )}
                    {cat === "makeup" && (
                      <Sparkles className="w-5 h-5 text-gold-500" />
                    )}

                    <h3 className="font-display text-2xl capitalize text-neutral-800">
                      {catLabel(cat)} {t("services.salonMenuSuffix")}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {servicesData
                      .filter((s) => s.category === cat)
                      .map((service) => (
                        <div key={service.id} className="group cursor-pointer">
                          <div className="flex justify-between items-baseline mb-2 relative overflow-hidden">
                            <span className="font-medium text-neutral-900 group-hover:text-gold-600 transition-colors relative z-10 bg-luxury-cream pr-4">
                              {service.title}
                            </span>
                            <div className="absolute bottom-1 w-full border-b border-dotted border-neutral-300" />
                            <span className="font-serif text-lg text-neutral-800 relative z-10 bg-luxury-cream pl-4">
                              {service.price}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-500 font-light uppercase tracking-wide">
                            {service.description}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <button
                type="button"
                onClick={onOpenBrochure}
                className="inline-flex items-center rounded-full border border-gold-300 bg-gold-50/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-800 hover:bg-gold-100 transition"
              >
                {t("buttons.viewFullSalonMenu")}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Services;
