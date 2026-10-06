<!-- mode="out-in": espera a que el elemento actual SALGA antes de que entre el nuevo -->
<template>
  <div class="card">
    <h3>mode="out-in" (cambio de vista)</h3>
    <p>Se alternan dos elementos: uno sale y luego entra el otro.</p>
    <button @click="vista = vista === 'A' ? 'B' : 'A'" class="secondary">
      Cambiar vista
    </button>

    <!-- Importante: cuando hay varios elementos en un Transition,
         cada uno necesita una :key distinta para que Vue los diferencie -->
    <Transition name="zoom" mode="out-in">
      <div v-if="vista === 'A'" key="a" class="box">Vista A</div>
      <div v-else key="b" class="box" style="background: #e17055;">Vista B</div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'ModeDemo',
  data() {
    return {
      vista: 'A'
    }
  }
}
</script>
