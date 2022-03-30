import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0,
    isAdmin: true,
  }),
  actions: {
    increment() {
      this.counter++
    }
  },
  persist: true
})