<template lang>
  <section class="src-components-home container">
    <!--Jumbotron-->
    <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">{{ getJumbotron().titulo }}</h1>
        <p class="lead my-3">
          {{ getJumbotron().descripcion }}
        </p>
        <a @click="goToCard" class="text-white font-weight-bold">
          seguir leyendo...
        </a>
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

      <br />
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
      this.axios.get(`${this.url}recetas/`).then(res => {
            this.comidas = res.data});
      },
    data () {
      return {
        url: process.env.VUE_APP_API_URL,
        comidas : [],
        categorias:["Desayuno", "Almuerzo", "Cena", "Postre"],
        recetaJumbo:'',
      }
    },
    methods: {
      filtrarPorCategoria(cat){
          //filtro para cada categoria
          let i = 0
          return this.comidas.filter(com =>{
              if (com.categoria === cat) i++
              return com.categoria === cat && i<=2
          }) 
      },
      getJumbotron(){
        return this.recetaJumbo = this.comidas.find(receta => receta.titulo === 'Crumble de arandanos');
      },          
      goToCard() {
        let id = this.recetaJumbo._id
        this.$router.push({ path: `/receta/${id}` })
      },
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
h1 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
</style>
