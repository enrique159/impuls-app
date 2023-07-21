<template>
  <div class="login-view">
    <h4>Login</h4>

    <form id="login-form">
      <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input type="email" name="email"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Password</ion-label>
        <ion-input type="password" name="password"></ion-input>
      </ion-item>

      <ion-button type="submit" form="login-form">Login</ion-button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/vue'
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
    max-width: 200px;
    height: fit-content;
    display: flex;
    flex-direction: column;
  }
}
</style>