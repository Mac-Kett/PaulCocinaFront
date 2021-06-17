<template lang="html">
  <section class="src-components-recetas">
    <div class="container">
      <h1>Recetas</h1>
      <hr />
      <div class="jumbotron p-5 shadow-sm bg-white rounded mx-auto">
        <div >
          <router-link to="/formReceta">
            <button class="btn btn-danger" type="button" @click="nuevo()">
              Crear Nueva Receta
            </button>
          </router-link>
        </div>

        
        <br />
        <table class="table">
          <tr class="bg-danger text-white text-center">
            <th>Titulo</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
          <tr class="bg-light" v-for="(p, index) in recetas" :key="index">
            <td>{{ p.titulo }}</td>
            <!--{{ p.stock }}-->
            <td class="text-center">Stock, cambiar el el codigo</td>
            <td class="text-center">
              <button class="btn btn-warning btn-sm" type="button" @click="editar(p)">
                Editar
              </button>
              <button
                class="btn btn-success btn-sm ml-1" type="button" @click="borrar(p)">
                Borrar
              </button>
            </td>
          </tr>
        </table>
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
    this.traer(),
    this.traerIng()
    },
    data () {
      return {
        recetas:[],
        ingredientes:[],
        item:null,
        formState:{},
      }
    },
    methods: {      
      nuevo() {
        this.item = {
          _id: null,
          titulo: "",
          descripcion: "",
          instrucciones: "",
          foto: "",
          categoria: "",
          ingredientes: [],
          precio: null        
        }
      },
      editar(item) {
        this.item = item
        console.log(item)
      },
      guardar() {
        console.log(this.item)
        if (this.item._id) {
          this.axios.put(process.env.VUE_APP_API_URL+"recetas/"+this.item._id,this.item)
          .then(data=>{
            console.log(data)
            let i = this.recetas.findIndex(item => item._id == this.item._id)
            this.recetas.splice(i,1,this.item)
            this.item=null
          }).catch(error => console.log(error))
        } else {
          this.axios.post(process.env.VUE_APP_API_URL+"recetas",this.item)
          .then(data=>{
            console.log(data)
            this.item._id = data.data.insertedId
            this.recetas.push(this.item)
            this.item=null
          }).catch(error => console.log(error))
        }
      },
      borrar(item) {
        this.axios.delete(process.env.VUE_APP_API_URL+"recetas/"+item._id).then(data => {
            console.log(data)
            let i = this.recetas.findIndex(item => item._id == this.item_id)
            this.recetas.splice(i,1)
        })
        console.log(item)
      },
      cancelar() {
        this.item = null
      },
      traer() {
        this.axios.get(process.env.VUE_APP_API_URL+"recetas").then(data=>{
          this.recetas = data.data
        }).catch(error=>console.log(error))
      },
      traerIng() {
        this.axios.get(process.env.VUE_APP_API_URL+"ingredientes").then(data=>{
          this.ingredientes = data.data
        }).catch(error=>console.log(error))
      }
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
.src-components-recetas {
  margin: 2em;
}
h1 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
</style>
