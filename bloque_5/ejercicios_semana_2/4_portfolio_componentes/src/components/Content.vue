<template>
  <div class="hero-home">
    <h1>This is<br>my portfolio</h1>
    <div class="button-go-bottom"><a href="#bottom">&#x21e9;</a></div>
  </div>

  <div class="wrapper" id="bottom">
    <section>
      <p v-if="error">No se han podido cargar los proyectos ({{ error }})</p>

      <!-- Vista de detalle: hay un proyecto seleccionado (?id=...) -->
      <article v-else-if="selectedProject" class="project">
        <div class="project-image">
          <img :src="selectedProject.image" :alt="selectedProject.title">
        </div>
        <div class="project-content">
          <div class="project-category">{{ selectedProject.category }}</div>
          <h2>{{ selectedProject.title }}</h2>
          <p>{{ selectedProject.description }}</p>
          <a href="./" class="button">&#x2190; Back</a>
        </div>
      </article>

      <!-- Vista de listado: un componente ProjectCard por cada proyecto.
           :project="p" envía el proyecto al hijo mediante su prop -->
      <ProjectCard v-else v-for="p in projects" :key="p.id" :project="p" />
    </section>
  </div>

  <footer class="main-footer light-color">
    <div class="logo">
      <a href="./">This is<br>my portfolio</a>
      <br>&copy; {{ new Date().getFullYear() }}
    </div>
    <nav class="navigation footer-nav">
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Use</a></li>
      </ul>
    </nav>
  </footer>
</template>

<script>
import ProjectCard from './ProjectCard.vue'

export default {
  name: 'Content',
  components: { ProjectCard },
  data() {
    return {
      projects: [],
      error: null,
      selectedId: null // id del proyecto que se muestra en detalle (null = listado)
    }
  },
  computed: {
    // Busca el proyecto seleccionado dentro de la lista
    selectedProject() {
      if (this.selectedId === null) return null
      return this.projects.find(p => String(p.id) === String(this.selectedId)) || null
    }
  },
  methods: {
    async getProjects() {
      try {
        // BASE_URL viene de "base" en vite.config.js, así funciona en cualquier carpeta
        const res = await fetch(`${import.meta.env.BASE_URL}data/projects.json`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        this.projects = await res.json()
      } catch (e) {
        this.error = e.message
      }
    }
  },
  mounted() {
    // Leemos el parámetro ?id= de la URL para saber si hay que mostrar un detalle
    const params = new URLSearchParams(window.location.search)
    this.selectedId = params.get('id')
    this.getProjects()
  }
}
</script>
