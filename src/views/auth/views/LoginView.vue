<template>
  <div class="login-view">
    <h4>Login</h4>

    <form id="login-form" @submit.prevent="login()">
      <ion-input
        class="input-custom"
        label="Correo electrónico"
        label-placement="stacked"
        fill="outline"
        v-model="email"
      ></ion-input>
      <ion-input
        class="input-custom"
        label="Contraseña"
        label-placement="stacked"
        type="password"
        v-model="password"
      ></ion-input>

      <ion-button type="submit" form="login-form">
        <ion-spinner v-if="isLoading" name="crescent"></ion-spinner>
        <span v-else>Iniciar sesión</span>
      </ion-button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { IonButton, IonInput, IonSpinner } from '@ionic/vue'
import AuthServices from '@/services/authServices'
import { useToast } from '@/composables/useToast'
import { useApp } from '@/composables/useApp'
import { useStorage } from '@/composables/useStorage'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const { showToast } = useToast()
const { setToken, setUser } = useApp()
const { setStorageValue } = useStorage()
const router = useRouter()

const email = ref('')
const password = ref('')
const isLoading = ref(false)

const login = async() => {
  isLoading.value = true
  const response = await AuthServices.login(email.value, password.value)
  if(response) {
    if(response.status !== 200) {
      console.error(response)
      const toastOptions = { show: true, message: response.data.message, color: 'danger' }
      showToast(toastOptions)
    }
    else {
      setToken(response.data.token)
      setUser(response.data.user)
      setStorageValue({ key: 'token', value: response.data.token })
      setStorageValue({ key: 'user', value: response.data.user })
      router.push({ name: 'main' })
    }
  } else {
    const toastOptions = { show: true, message: 'Error de conexión, intente de nuevo.', color: 'danger' }
    showToast(toastOptions)
  }
  isLoading.value = false
}


</script>

<style lang="scss" scoped>
.login-view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #login-form {
    width: 100%;
    max-width: 360px;
    padding: 0 2rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

:deep(.input-custom) {
  input {
    border-bottom: 1px solid var(--ion-color-medium);
  }
}
</style>
