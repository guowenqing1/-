/*
 * Created Date: Wednesday, January 2nd 2019, 7:10:45 pm
 * Author: WenQing
 * -----
 * Last Modified: Wednesday, 2nd January 2019 7:10:45 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
    <swiper class="detail-swiper" v-if="Object.keys(images).length !== 0">
      <swiper-item v-for="(item,index) in images" :key="index">
        <img :src="item" alt>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    images: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.detail-swiper {
  position: relative;
  height: 300px;
}
</style>
