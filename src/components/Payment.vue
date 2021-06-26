<template>
  <section class="src-components-payment">
    <h1>{{ mensaje }}</h1>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-payment',
    props: [],
    mounted () {
      if (this.$store.state.pedido.estado!="NUEVO") {
        if (this.$store.state.pedido.paymentStatus.estado == "APROBADO") {
          this.$store.dispatch('clearPedido')
          this.mensaje = "Su pago fue aprobado muchas gracias!, su pedido será enviado lo antes posible si no se pierde por ahi."
        } else {
          this.mensaje = "Su pago fue rechazado por "+this.$store.state.pedido.paymentStatus.mensaje
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
</style>
