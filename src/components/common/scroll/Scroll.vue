/*
 * Created Date: Tuesday, January 1st 2019, 4:26:09 pm
 * Author: WenQing
 * -----
 * Last Modified: Tuesday, 1st January 2019 4:26:09 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div ref="wrapper" class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    // probeType(监听当前位置)
    probeType: {
      type: Number,
      // default: 默认
      default: 1
    },
    // click: 是否可点击
    click: {
      type: Boolean,
      default: true
    },
    // pullUpLoad: 是否可下拉加载
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    // pullDownRefresh: 是否可上拉加载
    pullDownRefresh: {
      type: Boolean,
      default: false
    },
    // mouseWheel: 是否开启滚动条
    mouseWheel: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  // mounted: 生命周期的结束
  mounted() {
    setTimeout(this._initScroll, 50);
  },
  methods: {
    _initScroll() {
      // 1.创建 BetterScroll
      this.scroll = new BScroll(this.$refs.wrapper, {
        // 时时的监听当前位置
        probeType: this.probeType,
        // 是否可点击
        click: this.click,
        click: true,
        // 是否可下拉加载
        pullUpLoad: this.pullUpLoad,
        // 是否可上拉加载
        pullDownRefresh: this.pullDownRefresh,
        // 是否开启滚动条
        mouseWheel: this.mouseWheel
      });

      // 2.事件滚动
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", position => {
          this.$emit("scroll", position);
        });
      }
      
      // 3.下拉加载
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp");
          console.log("下拉加载更多");
        });
      }

      // 4.上拉加载
      if (this.pullDownRefresh) {
        this.scroll.on("pullDownRefresh", () => {
          console.log("上拉加载更多");
        });
      }
    },
    // refresh: 刷新
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    // finishPullUp 可以让下拉加载多次
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    // 设置需要跳转的 x坐标, y坐标, time(时间)
    scrollTo(x, y, time = 100) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    }
  },
  // 监听属性
  watch: {
    data() {
      setTimeout(this.refresh, 50);
    }
  }
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>









