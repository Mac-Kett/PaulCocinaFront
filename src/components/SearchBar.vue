<template>
<!--TODO probar que ande-->
  <section class="src-components-searchbar">
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" v-model="query" v-on:input="$emit('query-change', query)">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-searchbar',
    props: [],
    mounted () {

    },
    data () {
      return {
        query:''

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-searchbar {
    
  }
  input{
    
  }

</style>
