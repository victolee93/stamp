<template>
  <div class="container">
    <Header/>
    <MainTitle/>
    <Map/>
    <Search/>
    <Items/>
  </div>
  <Footer/>
</template>

<script>
import Header from './components/layout/Header.vue'
import MainTitle from './components/main/Title.vue'
import Map from './components/module/Map.vue'
import Search from './components/module/Search'
import Items from './components/main/Items.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    MainTitle,
    Map,
    Search,
    Items,
    Footer,
  }
}
</script>

<style src="./assets/css/bulma/css/bulma.min.css"/>