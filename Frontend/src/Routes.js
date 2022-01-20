import Vue from 'vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Profile from './components/Profile.vue'
import Forum from './components/Forum.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [

    {
        path: '/',
        component: Login,

    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/forum',
        name: 'Forum',
        component: Forum
    }, {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },


]

const router = new VueRouter({
    mode: 'history',
    routes
})



export default router