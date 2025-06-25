<script setup lang="ts">
  import ShoeList from './pages/ShoeList.vue'
</script>

<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="/" class="text-white text-2xl font-bold">Shoe Store</a>
    </div>
  </nav>
  <div class="container mx-auto p-4">
    <ShoeList />
  </div>
  <footer class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <p class="text-white">© 2025 Shoe Store</p>
    </div>
  </footer>
</template>

<style scoped>

</style>
