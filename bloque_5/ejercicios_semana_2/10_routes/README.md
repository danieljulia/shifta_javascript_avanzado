# 10_routes

Aplicación de varias páginas con **Vue 3 + Vue Router 4** y Vite (npm).

## Páginas

| Ruta | Vista |
|------|-------|
| `#/` | Home |
| `#/proyectos` | Lista de proyectos |
| `#/proyecto/:id` | Detalle de un proyecto |
| `#/contacto` | Contacto |

## Estructura

- `src/main.js` → carga el JSON, crea la app e instala el router
- `src/router.js` → tabla de rutas
- `src/store.js` → estado compartido + `loadData()`
- `src/App.vue` → componente raíz (cabecera, `<RouterView>`, pie)
- `src/components/` → componentes reutilizables (`SiteHeader`, `SiteFooter`, `ProjectCard`)
- `src/views/` → un componente por página
- `public/data/data.json` → **todo el contenido**

## Editar contenido en producción

`public/` se copia tal cual a `dist/` al compilar, sin entrar en el JavaScript.
Por eso `dist/data/data.json` se puede editar en el servidor (cambiar textos, añadir proyectos...)
y basta con recargar el navegador: **no hay que volver a ejecutar `npm run build`**.

## Uso

```bash
npm install
npm run dev       # desarrollo
npm run build     # genera dist/
npm run preview   # sirve dist/
```
