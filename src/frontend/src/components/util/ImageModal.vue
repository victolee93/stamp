<template>
  <div id="modal-box" class="modal">
    <div @click="closeModal" class="modal-background"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"></p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>

      <section class="modal-card-body">
        <figure class="image">
          <img src="">
        </figure>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageModal",
  methods: {
    // 모달 오픈
    popImageModal(event) {
      let originImageSrc = event.target.src;
      let modalBox = document.querySelector('#modal-box');
      let modalImage = document.querySelector('#modal-box section figure img');

      modalBox.classList.add('is-active');  // 모달 활성화
      modalImage.src = originImageSrc;
    },

    // 모달 닫기
    closeModal() {
      let modalBox = document.querySelector('#modal-box');
      modalBox.classList.remove(('is-active'));
    }
  }
}
</script>

<style scoped>
.modal-card {
  width: 1000px;
}
</style>