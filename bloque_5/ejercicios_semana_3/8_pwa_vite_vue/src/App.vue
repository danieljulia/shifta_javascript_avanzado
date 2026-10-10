<!-- Componente raíz: cabecera con estado de conexión, banner de instalación y notas -->
<template>
  <div class="app">
    <header class="header">
      <h1>📱 PWA con Vue + Vite</h1>
      <p>Ejemplo simple de Progressive Web App</p>
      <!-- :class enlaza la clase dinámicamente según el estado reactivo "online" -->
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
// Este componente usa la Options API de Vue 3 (data, mounted, components...)
import NotesList from './components/NotesList.vue'
import InstallBanner from './components/InstallBanner.vue'

export default {
  name: 'App',
  // En Options API hay que registrar los componentes hijos para usarlos en el template
  components: { NotesList, InstallBanner },
  data() {
    return {
      // navigator.onLine dice si el navegador cree que hay conexión
      online: navigator.onLine
    }
  },
  // mounted() es un hook del ciclo de vida: se ejecuta cuando el componente
  // ya está insertado en el DOM. Aquí escuchamos los eventos de red del navegador
  mounted() {
    window.addEventListener('online',  () => { this.online = true  })
    window.addEventListener('offline', () => { this.online = false })
  }
}
</script>
