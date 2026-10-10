// Configuración de Vite para la PWA
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// vite-plugin-pwa genera por nosotros el service worker (con Workbox) y el
// manifest.webmanifest, y los registra automáticamente al cargar la app.
// Gracias a eso la web funciona offline y es instalable como app.
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      // autoUpdate: cuando hay una versión nueva del service worker,
      // se actualiza solo sin pedir confirmación al usuario
      registerType: 'autoUpdate',
      // Precachear todos los assets del build
      includeAssets: ['favicon.svg', 'icons/*.svg'],
      // manifest: metadatos que el navegador usa al "instalar" la app
      // (nombre, colores, iconos en la pantalla de inicio, etc.)
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
      // workbox: librería de Google que gestiona la caché dentro del service worker
      workbox: {
        // Estrategia: cache-first para recursos estáticos
        globPatterns: ['**/*.{js,css,html,ico,svg,woff2}'],
        runtimeCaching: [
          {
            // Llamadas a APIs externas → network-first con fallback a cache:
            // intenta la red y, si no hay conexión, sirve la última respuesta cacheada
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
      // Muestra consola de SW en dev: permite probar el service worker
      // también con "vite dev", sin necesidad de hacer build
      devOptions: {
        enabled: true
      }
    })
  ]
})
