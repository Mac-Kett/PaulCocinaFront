<template>
  <div>        
  <div id="app">
    <Fondo/>
    <Navbar />
    <router-view></router-view>

    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Front/Navbar.vue'
import Fondo from './components/Front/Fondo.vue'
import Footer from './components/Front/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Fondo,
    Footer
  }
}
</script>

<style>
#app {
  
  /*font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
