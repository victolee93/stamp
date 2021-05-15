<template>
  <div class="container">
    <Header/>
    <MainTitle/>
    <Map/>
    <Search/>
    <CategoryNavigator/>
    <StoreList/>
  </div>

  <Footer/>
</template>

<script>
import Header from "@/components/layout/Header";
import MainTitle from "@/components/main/MainTitle";
import Map from "@/components/module/Map";
import Search from "@/components/module/Search";
import CategoryNavigator from "@/components/category/CategoryNavigator";
import StoreList from "@/components/category/StoreList.vue";
import Footer from "@/components/layout/Footer";

export default {
  name: "IndexView",
  components: {
    Header,
    MainTitle,
    Map,
    Search,
    CategoryNavigator,
    StoreList,
    Footer,
  }
}
</script>