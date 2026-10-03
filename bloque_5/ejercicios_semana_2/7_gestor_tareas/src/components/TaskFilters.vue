<!-- Botones de filtro. :class aplica la clase "active" al botón del filtro actual -->
<template>
  <div class="filters">
    <button 
      class="filter-btn" 
      :class="{ active: currentFilter === 'all' }"
      @click="$emit('change-filter', 'all')"
    >
      Todas
    </button>
    <button 
      class="filter-btn" 
      :class="{ active: currentFilter === 'pending' }"
      @click="$emit('change-filter', 'pending')"
    >
      Pendientes
    </button>
    <button 
      class="filter-btn" 
      :class="{ active: currentFilter === 'completed' }"
      @click="$emit('change-filter', 'completed')"
    >
      Completadas
    </button>
  </div>
</template>

<script>
export default {
  name: 'TaskFilters',
  // prop recibida del padre y evento emitido hacia el padre
  props: {
    currentFilter: {
      type: String,
      required: true
    }
  },
  emits: ['change-filter']
}
</script>
