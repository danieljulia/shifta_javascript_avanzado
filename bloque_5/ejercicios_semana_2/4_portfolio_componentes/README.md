# 4_portfolio_componentes

El portfolio dividido en **componentes** (Vue 3 + Vite):

```
App.vue                    → componente raíz (usa <script setup>)
├── Menu.vue               → cabecera con el menú
└── Content.vue            → carga data/projects.json y decide qué mostrar
    └── ProjectCard.vue    → tarjeta de un proyecto (recibe el proyecto por una prop)
```

- Los datos están en `public/data/projects.json`.
- Listado: `index.html`. Detalle de un proyecto: `index.html?id=1` (se lee con `URLSearchParams`).
- `vite.config.js` usa `base: './'` y el `fetch` usa `import.meta.env.BASE_URL`, así `dist` funciona en cualquier carpeta.

```bash
npm install
npm run dev
npm run build
```
