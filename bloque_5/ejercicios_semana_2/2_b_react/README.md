# 2_b_react

Contador con React + Vite usando el paquete npm de React (no hay CDN). Equivalente al ejemplo `2_vue_vite`.

```bash
npm install        # instala react, react-dom, vite y el plugin de React
npm run dev        # servidor de desarrollo con recarga en caliente
npm run build      # versión de producción en la carpeta dist
npm run preview    # prueba local del resultado de build
```

Archivos:

- `index.html`: página con `<div id="app">` y el script de entrada
- `main.jsx`: crea la raíz y renderiza la aplicación
- `App.jsx`: componente raíz (JSX + lógica con `useState`)
- `App.css`: estilos del componente (equivalente al `<style scoped>` de Vue)
- `vite.config.js`: registra el plugin de React

Diferencias con la versión de Vue:

- Vue usa `<template>` y `@click`; React usa JSX y `onClick`
- El estado se declara con `useState` en lugar de `data()`
- Los estilos van en un archivo CSS aparte que se importa
