<template>
  <div>
    <header>
      <!-- Mientras no se han cargado los datos (portfolio es null) mostramos textos por defecto -->
      <h1>{{ portfolio ? portfolio.name : 'Artist Name' }}</h1>
      <p>{{ portfolio ? portfolio.title : 'Creative Works & Portfolio' }}</p>
      <div class="burger" @click="toggleMenu">☰</div>
      <!-- :style enlaza el estilo con el dato menuVisible (menú del botón hamburguesa) -->
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

    <p v-if="error" class="error">{{ error }}</p>

    <!-- Galería: se pinta solo cuando ya tenemos los datos -->
    <section v-if="portfolio" id="gallery" class="gallery">
      <!-- v-for recorre el array de proyectos del JSON.
           La :key debe ser única: usamos el id del proyecto, no el nombre -->
      <article v-for="project in portfolio.projects"
         :key="project.id"
         class="gallery-item">
        <img :src="project.image" :alt="project.name">
        <p>{{ project.name }}</p>
      </article>
    </section>

    <section id="contact" class="contact">
      <h2>Contact</h2>
      <!-- portfolio?.contact: el ? evita un error si portfolio todavía es null -->
      <p v-if="portfolio?.contact">Email: {{ portfolio.contact.email }}</p>
      <p v-else>Email: artist@example.com</p>
      <div v-if="portfolio?.contact">
        <a v-if="portfolio.contact.instagram" :href="portfolio.contact.instagram" target="_blank">Instagram</a>
        <a v-if="portfolio.contact.website" :href="portfolio.contact.website" target="_blank">Website</a>
      </div>
      <p v-else>Social Media Links</p>
    </section>

    <footer>
      <p>&copy; {{ year }} {{ portfolio ? portfolio.name : 'Artist Name' }}. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuVisible: false,
      portfolio: null, // se rellena con el contenido de data.json
      error: null,
      year: new Date().getFullYear()
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  },
  // mounted: el componente ya está en pantalla, buen momento para cargar datos
  async mounted() {
    try {
      // data.json está en la carpeta public/, y './' es relativo gracias a base: './' en vite.config.js
      const response = await fetch('./data.json');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      this.portfolio = await response.json();
    } catch (e) {
      console.error('Error fetching data:', e);
      this.error = 'No se han podido cargar los datos del portfolio';
    }
  }
};
</script>

<style scoped>
/* Los estilos generales están en src/styles.css (importado desde index.html).
   Aquí irían los estilos que solo afectan a este componente. */
.error {
  color: #b00020;
  text-align: center;
}
</style>
