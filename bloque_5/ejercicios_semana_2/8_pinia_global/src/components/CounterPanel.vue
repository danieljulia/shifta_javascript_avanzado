<!-- Este componente no tiene datos propios: lee y modifica el contador del store global -->
<template>
  <div class="card">
    <h3>Contador global</h3>
    <div class="counter">{{ store.counter }}</div>
    <div>
      <button @click="store.decrement" class="secondary">-</button>
      <button @click="store.increment">+</button>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '../stores/globalStore'

export default {
  name: 'CounterPanel',
  setup() {
    // Obtenemos el store: es el MISMO objeto en todos los componentes que lo usan
    const store = useGlobalStore()
    return { store }
  }
}
</script>
