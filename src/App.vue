<template>
  <ion-app>
    <ion-router-outlet />
    <ion-toast
      :is-open="toast.show"
      :message="toast.message"
      :duration="toast.duration"
      :color="toast.color"
      :icon="toast.icon"
      :mode="toast.mode"
      :position="toast.position"
      @didDismiss="toast.dismissable ? dismissToast() : ()=>{}"
    />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonToast } from '@ionic/vue'
import { useToast } from '@/composables/useToast'
/**
 * TOAST
 */
const { toast, dismissToast } = useToast()
</script>

<style scoped>
</style>
