/*
 * Created Date: Sunday, December 30th 2018, 4:46:32 pm
 * Author: WenQing
 * -----
 * Last Modified: Sunday, 30th December 2018 4:46:32 pm
 * Modified By: WenQing (3319843257@qq.com)
 */
<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item,index) in titles"
      :class="{active:currentIndex === index}"
      @click="itemClick(index)"
      :key="item"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return ["流行", "新款", "精选"];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      // console.log(index)
      // $emit: 触发父级的事件
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  line-height: 44px;
  background-color: #fff;
  font-size: 15px;
}
.tab-control-item{
  flex: 1
}
.tab-control-item span{
  padding: 5px
}
.active{
  color:var(--color-high-text);
}

.tab-control-item.active span{
   border-bottom: 2px solid var(--color-high-text);
}
</style>
