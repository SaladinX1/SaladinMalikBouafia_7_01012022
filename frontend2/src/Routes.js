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

Vue.use(VueRouter)

const routes = [{
  path: '/register',
  component: Register
},
{
  path: '/profile',
  component: Profile
},
{
  path: '/',
  component: Login
},
{
  path: '/forum',
  component: Forum
},
{
  path: '/post/:id',
  component: PostDetail,
  props: true
},
{
  path: '/addpost',
  component: addPost
},
{
  path: '/new_password',
  component: newPassword
},
{
  path: '/post/:id/addcomment',
  component: addComment,
  props: true
}
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
