<template>
  <div class="content">
    <!-- 예약하기 -->
    <div id="booking-box">
      <button id="booking-btn" class="button is-large is-10">
        <a href="#">📆 예약하기</a>
      </button>
    </div>

    <!-- 상점 소개 -->
    <div class="content-box">
      <p>
        안녕하세요 OOO 입니다. <br>
        관악구 전문건설회관에 위치한 라탄&플라워 공방 입니다. <br>
        클래스 문의 주문제작은 010-1111-1111 번호로 연락주세요 🤗 <br>
        주문제작은 100% 예약 주문입니다. <br>
        취미반/ 원데이클래스 운영하고 있습니다. ^^
      </p>

      <h1>약력</h1>
      <div>
        <ol class="is-lower-roman">
          <li>2019 ~ 2019 정보처리기사</li>
          <li>2020 ~ 2020 컴퓨터활용능력 1급</li>
          <li>2021 ~ 2021 운전면허 1종</li>
        </ol>
      </div>

      <h1>작품 소개</h1>
      <figure class="image">
        <img src="https://cdn.crowdpic.net/list-thumb/thumb_l_E9805C46B919CCBF6C24F9094B14369E.jpg">
      </figure>
      <div>
        라탄 도시락 가방! <br>
        피크닉 시즌 필수템 <br>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreInfo"
}
</script>

<style scoped>
.content-box {
  margin: 5em 0em;
}

#booking-box {
  text-align: center;
}
#booking-btn {
  width: 80%;
}
</style>