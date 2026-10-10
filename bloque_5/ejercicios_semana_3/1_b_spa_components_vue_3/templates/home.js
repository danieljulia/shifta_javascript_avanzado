// Componente "Home": un objeto de opciones de Vue con su plantilla (template).
// Se define como constante global; app.js lo usa al declarar las rutas.
// En Vue 3 estos objetos funcionan igual que en Vue 2 (Options API).
const Home = {
    template: `
      <div class="page">
        <h1>Home Page</h1>
        <p>Welcome to our Vue SPA with PWA capabilities!</p>
        <p>This is a simple example of a Single Page Application built with Vue.js and Vue Router.</p>
        <p>You can add this to your home screen as a PWA!</p>
      </div>
    `
  };