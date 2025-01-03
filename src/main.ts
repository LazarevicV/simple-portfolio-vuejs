import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { SpeedInsights } from "@vercel/speed-insights/vue"

const app = createApp(App)

app.use(SpeedInsights)
app.use(router)

app.mount('#app')
