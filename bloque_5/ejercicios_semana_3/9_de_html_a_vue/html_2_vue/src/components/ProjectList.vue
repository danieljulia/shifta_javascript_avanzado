<!-- Vista del listado de proyectos: pinta una tarjeta (ProjectCard) por proyecto -->
<template>

<div class="container">

<h1>Project List</h1>

<div class="project-list">

<!-- v-for repite el componente por cada proyecto del array.
     :project="p" pasa cada proyecto al hijo como prop
     :key es obligatorio y debe ser único para que Vue identifique cada tarjeta -->
<ProjectCard
v-for="p in projects"
:key="p.id"
:project="p"
/>

</div>

</div>

</template>

<script setup>
// <script setup>: Composition API de Vue 3.
// Los componentes y datos importados aquí se pueden usar directamente
// en el template, sin registrar nada (a diferencia de la Options API)
import ProjectCard from "./ProjectCard.vue"
// projects es un array de datos estáticos importado de un módulo aparte
import { projects } from "../data/projects"

</script>
