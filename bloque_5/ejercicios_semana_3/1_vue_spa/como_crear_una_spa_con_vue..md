# Cómo crear una SPA simple con Vue

Este documento explica cómo generar y ejecutar una **SPA (Single Page Application)** con **Vue 3**. Veremos dos formas:  
1. Usando un solo archivo HTML con Vue desde un CDN (rápido, sin build tools).  
2. Usando **Vite** en la línea de comandos (recomendado para proyectos reales).  

---

## 1. Opción rápida: un solo archivo HTML

Puedes crear un archivo `index.html` con este contenido y abrirlo en el navegador:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SPA con Vue</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://unpkg.com/vue-router@4"></script>
</head>
<body>
  <div id="app">
    <h1>Mi SPA con Vue</h1>
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/about">Acerca de</router-link>
    </nav>
    <router-view></router-view>
  </div>

  <script>
    const Home = { template: "<div><h2>Inicio</h2><p>Bienvenido a la página principal.</p></div>" }
    const About = { template: "<div><h2>Acerca de</h2><p>Esta es una SPA simple con Vue.</p></div>" }

    const routes = [
      { path: "/", component: Home },
      { path: "/about", component: About }
    ]

    const router = VueRouter.createRouter({
      history: VueRouter.createWebHashHistory(),
      routes
    })

    const app = Vue.createApp({})
    app.use(router)
    app.mount("#app")
  </script>
</body>
</html>
```

👉 Con esto ya tienes una SPA funcionando, con navegación entre páginas sin recargar el navegador.

---

## 2. Opción recomendada: crear proyecto con Vite

La forma moderna de crear proyectos Vue es usando **Vite**. Esto nos permite trabajar con componentes `.vue`, hot reload y una estructura lista para crecer.

### Pasos en la línea de comandos

```bash
# Crear un nuevo proyecto con Vite
npm create vite@latest mi-vue-spa

# Entrar en la carpeta
cd mi-vue-spa

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Esto abrirá el proyecto en `http://localhost:5173`.

Durante la creación, Vite preguntará:
- **Framework:** elegir `Vue`  
- **Variant:** elegir `JavaScript`

---

## 3. Añadir Vue Router

Instalamos **vue-router**:

```bash
npm install vue-router
```

Creamos el archivo `src/router.js`:

```js
import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/Home.vue"
import About from "./components/About.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

---

## 4. Conectar el router a la app

Editar `src/main.js`:

```js
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

createApp(App).use(router).mount("#app")
```

Editar `src/App.vue`:

```vue
<template>
  <div>
    <h1>Mi SPA con Vue</h1>
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/about">Acerca de</router-link>
    </nav>
    <router-view />
  </div>
</template>
```

---

## 5. Crear componentes de ejemplo

Archivo `src/components/Home.vue`:

```vue
<template>
  <div>
    <h2>Página de inicio</h2>
    <p>Bienvenido a la página principal.</p>
  </div>
</template>
```

Archivo `src/components/About.vue`:

```vue
<template>
  <div>
    <h2>Página Acerca de</h2>
    <p>Esta es una SPA usando Vue y Vite.</p>
  </div>
</template>
```

---

## 6. Ejecutar la aplicación

```bash
npm run dev
```

Ahora tendrás una SPA en Vue con dos páginas (`Inicio` y `Acerca de`) navegando sin recargar la página.

---

## Conclusión

- La opción rápida con **CDN** es útil para aprender o hacer pruebas.  
- La opción con **Vite** es ideal para proyectos reales: te permite escalar, organizar componentes y usar todas las ventajas modernas del ecosistema Vue.  
