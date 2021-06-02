<template>
  <div id="app">
    
    <Fondo/>
    <!--<SearchBar/>-->
    <Navbar/>
    <router-view></router-view>
    <AppFooter/>
    
  </div>
</template>

<script>
//import SearchBar from './components/SearchBar.vue'
import Navbar from './components/Navbar.vue'
import Fondo from './components/Fondo.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    //SearchBar,
    Navbar,
    Fondo,
    AppFooter  
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
