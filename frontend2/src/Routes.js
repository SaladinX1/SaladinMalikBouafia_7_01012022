import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Forum from './views/Forum'

Vue.use(VueRouter)

const routes = [{
  path: '/register',
  component: Register
},
{
  path: '/',
  component: Login
},
{
  path: '/forum',
  component: Forum
}
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
