/*
 * Created Date: Wednesday, December 26th 2018, 1:07:34 pm
 * Author: WenQing
 * -----
 * Last Modified: Wednesday, 26th December 2018 1:07:34 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
#tab-bar {
  width: 100vw;
  background-color: #f6f6f6;
  height: 49px;
  border-top: 1px solid #eee;
  box-shadow: 0 -1px 1px rgba(150, 150, 150, 0.08);

  position: fixed;
  bottom: 0px;
  right: 0;
  left: 0px;

  display: flex;
  text-align: center;
}
</style>
