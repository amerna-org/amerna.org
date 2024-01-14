import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import AstroPWA from "@vite-pwa/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    astroI18next(),
    AstroPWA({
      mode: "development",
      base: "/",
      scope: "/",
      includeAssets: ["icons/favicon.svg"],
      registerType: "autoUpdate",
      manifest: {
        name: "Amerna.org",
        short_name: "Amerna",
        theme_color: "#3D2EE0",
        description: "Do you have a project idea but you need the expertise and resources to make it happen? At Amerna, we provide you with the support you need to bring your ideas to life successfully!",
        icons: [
          {
            src: "icons/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "maskable any",
          },
          {
            src: "icons/favicon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/favicon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/favicon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\//],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
  ],
});
