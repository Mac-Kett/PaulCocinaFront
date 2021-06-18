<template lang="html">
  <section class="src-components-editingredientes">
    <div class="container">
      <h1>Ingredientes</h1>
      <hr />
      <div class="jumbotron p-5 shadow-sm bg-white rounded mx-auto">
        <div>
          <button class="btn btn-danger" type="button" @click="nuevo()">
            Crear Nuevo Ingrediente
          </button>
          <!--Modificar-->
          <vue-form :state="formState" @submit.prevent="guardar()" v-if="item">
            <div class="row">
              <label for="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                class="form-control"
                v-model.trim="item.nombre"
              />
            </div>
            <hr class="mb-4" />
            <button class="btn btn-primary btn-block" type="submit">
              Guardar
            </button>
            <button
              class="btn btn-warning btn-block"
              type="button"
              @click="cancelar()"
            >
              Cancelar
            </button>
          </vue-form>
          <!--fin de Modificar-->
        </div>
        <br />
        <table class="table">
          <tr class="bg-danger text-white text-center">
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
          <tr
            class="bg-light"
            v-for="(ingrediente, index) in ingredientes"
            :key="index"
          >
            <td>{{ ingrediente.nombre }}</td>
            <td class="text-center">
              <button
                class="btn btn-warning btn-sm"
                type="button"
                @click="editar(ingrediente)"
              >
                Editar
              </button>
              <button
                class="btn btn-success btn-sm ml-1"
                type="button"
                @click="borrar(ingrediente)"
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
    name: 'src-components-editingredientes',
    props: [],
    mounted () {
      this.traer()
    },
    data () {
      return {
        ingredientes:[],
        item:null,
        formState:{}
      }
    },
    methods: {
      nuevo() {
        this.item = {
          _id:0,
          nombre:""
        }
      },
      editar(item) {
        this.item = item
        console.log(item)
      },
      guardar() {
        console.log(this.item)
        if (this.item._id) {
          this.axios.put(process.env.VUE_APP_API_URL+"ingredientes/"+this.item._id,this.item)
          .then(data=>{
            console.log(data)
            let i = this.ingredientes.findIndex(item => item._id == this.item._id)
            this.ingredientes.splice(i,1,this.item)
            this.item=null
          }).catch(error => console.log(error))
        } else {
          this.axios.post(process.env.VUE_APP_API_URL+"ingredientes",this.item)
          .then(data=>{
            console.log(data)
            this.item._id = data.data.insertedId
            this.ingredientes.push(this.item)
            this.item=null
          }).catch(error => console.log(error))
        }
      },
      borrar(item) {
        this.axios.delete(process.env.VUE_APP_API_URL+"ingredientes/"+item._id).then(data => {
            console.log(data)
            let i = this.ingredientes.findIndex(item => item._id == this.item_id)
            this.ingredientes.splice(i,1)
        })
        console.log(item)
      },
      cancelar() {
        this.item = null
      },
      traer() {
        this.axios.get(process.env.VUE_APP_API_URL+"ingredientes").then(data=>{
          this.ingredientes = data.data
        }).catch(error=>console.log(error))
      },
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-ingredientes {
  margin: 2em;
}
h1 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
</style>
