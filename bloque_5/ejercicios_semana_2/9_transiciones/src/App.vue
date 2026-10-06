<template>
  <div class="container">
    <h1>&lt;Transition&gt; en Vue</h1>
    <p class="subtitle">Ejemplos simples de animaciones al mostrar/ocultar elementos.</p>

    <div class="grid">
      <FadeDemo />
      <SlideDemo />
      <ModeDemo />
    </div>
  </div>
</template>

<script>
import FadeDemo from './components/FadeDemo.vue'
import SlideDemo from './components/SlideDemo.vue'
import ModeDemo from './components/ModeDemo.vue'

export default {
  name: 'App',
  components: {
    FadeDemo,
    SlideDemo,
    ModeDemo
  }
}
</script>
