<template>

<div class="hero-home">
    <h1>This is<br>my portfolio</h1>
    <div class="button-go-bottom"><a href="#bottom">&#x21e9;</a></div>
  </div>
  
  <div class="wrapper" id="bottom">
    <section>


        <template v-if="selectedProject">

            {{ selectedProject }}

        </template>
       

        <article v-else class="project" v-for="p in projects" :key="p.id">
            <div class="project-image">
            <a href="project-1.html"><img :src="p.image" alt="El Paso del Guepardo"></a>
            </div>
            <div class="project-content">
            <div class="project-category">Fotografía de Naturaleza</div>
            <h2>{{ p.name}}</h2>
            <p>{{ p.description}}</p>
            <a :href="getLink(p.id)" class="button">Read more &#x2192;</a>
            </div>
      </article>

        

        
     
    </section>
  </div>



  <footer class="main-footer light-color">
    <div class="logo">
      <a href="index.html">This is<br>my portfolio</a>
      <br>&copy; 2025
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

export default {
  name: 'Content',
  data() {
    return {
      projects: [],
      error: null,
      selectedId: null
    }
  },
  computed: {
    selectedProject() {
      if (!this.selectedId) return null
      return this.projects.find(p => String(p.id) === String(this.selectedId)) || null
    },
    basePath() {
      return window.location.pathname || '/'
    }
  },
  methods: {
    async getProjects() {
      try {
        const res = await fetch('/data/projects.json', { cache: 'no-store' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        this.projects = Array.isArray(json) ? json : (json.projects || [])
      } catch (e) {
        this.error = e?.message || String(e)
        this.projects = []
      }
    },
    getLink(id){
        return `?id=${id}`;
    }
  },
  mounted() {
    const params = new URLSearchParams(window.location.search)
    this.selectedId = params.get('id')
    this.getProjects();
  }
}
  </script>
  