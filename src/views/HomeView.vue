<template>
  <div class="container">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
