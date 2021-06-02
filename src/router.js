import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Categoria from './components/Categoria.vue'
import RecetaSimple from './components/RecetaSimple.vue'
import Card from './components/Card.vue'
import Sobremi from './components/Sobremi.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/home' },
        { path: '/home', component: Home },
        { path: '/categoria', component: Categoria },
        { path: '/recetaSimple', component: RecetaSimple },
        { path: '/card', component: Card },
        { path: '/sobremi', component: Sobremi },    
    ]
})