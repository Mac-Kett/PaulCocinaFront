<template lang>
  <section class="src-components-home container">
    <!--Jumbotron-->
    <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">Lorem Ipsum</h1>
        <p class="lead my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <router-link to="/">
          <a class="text-white font-weight-bold" href="#">Sigue leyendo...</a>
        </router-link>
      </div>
    </div>
    <!--Jumbotron-->
    <div v-for="(categoria, index) in categorias" :key="index">
      <h1 class="pb-4 mb-4 font-italic border-bottom">
        {{ categoria }}
      </h1>
      <!--****************************************************************-->
      <!--  FALTA acomodar el filtrar para cuando haya categorias reales  -->
      <!--****************************************************************-->
      <Card
        v-for="comida in filtrarPorCategoria(categoria)"
        :key="comida._id"
        :id="comida._id" 
        :foto="comida.foto"
        :descripcion="comida.descripcion"
        :titulo="comida.titulo"
        :precio="comida.precio"
        :ingredientes="comida.ingredientes"
        :instrucciones="comida.instrucciones"
        :categoria="comida.categoria"
      />
    </div>
  </section>
</template>

<script lang="js">
import Card from './Card.vue'

  export default  {
    name: 'src-components-home',
    components: {
      Card,
    },
    props: [],
    mounted () {
              console.log(this.url)
      this.axios.get(`${this.url}/recetas/`).then(res => {
        console.log(`${this.url}/recetas/`)
            this.comidas = res.data});
      },
    data () {
      return {
        //url: 'https://60aac34c66f1d000177732f0.mockapi.io/comidas/', //despues se pasa la url de heroku
        //url: 'https://60ad4f1680a61f0017330b61.mockapi.io/comidas/',
        //url: 'http://localhost:8080/recetas/',
        url: process.env.VUE_APP_API_URL,
        comidas : [],
        categorias:["Desayuno", "Almuerzo", "Cena", "Postre"],
      }
    },
    methods: {

      filtrarPorCategoria(cat){
          //filtro para cada categoria
          return this.comidas.filter(com =>{
              return com.categoria === cat
          }) 
      }
        
    },
    computed: {

    }
  }
</script>

<style scoped lang="css">
.src-components-home {
}
.jumbotron {
  background-image: url(https://cdn.pixabay.com/photo/2017/05/02/18/20/blueberries-2278921_1280.jpg);
}
</style>
