<template>
  <div id="app">
    <Fondo />
    <!-----***************************************************-->
    <!--FALTA LOGIA DE QUERYSEARCH-->
    <!-----***************************************************-->
    <SearchBar v-on:query-change="querySearch" />
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
#app {
}
/*Font para el proyecto*/
@import url(https://fonts.googleapis.com/css?family=Playfair+Display:700,900);
</style>
