import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(VueRouter)

const routes = [{

  path: '/register',
  component: Register
},
{
  path: '/',
  component: Login
}
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
