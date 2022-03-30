import { defineStore } from 'pinia'

export default defineStore('main', {
  state: () => {
    return {
      counter: 0,
      isAdmin: true,
    }
  },
  actions: {

  }
})