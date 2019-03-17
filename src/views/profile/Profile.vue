/*
 * Created Date: Wednesday, December 26th 2018, 6:52:21 pm
 * Author: WenQing
 * -----
 * Last Modified: Wednesday, 26th December 2018 6:52:21 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div id="profile">
    <nav-bar>
      <div slot="nav-center">个人中心</div>
    </nav-bar>
    <scroll class="profile-scroll">
      <!--1.单独封装一个组件: 利用slot知识点-->
      <user-info></user-info>
      <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
      <section class="account" v-show="!this.$store.state.user.userbarStatus">
        <div class="account-item">
          <div class="number">
            <span class="balance">0.00</span>元
          </div>
          <div class="account-info">我的余额</div>
        </div>
        <div class="account-item">
          <div class="number">
            <span class="balance">0</span>个
          </div>
          <div class="account-info">我的优惠</div>
        </div>
        <div class="account-item">
          <div class="number">
            <span class="balance">0</span>分
          </div>
          <div class="account-info">我的积分</div>
        </div>
      </section>

      <section class="account" v-show="this.$store.state.user.userbarStatus">
        <div class="account-item">
          <div class="number">
            <span class="balance">19.32</span>元
          </div>
          <div class="account-info">我的余额</div>
        </div>
        <div class="account-item">
          <div class="number">
            <span class="balance">5</span>个
          </div>
          <div class="account-info">我的优惠</div>
        </div>
        <div class="account-item">
          <div class="number">
            <span class="balance">589</span>分
          </div>
          <div class="account-info">我的积分</div>
        </div>
      </section>

      <!--3.封装成一个整体-->
      <list-view :list-data="orderList" class="order-list"></list-view>
      <basic-view class="basic-list"></basic-view>
    </scroll>
  </div>
</template>

<script>
// mixins(混合)
import { backNabBar } from "common/mixins/mixins.js";
import UserInfo from "./childComps/UserInfo";
import ListView from "./childComps/ListView";
import BasicView from "./childComps/BasicView";
// 滑动插件
import scroll from "components/common/scroll/Scroll";
export default {
  name: "Profile",
  // created: 生命周期的开始
  data() {
    return {
      orderList: [
        { icon: "#order", iconColor: "#ff8198", info: "我的消息" },
        { icon: "#point", iconColor: "#fc7b53", info: "积分商城" },
        { icon: "#vip", iconColor: "#ffc636", info: "会员卡" },
        { icon: "#service", iconColor: "#ff8198", info: "我的购物车" }
      ]
    };
  },
  components: {
    UserInfo,
    ListView,
    BasicView,
    scroll
  },
 
  // mixins(混合)
  mixins: [backNabBar]
};
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
  height: 100vh;
  width: 100vw;
}
/* 可滑动的区域 */
.profile-scroll {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.account {
  display: flex;
}

.account-item {
  width: 100%;
  background-color: #fff;
  margin-right: 1px;
  text-align: center;
}

.account-item:last-of-type {
  margin-right: 0;
}

.account-item {
  color: #666;
  font-size: 13px;
  padding: 18px;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}

.account-info {
  margin-top: 6px;
}

/* 我的信息前面的间距/我的购物车前面的间距 */
.order-list,
.service-list,
.basic-list {
  margin-top: 12px;
}
</style>