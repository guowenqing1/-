/*
 * Created Date: Sunday, December 30th 2018, 7:56:48 pm
 * Author: WenQing
 * -----
 * Last Modified: Sunday, 30th December 2018 7:56:48 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div class="goods-list-item" @click="goToDetail">
    <img v-lazy="getImg" :key="getImg" alt>
    <div class="goods-info">
      <p>{{goods.title}}</p>
      <span class="price">¥{{goods.price}}</span>
      <span class="cfav">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    goToDetail() {
      // 1.获取iid
      let iid = this.goods.iid;
      // 2.跳转到详情页面
      this.$router.push({ path: "/detail/" + iid, query: { iid } });
    }
  },
  computed: {
    getImg() {
      return this.goods.image || this.goods.img || this.goods.show.img;
    }
  }
};
</script>
<style scoped>
.goods-list-item {
  padding-bottom: 40px;
  position: relative;
}

.goods-list-item img {
  width: 100%;
  border-radius: 5px;
  margin: 10px 0;
}
.goods-info {
  font-size: 12px;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.cfav {
  position: relative;
}
/* 小星星图标 */
.goods-info .cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>




