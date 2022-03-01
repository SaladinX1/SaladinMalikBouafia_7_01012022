import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Forum from './views/Forum'
import PostDetail from './views/PostDetail'
import addPost from './views/addPost'
import addComment from './views/addComment'

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
  path: '/addcomment',
  component: addComment,
  props: true
}
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
