<!-- Ejemplo básico: <Transition> envuelve un elemento que aparece/desaparece con v-if -->
<template>
  <div class="card">
    <h3>Fade (aparecer / desaparecer)</h3>
    <p>El cuadro se muestra y oculta con un fundido.</p>
    <button @click="visible = !visible">
      {{ visible ? 'Ocultar' : 'Mostrar' }}
    </button>

    <!-- name="fade" hace que Vue use las clases .fade-enter-*, .fade-leave-* -->
    <Transition name="fade">
      <div v-if="visible" class="box">¡Hola! Aparezco suavemente</div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'FadeDemo',
  data() {
    return {
      visible: true
    }
  }
}
</script>
