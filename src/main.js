import { createApp } from 'vue'
import VueLazyload from 'vue3-lazyload'
import fastclick from 'fastclick'
import 'babel-polyfill'
import App from './App.vue'

const app = createApp(App)
app.use(VueLazyload, {
  preLoad: 1.3,
  error: 'img/null.png',
  attempt: 1
})
app.mount('#app')

fastclick(document.body)