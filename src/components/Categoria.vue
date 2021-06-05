<template>
  <section class="src-components-categoria">
    
      <h1 class="pb-4 mb-4 font-italic border-bottom">
        {{ categoria.toUpperCase() }}
      </h1>
          <Card v-for="comida in comidas"
          :key="comida.index"
          :id="comida.index"
          :foto="comida.foto"
          :sobreTitulo="comida.sobreTitulo"
          :titulo="comida.titulo"
          :fecha="comida.fecha"
          :body="comida.body"
          :url="comida.url"
        />
  </section>
</template>

<script lang="js">
import Card from './Card.vue'

  export default  {
    name: 'src-components-categoria',
    components: {
      Card,
    },
    props: [],
    mounted () {
      this.cargarDatos()
    },
    beforeRouteUpdate (to, from, next) {
      this.categoria = to.params.categoria
      this.cargarDatos()
      next()
    },
    data () {
      return {
        url: 'https://60aac34c66f1d000177732f0.mockapi.io/comidas/', //despues se pasa la url de heroku
        comidas : [],
        categoria: this.$route.params.categoria

      }
    },
    methods: {
      cargarDatos(){
        //ToDo llamar al get por categoria
      this.axios.get(this.url).then(res => {
      this.comidas = res.data;
      });
    },
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-categoria {
}
</style>
