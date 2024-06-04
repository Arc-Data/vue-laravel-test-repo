import axios from "../axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        token: localStorage.getItem('auth_token') || null,
        refreshTimeout: null,
    }),
    actions: {
        async login(data) {
            try {
                const response = await axios.post('/api/login/', data) 
                this.token = response.data.token
                localStorage.setItem('auth_token', this.token)
    
                this.router.push({ name: 'Home' })
            }
            catch (error) {
                throw error;
            }
        },
        logout() {

        },
        async refresh() {

        },
        async checkTokenExpiryAndRefresh() {

        }
    }
})