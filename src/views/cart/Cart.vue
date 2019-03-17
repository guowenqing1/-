/*
 * Created Date: Wednesday, December 26th 2018, 6:52:14 pm
 * Author: WenQing
 * -----
 * Last Modified: Wednesday, 26th December 2018 6:52:14 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div>
    <!-- 顶部的导航栏 -->
    <nav-bar class="home-nav">
      <div slot="nav-center" class="cart">购物车({{cartCount}})</div>
    </nav-bar>
    <!-- 商品数据 -->
    <cart-list :cart-list="cartList"></cart-list>
    <!-- 底部的标签栏 -->
    <bottom-tab-bar></bottom-tab-bar>
  </div>
</template>

<script>
// mixins(混合)
import { backNabBar } from "common/mixins/mixins.js";
// 底部结算商品价格
import BottomTabBar from "./childComps/BottomTabBar";
// 商品的描述信息
import CartList from "./childComps/CartList";
// map -> 映射
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    BottomTabBar,
    CartList
  },
  // mixins(混合)
  mixins: [backNabBar],
  // 计算属性
  computed: {
    // 商品的信息
    ...mapGetters({
      cartList: "cartList",
      cartCount: "cartCount"
    })
  },
  methods: {
  
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}
.cart {
  font-size: 15px;
  font-weight: 600;
}

</style>