<template>
  <section class="src-components-receta-simple">
    <div class="container my-5">
      <div class="col-md-8 text-center mx-auto d-block">
        <img :src="comida.foto" class="img-fluid rounded" />
      </div>

      <div class="row">
        <div class="col-md-8">
          <br />

          <div>
            <h2 class="pt-4">
              {{ comida.titulo }}
            </h2>
            <p>{{ comida.descripcion }}</p>
            <hr />
            <h3>Instrucciones</h3>
            <!---*******************************************************-->
            <!--FALTA QUE SE SEPARE EN PARAFOS LAS INSTRUCCIONES -->
            <!---*******************************************************-->
            <p style="white-space: pre-line;">{{ comida.instrucciones }}</p>
            <p class="font-weight-bold">
              Compra los ingredientes por {{ comida.precio | currency }}
            </p>
          </div>
          <!-- boton de carrito de compras -->
          <button v-on:click="addProducto()" class="btn btn-danger mt-auto">
            Agregar a carrito
          </button>
        </div>

        <aside class="col-md-4 sobre-mi-sidebar py-5">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="font-italic">Ingredientes</h4>
            <ul>
              <li
                v-for="(ingrediente, index) in comida.ingredientes"
                :key="index"
              >
                {{ ingrediente }}
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-receta-simple',
    props: [],
    mounted () {
        //carga la tabla desde el arranque usar created o mounted ?
    //created: function() {
      this.axios.get(`${this.url}recetas/${this.$route.params.id}`).then(res => {
      this.comida = res.data;
      });
    //},
    },
    data () {
      return {
        url: process.env.VUE_APP_API_URL,
        comida : [],
      }
    },

    methods: {
      addProducto(){
        this.$store.dispatch('addProduct',this.comida)
        this.$router.go(-1)
      },

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
h2,
h3 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
</style>
