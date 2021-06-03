<template>
  <section class="src-components-categoria">
    <!--****************************************************************-->
    <!--FALTA CONVERTIR A VUE TODA LA CLASE-->
    <!--Deberia poder usarse como plantilla para reproducir todas las categorias dentro del Navbar -->
    <!--****************************************************************-->
    <!--
      <h1>{{categoria.nombre}}</h1>
      <Card>
      
      Se tiene que pasar los items de cada receta
      </Card>-->
  </section>
</template>

<script lang="js">
//import Card from './Card.vue'

  export default  {
    name: 'src-components-categoria',
    props: [],
    mounted () {
      //Card
    },
    data () {
      return {
        url: 'https://60aac34c66f1d000177732f0.mockapi.io/comidas/', //despues se pasa la url de heroku
        comidas : [],

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
.src-components-categoria {
}
</style>
