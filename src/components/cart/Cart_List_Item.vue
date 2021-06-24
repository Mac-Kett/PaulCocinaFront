<template>
  <div class="box">
    <tr class="rounded">
      <td :style="{ width: '250px' }">{{ cartItem.title }}</td>
      <td :style="{ width: '50px' }">${{ cartItem.price }}</td>
      <td :style="{ width: '50px' }">
        <input
          :id="cartItem.title"
          type="number"
          class="form-control "
          :style="{ width: '50px' }"
          :value="cartItem.quantity"
          @click="changeQuantity($event)"
        />
      </td>
      <td :style="{ width: '50px' }" class="font-weight-bold">
        ${{ cartItem.total }}
      </td>
      <td>
        <a class="btn btn-outline-danger btn-sm" @click="deleteItem()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash-fill "
            viewBox="0 0 16 16"
          >
            <path
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
            />
          </svg>
        </a>
      </td>
    </tr>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "CartListItem",
  props: ["cartItem"],
  methods: {
    ...mapActions(["addCartItem", "removeCartItem"]),
    changeQuantity(e) {
      let payload = { item: this.cartItem, qty: e.target.value };
      this.$store.dispatch("changeProductQuantity", payload);
    },
    deleteItem() {
      this.$store.dispatch("deleteProduct", this.cartItem);
    },
  },
};
</script>
<style scoped lang="css"></style>
