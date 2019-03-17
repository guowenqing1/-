/*
 * Created Date: Friday, January 4th 2019, 2:57:58 pm
 * Author: WenQing
 * -----
 * Last Modified: Friday, 4th January 2019 2:57:58 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div id="detail-shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-shopLogo">
      <img :src="shopInfo.shopLogo" alt>
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shopInfo.cSells | sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-sells">
          <div class="sells-count">{{shopInfo.cGoods}}</div>
          <div class="sells-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in this.shopInfo.shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <a :href="this.shopInfo.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      if (value <= 10000) return value;
      // toFixed: 可以让 number 四舍五入并指定小数位数的数字
      return (value / 10000).toFixed(1) + "万";
    }
  },
  created() {
    // console.log()
  },
};
</script>

<style scoped>
#detail-shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-shopLogo {
  line-height: 45px;
  /* 让元素垂直居中 */
  display: flex;
  align-items: center;
}
.shop-shopLogo img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
}
.shop-shopLogo span {
  margin-left: 10px;
  vertical-align: center;
}
.shop-middle {
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.shop-middle-item {
  flex: 1;
}
.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.info-sells {
  margin-left: 10px;
  vertical-align: center;
}
.sells-count {
  font-size: 18px;
}
.sells-text {
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
}

.shop-middle-right {
  font-size: 13px;
  color: #333;
}

.shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}
.shop-middle-right td {
  padding: 5px 0;
}
.shop-middle-right .score {
  color: #5ea732;
}

.shop-middle-right .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.shop-middle-right .better-more span {
  background-color: #f13e3a;
}
.shop-middle-right .score-better {
  color: #f13e3a;
}

.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.shop-bottom a {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>
