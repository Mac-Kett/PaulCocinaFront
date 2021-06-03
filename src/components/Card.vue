<template>
  <section class="src-components-card">
    <!--****************************************************************-->
    <!-- FALTA crear card y convertirla a vue -->
    <!--****************************************************************-->
    <div class="card mb-3 h-md-250">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="foto" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <strong class="d-inline-block mb-2 text-primary">
              {{ comida.sobreTitulo }}
            </strong>
            <h3 class="mb-0">{{ comida.titulo }}</h3>
            <div class="mb-1 text-muted">{{ comida.fecha }}</div>
            <p class="card-text mb-auto">
              {{ comida.body }}
            </p>
            <!--****************************************************************-->
            <!-- FALTA comida.url -> ¿como le pasamos una URL especifica para que la redirija? -->
            <!--****************************************************************-->
            <a :href="comida.url" class="stretched-link">Continue reading</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-card',
    props: ['src','foto','sobreTitulo','titulo','fecha','body','url'],
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
.src-components-card {
}
</style>
