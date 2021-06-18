<template>
  <div id="app">
    <Fondo />
    <!-----***************************************************-->
    <!--FALTA LOGIA DE QUERYSEARCH v-on:query-change="querySearch" -->
    <!-----***************************************************-->
    <SearchBar />
    <Navbar />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import Navbar from "./components/Navbar.vue";
import Fondo from "./components/Fondo.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    Navbar,
    Fondo,
    AppFooter,
  },
};
</script>

<style>
/*Font para el proyecto*/
@import url(https://fonts.googleapis.com/css?family=Playfair+Display:700);
</style>
