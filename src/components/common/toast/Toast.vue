/*
 * Created Date: Sunday, February 17th 2019, 6:58:09 pm
 * Author: WenQing
 * -----
 * Last Modified: Sunday, 17th February 2019 6:58:09 pm
 * Modified By: WenQing (3319843257@qq.com)
 */
<template>
  <div class="detail-toast">
    <div class="toast" v-show='isShow'>
      <span class="toast-title" :style='titleStyle'>{{message}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailToast",
  data() {
    return {
      isShow:false,
      message:'我是默认的文字',
      titleStyle:{color: '#fff',backgroundColor:'#000'}
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  /* left: 50%; */
  z-index: 13;
  transform: translate(0%, -50%);
  width: 100%;
  text-align: center;
}
.toast-title {
  padding: 5px 12px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
}
</style>