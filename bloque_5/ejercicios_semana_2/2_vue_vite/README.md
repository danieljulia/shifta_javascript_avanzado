# 2_vue_vite

Contador con Vue 3 + Vite usando el paquete npm de Vue (no hay CDN).

```bash
npm install        # instala vue, vite y el plugin de Vue
npm run dev        # servidor de desarrollo con recarga en caliente
npm run build      # versión de producción en la carpeta dist
npm run preview    # prueba local del resultado de build
```

Archivos:

- `index.html`: página con `<div id="app">` y el script de entrada
- `app.js`: crea y monta la aplicación
- `App.vue`: componente raíz (template + script + style)
- `vite.config.js`: registra el plugin de Vue
