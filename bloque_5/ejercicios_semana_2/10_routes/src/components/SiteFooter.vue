<script setup>
// Pie de página; el texto viene del JSON.
import { state } from '../store.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer>© {{ year }} · {{ state.site.footer }}</footer>
</template>
