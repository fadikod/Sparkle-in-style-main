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

{/* Contact – Action Side */}
<div className="lg:w-[55%]">
  <div className="relative rounded-2xl bg-[#EADCCF] border border-neutral-200 shadow-sm p-6 md:p-8 flex flex-col justify-center">
    <h3 className="font-display text-xl md:text-2xl text-neutral-900 mb-3">
      {t("contact.quickContact.title")}
    </h3>

    <p className="text-neutral-600 text-sm leading-relaxed mb-6 max-w-md">
      {t("contact.quickContact.description")}
    </p>

    <div className="space-y-4">
      {/* WhatsApp – PRIMARY */}
      <a
        href="https://wa.me/31615371014?text=Hi%20Sparkle%20in%20Style,%20I%20have%20a%20question"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-full border border-gold-300 bg-gold-50 px-4 py-3 text-neutral-900 hover:bg-gold-100 transition"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-gold-600 border border-gold-200">
          💬
        </span>
        <span className="font-medium text-sm">
          {t("contact.quickContact.whatsapp")}
        </span>
      </a>

      {/* Phone – SECONDARY */}
      <div className="flex items-center gap-3 text-sm text-neutral-600 pl-1">
        <span className="text-neutral-500">
          {t("contact.quickContact.callHint")}
        </span>
        <a
          href="tel:+31615371014"
          className="hover:text-gold-600 transition font-medium"
        >
          06-15371014
        </a>
      </div>
    </div>
  </div>
</div>



        </div>
      </div>
    </section>
  );
};

export default Contact;
