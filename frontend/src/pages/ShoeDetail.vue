<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold">Shoe Detail</h1>
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <img :src="shoe?.image" alt="Shoe Image" class="w-1/2 h-1/2">
                <h2 class="text-xl font-bold">{{ shoe?.name }}</h2>
                <p class="text-gray-600">{{ shoe?.description }}</p>
                <p class="text-gray-600">{{ shoe?.price.toLocaleString() }} </p>
                <p class="text-gray-600">{{ shoe?.brand }}</p>
                <p class="text-gray-600">{{ shoe?.size }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Shoe } from '../types/Shoe';

const route = useRoute();
const shoeId = Number(route.params.id);
const shoe = ref<Shoe | null>({
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: '',
    brand: '',
    size: 0,
});

onMounted(async () =>{
    //get shoe from api
    shoe.value = {
        id: shoeId,
        name: 'Nike Air Max',
        price: 100,
        description: 'The Nike Air Max is a classic sneaker that is perfect for everyday wear.',
        image: 'https://via.placeholder.com/150',
        brand: 'Nike',
        size: 10,
    }
})

</script>

<style scoped>

</style>