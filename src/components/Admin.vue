<template>
  <section class="src-components-admin">
    <!--      COMPONENTE PLACEHOLDER PARA EL DASHBOARD DE ADMIN      -->

    <div class="jumbotron jumbotron p-5 shadow-sm bg-white rounded mx-auto">
      <h1>Dashboard</h1>
      <hr />
      <!--HACER QUE CUANDO SE MUESTRE UNO, NO SE MUESTREN LOS OTROS-->
      <ul class="nav nav-pills">
        <!--Ver Pedido-->
        <li class="nav-item">
          <!--Hacer que la pill activa se coloree con una funcion-->
          <a class="nav-link active" @click="mostrarElemento"> Ver Pedidos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="mostrarElemento"> Ver Recetas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="mostrarElemento"> Ver Ingredientes</a>
        </li>
      </ul>

      <div class="py-4" v-if="mostrarPedido">
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
      </div>
      <div class="py-4" v-if="mostrarIngrediente">
        <button
          class="btn btn-success btn-sm ml-1"
          type="button"
          @click="mostrarIngredientes()"
        >
          Editar Ingredientes
        </button>
      </div>
      <div class="py-4" v-if="mostrarReceta">
        <button
          class="btn btn-warning btn-sm ml-1"
          type="button"
          @click="editarRecetas()"
        >
          Editar Recetas
        </button>
      </div>
    </div>
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
        pedidos:[],
        mostrarPedido:true,
        mostrarReceta:false,
        mostrarIngrediente:false
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
      },
      mostrarElemento(){

      }
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-cena {
}
h1,
h2,
h3 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
.jumbotron {
  width: 90%;
}
</style>
