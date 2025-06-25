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
    name: 'Air Max 90',
    description: 'Nike running shoes',
    price: 3200000,
    image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/68b2be0f-9e68-45cb-a02a-5d61721259aa/air-max-90-shoes.png'
  },
  {
    id: 2,
    name: 'Ultraboost 23',
    description: 'Adidas comfort shoes',
    price: 3500000,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/da9a33f4a6244309b4a8af0c0145db0c_9366/Ultraboost_23_Shoes_White_IG5000_01_standard.jpg'
  }
])
</script>

<style scoped>

</style>