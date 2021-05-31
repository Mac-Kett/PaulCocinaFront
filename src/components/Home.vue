<template lang>

  <section class="src-components-home container">
    <!--Jumbotron-->
    <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">Lorem Ipsum</h1>
        <p class="lead my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
        </p>           
        <router-link to="/">
          <a class="text-white font-weight-bold" href="#">Sigue leyendo...</a>
        </router-link>
      </div>
    </div>
    <!--Jumbotron-->

    <!--Cards
    
    <Cards-->
      <div class="container">
      <Card
      v-for="d in basic_fc"
      :key="d.id"
      :title="d.title"
      :data="d.data"
      :unit="d.unit"
      :loading="loading"
      :class="'home__simple-finance--'+d.id"
      ></Card>
      </div>


        <div class="card-deck">
            <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
            <!--hay 2 cards por "card-deck", seria dos tarjetas por fila, se obtiene con class="mb-3 h-md-250" -->
            <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
            <div class="card mb-3 h-md-250">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img :src="resources/images/desayuno2.jpg" class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <strong class="d-inline-block mb-2 text-primary">World</strong>
                            <h3 class="mb-0">Featured post</h3>
                            <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor.</p>
                            <a href="recetario-usuario/recetario.html" class="stretched-link">Continue reading</a>
                        </div>
                    </div>
                </div>
            </div>

  </section>

</template>

<script lang="js">
  import Card from './Card.vue'
  export default  {
    name: 'src-components-home',
    components: { 
      Card
    },
    props: [],
    mounted () {

    },
    data () {
      return {

      }
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
  .jumbotron{
  background-image:url(https://cdn.pixabay.com/photo/2017/05/02/18/20/blueberries-2278921_1280.jpg);
  } 
</style>
