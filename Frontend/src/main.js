import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import router from './Routes.js'

//import axios from 'axios'

Vue.config.productionTip = false
//Vue.use(axios);
Vue.use(bootstrap);




new Vue({
  render: h => h(App),
  router
}).$mount('#app')