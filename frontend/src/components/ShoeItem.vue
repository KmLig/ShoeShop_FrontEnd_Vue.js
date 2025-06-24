<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img :src="shoe.image" :alt="shoe.name" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="text-lg font-medium text-gray-900">{{ shoe.name }}</h3>
            <p class="text-gray-600">{{ shoe.description }}</p>
            <p class="text-gray-600">{{ shoe.price }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Shoe } from '../types/Shoe';

const props = defineProps<{
    shoe: Shoe;
}>();

    
</script>

<style scoped>

</style>