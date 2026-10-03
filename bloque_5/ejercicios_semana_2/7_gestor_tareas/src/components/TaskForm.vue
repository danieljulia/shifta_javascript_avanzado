<!-- Formulario: gestiona su propio texto y avisa al padre con el evento add-task -->
<template>
  <!-- @submit.prevent evita que el formulario recargue la página -->
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
  emits: ['add-task'], // eventos que declara este componente
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    submitTask() {
      const text = this.newTask.trim()
      if (text) {
        // $emit envía el evento al componente padre con el texto como dato
        this.$emit('add-task', text)
        this.newTask = ''
      }
    }
  }
}
</script>
