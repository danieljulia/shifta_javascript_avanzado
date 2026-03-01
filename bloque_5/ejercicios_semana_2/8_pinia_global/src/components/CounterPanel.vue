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
    const store = useGlobalStore()
    return { store }
  }
}
</script>
