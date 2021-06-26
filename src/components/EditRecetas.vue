<template lang="html">
  <section class="src-components-recetas">
    <div class="container">
      <h1>Recetas</h1>
      <hr />
      <div class="jumbotron p-5 shadow-sm bg-white rounded mx-auto">
        <div>
          <router-link to="/formReceta">
            <button class="btn btn-danger" type="button">
              Crear Nueva Receta
            </button>
          </router-link>
        </div>

        <br />
        <table class="table">
          <tr class="bg-danger text-white text-center">
            <th>Titulo</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
          <tr class="bg-light" v-for="(receta, index) in recetas" :key="index">
            <td>{{ receta.titulo }}</td>
            <td class="text-center">{{ receta.precio | currency }}</td>
            <td class="text-center">{{ receta.stock }}</td>
            <td class="text-center">
              <button
                class="btn btn-warning btn-sm"
                type="button"
                @click="editar(receta)"
              >
                Editar
              </button>
              <button
                class="btn btn-success btn-sm ml-1"
                type="button"
                @click="borrar(receta)"
              >
                Borrar
              </button>
            </td>
          </tr>
        </table>

        <!--link para volver a pagina de administrador-->
        <div class="py-3 text-center">
          <router-link to="/admin">
          
            <a href="#">Volver a pagina administrador</a>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-recetas',
    props: [
    ],
    mounted () {
      this.traer()
    },
    data () {
      return {
        recetas:[],
      }
    },
    methods: {
      traer() {
        this.axios.get(process.env.VUE_APP_API_URL+"recetas").then(data=>{
          this.recetas = data.data
        }).catch(error=>console.log(error))
      },
      editar(item) {
        console.log(item);
        this.$router.push({
        name: 'formReceta',
        params: {item},
        })
      },
      borrar(item) {
        this.axios.delete(process.env.VUE_APP_API_URL+"recetas/"+item._id).then(data => {
            console.log(data)
            let i = this.recetas.findIndex(item => item._id == this.item_id)
            this.recetas.splice(i,1)
        })
        console.log(item)
      },
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
