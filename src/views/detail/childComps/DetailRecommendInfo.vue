/*
 * Created Date: Saturday, January 5th 2019, 6:47:54 pm
 * Author: WenQing
 * -----
 * Last Modified: Saturday, 5th January 2019 6:47:54 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div class="detail-recommend-info" v-if="Object.keys(recommendList).length !== 0">
    <div class="detail-title">热门推荐</div>
    <grid-view>
      <goods-list-item v-for="(item,index) in recommendList" :goods="item" :key="index"></goods-list-item>
    </grid-view>
  </div>
</template>

<script>
import GridView from "components/common/gridView/GridView";
import GoodsListItem from "views/home/childComps/GoodsListItem";
export default {
  name: "DetailRecommendInfo",
  components: {
    GridView,
    GoodsListItem
  },
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.detail-recommend-info {
  padding: 5px;
}

.detail-title {
  line-height: 40px;
  padding-left: 8px;
  font-size: 15px;
  color: #333;
}
</style>
