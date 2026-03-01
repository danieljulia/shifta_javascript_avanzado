import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    counter: 0,
    message: 'Hola desde Pinia'
  }),
  actions: {
    increment() {
      this.counter += 1
    },
    decrement() {
      if (this.counter > 0) {
        this.counter -= 1
      }
    },
    updateMessage(text) {
      this.message = text
    }
  }
})
