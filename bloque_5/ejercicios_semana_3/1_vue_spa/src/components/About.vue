<script setup>
// Vista About. CORREGIDO: se ha quitado lang="ts" porque este proyecto es
// JavaScript puro (no tiene TypeScript instalado) y rompería la compilación
import HelloWorld from './HelloWorld.vue';

</script>

<template>
    <div>
      <h2>About Page</h2>
      <p>This is a simple SPA using Vue and Vite.</p>
    </div>
    <!-- Ejemplo de cómo pasar una prop a un componente hijo:
    <HelloWorld
    msg="Hello from About.vue"
  />  -->
  </template>
