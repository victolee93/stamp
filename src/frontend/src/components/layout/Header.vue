<template>
  <div id="header-container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <!-- home icon -->
        <a class="image is-64x64" href="#">
          <img src="../../assets/img/칠한친구_대지_1.png">
        </a>

        <!-- burger menu bar -->
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"><!-- menu 1 --></span>
          <span aria-hidden="true"><!-- menu 2 --></span>
          <span aria-hidden="true"><!-- menu 3 --></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <!-- nav start -->
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
#header-container {
  height: 90px;
}
</style>