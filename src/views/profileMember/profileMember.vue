<template>
  <div id='member'>
    <nav-bar class='member-nav'>
      <img slot='nav-left' class='member-img' src="./img/arrow-left.png" alt="返回" @click='imgClick'>
      <div slot='nav-center' class='member-title'>会员卡服务</div>
    </nav-bar>
  </div>
</template>

<script>
// mixins(混合)
import { backNabBar } from "common/mixins/mixins.js";
export default {
  name:'profileMember',
  mixins:[backNabBar],
  methods:{
    imgClick(){
      history.back()
    }
  }
}
</script>

<style scoped>
 #member{
   position: relative;
   height: 100vh;
 }
 /* 顶部内容 */
 .member-nav{
  background-color: #eee;
  color: #000;
  position: relative;
  z-index: 11;
 }
 .member-img{
   width: 20px;
   height: 20px;
   vertical-align: middle;
 }
 .member-title{
   font-size: 16px;
   color: #000;
 }
</style>
