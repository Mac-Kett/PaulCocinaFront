<template>
  <section class="src-components-postre">
    <h1>Postre</h1>
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

  export default  {
    name: 'src-components-postre',
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
.src-components-postre {
}
</style>
