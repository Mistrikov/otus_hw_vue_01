import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { Store } from './stores/settings.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Store)
app.use(router)

app.mount('#app')
