<!-- Tarjeta de un proyecto. Recibe los datos del padre mediante una "prop" -->
<template>
  <article class="project">
    <div class="project-image">
      <a :href="link"><img :src="project.image" :alt="project.title"></a>
    </div>
    <div class="project-content">
      <div class="project-category">{{ project.category }}</div>
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <a :href="link" class="button">Read more &#x2192;</a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProjectCard',
  // props: datos que el componente padre (Content) le envía
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    // Enlace a la página de detalle: la misma página con ?id=<id del proyecto>
    link() {
      return `?id=${this.project.id}`
    }
  }
}
</script>
