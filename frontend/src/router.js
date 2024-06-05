import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import { useUserStore } from "./stores/userStore";

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        name: "Login",
        component: Login,
        meta: { requiresGuest: true },
    },
    {
        path: '/register',
        name: "Register",
        component: Register,
        meta: { requiresGuest: true },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore()

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const requiresGuest = to.matched.some(record => record.meta.requiresGuest)

    if (requiresAuth && !userStore.token) {
        next({ name: 'Login', query: { redirect: to.fullPath }})
    } else if (requiresGuest && userStore.token) {
        next({ name: 'Home' })
    } else {
        next()
    }
})


export default router