<script setup>
// Cabecera con el título y el menú de navegación.
import { state } from '../store.js'
</script>

<template>
  <header>
    <h1>{{ state.site.title }}</h1>
    <!-- RouterLink es como <a>, pero cambia de ruta SIN recargar la página.
         Al enlace de la ruta activa le añade la clase router-link-active (ver style.css) -->
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/proyectos">Proyectos</RouterLink>
      <RouterLink to="/contacto">Contacto</RouterLink>
    </nav>
  </header>
</template>
