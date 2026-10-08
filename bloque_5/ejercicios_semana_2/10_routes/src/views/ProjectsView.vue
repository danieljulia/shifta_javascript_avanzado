<script setup>
// Lista de proyectos: una ProjectCard por cada elemento del array del JSON.
import { state } from '../store.js'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <section>
    <h2>Proyectos</h2>
    <div class="grid">
      <!-- :key ayuda a Vue a identificar cada tarjeta; :project es la prop -->
      <ProjectCard v-for="p in state.projects" :key="p.id" :project="p" />
    </div>
  </section>
</template>
