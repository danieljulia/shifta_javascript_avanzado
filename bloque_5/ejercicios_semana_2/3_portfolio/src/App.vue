<template>
    <div>
      <header>
        <h1>{{ portfolio ? portfolio.name : 'Artist Name' }}</h1>
        <p>{{ portfolio ? portfolio.title : 'Creative Works & Portfolio' }}</p>
        <div class="burger" @click="toggleMenu">☰</div>
        <nav id="menu" class="menu" :style="{ display: menuVisible ? 'block' : 'none' }">
          <a href="#bio">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
  
      <section id="bio" class="bio">
        <h2>About the Artist</h2>
        <p>{{ portfolio ? portfolio.bio : 'Brief biography and artistic statement.' }}</p>
      </section>
  
      <section v-if="portfolio" id="gallery" class="gallery">
        <article v-for="project in portfolio.projects"
           :key="project.name"
           class="gallery-item">
          <img :src="project.image" :alt="project.name">
          <p>{{ project.name }}</p>
        </article>
      </section>
  
      <section id="contact" class="contact">
        <h2>Contact</h2>
        <p v-if="portfolio?.contact">Email: {{ portfolio.contact.email }}</p>
        <p v-else>Email: artist@example.com</p>
        <div v-if="portfolio?.contact">
          <a v-if="portfolio.contact.instagram" :href="portfolio.contact.instagram" target="_blank">Instagram</a>
          <a v-if="portfolio.contact.website" :href="portfolio.contact.website" target="_blank">Website</a>
        </div>
        <p v-else>Social Media Links</p>
      </section>
  
      <footer>
        <p>&copy; 2025 {{ portfolio ? portfolio.name : 'Artist Name' }}. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        menuVisible: false,
        portfolio: null
      };
    },
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible;
      }
    },
    async mounted() {
      try {
        const response = await fetch('./data.json');
        this.portfolio = await response.json();
        console.log('Portfolio data loaded:', this.portfolio);
  
        
      } catch (e) {
        console.error('Error fetching data:', e);
      }
    }
  };
  </script>
  

  <style scoped>
  /* aqui es donde realmente deberia estar el css que aplica a este componente */
  </style>