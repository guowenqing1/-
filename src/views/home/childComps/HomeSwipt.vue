/*
 * Created Date: Sunday, December 30th 2018, 1:15:01 pm
 * Author: WenQing
 * -----
 * Last Modified: Sunday, 30th December 2018 1:15:01 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div>
    <!-- 判断 banners 是否有值 -->
    <swiper ref="swiper" v-if="banners.length">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwipt",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
      required: true
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    startTimer() {
      this.$refs.swiper &&
        this.$refs.swiper.startTimer &&
        this.$refs.swiper.startTimer();
    },
    stopTimer() {
      this.$refs.swiper &&
        this.$refs.swiper.stopTimer &&
        this.$refs.swiper.stopTimer();
    }
  }
};
</script>

<style scoped>
</style>