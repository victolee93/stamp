<template>
  <div class="container">
    <Header/>
    <Login />
  </div>

  <Footer/>
</template>

<script>
import Header from "@/components/layout/Header";
import Login from "@/components/member/MemberLogin";
import Footer from "@/components/layout/Footer";

export default {
  name: "LoginView",
  components: {
    Header,
    Login,
    Footer
  }
}
</script>

<style scoped>

</style>