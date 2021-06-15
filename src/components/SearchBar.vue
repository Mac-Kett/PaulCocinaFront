<template>
  <!--TODO probar que ande-->
  <section class="src-components-searchbar p-y1">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav nav-pills ml-auto">
          <!-- *********************************************** -->
          <!--FALTA LOGICA PARA LA BUSQUEDA!!!!-->
          <!-- *********************************************** -->
          <li class="nav-item">
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                v-model="query"
                v-on:input="$emit('query-change', query)"
              />
              <a class="nav-link btn-danger text-white mr-1" type="submit">
                Buscar
              </a>
            </form>
          </li>
          <li class="nav-item">
            <router-link to="/admin">
              <a class="nav-link btn-danger text-white mr-1" href="#">Login</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-searchbar',
    props: [],
    mounted () {

    },
    data () {
      return {
        query:''

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-searchbar {
}
.navbar {
  background-color: transparent !important;
}
</style>
