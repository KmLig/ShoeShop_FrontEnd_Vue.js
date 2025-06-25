<script setup lang="ts">
  import ShoeList from './pages/ShoeList.vue'
</script>

<template>
 <nav class="bg-gray-800 px-6 py-4">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Left menu -->
        <div class="flex gap-6">
          <a href="/" class="text-white hover:text-gray-300 font-medium">Home</a>
          <a href="/about" class="text-white hover:text-gray-300 font-medium">About</a>
          <a href="/contact" class="text-white hover:text-gray-300 font-medium">Contact</a>
        </div>
        <!-- Right logo -->
        <div class="flex items-center">
          <img src="./assets/vue.svg" alt="Shoe Store Logo" class="h-8 mr-2">
          <span class="text-white text-xl font-bold">Shoe Store</span>
        </div>
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
