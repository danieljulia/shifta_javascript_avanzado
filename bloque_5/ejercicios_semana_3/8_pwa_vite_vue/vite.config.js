import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      // Precachear todos los assets del build
      includeAssets: ['favicon.svg', 'icons/*.svg'],
      manifest: {
        name: 'PWA con Vue + Vite',
        short_name: 'PWA Vue',
        description: 'Ejemplo simple de PWA con Vite, Vue y soporte offline',
        theme_color: '#667eea',
        background_color: '#f5f6fa',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icons/icon-192.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'icons/icon-512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        // Estrategia: cache-first para recursos estáticos
        globPatterns: ['**/*.{js,css,html,ico,svg,woff2}'],
        runtimeCaching: [
          {
            // Llamadas a APIs externas → network-first con fallback a cache
            urlPattern: /^https:\/\/.*\/api\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 // 24 h
              }
            }
          }
        ]
      },
      // Muestra consola de SW en dev
      devOptions: {
        enabled: true
      }
    })
  ]
})
