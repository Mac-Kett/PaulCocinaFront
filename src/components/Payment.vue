<template>
  <section class="src-components-payment">
    <div class="container my-4">
      <div class="jumbotron shadow-sm p-3 mb-5 bg-white rounded">
        <div v-if="$store.state.pedido.paymentStatus.estado == 'Aprobado'">
          <img
            src="../assets/ordenConfirmada.png"
            class="img-thumbnail mx-auto d-block border-0"
          />
          <h1 class="text-center py-3">Recibimos su orden</h1>
          <h2 class="text-center">Su pago fue aprobado muchas gracias!</h2>
          <h6 class="text-center font-weight-light">
            su pedido será enviado lo antes posible si no se pierde por ahi...
          </h6>
        </div>

        <div v-else>
          <img
            src="../assets/ordenRechazada.png"
            class="img-thumbnail mx-auto d-block border-0"
          />
          <h1 class="text-center py-3">Su pago fue rechazado</h1>
          <h3 class="text-center">{{ mensaje }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-payment',
    props: [],
    mounted () {
      if (this.$store.state.pedido.estado!="Nuevo") {
        if (this.$store.state.pedido.paymentStatus.estado == "Aprobado") {
          this.$store.dispatch('clearPedido')
        } else {
          this.mensaje = this.$store.state.pedido.paymentStatus.mensaje
        }
      } else {
        this.mensaje = "No hay articulos en el carrito"
      }
    },
    data () {
      return {
        mensaje:""
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
h1 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
.img-thumbnail {
  height: 100px;
  width: auto;
}
</style>
