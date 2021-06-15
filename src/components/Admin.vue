<template>
  <section class="src-components-admin">
    <!--      COMPONENTE PLACEHOLDER PARA EL DASHBOARD DE ADMIN      -->
    <h1>Pedidos</h1>
    <button
      class="btn btn-success btn-sm ml-1"
      type="button"
      @click="mostrarIngredientes()"
    >
      Editar Ingredientes
    </button>
    <button
      class="btn btn-warning btn-sm ml-1"
      type="button"
      @click="editarRecetas()"
    >
      Editar Recetas
    </button>

    <div v-if="pedidos.length == 0" class="alert alert-warning mt-1">
      No se encontraron pedidos
    </div>

    <table class="table" v-else>
      <tr class="bg-success text-white">
        <th>Cliente</th>
        <th>Direccion</th>
        <th>Total</th>
        <th>Estado</th>
        <th>Acciones</th>
      </tr>
      <tr class="bg-light" v-for="(p, index) in pedidos" :key="index">
        <td>{{ p.nombre }} {{ p.apellido }}</td>
        <td>{{ p.direccion }} {{ p.altura }}</td>
        <td>{{ p.total }}</td>
        <td>{{ p.estado }}</td>
        <td>
          <button
            class="btn btn-warning btn-sm"
            type="button"
            @click="anular(p)"
          >
            Anular
          </button>
          <button
            class="btn btn-success btn-sm ml-1"
            type="button"
            @click="ver(p)"
          >
            Ver
          </button>
        </td>
      </tr>
    </table>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-admin',
    props: [],
    mounted () {
      this.getPedidos()
    },
    data () {
      return {
        pedidos:[]
      }
    },
    methods: {
      getPedidos() {
        this.axios.get(process.env.VUE_APP_API_URL+"pedidos")
        .then(ret => this.pedidos = ret.data)
        .catch(error => console.log(error))
      },
      anular(pedido){
        this.axios.delete(process.env.VUE_APP_API_URL+"pedidos/"+pedido._id)
        .then(res=>{
          console.log(res)
          let i = this.pedidos.findIndex(it => it._id === pedido._id)
          this.pedidos.splice(i,1)
        }).catch(error => console.log(error))
      },
      ver(pedido){
        console.log(pedido)
        this.$router.push({
          name: 'pedidodetalle', params: { id:pedido._id, pedido: pedido }
        })        
      },
      mostrarIngredientes() {
        this.$router.push({
          path: '/ingredientes'
        })       
      },
      editarRecetas() {
        this.$router.push({
          path: '/editrecetas'
        })       
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-cena {
}
h1 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
</style>
