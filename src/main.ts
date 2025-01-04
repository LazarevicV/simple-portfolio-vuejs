import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Extend the RouteMeta type to include the `title` property
import type { RouteLocationNormalized } from 'vue-router'

const app = createApp(App)

router.afterEach((to: RouteLocationNormalized) => {
  const defaultTitle = "Vukadin Lazarevic Portfolio"
  document.title = to.meta?.title || defaultTitle
})

app.use(router)

app.mount('#app')
