<template>
  <section class="src-components-resultadosBusqueda container">
    <div v-if="encontrados.length">
      <h1>Resultados encontrados</h1>
      <Card
        v-for="elemento in encontrados"
        :key="elemento._id"
        :id="elemento._id"
        :foto="elemento.foto"
        :descripcion="elemento.descripcion"
        :titulo="elemento.titulo"
        :precio="elemento.precio"
        :ingredientes="elemento.ingredientes"
        :instrucciones="elemento.instrucciones"
        :categoria="elemento.categoria"
      />
    </div>

    <div v-else>
      <h1>No se encontraron resultados para su busqueda</h1>
    </div>
  </section>
</template>

<script lang="js">
import Card from './Card.vue'

  export default  {
    name: 'src-components-resultadosBusqueda',
    components: {
      Card,
    },
    props: [/*'item'*/],
    mounted () {


      /*console.log('mounted de busqueda')
      console.log(this.item)*/
      //this.cargarDatos()
    },
      /*beforeRouteUpdate (/to, from, next) {
     /*this.categoria = this.primerLetraMayus(to.params.categoria)
      this.cargarDatos()
      next()
    },*/
    data () {
      return {
        /*url: process.env.VUE_APP_API_URL,
        categoria: this.primerLetraMayus(this.$route.params.categoria),
        comidas: []*/

      }
    },
    methods: {
      /*cargarDatos(){
          //ToDo llamar al get con filtro por categoria de la API
        this.axios.get(`${this.url}recetas/byCategory/${this.categoria}`).then(res => {
        this.comidas = res.data;
        });
      },
      primerLetraMayus(str){
        return str.charAt(0).toUpperCase() + str.slice(1)
      }*/

    },
    computed: {
      /*mostrarResultadosBusquedas(){
        return this.$store.state.busquedas
      }*/
      encontrados() {
      return this.$store.state.busquedas;
    }

    }
}
</script>

<style scoped lang="css">
h1 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
</style>
