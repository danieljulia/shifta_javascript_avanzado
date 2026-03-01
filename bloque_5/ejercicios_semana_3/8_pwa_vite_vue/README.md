# PWA con Vite + Vue

Ejemplo sencillo de **Progressive Web App** usando Vite, Vue 3 y `vite-plugin-pwa`.

## ¿Qué incluye?

| Feature | Cómo se implementa |
|---|---|
| Manifest | `vite-plugin-pwa` lo genera e inyecta automáticamente |
| Service Worker | Workbox vía `vite-plugin-pwa` (estrategia cache-first) |
| Modo offline | Assets precacheados + `localStorage` para las notas |
| Instalable | Banner `beforeinstallprompt` en `InstallBanner.vue` |
| Estado online/offline | Listeners `online/offline` en `App.vue` |

## Estructura

```
8_pwa_vite_vue/
├── public/
│   ├── favicon.svg
│   └── icons/
│       ├── icon-192.svg
│       └── icon-512.svg
└── src/
    ├── main.js
    ├── style.css
    ├── App.vue
    └── components/
        ├── NotesList.vue      → Notas guardadas en localStorage
        └── InstallBanner.vue  → Banner para instalar la PWA
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

> En modo dev, el service worker está habilitado (`devOptions.enabled: true`).

## Producción

```bash
npm run build
npm run preview
```

Abre `http://localhost:4173` y en Chrome verás el botón de instalación en la barra de direcciones.

## Cómo probar el modo offline

1. Abre DevTools → Application → Service Workers → "Offline"
2. Recarga la página: sigue funcionando y las notas se conservan.
