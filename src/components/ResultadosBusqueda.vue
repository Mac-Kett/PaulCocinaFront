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
