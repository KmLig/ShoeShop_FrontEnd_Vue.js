<template>
    <div class="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
        <h1 class="text-2xl font-bold mb-4 text-center">Login</h1>
        <form @submit.prevent="login">
            <div class="mb-4">
                <label class="block text-gray-700" for="username">Username</label>
                <input type="text" id="username" v-model="username" class="w-full px-4 py-2 border rounded mt-1" required />
            </div>
            <div>
                <label class="block text-gray-700" for="password">Password</label>
                <input type="password" id="password" v-model="password" class="w-full px-4 py-2 border rounded mt-1" required/>
            </div>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2  rounded w-full">Login</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const login = () => {
    console.log(username.value, password.value);
}
</script>

<style scoped>

</style>