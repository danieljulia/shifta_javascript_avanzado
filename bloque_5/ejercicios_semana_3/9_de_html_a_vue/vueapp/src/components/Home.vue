<template>

   <a v-for="p in projects" :key="p.id" class="project-card" :href="projectUrl(p.id)">
      <h2>{{  p.title }}</h2>
      <p>{{ p.description }}</p>
    </a>

   

</template>

<script setup>
import { projects } from '../data/projects.js'

const projectUrl = (id) => `/project/${id}`
</script>
