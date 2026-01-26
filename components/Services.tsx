import React, { useEffect, useMemo, useState } from "react";
import { ServiceItem } from "../types";
import {
  Scissors,
  Palette,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

// Academy images
import makeupImg from "../assets/future/makeup.jpg";
import hairImg from "../assets/future/kapper.jpg";
import nailImg from "../assets/future/nagel.jpg";
import lashImg from "../assets/future/lashbrow.jpg";
import fashionImg from "../assets/future/fashion.jpg";
import businessImg from "../assets/future/ondernemen.jpg";

type ServicesProps = {
  onOpenBrochure: () => void;
};

const servicesData: ServiceItem[] = [
  // Academy
  {
    id: "a1",
    title: "services.academy.makeup.title",
    description: "services.academy.makeup.desc",
    category: "academy",
    isAcademy: true,
    duration: "3–6 Months",
  },
  {
    id: "a2",
    title: "services.academy.hair.title",
    description: "services.academy.hair.desc",
    category: "academy",
    isAcademy: true,
    duration: "3–6 Months",
  },
  {
    id: "a3",
    title: "services.academy.nails.title",
    description: "services.academy.nails.desc",
    category: "academy",
    isAcademy: true,
    duration: "3–6 Months",
  },
  {
    id: "a4",
    title: "services.academy.lash.title",
    description: "services.academy.lash.desc",
    category: "academy",
    isAcademy: true,
    duration: "3–6 Months",
  },
  {
    id: "a5",
    title: "services.academy.fashion.title",
    description: "services.academy.fashion.desc",
    category: "academy",
    isAcademy: true,
    duration: "3–6 Months",
  },
  {
    id: "a6",
    title: "services.academy.business.title",
    description: "services.academy.business.desc",
    category: "academy",
    isAcademy: true,
    duration: "3–6 Months",
  },

  // Salon - Hair
  {
    id: "h1",
    title: "services.salon.hair.signature.title",
    description: "services.salon.hair.signature.desc",
    price: "€65",
    category: "hair",
  },
  {
    id: "h2",
    title: "services.salon.hair.balayage.title",
    description: "services.salon.hair.balayage.desc",
    price: "€140+",
    category: "hair",
  },

  // Salon - Nails
  {
    id: "n1",
    title: "services.salon.nails.manicure.title",
    description: "services.salon.nails.manicure.desc",
    price: "€45",
    category: "nails",
  },
  {
    id: "n2",
    title: "services.salon.nails.pedicure.title",
    description: "services.salon.nails.pedicure.desc",
    price: "€60",
    category: "nails",
  },

  // Salon - Makeup
  {
    id: "m1",
    title: "services.salon.makeup.event.title",
    description: "services.salon.makeup.event.desc",
    price: "€75",
    category: "makeup",
  },
  {
    id: "m2",
    title: "services.salon.makeup.bridal.title",
    description: "services.salon.makeup.bridal.desc",
    price: "€250",
    category: "makeup",
  },
];

const academyImages: Record<string, string> = {
  a1: makeupImg,
  a2: hairImg,
  a3: nailImg,
  a4: lashImg,
  a5: fashionImg,
  a6: businessImg,
};

const imagePosition = (id: string) => {
  if (id === "a6") return "object-top";
  return "object-center";
};

const Services: React.FC<ServicesProps> = ({ onOpenBrochure }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<"academy" | "salon">("academy");
  const [academyPage, setAcademyPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const update = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");

    if (tab === "salon" || tab === "academy") {
      setActiveTab(tab);
      if (tab === "academy") setAcademyPage(0);
    }
  }, [location.search]);

  const academyPrograms = useMemo(
    () => servicesData.filter((s) => s.category === "academy"),
    []
  );

  const maxAcademyPage =
    Math.ceil(academyPrograms.length / itemsPerPage) - 1;

  const handlePrevAcademy = () => {
    setAcademyPage((prev) => (prev === 0 ? maxAcademyPage : prev - 1));
  };

  const handleNextAcademy = () => {
    setAcademyPage((prev) => (prev === maxAcademyPage ? 0 : prev + 1));
  };

  const catLabel = (cat: "hair" | "nails" | "makeup") =>
    t(`services.salonCategories.${cat}`);

  return (
    <section id="services" className="pt-2 pb-1 md:pt-2 md:pb-1 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-4 md:mb-5">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-3">
            {t("services.titlePrefix")}{" "}
            <span className="italic text-gold-600 font-serif">
              {t("services.titleEmphasis")}
            </span>
          </h2>

          <div className="flex justify-center gap-6 mt-4">
            <button
              type="button"
              onClick={() => setActiveTab("salon")}
              className={`text-xs sm:text-sm uppercase tracking-[0.2em] pb-2 border-b transition-all ${
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
              className={`text-xs sm:text-sm uppercase tracking-[0.2em] pb-2 border-b transition-all ${
                activeTab === "academy"
                  ? "text-neutral-900 border-gold-600"
                  : "text-neutral-400 border-transparent hover:text-neutral-600"
              }`}
            >
              {t("services.tabs.academy")}
            </button>
          </div>
        </div>

        {activeTab === "academy" && (
          <div className="relative max-w-5xl mx-auto">
            <button
              type="button"
              onClick={handlePrevAcademy}
              className="flex items-center justify-center absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full border bg-white/80 backdrop-blur shadow-sm border-gold-300 text-gold-600 hover:bg-gold-50 hover:shadow-md transition-all z-20"
              aria-label={t("services.academy.ariaPrev")}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNextAcademy}
              className="flex items-center justify-center absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full border bg-white/80 backdrop-blur shadow-sm border-gold-300 text-gold-600 hover:bg-gold-50 hover:shadow-md transition-all z-20"
              aria-label={t("services.academy.ariaNext")}
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${academyPage * 100}%)`,
                }}
              >
                {academyPrograms.map((program) => (
                  <div
                    key={program.id}
                    className="w-full md:w-1/2 flex-shrink-0 px-2"
                  >
                    <article className="group relative rounded-3xl overflow-hidden border border-neutral-100 shadow-lg">
                      <div className="relative w-full h-[240px] overflow-hidden">
                        <img
                          src={academyImages[program.id]}
                          alt={t(program.title)}
                          className={`w-full h-full object-cover ${imagePosition(
                            program.id
                          )} transition-transform duration-700 group-hover:scale-[1.02]`}
                        />
                      </div>

                      <div className="p-5 bg-white">
                        <h3 className="font-display text-lg text-neutral-900 mb-2">
                          {t(program.title)}
                        </h3>
                        <p className="text-sm text-neutral-600 mb-2">
                          {t(program.description)}
                        </p>
                        <span className="text-xs uppercase tracking-wide text-gold-600">
                          {program.duration}
                        </span>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "salon" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
              {(["hair", "nails", "makeup"] as const).map((cat) => (
                <div key={cat}>
                  <div className="flex items-center gap-3 mb-4">
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
                      {catLabel(cat)}{" "}
                      {cat !== "nails" && ` ${t("services.salonMenuSuffix")}`}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {servicesData
                      .filter((s) => s.category === cat)
                      .map((service) => (
                        <div key={service.id} className="group cursor-pointer">
                          <div className="flex justify-between items-baseline mb-1 relative overflow-hidden">
                            <span className="font-medium text-neutral-900 group-hover:text-gold-600 transition-colors relative z-10 bg-luxury-cream pr-3">
                              {t(service.title)}
                            </span>
                            <div className="absolute bottom-1 w-full border-b border-dotted border-neutral-300" />
                            <span className="font-serif text-lg text-neutral-800 relative z-10 bg-luxury-cream pl-3">
                              {service.price}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-500 font-light uppercase tracking-wide">
                            {t(service.description)}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
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
