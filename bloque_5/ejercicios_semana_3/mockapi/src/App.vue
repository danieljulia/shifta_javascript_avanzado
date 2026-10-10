<!-- App con Options API: consume una API REST de prueba (MockAPI) y lista proyectos -->
<template>
  <main class="layout">
    <h1>Proyectos (MockAPI)</h1>

    <div class="toolbar">
      <!-- :disabled es la abreviatura de v-bind:disabled; el botón se desactiva
           mientras loading sea true para evitar peticiones duplicadas -->
      <button @click="fetchProyectos" :disabled="loading">
        {{ loading ? 'Cargando...' : 'Recargar' }}
      </button>
    </div>

    <!-- Renderizado condicional: v-if / v-else-if / v-else muestran un solo estado -->
    <p v-if="error" class="error">Error: {{ error }}</p>
    <p v-else-if="loading" class="loading">Cargando datos...</p>

    <ul v-else class="grid">
      <!-- v-for renderiza la lista; :key ayuda a Vue a identificar cada elemento -->
      <li v-for="p in proyectos" :key="p.id" class="card">
        <h2 class="card-title">{{ p.name }}</h2>
        <p v-if="p.categoria" class="categoria">Categoría: {{ p.categoria }}</p>
        <img
          v-if="p.avatar"
          :src="p.avatar"
          alt=""
          class="thumb"
        />
   
        <small class="id">ID: {{ p.id }}</small>
      </li>
    </ul>

    <!-- Mensaje cuando la petición fue bien pero la lista está vacía -->
    <p v-if="!loading && !error && proyectos.length === 0" class="empty">
      Sin proyectos.
    </p>
  </main>
</template>

<script>
// Endpoint REST de prueba creado en mockapi.io (devuelve un array de proyectos)
const API_URL = 'https://67c6b62b351c081993fe62eb.mockapi.io/api/v1/proyectos';

// Este componente usa la Options API de Vue 3 (data, methods, created...).
// Es una de las dos formas de escribir componentes en Vue 3; la otra es la
// Composition API (<script setup>, ref(), onMounted()...)
export default {
  name: 'App',
  // data() devuelve el estado reactivo del componente:
  // cuando una de estas propiedades cambia, Vue vuelve a renderizar el template
  data() {
    return {
      proyectos: [],
      loading: false,
      error: null
    };
  },
  methods: {
    // Petición asíncrona a la API con fetch
    async fetchProyectos() {
      this.loading = true;
      this.error = null;
      try {
        const res = await fetch(API_URL, { cache: 'no-store' });
        // fetch no lanza error en respuestas 4xx/5xx: hay que comprobar res.ok
        if (!res.ok) throw new Error('HTTP ' + res.status);
        this.proyectos = await res.json();
      } catch (e) {
        this.error = e.message;
      } finally {
        // finally se ejecuta siempre, haya error o no
        this.loading = false;
      }
    }
  },
  // created() es un hook del ciclo de vida: se ejecuta al crear el componente,
  // antes de montarlo en el DOM. Ideal para lanzar la carga inicial de datos
  created() {
    this.fetchProyectos();
  }
};
</script>

<style scoped>
.layout {
  max-width: 900px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}
.toolbar {
  margin-bottom: 1rem;
}
button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.error { color: red; }
.loading { color: #444; }
.grid {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background: #fafafa;
}
.card-title {
  margin: .2rem 0;
  font-size: 1.05rem;
}
.categoria {
  font-size: .8rem;
  color: #555;
}
.thumb {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 4px;
  margin: .5rem 0;
}
.desc {
  font-size: .85rem;
  line-height: 1.2;
}
.id {
  color: #888;
}
.empty {
  margin-top: 1rem;
  font-style: italic;
}
</style>
