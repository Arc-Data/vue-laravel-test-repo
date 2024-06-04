import './assets/main.css'
import '../node_modules/flowbite-vue/dist/index.css'

import { createApp, markRaw } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import { createPinia } from 'pinia'

library.add(faTrash, faPlus)


const app = createApp(App)
const pinia = createPinia()

pinia.use( ({ store }) => {
    store.router = markRaw(router)
})

app.use(pinia)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
