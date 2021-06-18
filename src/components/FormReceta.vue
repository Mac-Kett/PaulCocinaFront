<template lang="html">
  <section class="src-components-form-receta">
    <div class="container my-4">
      <h1>Receta</h1>
      <hr />

      <div class="jumbotron shadow-sm p-3 mb-5 bg-white rounded">
        <vue-form
          :state="formState"
          @submit.prevent="guardar()"
          class="py-4 pl-5 pr-5 mx-auto"
        >
          <validate tag="div">
            <label for="titulo">Titulo</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              class="form-control mb-3"
              v-model.trim="item.titulo"
              required
            />
            <field-messages name="titulo" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
            </field-messages>
          </validate>

          <validate tag="div">
            <label for="descripcion">Descripcion</label>
            <input
              type="text"
              id="descripcion"
              name="descripcion"
              class="form-control mb-3"
              v-model.trim="item.descripcion"
              required
            />
            <field-messages name="descripcion" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
            </field-messages>
          </validate>

          <validate tag="div">
            <label for="instrucciones">Instrucciones</label>
            <textarea
              id="instrucciones"
              name="instrucciones"
              class="form-control mb-3"
              v-model.trim="item.instrucciones"
              required
            />
            <field-messages name="instrucciones" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
            </field-messages>
          </validate>

          <validate tag="div">
            <label for="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              class="form-control mb-3"
              v-model.trim="item.foto"
              required
            />
            <field-messages name="foto" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
            </field-messages>
          </validate>

          <validate tag="div">
            <label for="categoria">Categoria</label>
            <select
              id="categoria"
              name="categoria"
              class="form-control mb-3"
              v-model.trim="item.categoria"
              required
            >
              <option>Almuerzo</option>
              <option>Cena</option>
              <option>Desayuno</option>
              <option>Postre</option>
            </select>
          </validate>

          <validate tag="div">
            <label for="precio">Precio</label>
            <input
              type="number"
              id="precio"
              name="precio"
              class="form-control mb-3"
              v-model.number="item.precio"
              required
            />
            <field-messages name="precio" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
            </field-messages>
          </validate>

          <validate tag="div">
            <label for="stock">Stock</label>
            <input
              type="number"
              id="stock"
              name="stock"
              class="form-control mb-3"
              v-model.number="item.stock"
              required
            />
            <field-messages name="stock" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
            </field-messages>
          </validate>

          <validate tag="div">
            <label for="ingredientes">Ingredientes</label>
            <select
              size="10"
              multiple="multiple"
              id="ingredientes"
              name="ingredientes"
              class="form-control"
              v-model.trim="item.ingredientes"
              required
            >
              <option
                v-for="(ingrediente, index) in ingredientes"
                :key="index"
                >{{ ingrediente.nombre }}</option
              >
            </select>
          </validate>

          <hr class="mb-4" />

          <div class="mx-auto col-3">
            <button
              class="btn btn-primary btn-block"
              type="submit"
              :disabled="formState.$invalid"
            >
              Guardar
            </button>
          </div>

          <!--link para volver a pagina de recetas-->
          <div class="py-3 text-center">
            <router-link to="/editRecetas">
              <a href="#">Volver a pagina Recetas</a>
            </router-link>
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
      if(!this.item){
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
      }
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
