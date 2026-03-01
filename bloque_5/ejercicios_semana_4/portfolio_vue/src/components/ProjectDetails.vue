<template>
      <Header/>
      <section class="project-details" id="project-container">


        
         <router-link to="/" class="back-button">← Back to Projects</router-link>
        <img :src="project.image" :alt="project.name" class="project-detail-image" onerror="this.style.display='none';">
        <h1 class="project-detail-name">{{project.name}}</h1>
        <p class="project-description">{{project.description}}</p>



    </section>
    <Footer/>
</template>

<script setup>
import { inject, computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const route = useRoute()
const projects = inject('projects')

// Get the project ID from the route parameter
const projectId = computed(() => parseInt(route.params.id))

// Find the project with the matching ID
const project = computed(() => {
    return projects.value.find(p => p.id === projectId.value)
})
</script>