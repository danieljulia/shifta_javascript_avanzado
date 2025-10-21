import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Create a reactive projects reference
const projects = ref([]) //por defecto un array vacio

// Provide projects globally
app.provide('projects', projects)

// Load projects
fetch('/projects.json')
  .then(response => response.json())
  .then(data => {
    projects.value = data.projects
  })
  .catch(error => console.error('Error loading projects:', error))

app.use(router).mount('#app')


