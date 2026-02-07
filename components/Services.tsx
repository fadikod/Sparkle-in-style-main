import React, { useEffect, useMemo, useState } from "react";
import { ServiceItem } from "../types";
import {
  Scissors,
  Palette,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

/* ================= ACADEMY IMAGES ================= */
import makeupImg from "../assets/future/makeup.jpg";
import hairImg from "../assets/future/kapper.jpg";
import nailImg from "../assets/future/nagel.jpg";
import lashImg from "../assets/future/lashbrow.jpg";
import fashionImg from "../assets/future/fashion.jpg";
import businessImg from "../assets/future/ondernemen.jpg";

/* ================= SALON MODAL IMAGES ================= */
import salonHairImg from "../assets/hair.png";
import salonNailsImg from "../assets/nails.png";

/* ================= DATA ================= */
const servicesData: ServiceItem[] = [
  // Academy
  {
    id: "a1",
    title: "services.academy.makeup.title",
    description: "services.academy.makeup.desc",
    category: "academy",
    duration: "3–6 Months",
  },
  {
    id: "a2",
    title: "services.academy.hair.title",
    description: "services.academy.hair.desc",
    category: "academy",
    duration: "3–6 Months",
  },
  {
    id: "a3",
    title: "services.academy.nails.title",
    description: "services.academy.nails.desc",
    category: "academy",
    duration: "3–6 Months",
  },
  {
    id: "a4",
    title: "services.academy.lash.title",
    description: "services.academy.lash.desc",
    category: "academy",
    duration: "3–6 Months",
  },
  {
    id: "a5",
    title: "services.academy.fashion.title",
    description: "services.academy.fashion.desc",
    category: "academy",
    duration: "3–6 Months",
  },
  {
    id: "a6",
    title: "services.academy.business.title",
    description: "services.academy.business.desc",
    category: "academy",
    duration: "3–6 Months",
  },

  // Salon
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

const imagePosition = (id: string) =>
  id === "a6" ? "object-top" : "object-center";

/* ================= COMPONENT ================= */
const Services: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  /* ===== TAB FROM QUERY ===== */
  const getTabFromQuery = (): "academy" | "salon" => {
    const params = new URLSearchParams(location.search);
    return params.get("tab") === "salon" ? "salon" : "academy";
  };

  const [activeTab, setActiveTab] = useState<"academy" | "salon">(
    getTabFromQuery()
  );
  const [academyPage, setAcademyPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [showSalonModal, setShowSalonModal] = useState(false);
  const [showAcademyModal, setShowAcademyModal] = useState(false);


  /* ===== SYNC TAB ===== */
  useEffect(() => {
    setActiveTab(getTabFromQuery());
    setAcademyPage(0);
  }, [location.search]);

  /* ===== RESPONSIVE ===== */
  useEffect(() => {
    const update = () => setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const academyPrograms = useMemo(
    () => servicesData.filter((s) => s.category === "academy"),
    []
  );

  const maxAcademyPage =
    Math.ceil(academyPrograms.length / itemsPerPage) - 1;

  const handlePrevAcademy = () =>
    setAcademyPage((p) => (p > 0 ? p - 1 : maxAcademyPage));

  const handleNextAcademy = () =>
    setAcademyPage((p) => (p < maxAcademyPage ? p + 1 : 0));

  const switchTab = (tab: "academy" | "salon") => {
    navigate(`/?tab=${tab}`, { replace: true });
  };

  const catLabel = (cat: "hair" | "nails" | "makeup") =>
    t(`services.salonCategories.${cat}`);

  /* ================= RENDER ================= */
  return (
    <section id="services" className="relative pt-6 pb-12">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl">
            {t("services.titlePrefix")}{" "}
            <span className="italic text-gold-600 font-serif">
              {t("services.titleEmphasis")}
            </span>
          </h2>

          <div className="flex justify-center gap-8 mt-6">
            {(["academy", "salon"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => switchTab(tab)}
                className={`uppercase tracking-[0.2em] pb-2 border-b transition ${
                  activeTab === tab
                    ? "border-gold-600 text-neutral-900"
                    : "border-transparent text-neutral-400"
                }`}
              >
                {t(`services.tabs.${tab}`)}
              </button>
            ))}
          </div>
        </div>

        {/* ================= ACADEMY ================= */}
{activeTab === "academy" && (
  <>
    <div className="relative max-w-5xl mx-auto">
      <button
        onClick={handlePrevAcademy}
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={handleNextAcademy}
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10"
      >
        <ChevronRight />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${academyPage * 100}%)` }}
        >
          {academyPrograms.map((program) => (
            <div
              key={program.id}
              className="w-full md:w-1/2 flex-shrink-0 px-4"
            >
              <article className="bg-white rounded-3xl overflow-hidden shadow-md">
                <div className="h-[260px] overflow-hidden">
                  <img
                    src={academyImages[program.id]}
                    alt={t(program.title)}
                    className={`w-full h-full object-cover ${imagePosition(
                      program.id
                    )}`}
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl mb-2">
                    {t(program.title)}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3">
                    {t(program.description)}
                  </p>
                  <span className="text-[11px] uppercase tracking-wide text-gold-600">
                    {program.duration}
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ===== JOB COACHING BUTTON ===== */}
    <div className="flex justify-center mt-10">
      <button
        type="button"
        onClick={() => setShowAcademyModal(true)}
        className="inline-flex items-center rounded-full
                   border border-gold-300 bg-gold-50/70
                   px-6 py-2 text-[11px] uppercase tracking-[0.2em]
                   text-gold-800 hover:bg-gold-100 transition"
      >
        {t("services.academy.jobCoachingButton")}
      </button>
    </div>
  </>
)}


        {/* ================= SALON ================= */}
{/* ================= SALON ================= */}
{activeTab === "salon" && (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {(["hair", "nails", "makeup"] as const).map((cat) => (
        <div key={cat}>
          <div className="flex items-center gap-2 mb-4">
            {cat === "hair" && <Scissors />}
            {cat === "nails" && <Palette />}
            {cat === "makeup" && <Sparkles />}
            <h3 className="font-display text-lg">
              {catLabel(cat)}
            </h3>
          </div>

          <div className="space-y-3">
            {servicesData
              .filter((s) => s.category === cat)
              .map((service) => (
                <div key={service.id}>
                  <div className="flex justify-between">
                    <span>{t(service.title)}</span>
                    <span className="font-serif">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500">
                    {t(service.description)}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>

    {/* ===== VIEW FULL SALON MENU BUTTON ===== */}
    <div className="flex justify-center mt-10">
      <button
        type="button"
        onClick={() => setShowSalonModal(true)}
        className="inline-flex items-center rounded-full
                   border border-gold-300 bg-gold-50/70
                   px-6 py-2 text-[11px] uppercase tracking-[0.2em]
                   text-gold-800 hover:bg-gold-100 transition"
      >
        {t("buttons.viewFullSalonMenu")}
      </button>
    </div>
  </>
)}

      </div>
      {/* ================= SALON MODAL ================= */}
{showSalonModal && (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
    <div className="relative bg-white rounded-3xl max-w-6xl w-full p-8">
      <button
        onClick={() => setShowSalonModal(false)}
        className="absolute top-5 right-5"
      >
        <X />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={salonHairImg}
          alt="Hair"
          className="rounded-2xl object-cover h-[480px] w-full"
        />
        <img
          src={salonNailsImg}
          alt="Nails"
          className="rounded-2xl object-cover h-[480px] w-full"
        />
      </div>
    </div>
  </div>
)}
{/* ================= ACADEMY JOB COACHING MODAL ================= */}
{showAcademyModal && (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
    <div className="relative bg-white rounded-3xl max-w-4xl w-full p-8">
      <button
        onClick={() => setShowAcademyModal(false)}
        className="absolute top-5 right-5"
      >
        <X />
      </button>

      <div className="text-center mb-8">
        <h3 className="font-display text-3xl md:text-4xl text-neutral-900">
          {t("services.academy.support.title")}
        </h3>

        <p className="mt-3 text-sm text-neutral-600 max-w-2xl mx-auto">
          {t("services.academy.support.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["coaching", "teaching", "work"].map((key) => (
          <div
            key={key}
            className="rounded-3xl bg-neutral-50 border border-neutral-200 p-6 text-center"
          >
            <h4 className="font-display text-lg mb-3">
              {t(`services.academy.support.${key}.title`)}
            </h4>

            <p className="text-sm text-neutral-600">
              {t(`services.academy.support.${key}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default Services;
