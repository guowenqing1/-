<template>
  <div id="profile-news">
    <!-- 顶部的 TabBar -->
    <nav-bar class="news-nav">
      <img src="./img/arrow-left.png" alt slot="nav-left" class="news-img" @click='imgClick'>
      <div slot="nav-center" class='news-title'>我的消息</div>
    </nav-bar>
  </div>
</template>

<script>
// mixins(混合)
import { backNabBar } from "common/mixins/mixins.js";
export default {
  name: "profileNews",
  // mixins(混合)
  mixins: [backNabBar],
  methods:{
    // 点击返回上一层
    imgClick(){
      history.back();
    }
  },
  created() {
    this.$toast('没有任何消息内容',2000)
  },
};
</script>

<style scoped>
#profile-news {
  position: relative;
  height: 100vh;
}
/* 顶部的TabBar */
.news-nav {
  background-color: #eee;
  color: #000;
  position: relative;
  z-index: 11;
}
/* 顶部的返回图片 */
.news-img{
  width: 20px;
  height: 20px;
  vertical-align:middle
}
/* 顶部的标题 */
.news-title{
  font-size: 16px;
  color: #000;
}
/* 内容部分 */
.new-content{
  width: 100px;
  height: 30px;
  background-color: #000;
  color: #fff;
  border-radius: 12px;
  text-align: center;
  line-height: 30px;
}
</style>
