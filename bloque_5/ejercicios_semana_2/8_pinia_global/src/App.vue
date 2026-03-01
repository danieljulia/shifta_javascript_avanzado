<template>
  <div class="container">
    <h1>Pinia: Datos globales</h1>
    <p class="subtitle">Dos componentes comparten el mismo estado.</p>

    <div class="grid">
      <CounterPanel />
      <MessagePanel />
    </div>
  </div>
</template>

<script>
import CounterPanel from './components/CounterPanel.vue'
import MessagePanel from './components/MessagePanel.vue'

export default {
  name: 'App',
  components: {
    CounterPanel,
    MessagePanel
  }
}
</script>
