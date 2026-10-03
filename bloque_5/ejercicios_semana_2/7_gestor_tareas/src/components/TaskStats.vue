<!-- Estadísticas calculadas con computed a partir de la prop tasks -->
<template>
  <div class="stats">
    <span>📊 Total: {{ tasks.length }}</span>
    <span>⏳ Pendientes: {{ pendingCount }}</span>
    <span>✅ Completadas: {{ completedCount }}</span>
  </div>
</template>

<script>
export default {
  name: 'TaskStats',
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  computed: {
    completedCount() {
      return this.tasks.filter(t => t.completed).length
    },
    pendingCount() {
      return this.tasks.filter(t => !t.completed).length
    }
  }
}
</script>
