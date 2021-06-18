<template>
  <section class="src-components-front-fondo">
    <div class="banner text-center d-block">
      <a href="/"><img class="banner-logo" src="@/assets/logo.png" /></a>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-front-fondo',
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
.banner {
  background-image: url(https://cdn.pixabay.com/photo/2020/04/26/15/17/seamless-pattern-5095737_960_720.png);
  background-size: contain;
  background-repeat: repeat;
}
</style>
