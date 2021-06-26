<template>
  <section class="src-components-front-navbar text-center py-3">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav nav-pills">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link btn-danger text-white mr-1" href="#">Inicio</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/recetas/desayuno">
              <a class="nav-link btn-danger text-white mr-1" href="#"
                >Desayuno</a
              >
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/recetas/almuerzo">
              <a class="nav-link btn-danger text-white mr-1" href="#"
                >Almuezo</a
              >
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/recetas/cena">
              <a class="nav-link btn-danger text-white mr-1" href="#">Cena</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/recetas/postre">
              <a class="nav-link btn-danger text-white mr-1" href="#">Postre</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/sobremi">
              <a class="nav-link btn-danger text-white mr-1" href="#"
                >Sobre mi</a
              >
            </router-link>
          </li>
          <!--El boton del carrito solo se muestra si la cantidad es mayor a cero-->
          <li class="nav-item">
            <router-link to="/cart" class="button is-warning">
              <a
                class="nav-link btn-danger text-white mr-1"
                href="#"
                v-show="cartQuantity > 0"
              >
                Carrito
                <span class="badge badge-light"> {{ cartQuantity }}</span></a
              >
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
    components: {
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        mostrar: true,

      }
    },
    methods: {

    },
    computed: {
      cartQuantity() {
        return this.$store.state.carrito.length
      }
    },
    created() {
    }
}
</script>

<style scoped lang="css">
.navbar {
  background-color: transparent !important;
}
</style>
