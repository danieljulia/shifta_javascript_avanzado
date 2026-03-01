<template>
    <div>
        <h1>Ejemplo vue</h1>
        <div id="app">
            <p>{{ counter }}</p>
            <button @click="increment">Increment</button>
            <button @click="decrement">Decrement</button>
        </div>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
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

<style>
h1{
    color: gray;
    font-size: 50px;
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