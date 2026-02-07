// src/components/Podcast.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import {
  PODCAST_EPISODES,
  FEATURED_PODCAST,
  getYouTubeThumbnail,
} from "../data/podcastEpisodes";

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Podcast: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-luxury-cream/30 pt-28 pb-10 sm:pt-32 sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ================= HERO ================= */}
        <header className="text-center mb-8 sm:mb-10">
          <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-500">
            {t("podcastPage.kicker")}
          </p>

          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-serif text-neutral-900">
            {t("podcastPage.title")}
          </h1>

          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-neutral-600">
            {t("podcastPage.description")}
          </p>
        </header>

        {/* ================= FEATURED EPISODE ================= */}
        {FEATURED_PODCAST && (
          <section className="mb-8 sm:mb-10">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-neutral-500 mb-3">
              {t("podcastPage.latest")}
            </p>

            <div className="mx-auto max-w-4xl">
              <button
                type="button"
                onClick={() =>
                  openInNewTab(FEATURED_PODCAST.youtubeUrl)
                }
                className="group block w-full overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-[240px] sm:h-[320px]">
                  <img
                    src={getYouTubeThumbnail(FEATURED_PODCAST.id)}
                    alt={FEATURED_PODCAST.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-md group-hover:scale-105 transition-transform text-base">
                      ▶
                    </span>
                  </div>
                </div>

                <div className="px-5 py-4 text-left">
                  <h2 className="text-base sm:text-lg font-semibold text-neutral-900">
                    {FEATURED_PODCAST.title}
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600">
                    {t("podcastPage.featuredCta")}
                  </p>
                </div>
              </button>
            </div>
          </section>
        )}

        {/* ================= ALL EPISODES ================= */}
        <section className="border-t border-neutral-200 pt-7">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-neutral-500">
              {t("podcastPage.allEpisodes")}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PODCAST_EPISODES.map((episode) => (
              <button
                key={episode.id}
                type="button"
                onClick={() => openInNewTab(episode.youtubeUrl)}
                className="group text-left rounded-2xl bg-white shadow-md hover:shadow-lg overflow-hidden transition-shadow"
              >
                <div className="relative aspect-video">
                  <img
                    src={getYouTubeThumbnail(episode.id)}
                    alt={episode.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />
                  <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-medium">
                    ▶ {t("podcastPage.watch")}
                  </div>
                </div>

                <div className="px-4 py-2.5">
                  <p className="text-sm font-semibold text-neutral-900">
                    {episode.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Podcast;
