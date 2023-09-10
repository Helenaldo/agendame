<template>

 <VContainer>
  <v-text-field label="Nome" v-model="firtName" />
  <VTextField label="Sobrenome" v-model="lastName" />
  <VTextField label="email" type="email" v-model="email" />
  <VTextField label="senha" type="password" v-model="password" />
  <v-btn @click="register">Cadastrar</v-btn>
 </VContainer>

</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '@/store/auth';

const firtName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');

function register() {
  const authStore = useAuth();
  authStore.register(firtName.value, lastName.value, email.value, password.value);

}

</script>

