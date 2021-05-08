<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <h5>관악 헤드메이드 Footer</h5>
      <div>
        <a href="#">
          <span class="icon">
            <i class="fab fa-lg fa-instagram"></i>
          </span>
        </a>
        <a href="#">
          <span class="icon">
            <i class="fab fa-lg fa-facebook-f"></i>
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  mounted: function() {
    this.$loadScript("https://kit.fontawesome.com/a990b3bd5e.js")
  }
}

</script>

<style scoped>

</style>