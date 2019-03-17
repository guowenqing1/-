/*
 * Created Date: Wednesday, December 26th 2018, 3:52:37 pm
 * Author: WenQing
 * -----
 * Last Modified: Wednesday, 26th December 2018 3:52:37 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div>
    <tab-bar v-show='isTabBar'>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="首页">
        <img slot="item-active-icon" src="~assets/img/tabbar/home_active.svg" alt="首页">
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="分类">
        <img slot="item-active-icon" src="~assets/img/tabbar/category_active.svg" alt="分类">
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="购物车">
        <img slot="item-active-icon" src="~assets/img/tabbar/shopcart_active.svg" alt="购物车">
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="我的">
        <img slot="item-active-icon" src="~assets/img/tabbar/profile_active.svg" alt="我的">
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
import {mapState} from 'vuex'

export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  },
  computed: {
    ...mapState(['tabbar']),
    isTabBar(){
      return this.tabbar
    }
  },
};
</script>

<style scoped>
</style>
