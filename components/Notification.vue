<template>
  <div id="notify">
    <div :class="['notify-box', type]">
      <div class="ico-box">
        <img v-if="type == 'success'" src="~/assets/images/checkmark.svg" alt srcset />
        <img v-if="type == 'error' || type == 'warning'" src="~/assets/images/error.svg" alt srcset />
      </div>
      <div class="text-box lao">{{ msg }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['msg', 'type']
}
</script>

<style lang="scss" scoped>
#notify {
  position: absolute;
  bottom: 50px;
  right: 0;
  animation-duration: 0.2s;
}

.notify-box {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  height: 80px;
  border-radius: 50px 0 0 50px;
}
.ico-box {
  flex: 0 0 auto;
  padding: 10px;
  img {
    width: 60px;
    height: 60px;
  }
}
.text-box {
  flex: 1 1 auto;
  padding: 0 10px;
  text-align: start;
  font-size: 18px;
  color: white;
}
.success {
  background-color: #28ca1a;
  box-shadow: 0 2px 8px 2px rgba(52, 196, 39, 0.8);
}
.error {
  background-color: #dd2929;
  box-shadow: 0 2px 8px 2px rgba(196, 39, 39, 0.8);
}
.warning {
  background-color: #c4a41a;
  box-shadow: 0 2px 8px 2px rgba(196, 173, 39, 0.8);
}
</style>
