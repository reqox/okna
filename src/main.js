import { createApp } from 'vue'
import App from './app/App.vue'
import { router } from './app/providers/router.js'
import './app/styles/global.css'

createApp(App).use(router).mount('#app')
