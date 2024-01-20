// import './assets/main.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue'
import router from "@/router/router.js";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const pinia = createPinia()
const app = createApp(App)

pinia.use(piniaPluginPersistedstate)
pinia.use(({ store }) => {
	store.router = markRaw(router)
})


app.use(VueAxios, axios)
app.use(pinia)
app.use(router)
app.mount('#app')
