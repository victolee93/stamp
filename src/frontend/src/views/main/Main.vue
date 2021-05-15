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
import Header from "@/components/layout/Header";
import MainTitle from "@/components/main/Title";
import Map from "@/components/module/Map";
import Search from "@/components/module/Search";
import Items from "@/components/main/Items";
import Footer from "@/components/layout/Footer";

export default {
  name: "Main.vue",
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