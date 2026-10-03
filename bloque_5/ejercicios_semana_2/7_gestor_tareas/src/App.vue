<template>
  <div class="container">
    <h1>📋 Gestor de Tareas</h1>
    
    <!-- Formulario para añadir tareas -->
    <TaskForm @add-task="addTask" />
    
    <!-- Filtros: reciben el filtro actual (prop) y avisan con un evento cuando cambia -->
    <TaskFilters
      :currentFilter="filter"
      @change-filter="changeFilter"
    />

    <!-- Estadísticas: solo se muestran si hay alguna tarea -->
    <TaskStats :tasks="tasks" v-if="tasks.length > 0" />

    <!-- Lista de tareas: un TaskItem por tarea.
         Cada item envía eventos al padre (toggle-task y delete-task) -->
    <ul class="task-list" v-if="filteredTasks.length > 0">
      <TaskItem 
        v-for="task in filteredTasks" 
        :key="task.id" 
        :task="task"
        @toggle-task="toggleTask"
        @delete-task="deleteTask"
      />
    </ul>
    
    <!-- v-else: mensaje cuando no hay tareas que mostrar -->
    <p class="empty-message" v-else>
      {{ emptyMessage }}
    </p>
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue'
import TaskItem from './components/TaskItem.vue'
import TaskFilters from './components/TaskFilters.vue'
import TaskStats from './components/TaskStats.vue'

export default {
  name: 'App',
  components: {
    TaskForm,
    TaskItem,
    TaskFilters,
    TaskStats
  },
  data() {
    return {
      tasks: [],
      filter: 'all' // 'all', 'pending', 'completed'
    }
  },
  // computed: valores que se recalculan solos cuando cambian tasks o filter
  computed: {
    // Tareas que se muestran según el filtro seleccionado
    filteredTasks() {
      switch (this.filter) {
        case 'pending':
          return this.tasks.filter(task => !task.completed)
        case 'completed':
          return this.tasks.filter(task => task.completed)
        default:
          return this.tasks
      }
    },
    // Mensaje distinto para cada filtro cuando la lista está vacía
    emptyMessage() {
      switch (this.filter) {
        case 'pending':
          return '¡No hay tareas pendientes! 🎉'
        case 'completed':
          return 'No hay tareas completadas todavía'
        default:
          return 'No hay tareas. ¡Añade una nueva!'
      }
    }
  },
  // watch: se ejecuta cuando cambia un dato.
  // Con deep: true también detecta cambios dentro de las tareas (p. ej. completed),
  // así guardamos en localStorage automáticamente sin llamar a saveTasks en cada método
  watch: {
    tasks: {
      handler() {
        this.saveTasks()
      },
      deep: true
    }
  },
  methods: {
    // Los métodos de abajo se ejecutan cuando un componente hijo emite un evento
    addTask(text) {
      this.tasks.push({
        id: Date.now(), // id único (suficiente para este ejemplo)
        text: text,
        completed: false,
        createdAt: new Date()
      })
    },
    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) {
        task.completed = !task.completed
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    },
    changeFilter(newFilter) {
      this.filter = newFilter
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    loadTasks() {
      try {
        const saved = localStorage.getItem('tasks')
        if (saved) {
          this.tasks = JSON.parse(saved)
        }
      } catch (e) {
        // Si el contenido guardado está corrupto, empezamos con la lista vacía
        console.error('No se han podido leer las tareas guardadas', e)
      }
    }
  },
  // mounted: el componente ya está en pantalla; recuperamos las tareas guardadas
  mounted() {
    this.loadTasks()
  }
}
</script>
