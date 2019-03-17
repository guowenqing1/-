/*
 * Created Date: Saturday, January 5th 2019, 10:41:23 pm
 * Author: WenQing
 * -----
 * Last Modified: Saturday, 5th January 2019 10:41:23 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div class="detail-bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span>收藏</span>
      </div>
    </div>

    <div class="bar-item bar-right">
      <div class="cart" @click='addToast'>加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods:{
    addToast(){
      this.$emit('addToast')
    }
  }
};
</script>

<style scoped>
.detail-bottom-bar {
  position: fixed;
  z-index: 10;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 60px;
  background-color: #fff;

  display: flex;
  text-align: center;
}
.bar-item {
  flex: 1;
  display: flex;
}
/* 左 */
.bar-left {
  flex: 1;
  text-align: center;
  justify-content: center;
  display: flex;
}
.bar-left > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.bar-left .icon {
  width: 22px;
  height: 22px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left span{
  margin-top: 1px;
  font-size: 11px;
}
.bar-left .service {
  background-position: 0 -54px;
}

.bar-left .shop {
  background-position: 0 -98px;
}

/* 右 */
.bar-right {
  display: flex;
  line-height: 60px;
}
.bar-right .cart {
  flex: 2;
  background-color: yellow;
  color: #000;
}
.bar-right .buy {
  flex: 1.5;
  background-color: red;
  color: #fff;
}
/* 公用资源 */
.bar-right .cart,
.bar-right .buy {
  font-weight: 500;
}
</style>
