/*
 * Created Date: Sunday, December 30th 2018, 1:25:59 pm
 * Author: WenQing
 * -----
 * Last Modified: Sunday, 30th December 2018 1:26:00 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt>
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
      required: true
    }
  }
};
</script>

<style scoped>
.recommend {
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
  text-align: center;
}
.recommend img {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}
.recommend span {
  display: inline-block;
  width: 100%;
}
</style>
