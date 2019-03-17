/*
 * Created Date: Monday, February 18th 2019, 4:46:08 pm
 * Author: WenQing
 * -----
 * Last Modified: Monday, 18th February 2019 4:46:08 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
    <div class="nav-bar">
      <div class="left">
        <slot name="nav-left"></slot>
      </div>
      <div class="center">
        <slot name="nav-center"></slot>
      </div>
      <div class="right">
        <slot name="nav-right"></slot>
      </div>
    </div>
</template>




<script>
export default {
  name: "item"
};
</script>

<style scoped>
.nav-bar {
  width: 100vw;
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
  
}
.left {
  width: 60px;
}
.center {
  flex: 1;
  font-size: 16px;
}
.right {
  width: 60px;
}
</style>