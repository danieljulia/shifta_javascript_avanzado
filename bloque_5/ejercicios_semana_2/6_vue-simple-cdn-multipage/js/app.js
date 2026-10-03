// Componentes compartidos por todas las páginas.
// Cada página carga este archivo ANTES de crear su aplicación Vue.

// Un componente es un objeto con su plantilla (template)
const SiteHeader = {
  template: `
    <header>
      <nav>
        <a href="index.html">Home</a> |
        <a href="projects.html">Projects</a> |
        <a href="about.html">About</a>
      </nav>
    </header>
  `
};

const SiteFooter = {
  template: `
    <footer>
      <p>© {{ year }} My Portfolio</p>
    </footer>
  `,
  data() {
    return { year: new Date().getFullYear() };
  }
};

// Carga los proyectos del JSON. Guardamos la promesa (no el resultado) para que
// los componentes que la necesiten puedan hacer "await projects".
const projects = fetch('./data/data.json')
  .then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then(data => data.projects)
  .catch(error => {
    console.error('Error fetching data:', error);
    return []; // si falla, devolvemos una lista vacía para que la página no se rompa
  });
