import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carrito : [],
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
        deleteProduct({commit},product) {
            commit('deleteProduct',product);
        },
        changeProductQuantity({commit}, payload) {
            commit('changeProductQuantity', payload);
        },
        addItemsAPedido({commit}){
            commit('addItemsAPedido')
        },
        login({commit},username,isadmin){
            commit('login',username,isadmin)
        }
    },
    getters: {
        getCartTotal: state => {
            return state.carrito.reduce((t, {total}) => t + parseInt(total),0)
        },
        getCartTotalItems: state =>{
            let totalquantity = 0
            state.carrito.forEach(i => {
                totalquantity += parseInt(i.quantity) ;
            })
            return totalquantity;
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
                //agregar chequeo de stock
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
        deleteProduct(state,product) {
            //agregar refresco de stock
            let index = state.carrito.findIndex(pedido => pedido.prod_id == product._id)
            if (index) {
                state.carrito.splice(index, 1)
            }
        }, 
        changeProductQuantity(state,payload) {
            let p = state.carrito.find(pedido => pedido.prod_id == payload.item.prod_id)
            if (p) {
                //agregar chequeo de stock
                p.quantity = payload.qty;
                p.total = p.quantity * p.price;
            }
        },  
    }
})
