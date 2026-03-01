<template>
  <div class="app">
    <header class="header">
      <h1>📱 PWA con Vue + Vite</h1>
      <p>Ejemplo simple de Progressive Web App</p>
      <div class="pwa-status" :class="online ? 'online' : 'offline'">
        <span class="dot"></span>
        {{ online ? 'Online' : 'Offline — funciona sin conexión' }}
      </div>
    </header>

    <!-- Banner de instalación -->
    <InstallBanner />

    <main class="body">
      <!-- Componente de notas guardadas localmente -->
      <NotesList />

      <!-- Info sobre la PWA -->
      <div class="info-box">
        <strong>¿Qué hace esta PWA?</strong>
        ✅ Funciona offline (Service Worker + cache)<br>
        ✅ Instalable en móvil y escritorio<br>
        ✅ Guarda notas en <code>localStorage</code><br>
        ✅ Manifest con nombre, colores e iconos
      </div>
    </main>
  </div>
</template>

<script>
import NotesList from './components/NotesList.vue'
import InstallBanner from './components/InstallBanner.vue'

export default {
  name: 'App',
  components: { NotesList, InstallBanner },
  data() {
    return {
      online: navigator.onLine
    }
  },
  mounted() {
    window.addEventListener('online',  () => { this.online = true  })
    window.addEventListener('offline', () => { this.online = false })
  }
}
</script>
