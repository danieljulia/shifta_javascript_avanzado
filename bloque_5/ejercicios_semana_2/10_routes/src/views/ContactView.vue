<script setup>
// Página de contacto: datos del JSON.
import { state } from '../store.js'
</script>

<template>
  <section>
    <h2>{{ state.contact.heading }}</h2>
    <p>{{ state.contact.text }}</p>
    <ul>
      <li>Email: <a :href="'mailto:' + state.contact.email">{{ state.contact.email }}</a></li>
      <li>Teléfono: {{ state.contact.phone }}</li>
    </ul>
  </section>
</template>
