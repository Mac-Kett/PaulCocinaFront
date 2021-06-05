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
        :key="comida.id"
        :id="comida.id" 
        :foto="comida.foto"
        :sobreTitulo="comida.sobreTitulo"
        :titulo="comida.titulo"
        :fecha="comida.fecha"
        :body="comida.body"
        :precio="comida.precio"
        :ingredientes="comida.ingredientes"
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
      this.axios.get(this.url).then(res => {
      this.comidas = res.data});
      },
    data () {
      return {
        //url: 'https://60aac34c66f1d000177732f0.mockapi.io/comidas/', //despues se pasa la url de heroku
        url: 'https://60ad4f1680a61f0017330b61.mockapi.io/comidas/',
        comidas : [],
        categorias:["Desayuno", "Almuerzo", "Cena", "Postre"],
      }
    },
    methods: {

      //------        LOS 3 METODOS DE ABAJO SON SOLO PARA SIMULAR LA CATEGORIA          -----//
      //------ DESPUES HABRÍA QUE DEJAR SOLO EL DE FILTRAR CON LA LÓGICA CORRESPONDIENTE -----//
      getCategoria(cat){
        //este se borra por completo
            let num;
            switch (cat) {
              case "Desayuno":
                num = 0
                break;
              case 'Almuerzo':
                num = 1
                break;
              case 'Cena':
                num = 2
                break;
              case 'Postre':
                num = 3
                break;
              default:
              num = 0
              break;
            }
            return num;
      },
      setCategorias(){
        //este se borra por completo
        this.comidas.forEach(comidaAct => {
            comidaAct.categoria= this.getCategoriaAleatoria()
          });
      },

      filtrarPorCategoria(cat){
        //este debería cambiar el filtro para que matchee con las categorias. actualmente no se puede por el mock.
          return this.comidas.filter(com =>{
            let categoria = com.categoria.replace(/\D/g,'');
            categoria = Math.floor((categoria * 0.3 ) )
            //console.log(categoria)
              return categoria == this.getCategoria(cat)
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
