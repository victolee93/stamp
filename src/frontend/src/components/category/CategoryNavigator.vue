<template>
  <nav id="item-container" class="panel">
    <div id="category-title-box" class="panel-tabs">
      <div class="category-title">
        <a href="/store/detail/1">라탄</a>
      </div>
      <div class="category-title">뜨개</div>
      <div class="category-title">도자기</div>
      <div class="category-title">리메이크</div>
      <div class="category-title">꽃</div>
      <div class="category-title">악세서리</div>
      <div class="category-title">가죽</div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Items"
}
</script>

<style scoped>
#item-container {
  margin: 1.5em 0em;
}

#category-title-box {
  line-height: 100px;
}
.category-title {
  margin: 1.5em 1.3em;
  background-color: lavender;
  border-radius: 50%;
  width: 6em;
  text-align: center;
  font-size: 1.1em;
}
</style>+