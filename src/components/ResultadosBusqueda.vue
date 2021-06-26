<template>
  <section class="src-components-resultadosBusqueda container">
    <div v-if="encontrados.length">
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
import { miMixinLocal } from '../localMixins'

  export default  {
    name: 'src-components-resultadosBusqueda',
    components: {
      Card,
    },
    props: [],
    mounted () {
     
    },
    mixins: [miMixinLocal],
    
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
.src-components-resultadosBusqueda {
}
</style>
