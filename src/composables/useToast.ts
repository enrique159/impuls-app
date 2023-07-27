import { ref } from 'vue'

export type ToastOptions = {
  show?: boolean
  message: string
  duration?: number
  dismissable?: boolean
  color?: string
  icon?: string
  mode?: 'ios' | 'md'
  position?: 'top' | 'bottom' | 'middle'
}

// TODO: Agregar botones como parametro
const toast = ref<ToastOptions>({
  show: false,
  message: '',
  duration: 5000,
  dismissable: true,
  color: undefined,
  icon: undefined,
  mode: 'ios',
  position: 'top',
})

export const useToast = () => {
  const showToast = (options: ToastOptions) => {
    toast.value.show = true
    toast.value.message = options.message
    toast.value.duration = options.duration || 5000
    toast.value.dismissable = options.dismissable || true
    toast.value.color = options.color || undefined
    toast.value.icon = options.icon || undefined
    toast.value.mode = options.mode || 'ios'
    toast.value.position = options.position || 'top'
  }

  const dismissToast = () => {
    toast.value.show = false
  }

  return {
    toast,
    showToast,
    dismissToast,
  }
}