<!-- Este componente no tiene datos propios: lee y modifica el mensaje del store global -->
<template>
  <div class="card">
    <h3>Mensaje compartido</h3>
    <p>Actual: <strong>{{ store.message }}</strong></p>
    <!-- :value + @input equivale a v-model, pero pasando por la acción del store -->
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
    // Obtenemos el store: es el MISMO objeto en todos los componentes que lo usan
    const store = useGlobalStore()
    return { store }
  }
}
</script>
