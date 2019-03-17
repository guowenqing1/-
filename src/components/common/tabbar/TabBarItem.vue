/*
 * Created Date: Wednesday, December 26th 2018, 1:07:52 pm
 * Author: WenQing
 * -----
 * Last Modified: Wednesday, 26th December 2018 1:07:52 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div v-else class="item-active-icon">
      <slot name="item-active-icon"></slot>
    </div>
    <div class="item-text" :style="activeStyle">
      <slot name="item-text">默认</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      required: true
    },
    activeColor: {
      type: String,
      default: "#ff5777"
    }
  },

  methods: {
    itemClick() {
      // replace: 替换当前,不可以后退
      this.$router.replace(this.path);
    }
  },
  // 计算属性
  computed: {
    isActive() {
      // this.$route.path: 当前活跃的组件
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
};
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
}

.item-icon img,
.item-active-icon img {
  margin-top: 5px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

.item-text {
  font-size: 12px;
  margin-top: 3px;
  color: #333;
}
</style>
