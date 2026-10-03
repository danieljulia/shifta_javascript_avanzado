<!-- Componente raíz: solo organiza la página con otros componentes.
     Con <script setup> los componentes importados se pueden usar directamente en la plantilla -->
<script setup>
import Menu from './components/Menu.vue'
import Content from './components/Content.vue'
</script>

<template>
  <Menu />
  <Content />
</template>
