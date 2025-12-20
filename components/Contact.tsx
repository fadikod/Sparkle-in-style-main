import React, { useMemo, useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

type SubjectKey = "academy" | "salon" | "general";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  // ✅ store a language-independent value (key), not the visible label text
  const [subjectKey, setSubjectKey] = useState<SubjectKey>("academy");

  const subjectOptions = useMemo(
    () => [
      { key: "academy" as const, label: t("contact.form.subjectOptions.academy") },
      { key: "salon" as const, label: t("contact.form.subjectOptions.salon") },
      { key: "general" as const, label: t("contact.form.subjectOptions.general") },
    ],
    [t]
  );

  const academyCourses = useMemo(
    () => t("contact.form.academyCourses", { returnObjects: true }) as string[],
    [t]
  );

  const salonServices = useMemo(
    () => t("contact.form.salonServices", { returnObjects: true }) as string[],
    [t]
  );

  return (
    <section id="contact" className="relative py-8 md:py-10">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute -top-20 right-0 h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[-3rem] h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Info Side */}
          <div className="lg:w-[45%] space-y-5">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-2">
                {t("contact.titlePrefix")}{" "}
                <span className="italic text-gold-600 font-serif">
                  {t("contact.titleEmphasis")}
                </span>
              </h2>

              <p className="text-neutral-600 text-sm leading-relaxed max-w-md">
                {t("contact.description")}
              </p>
            </div>

            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 border border-neutral-200 rounded-full text-gold-600 bg-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm">
                    {t("contact.info.locationTitle")}
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    {t("contact.info.addressLine1")} <br />
                    {t("contact.info.addressLine2")}
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 border border-neutral-200 rounded-full text-gold-600 bg-white">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm">
                    {t("contact.info.contactTitle")}
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    {t("contact.info.phone")}
                  </p>
                  <p className="text-neutral-600 text-sm">
                    {t("contact.info.email")}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 border border-neutral-200 rounded-full text-gold-600 bg-white">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm">
                    {t("contact.info.hoursTitle")}
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    {t("contact.info.hoursLine")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-[55%]">
            <div className="relative rounded-2xl bg-[#EADCCF] border border-neutral-200 shadow-md p-5 md:p-6">
              <div className="relative z-10">
                <h3 className="font-display text-lg text-neutral-900 mb-4">
                  {t("contact.form.title")}
                </h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                        {t("contact.form.firstNameLabel")}
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-neutral-300 py-2 text-sm text-neutral-900 focus:outline-none focus:border-gold-500"
                        placeholder={t("contact.form.firstNamePlaceholder")}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                        {t("contact.form.lastNameLabel")}
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-neutral-300 py-2 text-sm text-neutral-900 focus:outline-none focus:border-gold-500"
                        placeholder={t("contact.form.lastNamePlaceholder")}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                      {t("contact.form.emailLabel")}
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-neutral-300 py-2 text-sm text-neutral-900 focus:outline-none focus:border-gold-500"
                      placeholder={t("contact.form.emailPlaceholder")}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                      {t("contact.form.subjectLabel")}
                    </label>
                    <select
                      value={subjectKey}
                      onChange={(e) => setSubjectKey(e.target.value as SubjectKey)}
                      className="w-full bg-white border-b border-neutral-300 py-2 text-sm text-neutral-900 focus:outline-none focus:border-gold-500"
                    >
                      {subjectOptions.map((opt) => (
                        <option key={opt.key} value={opt.key}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {(subjectKey === "academy" || subjectKey === "salon") && (
                    <div className="space-y-1 animate-fade-in">
                      <label className="text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                        {subjectKey === "academy"
                          ? t("contact.form.whichCourseLabel")
                          : t("contact.form.preferredServiceLabel")}
                      </label>

                      <select className="w-full bg-white border-b border-neutral-300 py-2 text-sm text-neutral-900 focus:outline-none focus:border-gold-500">
                        {(subjectKey === "academy" ? academyCourses : salonServices).map(
                          (item) => (
                            <option key={item}>{item}</option>
                          )
                        )}
                      </select>
                    </div>
                  )}

                  <button
                    type="button"
                    className="w-full mt-4 py-3 bg-gold-500 text-neutral-900 text-[11px] font-semibold uppercase tracking-[0.22em] hover:bg-gold-400 transition-all rounded-full"
                  >
                    {t("contact.form.submit")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
