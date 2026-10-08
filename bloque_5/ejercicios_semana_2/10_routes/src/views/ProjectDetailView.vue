<script setup>
// Detalle de un proyecto: la URL es /proyecto/<id>.
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { state } from '../store.js'

// useRoute() devuelve la ruta actual (reactiva): si cambia la URL, se recalcula todo.
const route = useRoute()

// route.params.id es un string ("1"); en el JSON el id es un número,
// por eso lo convertimos con Number() antes de comparar.
const project = computed(() =>
  state.projects.find(p => p.id === Number(route.params.id))
)
</script>

<template>
  <section class="detail">
    <template v-if="project">
      <h2>{{ project.name }}</h2>
      <img :src="project.image" :alt="project.name" />
      <p>{{ project.description }}</p>
      <p><strong>Tecnología:</strong> {{ project.tech }}</p>
      <p><a :href="project.url" target="_blank" rel="noopener">Visitar sitio</a></p>
    </template>
    <!-- Si el id no existe en el JSON -->
    <p v-else class="error">No existe el proyecto {{ route.params.id }}.</p>
    <RouterLink to="/proyectos">← Volver a proyectos</RouterLink>
  </section>
</template>
