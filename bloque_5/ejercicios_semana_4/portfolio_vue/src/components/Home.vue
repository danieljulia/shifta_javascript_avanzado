<script setup>
import { inject } from 'vue'
import Project from './Project.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

const projects = inject('projects')

</script>

<template>
    <Header/>
    
    <main>
        <section class="hero">
            <h2>Welcome to My Portfolio!</h2>
            <p>Here are some of my recent projects</p>
        </section>
        
        <section class="projects-grid" id="projects-container">
            <Project v-for="project in projects" :key="project.id" :project="project" />
        </section>
    </main>
    
      <Footer/>
</template>