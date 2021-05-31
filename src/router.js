import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Desayuno from './components/Desayuno.vue'
import Almuerzo from './components/Almuerzo.vue'
import Cena from './components/Cena.vue'
import Postre from './components/Postre.vue'
import Sobremi from './components/Sobremi.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/home' },
        { path: '/home', component: Home },
        { path: '/desayuno', component: Desayuno },
        { path: '/almuerzo', component: Almuerzo },
        { path: '/cena', component: Cena },
        { path: '/postre', component: Postre },
        { path: '/sobremi', component: Sobremi },    
    ]
})