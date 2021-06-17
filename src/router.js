import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import RecetaSimple from './components/RecetaSimple.vue'
import Sobremi from './components/Sobremi.vue'
import Formulario from './components/CheckoutForm/index.vue'
import Categoria from './components/Categoria.vue'
import Admin from './components/Admin.vue'
import Login from './components/Login.vue'
import CartList from './components/cart/Cart_List.vue';
import Payment from './components/Payment.vue';
import PedidoDetalle from './components/PedidoDetalle.vue'
import Ingredientes from './components/Ingredientes.vue'
import EditRecetas from './components/EditRecetas.vue'
import store from './store.js'
import FormReceta from './components/FormReceta.vue'
//import FormIngrediente from './components/FormIngrediente/index.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/home' },
        { path: '/home', component: Home },
        { path: '/receta/:id', component: RecetaSimple },
        { path: '/checkout', component: Formulario },    
        { path: '/recetas/:categoria', component: Categoria },
        { path: '/sobremi', component: Sobremi },    
        { path: '/login', component: Login },    
        { path: '/payment', component: Payment },    
        { path: '/admin',name:"admin", component: Admin,meta: {requiresAuth: true} },    
        { path: '/pedidodetalle/:id', name:'pedidodetalle',component: PedidoDetalle },    
        { path: '/ingredientes', component: Ingredientes },    
        { path: '/editrecetas', component: EditRecetas },    
        {path: '/cart', component: CartList},
        { path: '/formReceta', component: FormReceta },
        //{ path: '/formIngrediente', component: FormIngrediente },
    ]
})

router.beforeEach((to,from,next) =>{
    if (to.meta.requiresAuth){
            //ACA IRIA LA LOGICA DE DONDE GUARDEMOS EL USER. DESP DE INICIAR SESION EN LA API//
            //                      si no tiene user, va al login                            //
            //            si tiene user, y es el admin, se muestra el dashboard              //
        
        //por ahora dejo esto para redireccione directo al login.
        if (store.state.usuario.loginOk) {
            next()
        } else {
            next({
                path: "/login"
            })
        }

        /*if (!store.user){
            next({
                path: "/home"
            })
    }
    else {next()}*/
    }else {
        next();
    }
});
export {router};