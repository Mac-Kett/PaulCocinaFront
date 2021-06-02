<template>
  <section class="src-components-card">
    <!--<v-card :loading="loading">
      <v-card-text v-if="!loading">
      <div class="text-center font-weight-black title text--primary">
        {{data}} {{unit}}
      </div>
      <div class="text-center">
        {{title}}
      </div>
      </v-card-text>
  </v-card>

      <div class="col-md-4">
        <img :src="imagen_url" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <strong class="d-inline-block mb-2 text-primary">{{sobre-titulo}}</strong>
          <h3 class="mb-0">{{titulo}}</h3>
          <div class="mb-1 text-muted">{{Fecha}}</div>
          <p class="card-text mb-auto">{{Body}}</p>
          <a :href="receta_url" class="stretched-link">Continue reading</a>
        </div>
      </div>-->
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-card',
    props: ['id','sobreTitulo','titulo','fecha','body','url'],
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
