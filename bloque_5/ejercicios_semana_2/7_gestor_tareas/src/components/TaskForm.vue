<template>
  <form class="task-form" @submit.prevent="submitTask">
    <input 
      type="text" 
      v-model="newTask" 
      placeholder="¿Qué necesitas hacer?"
      autofocus
    >
    <button type="submit">Añadir</button>
  </form>
</template>

<script>
export default {
  name: 'TaskForm',
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    submitTask() {
      const text = this.newTask.trim()
      if (text) {
        this.$emit('add-task', text)
        this.newTask = ''
      }
    }
  }
}
</script>
