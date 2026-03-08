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