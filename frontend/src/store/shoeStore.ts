import { defineStore } from "pinia";
import { ref } from "vue";
import { Shoe } from "../types/Shoe";



export const useShoeStore = defineStore('shoe', () =>{
    const shoes = ref<Shoe[]>([])
    const isLoading = ref<boolean>(false)
    const error = ref<string | null>(null)

    async function fetchShoes() {
        isLoading.value = true
        error.value = null

        try {
            // TODO: Replace with real API call
        } catch (err) {
            error.value = "Failed to fetch shoes"
        } finally {
            isLoading.value = false
        }

    }

    function getShoeById(id: number): Shoe | undefined{
        return shoes.value.find(s => s.id === id)
    }

    return {shoes, isLoading, error, fetchShoes, getShoeById}
})