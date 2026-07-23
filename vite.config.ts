import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// Project site: https://<user>.github.io/countryCapitals/
export default defineConfig({
  base: '/countryCapitals/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'apple-touch-icon.png', 'hero-mist.jpg'],
      manifest: {
        name: 'Madang — Learn Korean through stories',
        short_name: 'Madang',
        description:
          'Free Korean learning through short folklore and everyday stories, with English only when you need it.',
        lang: 'en',
        start_url: '/countryCapitals/',
        scope: '/countryCapitals/',
        display: 'standalone',
        background_color: '#eef4f0',
        theme_color: '#2f5f4f',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,ico}'],
        // Story art is fetched lazily and cached on first view instead of
        // being precached, to keep the initial install light.
        globIgnores: ['**/story-art/**'],
        runtimeCaching: [
          {
            urlPattern: /\/story-art\/.*\.jpg$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'story-art',
              expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 180 },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets',
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
})
