<template>
  <section class="src-components-desayuno">
    <h1>Desayuno</h1>
    <!--****************************************************************-->
    <!-- FALTA hacer funcion que solo muestre comida de esta categoria  -->
    <!--****************************************************************-->
    <!--         
      <Card
        v-for="comida in comidas"
        :key="comida.index"
        :id="comida.index"
        :foto="comida.foto"
        :sobreTitulo="comida.sobreTitulo"
        :titulo="comida.titulo"
        :fecha="comida.fecha"
        :body="comida.body"
        :url="comida.url"
      />
    </div>-->
  </section>
</template>

<script lang="js">
//import Card from './Card.vue'

  export default  {
    name: 'src-components-desayuno',
    props: [],
    mounted () {
      //Card
    },
    data () {
      return {
        //****************************************************************
        url: 'https://60aac34c66f1d000177732f0.mockapi.io/comidas', //despues con que reemplazamos aca???
        //****************************************************************
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
.src-components-desayuno {
}
</style>
