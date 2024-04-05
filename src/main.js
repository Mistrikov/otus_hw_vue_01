import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const Store = createStore({
  state() {
    return {
      actions: [true, false, false, false],
      operations: ['+', '-', '*', '/'],
      playername: '',
      canStartGame: false
    }
  },
  mutations: {
    setPlayername(state, value) {
      state.playername = value
    },
    setActions(state, ind) {
      state.actions[ind] = !state.actions[ind]
    },
    setStartGame(state, value) {
      state.canStartGame = value
    }
  }
})

//app.use(createPinia())
app.use(Store)
app.use(router)

app.mount('#app')
