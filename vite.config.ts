import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, ".", "");

  return {
    /**
     * IMPORTANT for GitHub Pages
     * Must match your repo name exactly
     */
    base: "/Sparkle-in-style-main/",

    plugins: [react()],

    /**
     * Local dev server (does NOT affect GitHub Pages)
     */
    server: {
      port: 3000,
      host: "0.0.0.0",
    },

    /**
     * Expose env vars safely
     */
    define: {
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },

    /**
     * Path aliases
     */
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
