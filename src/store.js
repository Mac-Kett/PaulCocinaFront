import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carrito : [],
        busquedas : [],
        pedido : {
            nombre: '',
            apellido: '',
            direccion: '',
            email:'',
            altura: '',
            piso: '',
            codigoPostal: '',
            nombreTarjeta: '',
            numeroTarjeta: '',
            fechaExpiracion: '',
            nroCVV: '',
            localidad:'',
            provincia:'',
            pais:'',
            productos: [],
            total: 0,
            estado:'NUEVO',
            paymentStatus:null
        },
        usuario: {
            esAdmin:false,
            nombre:"",
            loginOk:false
        }
    },
    actions : {
        clearPedido({commit}) {
            commit('clearPedido')
        },
        getCartItems({commit}) {
            commit()
            return this.state.carrito;
        },
        removeAllCartItems({commit}) {
            commit('removeAllCartItems');
        },
        addProduct({commit},product) {
            commit('addProduct',product);
        },
        addItemsAPedido({commit}){
            commit('addItemsAPedido')
        },
        login({commit},username,isadmin){
            commit('login',username,isadmin)
        },
        cargarBusquedas({commit},elementos){
            console.log('Entro a actions carga busqueda')
                commit ('setBusquedas',elementos)
        }
    },
    getters: {
        getCartTotal: state => {
            return state.carrito.reduce((t, {total}) => t + parseInt(total),0)
        }
    },    
    mutations : {
        login(state,username,isadmin){
            state.usuario.esAdmin=isadmin
            state.usuario.nombre=username
            state.usuario.loginOk=true
        },
        addItemsAPedido(state) {
            state.pedido.productos = state.carrito
            state.pedido.total = state.pedido.productos.reduce((t, {total}) => t + parseInt(total),0)
        },
        clearPedido(state) {
            state.pedido = {
                nombre: '',
                apellido: '',
                direccion: '',
                email:'',
                altura: '',
                piso: '',
                codigoPostal: '',
                nombreTarjeta: '',
                numeroTarjeta: '',
                fechaExpiracion: '',
                nroCVV: '',
                localidad:'',
                provincia:'',
                pais:'',
                productos: [],
                total: 0,
                estado:'NUEVO'
            }
            state.carrito = []
        },
        removeAllCartItems(state) {
            state.carrito = []
        },
        addProduct(state,product) {
            let p = state.carrito.find(pedido => pedido.prod_id == product._id)
            if (p) {
                p.quantity++;
                p.total = p.quantity * p.price;
            } else {
                p = {
                    prod_id: product._id,
                    title: product.titulo,
                    price: product.precio,
                    quantity: 1,
                    total: product.precio
                }
                state.carrito.push(p);
            }
        },

        setBusquedas(state,busquedas){
            console.log('Entro a mutations setbusquedas')
            state.busquedas=busquedas
        }
    }
})
