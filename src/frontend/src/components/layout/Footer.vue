<template>
  <footer class="footer">
    <div class="block">
      <div class="field is-grouped is-align-items-center">
        <span class="image is-32x32" href="#">
          <img src="../../assets/img/칠한친구_대지_1.png">
        </span>
        <p class="content is-medium">
          <strong>관악 헤드메이드</strong>
        </p>
      </div>
    </div>

    <div class="block columns">
      <div class="column is-four-fifths">
        <div>
          <span>개인정보취급방침 | 이용약관</span> <br/>
          <span>(주)공방 | 대표자 : OOO | 사업자번호 : 111-11-111 사업자 정보 확인 | 개인정보보호책임자 : OOO </span> <br/>
          <span>주소 : 전문건설회관 ㅣ 이메일: admin@mail.com</span>
        </div>
      </div>
      <div class="column">
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