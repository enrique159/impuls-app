import { useAppStore } from '@/stores/appStore'
import { storeToRefs } from 'pinia'
import type { User } from '@/types/User.type'

export const useApp = () => {
  const appStore = useAppStore()
  const { user, token, count } = storeToRefs(appStore)

  // Methods
  // SET USER: set the user in the store
  function setUser(user: User) {
    appStore.setUser(user)
  }
  // SET TOKEN: set the token in the store
  function setToken(token: string) {
    appStore.setToken(token)
  }
  // VALID TOKEN: check if the token is different of null or empty
  function validToken() {
    return appStore.isLoggedIn
  }

  const increment = () => {
    appStore.increment()
  }

  return {
    count,
    user,
    token,

    setUser,
    setToken,
    validToken,
    increment,
  }
}