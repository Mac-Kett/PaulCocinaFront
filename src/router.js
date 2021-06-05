import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import RecetaSimple from './components/RecetaSimple.vue'
import Sobremi from './components/Sobremi.vue'
import Formulario from './components/CheckoutForm/index.vue'
import Categoria from './components/Categoria.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/home' },
        { path: '/home', component: Home },
        { path: '/receta/:id', component: RecetaSimple },
        { path: '/checkout', component: Formulario },    
        { path: '/recetas/:categoria', component: Categoria },
        { path: '/sobremi', component: Sobremi },    
    ]
})