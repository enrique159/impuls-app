<template>
  <ion-page>
    <ion-content>
      <div class="loading-app">
        <ion-spinner name="crescent"></ion-spinner>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonSpinner } from '@ionic/vue'
import { useStorage } from '@/composables/useStorage'
import { useApp } from '@/composables/useApp'
import { useRouter } from 'vue-router'

const router = useRouter()

const { getAllStorageValues } = useStorage()
const { setToken, setUser, validToken } = useApp()

const setupStorageInSession = async() => {
  const storageValues = await getAllStorageValues()
  storageValues.forEach((element: any) => {
    if (element.key === 'token') setToken(element.value)
    if (element.key === 'user') setUser(element.value)
  })

  if (validToken()) router.push({ name: 'main' })
  else router.push({ name: 'login' })
}

setupStorageInSession()
</script>

<style scoped>
.loading-app {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
</style>