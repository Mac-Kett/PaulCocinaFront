<template lang="html">

  <section class="src-components-ingredientes">
    <h1>Editar Ingredientes</h1>
    <button class="btn btn-success btn-sm ml-1" type="button" @click="nuevo()">Nuevo</button>
    <vue-form :state="formState" @submit.prevent="guardar()" v-if="item">
      <div class="row">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" class="form-control" v-model.trim="item.nombre" />
      </div>
      <hr class="mb-4" />
      <button class="btn btn-primary btn-block" type="submit">Guardar</button>
      <button class="btn btn-warning btn-block" type="button" @click="cancelar()">Cancelar</button>
    </vue-form>

    <br/>
    <table class="table">
        <tr class="bg-success text-white">
            <th>Nombre</th>
            <th>Acciones</th>
        </tr>
        <tr class="bg-light" v-for="(p,index) in ingredientes" :key="index">
            <td>{{ p.nombre }}</td>
            <td><button class="btn btn-warning btn-sm" type="button" @click="editar(p)">Editar</button>
            <button class="btn btn-success btn-sm ml-1" type="button" @click="borrar(p)">Borrar</button></td>
        </tr>
    </table>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-ingredientes',
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
</style>
