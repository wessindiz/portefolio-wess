import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import css from '../public/css/style.css'

createApp(App).use(router).use(css).mount('#app')
