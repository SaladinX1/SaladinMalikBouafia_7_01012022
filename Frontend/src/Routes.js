import Connexion from './components/Connexion.vue'
import Profile from './components/Profile.vue'
import Forum from './components/Forum.vue'



export default [

    {
        path: '/Connexion',
        component: Connexion
    },
    {
        path: '/Forum',
        component: Forum
    }, {
        path: '/Profile',
        component: Profile

    }

]