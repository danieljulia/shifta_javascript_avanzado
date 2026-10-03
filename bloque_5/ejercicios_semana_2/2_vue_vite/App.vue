<!-- Componente de un solo archivo (SFC): plantilla + lógica + estilos -->
<template>
    <div>
        <h1>Ejemplo Vue con Vite</h1>
        <p>{{ counter }}</p>
        <button @click="increment">Incrementar</button>
        <button @click="decrement">Decrementar</button>
    </div>
</template>

<script>
export default {
  // Estado del componente
  data() {
    return {
      counter: 0
    }
  },
  // Funciones que usa la plantilla
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
}
</script>

<!-- scoped: estos estilos solo afectan a este componente -->
<style scoped>
h1 {
    color: gray;
    font-size: 50px;
    text-align: center;
}
p {
    text-align: center;
    font-size: 40px;
}
div {
    text-align: center;
}
button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
}

button:hover {
    background-color: #45a049;
}
</style>
