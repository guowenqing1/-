/*
 * Created Date: Friday, January 4th 2019, 10:19:56 am
 * Author: WenQing
 * -----
 * Last Modified: Friday, 4th January 2019 10:19:56 am
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="info-oldPrice">{{goods.price}}</span>
      <span class="info-lowPrice">{{goods.oldPrice}}</span>
      <span
        :class="{'info-discountDesc':goods.discountDesc !== ''}"
        :style="{background:goods.discountBgColor}"
      >{{goods.discountDesc}}</span>
    </div>
    <div class="columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="services">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src='goods.services[index -1].icon' alt>
        {{goods.services[index -1].name}}
      </span>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.detail-base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #000;
}
.info-price {
  margin-top: 15px;
}
.info-oldPrice {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-lowPrice {
  color: #999;
  font-size: 15px;
  margin-left: 10px;
  text-decoration: line-through;
}
.info-discountDesc {
  padding: 2px 7px;
  border-radius: 8px;
  color: #fff;
  font-size: 12px;
  margin-left: 5px;
  position: relative;
  top: -5px;
}
.columns {
  font-size: 13px;
  display: flex;
  margin-top: 10px;
  line-height: 35px;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
}

.services {
  color: #000;
  line-height: 50px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.services img{
  width: 13px;
  height: 13px;
  vertical-align: middle;
  position: relative;
  top: -1px;
}
</style>
