# 6_vue-simple-cdn-multipage

Portfolio de varias páginas con Vue 3 desde CDN (sin Node ni compilación).

- Tiene diferentes páginas: `index.html`, `projects.html` y `about.html`
- `js/app.js` define los componentes que se reutilizan en todas las páginas (`SiteHeader` y `SiteFooter`)
  y carga `data/data.json` con los proyectos
- Cada página define su propio componente con una plantilla `<template id="...">` dentro del HTML

Como carga un JSON con `fetch`, hay que abrirlo desde un servidor (Live Server, `vite`...), no con doble clic.
