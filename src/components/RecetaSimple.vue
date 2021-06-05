<template>
  <section class="src-components-receta-simple">
    <!--****************************************************************-->
    <!--FALTA CONECTAR componente con datos recibidos de Mongo/Backend-->
    <!--****************************************************************-->
    <div class="col-md-8 text-center mx-auto d-block py-2">
      <img :src="comida.foto" class="img-fluid rounded" />
    </div>

    <div class="row">
      <div class="col-md-8">
        <br />

        <div>
          <h2 class="-title py-3">{{ comida.titulo }}    -     ${{comida.precio}}</h2>

          <p>{{ comida.sobreTitulo }}</p>
          <hr />
          <h3>Instrucciones</h3>
          <p>{{ comida.body }}</p>
        </div>
        <!--****************************************************************-->
        <!--FALTA HACER BOTON Y CONECTARLO A LISTADO DE PRODUCTOS EN CARRITO-->
        <!--****************************************************************-->
        <button
          v-on:click="addProducto()"
          class="btn btn-primary mt-auto"
        >
          Agregar a carrito
        </button>
      </div>

      <aside class="col-md-4 sobre-mi-sidebar py-5">
        <div class="p-4 mb-3 bg-light rounded">
          <h4 class="font-italic">Ingredientes</h4>
          <ul>
            <li v-for="(ingrediente, index) in comida.ingredientes" :key="index">
              {{ ingrediente }}
            </li>
          </ul>
        </div>
      </aside>
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
      this.axios.get(`${this.url}${this.$route.params.id}`).then(res => {
      this.comida = res.data;
      });
    //},
    },
    data () {
      return {
        //url: 'https://60aac34c66f1d000177732f0.mockapi.io/comidas/', //despues se pasa la url de heroku
        url: 'https://60ad4f1680a61f0017330b61.mockapi.io/comidas/',
        comida : []
      }
    },
    
    methods: {
      addProducto(){
        this.$router.push({path:'/checkout',query:{receta: this.comida.titulo,precio: this.comida.precio}});
      },

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-receta-simple {
}
</style>
