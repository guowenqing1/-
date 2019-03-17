/*
 * Created Date: Saturday, February 16th 2019, 10:12:04 pm
 * Author: WenQing
 * -----
 * Last Modified: Saturday, 16th February 2019 10:12:04 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div>
    <div class="icon-selector" :class="{'selectItem-active':checked}" @click="selectItem">
      <img src="~assets/img/cart/tick.svg" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildCheck",
  props:{
    value:{
      type: Boolean,
      default:true
    }
  },
  data() {
    return {
      checked:this.value
    }
  },
  methods: {
    selectItem() {
      this.$emit("checkBtnClick");
    }
  },
  // 监听属性
  watch: {
		  value: function (newValue) {
        // 更新check
        this.checked = newValue;
      }
    }
};
</script>

<style scoped>
.icon-selector {
  margin: 0;
  width: 22px;
  height: 22px;
  border: 2px solid #acc;
  border-radius: 50%;
  position: relative;
}
.selectItem-active {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>
