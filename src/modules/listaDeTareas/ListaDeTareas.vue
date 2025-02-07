<template>
  <div>
    <h2>Lista de tareas</h2>
    <div class="boton">
      <button><router-link to="/">Home</router-link></button>
    </div>
    <p>Nota: Con la palabra "clear" se limpian todas las tareas</p>
    <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea" />
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea }}
        <button @click="borrarTarea">Borrar Tarea</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const tareas = ref([]);
const nuevaTarea = ref("");

const addTarea = () => {
  if (nuevaTarea.value.toLowerCase() === "clear") {
    tareas.value = [];
  } else {
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value = "";
  }
};

const borrarTarea = (index) => {
  tareas.value.splice(index, 1);
};
</script>

<style></style>
