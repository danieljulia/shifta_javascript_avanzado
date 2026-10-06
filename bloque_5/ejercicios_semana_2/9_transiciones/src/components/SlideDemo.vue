<!-- Otra transición con nombre distinto: cada name usa sus propias clases CSS -->
<template>
  <div class="card">
    <h3>Slide (notificación)</h3>
    <p>La notificación entra y sale deslizándose.</p>
    <button @click="mostrar">
      Mostrar notificación
    </button>

    <Transition name="slide">
      <div v-if="visible" class="notification">
        Guardado correctamente
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'SlideDemo',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    mostrar() {
      this.visible = true
      // La ocultamos automáticamente después de 2 segundos
      setTimeout(() => {
        this.visible = false
      }, 2000)
    }
  }
}
</script>
