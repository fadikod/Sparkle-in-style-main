import React, { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ServiceItem = {
  name: string;
  desc: string;
  price: string;
};

type Category = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  services: ServiceItem[];
  addons?: { label: string; price: string }[];
};

const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const [isClosing, setIsClosing] = useState(false);
  const [openId, setOpenId] = useState<string>("nails");
  const [showAddons, setShowAddons] = useState<Record<string, boolean>>({
    nails: false,
  });

  // NOTE: you can later replace these with cropped poster images
  const categories: Category[] = useMemo(
    () => [
      {
        id: "nails",
        title: t("brochure.categories.nails.title"),
        subtitle: t("brochure.categories.nails.subtitle"),
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80",
        services: [
          {
            name: t("brochure.categories.nails.services.manicure.name"),
            desc: t("brochure.categories.nails.services.manicure.desc"),
            price: "€25 – €40",
          },
          {
            name: t("brochure.categories.nails.services.colored.name"),
            desc: t("brochure.categories.nails.services.colored.desc"),
            price: "€35 – €40",
          },
          {
            name: t("brochure.categories.nails.services.classicCare.name"),
            desc: t("brochure.categories.nails.services.classicCare.desc"),
            price: "€30 – €35",
          },
        ],
        addons: [
          { label: t("brochure.addons.nailArt"), price: t("brochure.prices.nailArt") }, // from €1
          { label: t("brochure.addons.repair"), price: "€2,50" },
          { label: t("brochure.addons.gelRemoval"), price: "€15" },
          { label: t("brochure.addons.acrylicRemoval"), price: "€25" },
          { label: t("brochure.addons.topcoat"), price: "€15" },
          { label: t("brochure.addons.coloredGellak"), price: "€25" },
          { label: t("brochure.addons.coloredGellakWithSet"), price: "€10" },
          { label: t("brochure.addons.polishNoUv"), price: "€5" }
        ],
      },
      {
        id: "hair",
        title: t("brochure.categories.hair.title"),
        subtitle: t("brochure.categories.hair.subtitle"),
        image:
          "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=80",
        services: [
          {
            name: t("brochure.categories.hair.services.cuts.name"),
            desc: t("brochure.categories.hair.services.cuts.desc"),
            price: "€15 – €35",
          },
          {
            name: t("brochure.categories.hair.services.styling.name"),
            desc: t("brochure.categories.hair.services.styling.desc"),
            price: "€25",
          },
          {
            name: t("brochure.categories.hair.services.color.name"),
            desc: t("brochure.categories.hair.services.color.desc"),
            price: "€25 – €35",
          },
          {
            name: t("brochure.categories.hair.services.highlights.name"),
            desc: t("brochure.categories.hair.services.highlights.desc"),
            price: "€30",
          },
          {
            name: t("brochure.categories.hair.services.treatment.name"),
            desc: t("brochure.categories.hair.services.treatment.desc"),
            price: "€70",
          },
        ],
      },
      {
        id: "brows-lashes",
        title: t("brochure.categories.browsLashes.title"),
        subtitle: t("brochure.categories.browsLashes.subtitle"),
        image:
          "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1400&q=80",
        services: [
          {
            name: t("brochure.categories.browsLashes.services.lashes.name"),
            desc: t("brochure.categories.browsLashes.services.lashes.desc"),
            price: "€20 – €60",
          },
          {
            name: t("brochure.categories.browsLashes.services.extensions.name"),
            desc: t("brochure.categories.browsLashes.services.extensions.desc"),
            price: "€65 – €70",
          },
          {
            name: t("brochure.categories.browsLashes.services.brows.name"),
            desc: t("brochure.categories.browsLashes.services.brows.desc"),
            price: "€10 – €25",
          },
        ],
      },
      {
        id: "makeup",
        title: t("brochure.categories.makeup.title"),
        subtitle: t("brochure.categories.makeup.subtitle"),
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
        services: [
          {
            name: t("brochure.categories.makeup.services.event.name"),
            desc: t("brochure.categories.makeup.services.event.desc"),
            price: "€75",
          },
          {
            name: t("brochure.categories.makeup.services.bridal.name"),
            desc: t("brochure.categories.makeup.services.bridal.desc"),
            price: "€250",
          },
        ],
      },
    ],
    [t]
  );

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Prevent background scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 220);
  };

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  const toggleAddons = (catId: string) => {
    setShowAddons((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center ${
        isClosing ? "opacity-0" : "opacity-100"
      } transition-opacity duration-200`}
    >
      {/* Backdrop */}
      <button
        aria-label={t("brochure.ariaCloseBackdrop")}
        onClick={handleClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
      />

      {/* Modal */}
      <div className="relative z-10 w-[min(980px,92vw)] max-h-[86vh] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b border-neutral-200 bg-white/90 px-6 py-4 backdrop-blur">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900">
              {t("brochure.title")}
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              {t("brochure.subtitle")}
            </p>
          </div>

          <button
            onClick={handleClose}
            className="rounded-full border border-neutral-200 bg-white p-2 text-neutral-700 hover:bg-neutral-50"
            aria-label={t("brochure.ariaClose")}
            type="button"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[calc(86vh-140px)] overflow-y-auto px-6 py-5">
          <div className="mb-5 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-4">
            <p className="text-sm text-neutral-700">
              {t("brochure.intro")}
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {categories.map((cat) => {
              const isOpenCat = openId === cat.id;

              return (
                <div
                  key={cat.id}
                  className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
                >
                  <button
                    onClick={() => toggleAccordion(cat.id)}
                    className="w-full px-5 py-4 text-left hover:bg-neutral-50/60 transition"
                    type="button"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-neutral-900">
                          {cat.title}
                        </h3>
                        <p className="mt-1 text-sm text-neutral-600">
                          {cat.subtitle}
                        </p>
                      </div>

                      <div
                        className={`mt-1 h-8 w-8 shrink-0 rounded-full border border-neutral-200 bg-white grid place-items-center transition ${
                          isOpenCat ? "rotate-180" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      >
                        <span className="text-neutral-700">⌄</span>
                      </div>
                    </div>
                  </button>

                  {isOpenCat && (
                    <div className="px-5 pb-5">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-[240px,1fr]">
                        {/* Image */}
                        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                          <img
                            src={cat.image}
                            alt={cat.title}
                            className="h-44 w-full object-cover md:h-full"
                            loading="lazy"
                          />
                        </div>

                        {/* Services */}
                        <div className="rounded-2xl border border-neutral-200 bg-white">
                          <ul className="divide-y divide-neutral-200">
                            {cat.services.map((s) => (
                              <li key={s.name} className="px-4 py-4 md:px-5">
                                <div className="flex items-start justify-between gap-4">
                                  <div>
                                    <p className="font-semibold text-neutral-900">
                                      {s.name}
                                    </p>
                                    <p className="mt-1 text-sm text-neutral-600">
                                      {s.desc}
                                    </p>
                                  </div>
                                  <p className="shrink-0 font-semibold text-neutral-900">
                                    {s.price}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>

                          {/* Add-ons */}
                          {cat.addons && cat.addons.length > 0 && (
                            <div className="px-4 pb-4 md:px-5">
                              <button
                                onClick={() => toggleAddons(cat.id)}
                                className="mt-3 text-sm font-semibold text-neutral-800 underline underline-offset-4 hover:text-neutral-900"
                                type="button"
                              >
                                {showAddons[cat.id]
                                  ? t("brochure.addons.hide")
                                  : t("brochure.addons.show")}
                              </button>

                              {showAddons[cat.id] && (
                                <div className="mt-3 rounded-xl border border-neutral-200 bg-neutral-50/60 p-4">
                                  <ul className="space-y-2">
                                    {cat.addons.map((a) => (
                                      <li
                                        key={a.label}
                                        className="flex items-center justify-between gap-4 text-sm text-neutral-700"
                                      >
                                        <span>{a.label}</span>
                                        <span className="font-semibold text-neutral-900">
                                          {a.price}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Small note */}
          <p className="mt-6 text-xs text-neutral-500">
            {t("brochure.note")}
          </p>
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 z-20 border-t border-neutral-200 bg-white/90 px-6 py-4 backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-neutral-700">{t("brochure.footerText")}</p>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                onClick={handleClose}
                className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-800 hover:bg-neutral-50 transition"
              >
                {t("brochure.contact")}
              </a>
              <a
                href="#book"
                onClick={handleClose}
                className="inline-flex items-center justify-center rounded-full border border-gold-300 bg-gold-50/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-800 hover:bg-gold-100 transition"
              >
                {t("brochure.book")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureModal;
