import Vue from 'vue'
import VueRouter from 'vue-router'

//agruegue para solucionar error de actualizar busqueda
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function repalce(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}
//

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
import EditIngredientes from './components/EditIngredientes.vue'
import EditRecetas from './components/EditRecetas.vue'
import store from './store.js'
import FormReceta from './components/FormReceta.vue'
import ResultadosBusqueda from './components/ResultadosBusqueda.vue'
//import FormIngrediente from './components/FormIngrediente.vue'


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
        { path: '/admin', name:"admin", component: Admin,meta: {requiresAuth: true} },    
        { path: '/pedidodetalle/:id', name:'pedidodetalle',component: PedidoDetalle },    
        { path: '/editingredientes', component: EditIngredientes },    
        { path: '/editrecetas', component: EditRecetas },    
        { path: '/cart', component: CartList},
        { path: '/formReceta', name: 'formReceta',component: FormReceta, props: (route) => ({...route.params}) },
        { path: '/resultadosBusqueda', name: 'resultadosBusqueda',component: ResultadosBusqueda},
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