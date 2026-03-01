<template>
  <div class="container">
    <h1>📋 Gestor de Tareas</h1>
    
    <!-- Formulario para añadir tareas -->
    <TaskForm @add-task="addTask" />
    
    <!-- Filtros -->
    <TaskFilters 
      :currentFilter="filter" 
      @change-filter="changeFilter" 
    />
    
        <!-- Estadísticas -->
    <TaskStats :tasks="tasks" v-if="tasks.length > 0" />
        
    <!-- Lista de tareas -->
    <ul class="task-list" v-if="filteredTasks.length > 0">
      <TaskItem 
        v-for="task in filteredTasks" 
        :key="task.id" 
        :task="task"
        @toggle-task="toggleTask"
        @delete-task="deleteTask"
      />
    </ul>
    
    <!-- Mensaje cuando no hay tareas -->
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
  computed: {
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
  methods: {
    addTask(text) {
      const newTask = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date()
      }
      this.tasks.push(newTask)
      this.saveTasks()
    },
    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) {
        task.completed = !task.completed
        this.saveTasks()
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
      this.saveTasks()
    },
    changeFilter(newFilter) {
      this.filter = newFilter
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    loadTasks() {
      const saved = localStorage.getItem('tasks')
      if (saved) {
        this.tasks = JSON.parse(saved)
      }
    }
  },
  mounted() {
    this.loadTasks()
  }
}
</script>
