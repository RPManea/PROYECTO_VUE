<template>
 <h1>Hola Mundo</h1>
 <p>{{ contador }}</p>
 <button @click="incrementar_Uno">Incrementar Primer Valor</button>
 <button @click="decrementar_Uno">Decrementar Primer Valor</button>
</template>

<script setup>
import {ref} from 'vue';

const contador = ref(0)
const incrementar_Uno = () => {
  contador.value++;
}
const decrementar_Uno = () => {
  contador.value--;
}
</script>

<style scoped>
p {
  color: red;
}
</style>
