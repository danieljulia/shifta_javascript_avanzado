<script setup>
// Componente de ejemplo del starter de Vite + Vue (Composition API con <script setup>)
import { ref } from 'vue'

// defineProps declara las props que el componente recibe del padre
// (en <script setup> es una macro del compilador: no hace falta importarla)
defineProps({
  msg: String,
})

// ref() crea una variable reactiva: cuando cambia, Vue actualiza el DOM.
// En el template se usa como "count" (Vue desenvuelve el .value automáticamente)
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
