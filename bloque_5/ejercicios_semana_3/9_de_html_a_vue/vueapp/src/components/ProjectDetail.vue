<template>
  <main class="container">
    <template v-if="project">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
    </template>

    <template v-else>
      <h1>Proyecto no encontrado</h1>
      <p>El proyecto con id {{ route.params.id }} no existe.</p>
    </template>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'

const route = useRoute()

const project = computed(() => {
  const id = Number(route.params.id)
  return projects.find((item) => item.id === id)
})
</script>
