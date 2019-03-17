/*
 * Created Date: Thursday, January 3rd 2019, 9:45:35 am
 * Author: WenQing
 * -----
 * Last Modified: Thursday, 3rd January 2019 9:45:35 am
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <grid-view>
    <goods-list-item v-for="(item, index) in categoryDetail" :goods="item" :key="index" ></goods-list-item>
  </grid-view>
</template>


<script>
import GridView from "components/common/gridView/GridView";
import GoodsListItem from "views/home/childComps/GoodsListItem";
export default {
  name: "TabContentdetail",
  components: {
    GridView,
    GoodsListItem,
  },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
</style>
