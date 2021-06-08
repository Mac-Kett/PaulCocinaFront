import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carrito : []
    },
    actions : {
        getCartItems({commit}) {
            commit()
            return this.state.carrito;
        },
        removeAllCartItems({commit}) {
            commit('removeAllCartItems');
        },
        addProduct({commit},product) {
            commit('addProduct',product);
        }
    },
    getters: {
        getCartTotal: state => {
            return state.carrito.reduce((t, {total}) => t + total,0)
        }
    },    
    mutations : {
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
        }
    }
})
