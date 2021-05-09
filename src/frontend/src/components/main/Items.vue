<template>
  <nav class="panel">
    <div id="category-title-box" class="panel-tabs">
      <div class="category-title">라탄</div>
      <div class="category-title">뜨개</div>
      <div class="category-title">도자기</div>
      <div class="category-title">리메이크</div>
      <div class="category-title">꽃</div>
      <div class="category-title">악세서리</div>
      <div class="category-title">가죽</div>
    </div>

    <div id="store-list-box">
      <div class="panel-block columns">
        <div class="column is-1">
        <span class="image is-64x64" href="#">
          <img src="../../assets/img/달쉬캔들_대지_1.png">
        </span>
        </div>
        <div>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span>
        </div>
      </div>

      <div class="panel-block columns">
        <div class="column is-1">
        <span class="image is-64x64" href="#">
          <img src="../../assets/img/모드니_대지_1.png">
        </span>
        </div>
        <div>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span>
        </div>
      </div>

      <div class="panel-block columns">
        <div class="column is-1">
        <span class="image is-64x64" href="#">
          <img src="../../assets/img/리메이크_대지_1.png">
        </span>
        </div>
        <div>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Items"
}
</script>

<style scoped>
/* 카테고리 */
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

/* 상점 */
#store-list-box {
  padding: 3em 1em;
}
</style>+