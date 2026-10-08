<script setup>
// Componente raíz: estructura común a todas las páginas.
import { state } from './store.js'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <p v-if="state.error" class="error">{{ state.error }}</p>
    <!-- RouterView pinta aquí el componente de la ruta actual -->
    <RouterView />
  </main>
  <SiteFooter />
</template>
