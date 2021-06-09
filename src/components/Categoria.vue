<template>
  <section class="src-components-categoria container">
    
      <h1 class="pb-4 mb-4 font-italic border-bottom">
        {{ categoria }}
      </h1>
          <Card v-for="comida in comidas"
            :key="comida.id"
            :id="comida.id" 
            :foto="comida.foto"
            :descripcion="comida.descripcion"
            :titulo="comida.titulo"
            :precio="comida.precio"
            :ingredientes="comida.ingredientes"
            :instrucciones="comida.instrucciones"
            :categoria="comida.categoria"
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
      this.categoria = this.primerLetraMayus(to.params.categoria)
      this.cargarDatos()
      next()
    },
    data () {
      return {
        //url: 'https://60aac34c66f1d000177732f0.mockapi.io/comidas/', //despues se pasa la url de heroku
        //url: 'https://60ad4f1680a61f0017330b61.mockapi.io/comidas',
        url: process.env.VUE_APP_API_URL
      }
    },
    methods: {
      cargarDatos(){
          //ToDo llamar al get con filtro por categoria de la API
        this.axios.get(`${this.url}recetas/byCategory/${this.categoria}`).then(res => {
        this.comidas = res.data;
        });
      },
      primerLetraMayus(str){
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-categoria {
}
</style>
