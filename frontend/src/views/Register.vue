<template>
    <div class="grid w-full h-screen max-w-sm mx-auto place-items-center">
        <form @submit.prevent="login" method="POST" class="w-full px-8 py-8 shadow-md bg-background-default text-text-default">
            <h1 class="mb-8 text-2xl font-bold text-center text-primary-default">Sign Up</h1>
            <!-- <div v-if="error" class="mb-5 text-sm text-center text-red-500">{{ error }}</div> -->
            <div class="mb-5">
                <label for="name" class="block mb-2 text-sm font-medium text-primary-default">Username</label>
                <input required type="text" name="name" id="name" v-model="data.name" class="block w-full text-sm border outline-none border-slate-800 bg-gray-50 focus:border-primary-default p-2.5 rounded-lg">
            </div>
            <div class="mb-5">
                <label for="name" class="block mb-2 text-sm font-medium text-primary-default">Email</label>
                <input required type="email" name="email" id="email" v-model="data.email" class="block w-full text-sm border outline-none border-slate-800 bg-gray-50 focus:border-primary-default p-2.5 rounded-lg">
            </div>
            <div class="mb-5">
                <label for="name" class="block mb-2 text-sm font-medium text-primary-default">Password</label>
                <input required type="password" name="password" id="password" v-model="data.password" class="block w-full text-sm border outline-none border-slate-800 bg-gray-50 focus:border-primary-default p-2.5 rounded-lg">
            </div>
            <div class="mb-10">
                <label for="password_confirmation" class="block mb-2 text-sm font-medium text-primary-default">Confirm Password</label>
                <input required type="password" name="password_confirmation" id="password_confirmation" v-model="data.password_confirmation" class="block w-full text-sm border outline-none border-slate-800 bg-gray-50 focus:border-primary-default p-2.5 rounded-lg">
            </div>
            <div class="text-center">
                <button type="submit" :disabled="disabled" class="text-sm font-medium text-white bg-primary-default disabled:bg-primary-200 py-2.5 px-5 rounded-lg text-center">
                    <span v-if="disabled">
                        <svg aria-hidden="true" role="status" v-if="disabled" class="inline w-4 h-4 text-white me-3 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                        </svg>
                        Loading...
                    </span>
                    <span v-else>
                        Submit
                    </span>
                </button>
            </div>
            
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "Register",
    setup() {
        const data = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '' 
        }

        const errors = ref('')
        const disabled = ref('')

        const register = () => {

        }

        return {
            data,
            disabled,
            errors,
            register,
        }
    }
}
</script>
