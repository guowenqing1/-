/*
 * Created Date: Tuesday, January 1st 2019, 10:16:16 pm
 * Author: WenQing
 * -----
 * Last Modified: Tuesday, 1st January 2019 10:16:16 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt>
  </div>
</template>

<script>
export default {
  name: "backTop"
};
</script>

<style scoped>
.back-top {
  position: fixed;
  bottom: 60px;
  right: 8px;
  width: 40px;
  height: 40px;
  z-index: 11;
}
img{
  width: 100%;
  height: 100%;
}
</style>
