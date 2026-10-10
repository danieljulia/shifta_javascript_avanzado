<!-- Banner que invita a instalar la PWA en el dispositivo.
     Solo aparece cuando el navegador ofrece el evento beforeinstallprompt
     (es decir, cuando la PWA cumple los requisitos de instalación) -->
<template>
  <div class="install-banner" v-if="deferredPrompt">
    <p>📲 ¡Instala la app en tu dispositivo para usarla offline!</p>
    <button @click="install">Instalar</button>
  </div>
</template>

<script>
// Options API de Vue 3
export default {
  name: 'InstallBanner',
  data() {
    return {
      // Aquí guardamos el evento beforeinstallprompt "diferido" para
      // poder lanzarlo más tarde, cuando el usuario pulse el botón
      deferredPrompt: null
    }
  },
  mounted() {
    // El navegador lanza beforeinstallprompt cuando la app es instalable.
    // e.preventDefault() cancela el mini-banner automático del navegador
    // y guardamos el evento para mostrarlo con nuestra propia UI
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.deferredPrompt = e
    })
    // Cuando la app se instala, ocultamos el banner
    window.addEventListener('appinstalled', () => {
      this.deferredPrompt = null
    })
  },
  methods: {
    async install() {
      if (!this.deferredPrompt) return
      // prompt() muestra el diálogo nativo de instalación
      this.deferredPrompt.prompt()
      // userChoice se resuelve con 'accepted' o 'dismissed'
      const { outcome } = await this.deferredPrompt.userChoice
      console.log('Resultado instalación:', outcome)
      // El evento solo se puede usar una vez: limpiamos la referencia
      this.deferredPrompt = null
    }
  }
}
</script>
