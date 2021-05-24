<template lang="html">
  <section class="src-components-front-navbar text-center py-3">
    <nav class="navbar navbar-expand-md navbar-dark bg-info">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- NavBar -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav nav-pills m-auto">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link btn-danger text-white mr-1" href="#">Inicio</a>
            </router-link>
          </li>
          
          <li class="nav-item">
            <router-link to="/desayuno">
              <a class="nav-link btn-danger text-white mr-1" href="#">Desayuno</a>
            </router-link>
          </li>
          
          <li class="nav-item">
            <router-link to="/almuerzo">
              <a class="nav-link btn-danger text-white mr-1" href="#">Almuezo</a>
            </router-link>
          </li>
          
          <li class="nav-item">
            <router-link to="/cena">
              <a class="nav-link btn-danger text-white mr-1" href="#">Cena</a>
            </router-link>
          </li>
          
          <li class="nav-item">
            <router-link to="/postre">
              <a class="nav-link btn-danger text-white mr-1" href="#">Postre</a>
            </router-link>
          </li>
          
          <li class="nav-item">
            <router-link to="/sobremi">
              <a class="nav-link btn-danger text-white mr-1" href="#">Sobre mi</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- NavBar -->
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-front-navbar',
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
  .src-components-front-navbar {

  }
  .navbar {
    background-color: transparent !important;
  }
  
</style>
