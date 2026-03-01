<template>
  <div class="card">
    <h3>Mensaje compartido</h3>
    <p>Actual: <strong>{{ store.message }}</strong></p>
    <input
      type="text"
      :value="store.message"
      @input="store.updateMessage($event.target.value)"
      placeholder="Escribe un mensaje"
    />
  </div>
</template>

<script>
import { useGlobalStore } from '../stores/globalStore'

export default {
  name: 'MessagePanel',
  setup() {
    const store = useGlobalStore()
    return { store }
  }
}
</script>
