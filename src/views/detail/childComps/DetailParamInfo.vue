/*
 * Created Date: Friday, January 4th 2019, 6:49:49 pm
 * Author: WenQing
 * -----
 * Last Modified: Friday, 4th January 2019 6:49:49 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div class="detail-param-info" v-if="Object.keys(goodsParam).length !== 0">
    <table class="info-size" v-for="(table,index) in goodsParam.sizes" :key="index">
      <tr v-for="(tr,index) in table" :key="index">
        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info,index) in goodsParam.infos" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="info-param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsParam.image.length !== 0">
      <img :src="goodsParam.image" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    goodsParam: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.detail-param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.detail-param-info table {
  width: 100%;
  border-collapse: collapse;
}
.detail-param-info table tr {
  height: 42px;
}
.detail-param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}
.info-param-value {
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>
