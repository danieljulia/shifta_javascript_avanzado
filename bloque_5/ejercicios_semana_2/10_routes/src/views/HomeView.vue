<script setup>
// Página de inicio: todo el contenido sale del JSON.
import { state } from '../store.js'
</script>

<template>
  <section>
    <h2>{{ state.home.heading }}</h2>
    <p>{{ state.home.text }}</p>
  </section>
</template>
