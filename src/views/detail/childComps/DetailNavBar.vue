/*
 * Created Date: Wednesday, January 2nd 2019, 6:17:11 pm
 * Author: WenQing
 * -----
 * Last Modified: Wednesday, 2nd January 2019 6:17:11 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div class="detail-nav">
    <nav-bar class="detail-bar">
      <img slot="nav-left" class="back" @click="backClick" src="~assets/img/common/back.svg" alt>
      <div slot="nav-center" class="title">
        <span
          class="title-item"
          v-for="(item,index) in titleInfos"
          :class="{'active':index === currentIndex}"
          @click="itemClick(index)"
          :key="index"
        >{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  props: {
    titleInfos: {
      type: Array,
      default() {
        return ["商品", "参数", "评论", "推荐"];
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    backClick() {
      // this.$router.back(): 后退一步
      this.$router.back()
    },
    itemClick(index) {
      console.log(index,'detail-nav-bar-index')
      this.$emit('itemClick', index)
    }
  }
};
</script>

<style scoped>
.detail-nav {
  background-color: #fff;
  font-weight: normal;
}
.back {
  margin-top: 12px;
}
.title {
  display: flex;
  justify-content: space-around;
}
.title-item {
  font-size: 14px;
}
.title-item.active {
  color: red;
}
</style>
