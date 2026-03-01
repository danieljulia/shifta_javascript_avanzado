<template>
  <main class="layout">
    <h1>Proyectos (MockAPI)</h1>

    <div class="toolbar">
      <button @click="fetchProyectos" :disabled="loading">
        {{ loading ? 'Cargando...' : 'Recargar' }}
      </button>
    </div>

    <p v-if="error" class="error">Error: {{ error }}</p>
    <p v-else-if="loading" class="loading">Cargando datos...</p>

    <ul v-else class="grid">
      <li v-for="p in proyectos" :key="p.id" class="card">
        <h2 class="card-title">{{ p.name }}</h2>
        <p v-if="p.categoria" class="categoria">Categoría: {{ p.categoria }}</p>
        <img
          v-if="p.avatar || p.avatar"
          :src="p.avatar || p.avatar"
          alt=""
          class="thumb"
        />
   
        <small class="id">ID: {{ p.id }}</small>
      </li>
    </ul>

    <p v-if="!loading && !error && proyectos.length === 0" class="empty">
      Sin proyectos.
    </p>
  </main>
</template>

<script>
const API_URL = 'https://67c6b62b351c081993fe62eb.mockapi.io/api/v1/proyectos';

export default {
  name: 'App',
  data() {
    return {
      proyectos: [],
      loading: false,
      error: null
    };
  },
  methods: {
    async fetchProyectos() {
      this.loading = true;
      this.error = null;
      try {
        const res = await fetch(API_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        this.proyectos = await res.json();
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    }
  },
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