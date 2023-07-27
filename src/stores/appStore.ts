// create a default pinia store
import { defineStore } from 'pinia'
// Types
import type { User } from '@/types/User.type'

export const useAppStore = defineStore('app', {
  state: () => ({
    // USER
    token: '',
    user: {},
    // APP
    count: 0,
  }),
  getters: {
    // USER
    isLoggedIn: (state) => !!state.token,
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    // APP
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    // USER
    setUser(user: User) {
      this.user = user
    },
    setToken(token: string) {
      this.token = token
    },
    increment() {
      this.count++
    },
  },
})