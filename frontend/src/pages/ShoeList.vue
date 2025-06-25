<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ShoeItem v-for="shoe in shoes" :key="shoe.id" :shoe="shoe" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ShoeItem from '../components/ShoeItem.vue';
import { Shoe } from '../types/Shoe';

const shoes = ref<Shoe[]>([
  {
    id: 1,
    name: 'Urban Sneakers',
    description: 'Modern street-style sneakers for everyday comfort.',
    price: 2200000,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Classic Canvas',
    description: 'Lightweight and breathable canvas shoes.',
    price: 1800000,
    image: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
])
</script>

<style scoped>

</style>