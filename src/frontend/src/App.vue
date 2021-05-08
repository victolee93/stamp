<template>
  <div class="container">
    <Header/>
    <MainTitle/>
    <Footer/>
  </div>
</template>

<script>
import MainTitle from './components/Main/MainTitle.vue'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    MainTitle,
    Header,
    Footer,
  }
}
</script>

<style src="./assets/css/bulma/css/bulma.min.css"/>