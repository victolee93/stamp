<template>
  <div id="search-box" class="is-10">
    <div class="control has-icons-left">
        <input id="search-input" class="input is-rounded" type="text" placeholder="오늘의 취미">
      <span id="search-input-icon" class="icon is-small is-left">
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
#search-box {
  margin-top: 1.5em;
  margin-left: 25%;
}
#search-input {
  width: 70%;
  height: 4em;
}
#search-input-icon {
  height: 4em;
}
</style>