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
      <!-- FALTA DIFERENCIAR LAS COMIDAS EN CATEGORIA-->
      <!--****************************************************************-->

      <!--****************************************************************-->
      <!-- FALTA usar el componente card y enviarle la informacion -->
      <!--****************************************************************-->

      <div class="card-deck" v-for="(comida, index) in comidas" :key="index">
        <div class="card mb-3 h-md-250">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img :src="comida.foto" class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <strong class="d-inline-block mb-2 text-primary">{{
                  comida.sobreTitulo
                }}</strong>
                <h3 class="mb-0">{{ comida.titulo }}</h3>
                <div class="mb-1 text-muted">{{ comida.titulo }}</div>
                <p class="card-text mb-auto">
                  {{ comida.body }}
                </p>
                <a :href="comida.url" class="stretched-link"
                  >Continue reading</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">


  export default  {
    name: 'src-components-home',
    components: {
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://60aac34c66f1d000177732f0.mockapi.io/comidas',
        comidas : [],
        categorias:["Desayuno", "Almuerzo", "Cena", "Postre"],
      }
    },
    //carga la tabla desde el arranque
    created: function() {
      this.axios.get(this.url).then(res => {
      this.comidas = res.data;
      });
    },
    methods: {

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
