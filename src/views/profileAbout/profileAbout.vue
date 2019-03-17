<template>
  <div id="feedback">
    <!-- 头部标签栏 -->
    <nav-bar class="feedback-nav">
      <img src="./img/arrow-left.png" alt="" slot="nav-left" class='left-img' @click='LIClick'>
      <div slot="nav-center">关于商品街</div>
    </nav-bar>
    <!-- 内容 -->
    <div class='feedback-content'>
      <div class='feedback-wrapper'>
         <h2>《 商品街 》</h2>
         <div class='feedback-title'>
           <span>《 商品街 》是一个多功能的购物商城, 商城拥有大型发货渠道, 极速发货、隔天送达、全场提供假一赔三服务, 必备的购物神器, 本周流行、好玩特卖个人护理、护肤美妆、家具日用、母婴用品、内购福利、时尚套装、粮油副食、食品饮料、生鲜水果、经典小吃……全品类覆盖, 强大的购物商城, 拥有精心匹配的搭配, 流行的款式, 实惠又划算的商品, 繁多的商品种类、各种潮流的物品、和潮流的颜色搭配, 让你感受到购物的快乐, 用心生活, 精明消费, 每天使用商品街, 让你时时刻刻有惊喜, 改变生活就使用商品街。</span>
           <span>[新人专享] 新人注册即领188元超值红包;</span>
           <span>[现金红包] 输入口令, 立即领取现金红包;</span>
           <span>[品质保障] 与各大商城战略合作, 保证品质</span>
           <span>[放下售后] 7天无理由退换货, 急速处理</span>
           <span>[活动中心] 拥有许多奖励丰富而有有趣的活动</span>
         </div>
      </div>
      <img class='background' src="./img/about-img01.jpg" alt="商品街" title='商品街'>
    </div>
  </div>
</template>

<script>
// mixins(混合)
import { backNabBar } from "common/mixins/mixins.js";
import { mapMutations } from 'vuex'
export default {
  name: "profileAbout",
  // mixins(混合)
  mixins: [backNabBar],
  methods:{
    ...mapMutations(['showTabBar']),
    LIClick(){
      history.back()
      this.showTabBar()
    }
  },
  created() {
    this.$store.commit('hideTabBar')
  }
};
</script>

<style scoped>
#feedback {
  position: relative;
  height: 100vh;
}
/* 顶部的NavBar */
.feedback-nav {
  background-color: #eee;
  color: #000;
  position: relative;
  z-index: 11;
}
/* 左边的箭头 */
.left-img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
/* 内容部分 */
.feedback-content{
  width: 100%;
  height: calc(100vh - 44px);
  z-index: 10;
  position: relative;
}
.feedback-wrapper{
  padding: 30px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff
}
/* 介绍 */
.feedback-title{
  margin-top: 20px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
}
.feedback-title span{
  margin-top: 15px;
}
/* 背景图片 */
.background{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  box-shadow: 10px 10px 5px #888888;
  z-index: -1;
}
</style>
