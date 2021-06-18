<template lang="html">
  <section class="src-components-form-receta">
    <div class="container my-4">

      <h1>Receta</h1>
      <hr/>
     
      <div class="jumbotron shadow-sm p-3 mb-5 bg-white rounded">
        <vue-form :state="formState" @submit.prevent="guardar()" class="py-4 pl-5 pr-5 mx-auto">
          <div class="row">
            <label for="titulo">Titulo</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              class="form-control mb-3"
              v-model.trim="item.titulo"
            />
          </div>
          <div class="row">
            <label for="descripcion">Descripcion</label>
            <input
              type="text"
              id="descripcion"
              name="descripcion"
              class="form-control mb-3"
              v-model.trim="item.descripcion"
            />
          </div>
          <div class="row">
            <label for="instrucciones">Instrucciones</label>
            <textarea
              id="instrucciones"
              name="instrucciones"
              class="form-control mb-3"
              v-model.trim="item.instrucciones"/>
          </div>
          <div class="row">
            <label for="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              class="form-control mb-3" 
              v-model.trim="item.foto"/>
          </div>
          <div class="row">
            <label for="categoria">Categoria</label>
            <select
              id="categoria"
              name="categoria"
              class="form-control mb-3"
              v-model.trim="item.categoria">
              <option>Almuerzo</option>
              <option>Cena</option>
              <option>Desayuno</option>
              <option>Postre</option>
            </select>
          </div>
          <div class="row">
            <label for="precio">Precio</label>
            <input
              type="text"
              id="precio"
              name="precio"
              class="form-control mb-3"
              v-model.trim="item.precio"/>
          </div>
          <div class="row mb-3">
            <label for="ingredientes">Ingredientes</label>
            <select size="10" multiple="multiple" id="ingredientes" name="ingredientes" class="form-control "
              v-model.trim="item.ingredientes">
              <option v-for="(p, index) in ingredientes" :key="index">
                {{p.nombre}}
              </option>
            </select>
          </div>
          <hr class="mb-4" />
          <div class="mx-auto col-3">
          <button class="btn btn-primary btn-block" type="submit" :disabled="formState.$invalid">
            Guardar
          </button>
          </div>
        </vue-form>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-form-receta',
    props: [
      'item'
    ],
    mounted () {
      this.traer()
      this.traerIng()
    },
    data () {
      return {
        recetas:[],
        ingredientes:[],
        formState:{},

      }
    },
    methods: {
      guardar() {
        console.log(this.item)
        if (this.item._id) {
          this.axios.put(process.env.VUE_APP_API_URL+"recetas/"+this.item._id,this.item)
          .then(data=>{
            console.log(data)
            this.$router.go(-1)
          }).catch(error => console.log(error))
        } else {
          this.axios.post(process.env.VUE_APP_API_URL+"recetas",this.item)
          .then(data=>{
            console.log(data)
            this.$router.go(-1)
          }).catch(error => console.log(error))
        }

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
h1 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
</style>
