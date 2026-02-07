import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative py-8 md:py-10">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute -top-20 right-0 h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[-3rem] h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* INFO SIDE */}
          <div className="lg:w-[45%] space-y-6">
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

            <div className="space-y-5">

              {/* ACADEMY / OFFICE */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 border border-neutral-200 rounded-full text-gold-600 bg-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm">
                    Academy & Office (SIS Groep)
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Zuidlarenstraat 57 / 2.16 <br />
                    2545 VP Den Haag
                  </p>
                </div>
              </div>

              {/* SALON */}
              <div className="flex items-start gap-3">


              </div>

              {/* CONTACT DETAILS */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 border border-neutral-200 rounded-full text-gold-600 bg-white">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <a
                    href="tel:+31615371014"
                    className="block text-neutral-600 text-sm hover:text-gold-600 transition"
                  >
                    06 15371014
                  </a>
                  <a
                    href="mailto:info@sparkleinstyle.nl"
                    className="block text-neutral-600 text-sm hover:text-gold-600 transition"
                  >
                    info@sparkleinstyle.nl
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* ACTION SIDE */}
<div className="lg:w-[55%]">
  <div
    className="
      relative
      rounded-2xl
      bg-[#EADCCF]
      border border-neutral-200
      border-solid
      shadow-sm
      p-6 md:p-8
      overflow-hidden
    "
    style={{ backfaceVisibility: "hidden" }}
  >
    <h3 className="font-display text-xl md:text-2xl text-neutral-900 mb-3">
      {t("contact.quickContact.title")}
    </h3>

    <p className="text-neutral-600 text-sm leading-relaxed mb-6 max-w-md">
      {t("contact.quickContact.description")}
    </p>

    <div className="space-y-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/31615371014?text=Hi%20Sparkle%20in%20Style,%20I%20have%20a%20question"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center gap-3
          rounded-full
          border border-gold-300
          bg-gold-50
          px-4 py-3
          text-neutral-900
          hover:bg-gold-100
          transition
        "
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-gold-600 border border-gold-200">
          💬
        </span>
        <span className="font-medium text-sm">
          {t("contact.quickContact.whatsapp")}
        </span>
      </a>

      {/* Phone */}
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
