import { useAppStore } from '@/stores/appStore'
import { storeToRefs } from 'pinia'

export const useApp = () => {
  const appStore = useAppStore()
  const { count } = storeToRefs(appStore)

  const increment = () => {
    appStore.increment()
  }

  return {
    count,
    increment,
  }
}