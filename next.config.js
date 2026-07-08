const withPWAInit = require("@ducanh2912/next-pwa").default;
const createNextIntlPlugin = require('next-intl/plugin');

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      // Pages statiques disponibles hors-ligne
      {
        urlPattern: /\/(|services|a-propos|faq|simulateur|reseau|publications|mentions-legales)$/,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "pages-cache",
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 jours
          },
        },
      },
      // Cache images
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "images-cache",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 jours
          },
        },
      },
      // Cache polices Google Fonts
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 an
          },
        },
      },
      // Cache JS/CSS statiques
      {
        urlPattern: /\.(?:js|css)$/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "static-assets-cache",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 jours
          },
        },
      },
    ],
  },
});

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Webpack (requis pour next-pwa — incompatible avec Turbopack)
};

module.exports = withNextIntl(withPWA(nextConfig));
