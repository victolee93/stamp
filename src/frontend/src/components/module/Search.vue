<template>
  <div id="search-box" class="is-10">
    <div class="control has-icons-left">
        <input id="hobby-search" class="input is-rounded" type="text" placeholder="오늘의 취미">
      <span class="icon is-small is-left">
        <i class="fas fa-search"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>
#hobby-search {
  width: 70%;
}
#search-box {
  margin-left: 25%;
}
</style>