/*
 * Created Date: Saturday, February 16th 2019, 10:02:50 pm
 * Author: WenQing
 * -----
 * Last Modified: Saturday, 16th February 2019 10:02:50 pm
 * Modified By: WenQing (3319843257@qq.com)
 */
<template>
  <div class="bottom-tab-bar">
    <click-check class="click-check" @checkBtnClick="checkBtnClick" v-model="isSelectAll"></click-check>
    <span class="all-election">全选</span>
    <span class="total">合计: ¥{{totalPrice}}</span>
    <span class="to-calculate">去计算({{checkLength}})</span>
  </div>
</template>

<script>
import ClickCheck from "./ClickCheck";
import { mapGetters } from "vuex";
export default {
  name: "BottomTabBar",
  components: {
    ClickCheck
  },
  methods: {
    checkBtnClick() {
      if (this.isSelectAll) {
        // 当所有商品都是选中状态
        // 让商品全部变成未选中状态
        this.cartList.forEach(item => (item.checked = false));
      } else {
        // 某些商品存在未选中壮态
        // 让商品全部变成选中状态
        this.cartList.forEach(item => (item.checked = true));
      }
    }
  },
  computed: {
    ...mapGetters(["cartList"]),
    isSelectAll() {
      // for (const item of this.cartList) {
      //   if (!item.checked) {
      //     return false;
      //   }
      // }
      // return true;

      // 第二种(高阶函数)
      return this.cartList.find(item => item.checked === false) === undefined;
    },
    // 计算选中的商品数量
    checkLength() {
      // let goodsLength = 0;
      // for (const item of this.cartList) {
      //   if(item.checked){
      //      goodsLength += 1;
      //   }
      // }
      // return goodsLength

      // 第二种方法(高阶函数)
      return this.cartList.filter(item => item.checked).length;
    },
    // 计算价格
    totalPrice() {
      //   let goodsPrice = 0;
      //   // 1.先获取选中的商品
      //   if (this.isSelectAll) {
      //     for (const item of this.cartList) {
      //       goodsPrice += item.price * item.cound;
      //     }
      //   }
      //   return goodsPrice.toFixed(2);

      // 第二种方法(高阶函数)
      return this.cartList
        .filter(item => {
          console.log(item.checked);
          return item.checked;
        })
        .reduce((priValue, item) => {
          return priValue + item.price * item.cound;
        }, 0)
        .toFixed(2);
    }
  },
}
</script>

<style scoped>
.bottom-tab-bar {
  position: fixed;
  bottom: 49px;
  left: 0px;
  right: 0px;
  background-color: #eee;
  height: 44px;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  line-height: 44px;
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}
/* 按钮 */
.click-check {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}
/* 全选文字 */
.all-election {
  margin-left: 3px;
}
/* 合计文字 */
.total {
  margin-left: 18px;
  font-size: 16px;
  font-weight: 500;
  color: red;
}
/* 去计算文字 */
.to-calculate {
  float: right;
  width: 100px;
  height: 44px;
  background-color: orangered;
  text-align: center;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
}
</style>
