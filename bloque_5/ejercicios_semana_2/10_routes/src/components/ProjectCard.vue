<script setup>
// Tarjeta de un proyecto. Se reutiliza en la lista de proyectos.
// defineProps declara los datos que le pasa el componente padre.
defineProps({
  project: { type: Object, required: true }
})
</script>

<template>
  <article class="card">
    <img :src="project.image" :alt="project.name" />
    <h3>{{ project.name }}</h3>
    <p>{{ project.summary }}</p>
    <!-- :to con un objeto navega por NOMBRE de ruta y le pasa el parámetro id -->
    <RouterLink :to="{ name: 'project', params: { id: project.id } }">Ver detalle →</RouterLink>
  </article>
</template>
