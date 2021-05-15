<template>
  <section class="section is-medium">
    <div class="has-text-centered">
      <p class="title">
        관리자 계정 로그인
      </p>

      <button id="google-login-btn" class="button is-large">
        Google Login
      </button>
    </div>
  </section>

  <section class="section">
    <div class="notification is-info is-light">
      <p>
        🔔 Notice <br>
        구글 계정으로 로그인후 이용 가능합니다. <br>
        계정 등록은 관리자에게 문의해주세요.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
#google-login-btn {
  /*background: url('~@/assets/img/google_login.png') no-repeat 5px;*/
  width: 50%;
}
</style>