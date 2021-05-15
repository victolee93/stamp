<template>
  <div class="container">
    <Header/>
    <Search/>
    <CategoryList/>
    <StoreDetail/>
  </div>

  <Footer/>
</template>

<script>
import Header from "@/components/layout/Header";
import Search from "@/components/module/Search";
import CategoryList from "@/components/category/CategoryNavigator";
import StoreDetail from "@/components/store/StoreDetail";
import Footer from "@/components/layout/Footer";

export default {
  name: "StoreDetailView",
  components: {
    Header,
    Search,
    CategoryList,
    StoreDetail,
    Footer
  }
}
</script>

<style scoped>

</style>