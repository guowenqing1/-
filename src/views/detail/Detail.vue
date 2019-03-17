/*
 * Created Date: Monday, December 31st 2018, 1:40:54 pm
 * Author: WenQing
 * -----
 * Last Modified: Monday, 31st December 2018 1:40:54 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div id="detail">
    <detail-nav-bar @itemClick="titleClick" :current-index="currentIndex"></detail-nav-bar>
    <scroll
      :probe-type="3"
      ref="scroll"
      class="content"
      @scroll="contentScroll"
      :data="[topImages, goods, shopInfo, detailInfo, goodsParam,commentInfo,recommendList ]"
    >
      <detail-swiper ref="base" :images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-param-info ref="param" :goods-param="goodsParam"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <detail-recommend-info ref="recommend" :recommend-list="recommendList"></detail-recommend-info>
    </scroll>
    <back-top v-show="showBackTopDetail" @click.native="backTop"></back-top>
    <detail-bottom-dar @addToast="addToast"></detail-bottom-dar>
    <!-- Toast 第二种写法 -->
    <!-- <toast ref="toast"></toast> -->
  </div>
</template>
<script>

// Scroll: better-scroll
import Scroll from "components/common/scroll/Scroll";
// DetailNavBar: 头部导航栏
import DetailNavBar from "./childComps/DetailNavBar";
// DetailSwiper: 轮播图
import DetailSwiper from "./childComps/DetailSwiper";
// DetailBaseInfo: 价格,收藏
import DetailBaseInfo from "./childComps/DetailBaseInfo";
// DetailShopInfo: 店铺的信息
import DetailShopInfo from "./childComps/DetailShopInfo";
// DetailGoodsInfo: 售后,穿着效果,图片
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
// DetailParamInfo: 尺寸
import DetailParamInfo from "./childComps/DetailParamInfo";
// DetailCommentInfo: 评论
import DetailCommentInfo from "./childComps/DetailCommentInfo";
// DetailRecommendInfo: 热门推荐
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
// DetailBottomDar: 底部标签栏
import DetailBottomDar from "./childComps/DetailBottomBar";
// backTop: 返回顶部
import { backTopItem } from "common/mixins/mixins.js";
// map -> 映射
import {mapActions} from 'vuex'
// Toast(弹框)
/**
 *  Toast 第二种写法
 *  */
// import Toast from "components/common/toast/Toast";
import * as Change from "common/const.js";
import {
  getDetail,
  getRecommend,
  Goods,
  ShopInfo,
  GoodsParam
} from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      itemInfo: {},
      shopInfo: {},
      columns: {},
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommendList: [],
      themeTops: [],
      showBackTopDetail: false,
      currentIndex: 0
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    Scroll,
    DetailBottomDar
    /**
     *  Toast 第二种写法
     *  */
    // Toast
  },
  mixins: [backTopItem],
  // created: 生命周期的开始
  created() {
    this._getDetail();
    this._getRecommend();
  },
  // updated :更新渲染完成之后
  updated() {
    this._getOffsetTops();
  },
  methods: {
    ...mapActions(['addCart']),

    // 点击了加入购物车
    addToast() {
      // 1.创建一个对象
      let obj = {};
      // 2.存储对象信息
      // 获取商品id
      obj.iid = this.iid;
      // 商品的图片
      obj.topImages = this.itemInfo.topImages[0];
      // 商品标题
      obj.title = this.itemInfo.title;
      // 商品的描述
      obj.desc = this.itemInfo.desc;
      // 商品的价格
      obj.price = this.itemInfo.highNowPrice;
      // 3.将对象里面的信息存储到仓库(store)中
      this.addCart(obj).then(res => {
        console.log(obj,'ogj')
        /**
         *  toast 第一种写法
         *  */
        // this.$refs.toast.message = res;
        // this.$refs.toast.isShow = true;

        // // 定时器
        // setTimeout(() => {
        //   this.$refs.toast.isShow = false;
        // }, 1000);

        /**
         *  Toast 第二种写法
         *  */
        this.$toast(res);
      });
    },
    
    _getOffsetTops() {
      this.themeTops = [];
      this.themeTops.push(this.$refs.base.$el.offsetTop);
      this.themeTops.push(this.$refs.param.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      // 方案二: 给themeTops添加一个最大的值
      this.themeTops.push(Number.MAX_VALUE);
    },
    contentScroll(position) {
      // 判断是否显示返回顶部按钮
      this.showBackTopDetail = position.y <= -Change.TOP_DISTANCE;

      // 监听滚到了哪一个主题
      this._listenScrollTheme(-position.y);
    },
    _listenScrollTheme(position) {
      for (let i = 0, length = this.themeTops.length; i < length; i++) {
        let iPos = this.themeTops[i];
        //   if (
        //     (i < length - 1 &&
        //       position >= iPos &&
        //       position < this.themeTops[i + 1]) ||
        //     (i === length - 1 && position >= iPos)
        //   ) {
        //     this.currentIndex = i;
        //   }
        /**
         * 判断的方案:
         *  方案一:
         *    条件: (i < (length-1) && position >= iPos && position < this.themeTops[i+1]) || (i === (length-1) && position >= iPos)
         *    优点: 不需要引入其他的内容, 通过逻辑解决
         *    缺点: 判断条件过长, 并且不容易理解
         *  方案二:
         *    条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.
         *    优点: 简洁明了, 便于理解
         *    缺点: 需要引入一个较大的int数字
         * 疑惑: 在第一个判断中, 为什么不能直接判断(position >= iPos)即可?
         * 解答: 比如在某一个position大于第0个时, 就会break, 不会判断后面的i了.
         */
        if (position >= iPos && position < this.themeTops[i + 1]) {
          if (this.currentIndex !== i) {
            this.currentIndex = i;
          }
          break;
        }
      }
    },
    // 点击返回顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    _getDetail() {
      // 1.获取iid
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        // result: 结果
        const data = res.result;
        // itemInfo: 项目信息
        this.itemInfo = data.itemInfo;
        // shopInfo: 购物信息
        this.shopInfo = data.shopInfo;
        // columns: 柱
        this.columns = data.columns;
        // 获取顶部的 img
        this.topImages = this.itemInfo.topImages;

        // 商品信息
        this.goods = new Goods(
          this.itemInfo,
          this.columns,
          this.shopInfo.services
        );

        // 店铺信息
        this.shopInfo = new ShopInfo(this.shopInfo);

        // detailInfo: 商品信息
        this.detailInfo = data.detailInfo;

        this.goodsParam = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );

        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    _getRecommend() {
      getRecommend().then((res, error) => {
        if (error) return;
        this.recommendList = res.data.list;
      });
    },
    titleClick(index) {
      // $nextTick: 下一刻
      this.$nextTick(() => {
        this.$refs.scroll.scrollTo(0, -this.themeTops[index], 600);
      });
    }
  }
};
</script>

<style scopen>
.content {
  position: absolute;
  top: 44px;
  bottom: 0px;
  bottom: 60px;
  z-index: 10;
}
</style>

