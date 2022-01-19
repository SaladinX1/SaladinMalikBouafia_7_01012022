import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import Routes from './Routes'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(axios);
Vue.use(bootstrap);


const router = new VueRouter({

  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router

}).$mount('#app')