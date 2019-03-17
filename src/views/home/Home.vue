/*
 * Created Date: Wednesday, December 26th 2018, 2:41:03 pm
 * Author: WenQing
 * -----
 * Last Modified: Wednesday, 26th December 2018 2:41:03 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="nav-center">商品街</div>
    </nav-bar>
    <tab-control v-show="howTabControl" class="tab-control" @tabClick="tabClick" ref="topTab"></tab-control>
    <scroll
      class="scroll"
      :probe-type="3"
      :pull-up-load="true"
      :data="[showGoodsList]"
      @pullingUp="loadMore"
      @scroll="contentScroll"
      ref="scroll"
    >
      <home-swipt ref="hSwiper" class="home-swipt" :banners="banners"></home-swipt>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" @tabClick="tabClick" ref="contentTap"></tab-control>
      <goods-list :goods="showGoodsList" ></goods-list>
    </scroll>
    <back-top v-show="showBackTop" @click.native="backTop"></back-top>
  </div>
</template>

<script>
// mixins(混合)
import { backNabBar } from "common/mixins/mixins.js";
import HomeSwipt from "./childComps/HomeSwipt";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "./childComps/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import backTop from "components/content/backtop/backTop";
// import axios from "axios";
// 1.简单的封装
// import { request } from 'request'
import { getMultiData, getProductData } from "network/home";
import * as Change from "common/const.js";
import { BANNER, RECOMMEND } from "network/home.js";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      // 记录
      currentType: Change.POP,
      showBackTop: false,
      howTabControl: false,
      tabOffsetTop: 0
    };
  },
  components: {
    HomeSwipt,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    backTop
  },
  // mixins(混合)
  mixins: [backNabBar],
  // 计算属性
  computed: {
    showGoodsList() {
      return this.goods[this.currentType].list;
    }
  },
  // created: 生命周期的开始
  // created() {
  //   console.log("首页");
  //   axios
  //     .get("http://123.207.32.32:8000/home/multidata")
  //     .then(res => {
  //       this.banners = res.data.data.banner
  //       console.log(this.banners);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //   });
  // }

  // 1.简单的封装
  //   created() {
  //     request(
  //       {
  //         url: "http://123.207.32.32:8000/home/multidata"
  //       },
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  //   }

  // 2.ES5封装方式
  // created() {
  //   request(
  //     {
  //       url: "http://123.207.32.32:8000/home/data",
  //       params: {
  //         type:'sell',
  //         page:1
  //       }
  //     },
  //     res => {
  //       console.log(res);
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  // 3.ES6 Promise 封装方式
  // created() {
  //   request({
  //     url: "http://123.207.32.32:8000/home/data",
  //     params: {
  //       type: "sell",
  //       page: 1
  //     }
  //   })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  // 4.获取数据
  created() {
    // getMultiData()
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // getProductData("sell", 1)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // 1.请求轮播等数据
    this._getMultiData();

    // 2.请求商品数据
    this._getProductData(Change.POP);
    this._getProductData(Change.NEW);
    this._getProductData(Change.SELL);
  },
  // 当数据加载完刷新数据
  updated() {
    // $nextTick: 下一刻
    this.$nextTick(() => {
      this.tabOffsetTop = this.$refs.contentTap.$el.offsetTop;
    });
  },
  activated() {
    this.$refs.hSwiper &&
      this.$refs.hSwiper.startTimer &&
      this.$refs.hSwiper.startTimer();
  },
  deactivated() {
    this.$refs.hSwiper &&
      this.$refs.hSwiper.stopTimer &&
      this.$refs.hSwiper.stopTimer();
  },
  methods: {
    _getMultiData() {
      getMultiData()
        .then(res => {
          // console.log(res,'res')
          this.banners = res.data[BANNER].list;
          this.recommends = res.data[RECOMMEND].list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    _getProductData(type) {
      // 获取页码
      const page = this.goods[type].page;
      getProductData(type, page)
        .then(res => {
          const newList = res.data.list;
          this.goods[type].list.push(...newList);
          this.goods[type].page += 1;
          // 完成后加载更多数据
          this.$refs.scroll.finishPullUp();
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * 事件监听
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = Change.POP;
          break;
        case 1:
          this.currentType = Change.NEW;
          break;
        case 2:
          this.currentType = Change.SELL;
          break;
      }
      this.$refs.contentTap.currentIndex = index;
      this.$refs.topTab.currentIndex = index;
    },
    loadMore() {
      this._getProductData(this.currentType);
    },
    // 监听当前滚动到相对于的位置显示返回顶部图标
    contentScroll(position) {
      this.showBackTop = position.y <= -Change.TOP_DISTANCE;
      this.howTabControl = position.y <= -this.tabOffsetTop;
    },
    // 点击返回顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 2000);
    }
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}

/* 流行,新款,精选的中部吸顶 */
.tab-control {
  /* 粘性(粘贴)定位 */
  position: sticky;
  top: 44px;
  z-index: 10;
}

.scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
}
</style>





