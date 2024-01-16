// import './assets/main.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const pinia = createPinia()
const app = createApp(App)

app.use(VueAxios, axios)
app.use(pinia)
app.use(router)
app.mount('#app')
