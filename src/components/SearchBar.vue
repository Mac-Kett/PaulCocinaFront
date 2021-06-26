<template>
  <section class="src-components-searchbar p-y1">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav nav-pills ml-auto">
          <li class="nav-item">
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                v-model="query"
              />
              <a
                class="nav-link btn-danger text-white mr-1"
                type="submit"
                @click="buscarElemento(query)"
              >
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
        query:'',

      }
    },

    methods: {
      buscarElemento(elemento){
        console.log('1 - entro a searchBar')
        this.axios.get(process.env.VUE_APP_API_URL+"barraBusquedas/"+ elemento).then(data => {
                let encontrados = data.data
                console.log('2- trae data:' + encontrados)
                this.$store.dispatch('cargarBusquedas',encontrados)
            }).catch(error=>console.log(error));
        this.$router.push({
          path: '/resultadosBusqueda'
         }) 
      },
    
      
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.navbar {
  background-color: transparent !important;
}
</style>
