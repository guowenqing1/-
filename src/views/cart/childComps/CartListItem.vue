/*
 * Created Date: Sunday, February 17th 2019, 9:12:26 am
 * Author: WenQing
 * -----
 * Last Modified: Sunday, 17th February 2019 9:12:27 am
 * Modified By: WenQing (3319843257@qq.com)
 */
<template>
  <div class="cart-list-item">

    <!-- 商品的选择框 -->
    <div class="goods-check">
      <click-check @checkBtnClick="checkedChange" v-model="itemInfo.checked"></click-check>
    </div>
    <!-- 商品的图片 -->
    <div class="goods-img">
      <img :src="itemInfo.topImages" alt>
    </div>
    <!-- 商品的描述信息 -->
    <div class="goods-item">
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="item-title">商品描述: {{itemInfo.title}}</div>
      <div class="goods-price">
        <div class="item-price">¥{{itemInfo.price}}</div>
        <div class="item-cound">X{{itemInfo.cound}}</div>
      </div>
    </div>

  </div>
</template>

<script>

import ClickCheck from "./ClickCheck";
export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object
    }
  },
  components: {
    ClickCheck,

  },
  methods: {
    checkedChange() {
      console.log('点击了几次')
      this.itemInfo.checked = !this.itemInfo.checked
    },
  }
};
</script>

<style scoped>
.cart-list-item {
  width: 100vw;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  display: flex;
  font-size: 0;
}
/* 商品的选择框 */
.goods-check {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 商品的图片 */
.goods-img {
  padding: 5px;
}
.goods-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
  background-size: cover;
}
.goods-item {
  margin-top: 2px;
  font-size: 16px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item-desc {
  flex: 1;
  font-weight: 500;
}
.item-title {
  flex: 1;
  font-size: 14px;
}

/* 换行用省略号表示的公用资源 */
.item-desc,
.item-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.goods-price {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.item-price {
  color: red;
  font-weight: 500;
}

.item-cound {
  font-size: 15px;
}

.goo{
  font-size: 12px;
}
</style>
