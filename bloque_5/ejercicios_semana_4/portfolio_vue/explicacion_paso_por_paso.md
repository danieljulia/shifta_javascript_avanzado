# Guía Paso a Paso: Portfolio con Vue.js

Esta guía te llevará através del proceso completo de creación de un portfolio multi-página usando Vue.js, Vue Router y despliegue en Netlify.

## 1. Configuración Inicial del Proyecto

### 1.1 Crear el proyecto Vue.js
```bash
npm create vite@latest portfolio_shifta
```
> **Importante:** Selecciona las siguientes opciones:
> - Framework: **Vue**
> - Variant: **JavaScript**

### 1.2 Verificar la instalación
```bash
cd portfolio_shifta
npm install
npm run dev
```
**Resultado esperado:** El servidor de desarrollo se ejecuta en `http://localhost:5173`

### 1.3 Crear repositorio en GitHub
1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. Sigue las instrucciones para conectar tu proyecto local

---

## 2. Configuración del Router

### 2.1 Instalar Vue Router
```bash
npm install vue-router
```

### 2.2 Modificar `main.js`
Actualiza el archivo para incluir el router:

```javascript
import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'  // ← Nueva importación

const app = createApp(App)
app.use(router)              // ← Configurar router
app.mount('#app')
```

### 2.3 Crear `router.js`
Crea un nuevo archivo en la raíz del proyecto:

```javascript
// router.js
import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/Home.vue"
import Project from "./components/Project.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/project/:id", component: Project }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

---

## 3. Crear Componentes Base

### 3.1 Modificar `App.vue`
Simplifica el componente principal:

```vue
<template>
  <router-view />
</template>
```

### 3.2 Crear `components/Home.vue`
```vue
<template>
  <header>
    <h1>My Portfolio</h1>
  </header>
  
  <main>
    <section class="hero">
      <h2>Welcome to My Portfolio</h2>
      <p>Here are some of my recent projects</p>
    </section>
    
    <section class="projects-grid" id="projects-container">
      <ProjectCard v-for="project in projects" 
                   :key="project.id" 
                   :project="project" />
    </section>
  </main>
  
  <footer>
    <p>&copy; 2024 My Portfolio. All rights reserved.</p>
  </footer>
</template>

<script>
import { inject } from 'vue'
import ProjectCard from './ProjectCard.vue'

export default {
  components: {
    ProjectCard
  },
  setup() {
    const projects = inject('projects')
    return { projects }
  }
}
</script>
```

### 3.3 Crear `components/ProjectCard.vue`
```vue
<template>
  <div class="project-card">
    <div class="project-image">
      <img :src="project.image" :alt="project.name">
    </div>
    <div class="project-content">
      <h3 class="project-name">{{ project.name }}</h3>
      <router-link :to="`/project/${project.id}`" class="project-link">
        Ver detalles →
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
```

### 3.4 Crear `components/Project.vue`
```vue
<template>
  <div class="project-detail">
    <h1>Project {{ $route.params.id }}</h1>
    <div v-if="currentProject">
      <img :src="currentProject.image" :alt="currentProject.name">
      <h2>{{ currentProject.name }}</h2>
      <p>{{ currentProject.description }}</p>
    </div>
    <router-link to="/" class="back-link">← Volver al inicio</router-link>
  </div>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  setup() {
    const projects = inject('projects')
    const route = useRoute()
    
    const currentProject = computed(() => {
      return projects.value.find(p => p.id == route.params.id)
    })
    
    return { currentProject }
  }
}
</script>
```

**Verificación:** Comprueba que puedes navegar entre las rutas `/` y `/project/1`

---

## 4. Sistema de Datos de Proyectos

### 4.1 Actualizar `main.js` para cargar datos
```javascript
import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Crear referencia reactiva para proyectos
const projects = ref([])

// Proporcionar proyectos globalmente
app.provide('projects', projects)

// Cargar proyectos desde JSON
fetch('/projects.json')
  .then(response => response.json())
  .then(data => {
    projects.value = data.projects
  })
  .catch(error => console.error('Error loading projects:', error))

app.use(router).mount('#app')
```

### 4.2 Crear `public/projects.json`
```json
{
  "projects": [
    {
      "id": 1,
      "name": "Proyecto Web App",
      "description": "Una aplicación web moderna con Vue.js",
      "image": "/images/project1.jpg",
      "tech": ["Vue.js", "CSS", "JavaScript"]
    },
    {
      "id": 2,
      "name": "E-commerce Site", 
      "description": "Tienda online responsive",
      "image": "/images/project2.jpg",
      "tech": ["Vue.js", "API", "Bootstrap"]
    }
  ]
}
```

---

## 5. Mejoras de Estructura

### 5.1 Separar Header y Footer (Opcional)
Crea componentes reutilizables:
- `components/Header.vue`
- `components/Footer.vue`

### 5.2 Navegación entre proyectos
Utiliza `router-link` para crear enlaces navegables:
```html
<router-link :to="`/project/${project.id}`">
  {{ project.name }}
</router-link>
```

---

## 6. Build y Despliegue

### 6.1 Crear build de producción
```bash
npm run build
```
**Resultado:** Se genera la carpeta `dist/` con los archivos optimizados

### 6.2 Subir a GitHub
```bash
git add .
git commit -m "Portfolio Vue.js terminado"
git push origin main
```

### 6.3 Despliegue en Netlify

#### Método 1: Drag & Drop
1. Ve a [Netlify](https://www.netlify.com)
2. Arrastra la carpeta `dist/` a la zona de despliegue

#### Método 2: Conexión con GitHub
1. Conecta tu repositorio de GitHub
2. Configura:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

**Resultado:** Tu portfolio estará disponible en una URL de Netlify

---

## 7. Analíticas y Seguimiento

### 7.1 Añadir Google Analytics
1. Crea una propiedad en [Google Analytics](https://analytics.google.com)
2. Obtén tu código de seguimiento
3. Añádelo al `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 7.2 Volver a desplegar
```bash
npm run build
```
Sube los nuevos archivos a Netlify

### 7.3 Verificar funcionamiento
1. Visita tu sitio web
2. Ve a Google Analytics → Tiempo real
3. Verifica que aparezcan las visitas

---

## Checklist Final

- [ ] Proyecto Vue.js creado con Vite
- [ ] Vue Router configurado con múltiples rutas
- [ ] Componentes Home y Project funcionando
- [ ] Sistema de datos JSON implementado
- [ ] Navegación entre proyectos operativa
- [ ] Build de producción generado
- [ ] Código subido a GitHub
- [ ] Sitio desplegado en Netlify
- [ ] Google Analytics configurado
- [ ] Analíticas funcionando en tiempo real

## Portfolio Completado

Tu portfolio Vue.js está ahora completamente funcional y desplegado. Puedes seguir añadiendo más proyectos editando el archivo `projects.json` y mejorando los estilos CSS.
