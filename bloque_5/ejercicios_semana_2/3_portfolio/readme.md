# 3_portfolio

Portfolio sencillo con Vue 3 + Vite. Los contenidos se leen de `public/data.json` con `fetch`
(en el hook `mounted`) y se pintan con `v-for`.

`vite.config.js` usa `base: './'` para que las rutas sean relativas y la carpeta `dist`
funcione en cualquier subcarpeta del servidor.

```bash
npm install
npm run dev        # modo desarrollo
npm run build      # versión de producción en dist
npm run preview    # prueba local de dist
```
