import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'

Vue.use(VueAxios, axios)

Vue.use(bootstrap)

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
