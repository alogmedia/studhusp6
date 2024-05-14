import '@/assets/style/atom.css'
import '@/assets/style/molecules.css'
import '@/assets/style/organisms.css'
import '@/assets/style/style.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
