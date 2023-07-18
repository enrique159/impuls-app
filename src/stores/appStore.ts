// create a default pinia store
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    count: 12,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    }
  }
})