<script setup>
// Componente raíz de la app: define la estructura común a todas las "páginas"
// <script setup> es la forma moderna de usar la Composition API en Vue 3
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>

  <Header/>
  <!-- router-view es el "hueco" donde el router pinta el componente
       de la ruta actual (Home, About, Project...) -->
  <router-view />
 
  <Footer></Footer>
</template>
