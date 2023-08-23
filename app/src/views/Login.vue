<template>
  <VContainer>
     <VTextField v-model="email"/>
     <VTextField v-model="password"/>
     <VBtn @click="login">Login</VBtn>
     <VBtn @click="sanctum">Sanctum</VBtn>
  </VContainer>
</template>

<script setup>

import { ref } from 'vue';
import { useAuth } from '@/store/auth';

const authStore = useAuth();
const email = ref('test@example.com');
const password = ref('password');


function sanctum() {
  authStore.sanctum()
}


function login() {
  authStore.login(email.value, password.value)
}

</script>
