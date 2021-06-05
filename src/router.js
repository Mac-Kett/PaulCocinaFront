import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import CartList from '../components/cart/Cart_List.vue';
import ProductList from '../components/product/Product_List.vue';

import Desayuno from './components/Front/Desayuno.vue'
import Almuerzo from './components/Front/Almuerzo.vue'
import Cena from './components/Front/Cena.vue'
import Postre from './components/Front/Postre.vue'
import Sobremi from './components/Front/Sobremi.vue'

Vue.use(VueRouter, Vuex)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/desayuno', component: Desayuno },
        { path: '/almuerzo', component: Almuerzo },
        { path: '/cena', component: Cena },
        { path: '/postre', component: Postre },
        { path: '/sobremi', component: Sobremi }, 
        {path: '/inventory', component: ProductList},
        {path: '/cart', component: CartList},
        {path: '/', redirect: '/inventory'},
        ]   
})