<template>
  <div class="install-banner" v-if="deferredPrompt">
    <p>📲 ¡Instala la app en tu dispositivo para usarla offline!</p>
    <button @click="install">Instalar</button>
  </div>
</template>

<script>
export default {
  name: 'InstallBanner',
  data() {
    return {
      deferredPrompt: null
    }
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.deferredPrompt = e
    })
    window.addEventListener('appinstalled', () => {
      this.deferredPrompt = null
    })
  },
  methods: {
    async install() {
      if (!this.deferredPrompt) return
      this.deferredPrompt.prompt()
      const { outcome } = await this.deferredPrompt.userChoice
      console.log('Resultado instalación:', outcome)
      this.deferredPrompt = null
    }
  }
}
</script>
