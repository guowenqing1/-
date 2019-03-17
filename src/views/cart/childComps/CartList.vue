/*
 * Created Date: Sunday, February 17th 2019, 9:12:12 am
 * Author: WenQing
 * -----
 * Last Modified: Sunday, 17th February 2019 9:12:12 am
 * Modified By: WenQing (3319843257@qq.com)
 */
<template>
  <div>
    <scroll class="goods-scroll">
      <div class="cart-list">
        <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"></cart-list-item>
      </div>
    </scroll>
  </div>
</template>

<script>

import Scroll from "components/common/scroll/Scroll";
// 商品描述
import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.goods-scroll {
  position: absolute;
  top: 44px;
  bottom: calc(49px + 44px);
}
</style>
