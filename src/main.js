import Vue from 'vue'
import App from './App.vue'


import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { router } from './router'
import './httpAxios'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

