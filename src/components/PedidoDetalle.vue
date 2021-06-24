<template lang="html">
  <section class="src-components-pedido-detalle">
    <div class="container">
      <h2 class="my-4">Cliente: {{ pedido.nombre }} {{ pedido.apellido }}</h2>
      <hr />
      <div class="jumbotron p-5 shadow-sm bg-white rounded mx-auto">
        <h3 class="pb-3">Lista de Productos</h3>
        <table class="table text-center">
          <tr class="bg-danger text-white">
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unidad</th>
            <th>Total Parcial</th>
          </tr>
          <tr
            class="bg-light"
            v-for="(p, index) in pedido.productos"
            :key="index"
          >
            <td>{{ p.title }}</td>
            <td>{{ p.quantity }}</td>
            <td>{{ p.price }}</td>
            <td>{{ p.total }}</td>
          </tr>
        </table>

        <br />

        <h5>Total: ${{ pedido.total }}</h5>
        <h5 class="font-weight-normal">Estado: {{ pedido.estado }}</h5>
        <h5 class="font-weight-normal">
          Entregar en {{ pedido.direccion }} {{ pedido.altura }} piso:
          {{ pedido.piso }} codigo postal: {{ pedido.codigoPostal }}
        </h5>
        <!--boton cambia estado de pedido, se muestra el boton pedido cuando el mismo no esta entregado-->
        <div class="py-3">
          <button
            class="btn btn-success btn-sm"
            type="button"
            @click="marcarEntregado()"
          >
            Marcar como Entregado
          </button>
        </div>
      </div>

      <!--link para volver a pagina de administrador-->
      <div class="py-3 text-center">
        <router-link to="/admin">
          <a href="#">Volver a pagina administrador</a>
        </router-link>
      </div>
    </div>
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
        this.pedido.estado = 'Entregado'
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
h2 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
</style>
