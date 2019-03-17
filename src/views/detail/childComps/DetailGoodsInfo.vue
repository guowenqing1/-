/*
 * Created Date: Friday, January 4th 2019, 5:23:05 pm
 * Author: WenQing
 * -----
 * Last Modified: Friday, 4th January 2019 5:23:05 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div class="detail-goods-info" v-if='Object.keys(detailInfo).length !== 0'>
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class='info-key'>{{detailInfo.detailImage[0].key}}</div>
    <div class='info-img' v-for='item in detailInfo.detailImage[0].list' :key='item.id'>
      <img :src="item" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailGoodsItfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {}
};
</script>

<style scoped>
.detail-goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}
.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  background-color: #000;
  width: 5px;
  height: 5px;
  bottom: 0;
}
.start {
  float: left;
}
.desc {
  padding: 20px 0; 
  font-size: 14px;
  font-weight: 500;
}
.end {
  float: right;
}
.info-desc .end::after {
  right: 0;
}

.info-key{
  color: #000;
}
.info-img img{
  width: 100%;
}
</style>
