import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import RecetaSimple from './components/RecetaSimple.vue'
import Desayuno from './components/Desayuno.vue'
import Almuerzo from './components/Almuerzo.vue'
import Cena from './components/Cena.vue'
import Postre from './components/Postre.vue'
import Card from './components/Card.vue'
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
        { path: '/recetaSimple', component: RecetaSimple },
        { path: '/receta/:id', component: RecetaSimple },
        { path: '/card', component: Card },
        { path: '/sobremi', component: Sobremi },    
    ]
})