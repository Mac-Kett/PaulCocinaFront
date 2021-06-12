<template lang="html">

  <section class="src-components-pedido-detalle">
    <h1>{{pedido.nombre}} {{ pedido.apellido }}</h1>



    <table class="table">
        <tr class="bg-success text-white">
            <th>Producto</th>
            <th>Cantidad</th>
            <th>PUni</th>
            <th>Total</th>
        </tr>
        <tr class="bg-light" v-for="(p,index) in pedido.productos" :key="index">
            <td>{{ p.title }}</td>
            <td>{{ p.quantity }}</td>
            <td>{{ p.price }}</td>
            <td>{{ p.total }}</td>
        </tr>
    </table>
    <h2>Total:{{ pedido.total }}</h2>
    <h4>Estado:{{ pedido.estado }}</h4>
    <h4>Entregar en: {{ pedido.direccion }} {{ pedido.altura }} Piso: {{ pedido.piso }} CP: {{ pedido.codigoPostal }}</h4>
    <button class="btn btn-success btn-sm ml-1" type="button" @click="marcarEntregado()">Marcar como Entregado</button>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-pedido-detalle',
    props: [],
    mounted () {

    },
    data () {
      return {
        pedido: this.$route.params.pedido
      }
    },
    methods: {
      marcarEntregado() {
        this.pedido.estado = 'ENTREGADO'
        this.axios.put(process.env.VUE_APP_API_URL+"pedidos/"+this.pedido._id,this.pedido)
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-pedido-detalle {

  }
</style>
