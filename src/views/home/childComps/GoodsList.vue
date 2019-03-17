/*
 * Created Date: Sunday, December 30th 2018, 7:56:34 pm
 * Author: WenQing
 * -----
 * Last Modified: Sunday, 30th December 2018 7:56:34 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div class="goods-list">
    <goods-list-item class='item'
            v-for="(item,index) in goods" :goods='item' :key='index' >
    </goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list {
   display: flex;
   /* 当子标签超过父标签的宽度,可以使用: flex-wrap */
   flex-wrap: wrap;
   justify-content: space-around;
   padding: 5px;
  }

  .goods-list .item {
    width: 48%;
  }
</style>
