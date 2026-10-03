<!-- Una tarea. Recibe la tarea por prop y emite eventos: no modifica los datos directamente -->
<template>
  <li class="task-item" :class="{ completed: task.completed }">
    <!-- :checked (no v-model) porque el dato pertenece al padre -->
    <input 
      type="checkbox" 
      class="task-checkbox"
      :checked="task.completed"
      @change="$emit('toggle-task', task.id)"
    >
    <span class="task-text">{{ task.text }}</span>
    <button 
      class="delete-btn" 
      @click="$emit('delete-task', task.id)"
    >
      🗑️
    </button>
  </li>
</template>

<script>
export default {
  name: 'TaskItem',
  // props: datos recibidos del padre (solo lectura)
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  emits: ['toggle-task', 'delete-task']
}
</script>
