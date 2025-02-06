<template>
  <div class="sidebar">
    <h2>Side Bar</h2>
    <ol>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/contador">Contador</router-link></li>
      <li><router-link to="/ListaDeTareas">Lista de Tareas</router-link></li>
    </ol>
  </div>
</template>

<script setup></script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
