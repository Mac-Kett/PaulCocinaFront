<template>
  <div class="cart nav-link btn-danger text-white">
    <div @click="ver = !ver" class="text-justify">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-cart "
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
      <span class="badge badge-light  badge-pill ml-3 ">
        {{ cartParcialQuantity }}</span
      >
    </div>
    <div v-if="ver">
      <div>
        <h5>
          Carrito de Compras
        </h5>
      </div>
      <div>
        <p v-if="!cartParcialQuantity" class="has-text-centered">
          No hay articulos en el carrito!
        </p>
        <table v-else class="table-responsive table-sm  table-bordered rounded">
          <tbody
            v-for="cartItem in cartItems"
            :key="cartItem.id"
            class="text-dark bg-light"
          >
            <tr class="rounded">
              <CartItem :cartItem="cartItem" />
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-end" v-if="cartItems.length">
          <tr class="table-striped bg-dark rounded">
            <span class="pr-3 ml-1 pl-1">Items: {{ cartTotalQuantity }}</span>
            Total:
            <span class="text-success font-weight-bold mr-1">{{
              cartTotal | currency
            }}</span>
          </tr>
        </div>
      </div>
      <div class="border-top-0 d-flex justify-content-between ">
        <button
          :disabled="!cartItems.length"
          type="button"
          class="btn btn-secondary"
          @click="removeAllCartItems"
        >
          Vaciar
        </button>
        <button
          :disabled="!cartItems.length"
          type="button"
          class="btn btn-success"
          @click="checkout()"
        >
          Pagar
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import CartItem from "./Cart_List_Item.vue";
export default {
  name: "CartList",
  data() {
    return {
      ver: false,
    };
  },
  components: {
    CartItem,
  },
  computed: {
    cartParcialQuantity() {
      return this.$store.state.carrito.length;
    },
    cartTotalQuantity() {
      return this.$store.getters.getCartTotalItems;
    },
    cartItems() {
      return this.$store.state.carrito;
    },
    cartTotal() {
      return this.$store.getters.getCartTotal;
    },
  },
  created() {},
  methods: {
    removeAllCartItems() {
      this.$store.dispatch("removeAllCartItems");
    },
    checkout() {
      this.$router.push({ path: "/checkout" });
      this.ver = false;
      window.scrollTo(0, screen.height / 2);
    },
  },
};
</script>
<style scoped lang="css">
table {
  overflow-y: scroll;
  max-height: 180px;
  display: block;
}
.cart {
  position: absolute;
  z-index: 110;
}
</style>
