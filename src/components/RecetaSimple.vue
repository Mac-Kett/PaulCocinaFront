<template>
  <section class="src-components-receta-simple">
    <!--****************************************************************-->
    <!--FALTA CONECTAR componente con datos recibidos de Mongo/Backend-->
    <!--****************************************************************-->
    <div class="col-md-8 text-center mx-auto d-block py-2">
      <img :src="comida.foto" class="img-fluid rounded" />
    </div>

    <div class="row">
      <div class="col-md-8">
        <br />

        <div>
          <h2 class="-title py-3">{{ comida.titulo }}</h2>

          <p>{{ comida.sobreTitulo }}}</p>
          <hr />
          <h3>Instrucciones</h3>
          <p>{{ comida.instrucciones }}</p>
        </div>
        <!--****************************************************************-->
        <!--FALTA HACER BOTON Y CONECTARLO A LISTADO DE PRODUCTOS EN CARRITO-->
        <!--****************************************************************-->
        <button
          v-on:click="addProducto(comida)"
          class="btn btn-primary mt-auto"
        >
          Agregar a carrito
        </button>
      </div>

      <aside class="col-md-4 sobre-mi-sidebar py-5">
        <div class="p-4 mb-3 bg-light rounded">
          <h4 class="font-italic">Ingredientes</h4>
          <ul>
            <li v-for="(ingrediente, index) in comida" :key="index">
              {{ comida.ingredientes }}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-receta-simple',
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
.src-components-receta-simple {
}
</style>
