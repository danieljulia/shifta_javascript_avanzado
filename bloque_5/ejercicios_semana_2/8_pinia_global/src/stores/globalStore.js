import { defineStore } from 'pinia'

// Un store de Pinia es un estado compartido por toda la aplicación.
// 'global' es el identificador único del store.
// Por convención, la función se llama useXxxStore.
export const useGlobalStore = defineStore('global', {
  // state: los datos compartidos (se declara como función que devuelve un objeto)
  state: () => ({
    counter: 0,
    message: 'Hola desde Pinia'
  }),
  // actions: funciones que modifican el estado. Dentro se usa this, como en un componente
  actions: {
    increment() {
      this.counter += 1
    },
    decrement() {
      // No dejamos que el contador baje de 0
      if (this.counter > 0) {
        this.counter -= 1
      }
    },
    updateMessage(text) {
      this.message = text
    }
  }
})
