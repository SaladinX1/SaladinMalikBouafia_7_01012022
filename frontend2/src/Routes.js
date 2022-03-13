import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Profile from './views/Profile'
import Forum from './views/Forum'
import PostDetail from './views/PostDetail'
import addPost from './views/addPost'
import addComment from './views/addComment'
import newPassword from './views/NewPasswordView'
import authService from './services/auth'

Vue.use(VueRouter)

const routes = [{
  path: '/register',
  component: Register
},
{
  path: '/profile',
  component: Profile,
  meta: { requiresAuth: true }
},
{
  path: '/',
  component: Login
},
{
  path: '/forum',
  component: Forum,
  meta: { requiresAuth: true }
},
{
  path: '/post/:id',
  component: PostDetail,
  props: true,
  meta: { requiresAuth: true }
},
{
  path: '/addpost',
  component: addPost,
  meta: { requiresAuth: true }
},
{
  path: '/new_password',
  component: newPassword
},
{
  path: '/post/:id/addcomment',
  component: addComment,
  props: true,
  meta: { requiresAuth: true }
}
]
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (authService.isAuthenticated()) {
      next()
      return
    }
    next('/')
  } else next()
})

export default router
