<template lang="html">

  <section class="src-components-recetas">
    <h1>Editar Recetas</h1>
    <button class="btn btn-success btn-sm ml-1" type="button" @click="nuevo()">Nuevo</button>
    <vue-form :state="formState" @submit.prevent="guardar()" v-if="item">
      <div class="row">
        <label for="titulo">Titulo</label>
        <input type="text" id="titulo" name="titulo" class="form-control" v-model.trim="item.titulo" />
      </div>
      <div class="row">
        <label for="descripcion">descripcion</label>
        <input type="text" id="descripcion" name="descripcion" class="form-control" v-model.trim="item.descripcion" />
      </div>
      <div class="row">
        <label for="instrucciones">instrucciones</label>
        <textarea id="instrucciones" name="instrucciones" class="form-control" v-model.trim="item.instrucciones" />
      </div>
      <div class="row">
        <label for="foto">foto</label>
        <input type="text" id="foto" name="foto" class="form-control" v-model.trim="item.foto" />
      </div>
      <div class="row">
        <label for="categoria">categoria</label>
        <select id="categoria" name="categoria" class="form-control" v-model.trim="item.categoria" >
          <option>Almuerzo</option>
          <option>Cena</option>
          <option>Desayuno</option>
          <option>Postre</option>
        </select>
      </div>
      <div class="row">
        <label for="precio">precio</label>
        <input type="text" id="precio" name="precio" class="form-control" v-model.trim="item.precio" />
      </div>
      <div class="row">
        <label for="ingredientes">ingredientes</label>
        <select size="10" multiple="multiple" id="ingredientes" name="ingredientes" class="form-control" v-model.trim="item.ingredientes" >
          <option v-for="(p,index) in ingredientes" :key="index">{{ p.nombre }}</option>
        </select>
      </div>
      <hr class="mb-4" />
      <button class="btn btn-primary btn-block" type="submit">Guardar</button>
      <button class="btn btn-warning btn-block" type="button" @click="cancelar()">Cancelar</button>
    </vue-form>

    <br/>
    <table class="table">
        <tr class="bg-success text-white">
            <th>Titulo</th>
            <th>Acciones</th>
        </tr>
        <tr class="bg-light" v-for="(p,index) in recetas" :key="index">
            <td>{{ p.titulo }}</td>
            <td><button class="btn btn-warning btn-sm" type="button" @click="editar(p)">Editar</button>
            <button class="btn btn-success btn-sm ml-1" type="button" @click="borrar(p)">Borrar</button></td>
        </tr>
    </table>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-recetas',
    props: [],
    mounted () {
      this.traer()
      this.traerIng()
    },
    data () {
      return {
        recetas:[],
        ingredientes:[],
        item:null,
        formState:{}
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
</style>
