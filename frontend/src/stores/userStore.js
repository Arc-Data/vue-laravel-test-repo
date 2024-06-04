import { jwtDecode } from "jwt-decode";
import axios from "../axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        token: localStorage.getItem('auth_token') || null,
        user: localStorage.getItem('authToken') ? jwtDecode(localStorage.getItem('authToken')).data : null,
        refreshTimeout: null,
    }),
    actions: {
        async login(data) {
            try {
                const response = await axios.post('/api/login/', data) 
                this.token = response.data.token
                localStorage.setItem('auth_token', this.token)
  
                this.user = jwtDecode(this.token).data
                this.router.push({ name: 'Home' })
            }
            catch (error) {
                throw error;
            }
        },
        async register(data) {
            try {
                const response = await axios.post('/api/register/', data)
                this.token = response.data.token 
                localStorage.setItem('auth_token', this.token)

                this.user = jwtDecode(this.token).data
                this.router.push({ name: 'Home'})
            }
            catch(error) {
                throw error
            }
        },
        logout() {
            localStorage.removeItem('auth_token')
        },
        async refresh() {

        },
        async checkTokenExpiryAndRefresh() {

        }
    }
})