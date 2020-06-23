<template>
  <v-app>
    <transition name="fade" mode="out-in">
      <nuxt></nuxt>
    </transition>
  </v-app>
</template>

<script>
export default {}
</script>

<style lang="scss">
@font-face {
  font-family: 'NotoSansLao';
  src: url('~assets/fonts/NotoSansLao.ttf');
}
#app {
  background-color: #f2f4f9;
}
.lao {
  font-family: NotoSansLao !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.page-title {
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: 700;
}
</style>
