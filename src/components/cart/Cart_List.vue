<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <p v-if="!cartQuantity" class="cart-empty-text has-text-centered">
      no hay articulos en el carrito!
    </p>
    <ul v-else>
      <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
          <CartListItem :cartItem="cartItem"/>
      </li>
      <div class="notification is-success">
        <p>
          Cantidad:
          <span class="has-text-weight-bold">{{ cartQuantity }}</span>
        </p>
      </div>
      <br>
    </ul>
    <div class="buttons">
    <button :disabled="!cartItems.length" class="button is-info" @click="checkout()">
      Pago (<span class="has-text-weight-bold">${{ cartTotal }}</span>)
    </button>

 <button class="button is-danger is-outlined" @click="removeAllCartItems">
    <span>Vaciar Carrito</span>
    <span class="icon is-small">
      <i class="fas fa-times"></i>
    </span>
  </button>
       </div>
  </div>
</template>
<script>
import CartListItem from "./Cart_List_Item";
export default {
  name: "CartList",
  components: {
    CartListItem
  },
  computed: {
    cartQuantity() {
      return this.$store.state.carrito.length
    },
    cartItems() {
      return this.$store.state.carrito
    },
    cartTotal() {
      return this.$store.getters.getCartTotal
    }    
  },
  created() {
  },
  methods: {
    removeAllCartItems() {
      this.$store.dispatch("removeAllCartItems");
    },
    checkout() {
      this.$router.push({path:'/checkout'});
    }
  }
};
</script>
