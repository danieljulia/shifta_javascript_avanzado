Pasos para convertir html a vue:

- Crear una plantilla de vue, 
elegir 
    Vue
    JavaScript

npm create vite@latest

- Instalar vue router
npm install vue-router

- Ya podemos probar la plantilla
npm run dev
 

- Separar los datos en data/projects.js
(también se puede usar un json externo)

- Copiar nuestro css en src/style.css

- Crear un componente para cada sección de la página
    - Home.vue
    - Projects.vue
    - Contact.vue

- Añadir el router en main.js
debe quedar así 

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

- Crear el router en src/router/index.js 

import { createRouter, createWebHistory } from "vue-router"

import ProjectsPage from "../pages/ProjectsPage.vue"
import ProjectDetail from "../pages/ProjectDetail.vue"

const routes = [

{
path: "/",
component: ProjectsPage
},

{
path: "/project/:id",
component: ProjectDetail
}

]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router

- Modificar App.vue para que tenga un router-view, borrar el contenido que ya no necesitamos y añadir un header con un enlace a home. Debe quedar así:

<template>

<header class="header">
  <router-link to="/">
    <h1>Projects</h1>
  </router-link>
</header>

<router-view />

</template>

- Definir el componente ProjectCard a partir del html que teníamos
src/components/ProjectCard.vue
 <template>

<router-link
  class="project-card"
  :to="`/project/${project.id}`"
>

<h2>{{ project.title }}</h2>
<p>{{ project.description }}</p>

</router-link>

</template>

<script setup>

defineProps({
project:Object
})

</script>

- Definir el componente ProjectList 
src/components/ProjectList.vue
<template>

<div class="container">

<h1>Project List</h1>

<div class="project-list">

<ProjectCard
v-for="p in projects"
:key="p.id"
:project="p"
/>

</div>

</div>

</template>

<script setup>

import ProjectCard from "./ProjectCard.vue"
import { projects } from "../data/projects"

</script>

- Y el componente ProjectDetail

<template>

<div class="container">

<router-link to="/">← Back</router-link>

<h1>{{ project.title }}</h1>

<p>{{ project.description }}</p>

</div>

</template>

<script setup>

import { useRoute } from "vue-router"
import { projects } from "../data/projects"

const route = useRoute()

const project = projects.find(
p => p.id == route.params.id
)

</script>

- Con esto nuestra app ya debería funcionar
- Es muy posible que también tengamos un footer que podemos convertir en un componente y añadirlo a App.vue para que se muestre en todas las páginas.
- Para esto creamos src/components/Footer.vue
- Y lo añadimos a App.vue
<template>
<header class="header">
  <router-link to="/">
    <h1>Projects</h1>
  </router-link>
</header>

<router-view />
<Footer />
</template>

<script setup>
import Footer from "./components/Footer.vue"
</script>

    
