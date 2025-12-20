// src/data/podcastEpisodes.ts

export interface PodcastEpisode {
  id: string;          // YouTube video ID
  youtubeUrl: string;  // Full YouTube link
  title: string;       // Temporary display title
  isFeatured?: boolean;
}

// Simple Episode 1..6 titles for now.
// Later we can replace them with the real Dutch titles.

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: "PZZHGLx4FXk",
    youtubeUrl: "https://www.youtube.com/watch?v=PZZHGLx4FXk",
    title: "Episode 1",
    isFeatured: true, // latest / featured for now
  },
  {
    id: "IGLVHjFo-T4",
    youtubeUrl: "https://www.youtube.com/watch?v=IGLVHjFo-T4",
    title: "Episode 2",
  },
  {
    id: "EwMx1pgO42k",
    youtubeUrl: "https://www.youtube.com/watch?v=EwMx1pgO42k",
    title: "Episode 3",
  },
  {
    id: "cwurjgo0Om8",
    youtubeUrl: "https://www.youtube.com/watch?v=cwurjgo0Om8",
    title: "Episode 4",
  },
  {
    id: "SSONyEwb994",
    youtubeUrl: "https://www.youtube.com/watch?v=SSONyEwb994",
    title: "Episode 5",
  },
  {
    id: "VBtYm4CLSWI",
    youtubeUrl: "https://www.youtube.com/watch?v=VBtYm4CLSWI",
    title: "Episode 6",
  },
];

// Helper: build thumbnail URL from video ID
export const getYouTubeThumbnail = (id: string) =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export const FEATURED_PODCAST =
  PODCAST_EPISODES.find((ep) => ep.isFeatured) ?? PODCAST_EPISODES[0];
