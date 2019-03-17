<template>
  <div id="app">
    <!-- keep-alive: 可以使被包含的组件保留状态，或避免重新渲染 
             include: 字符串或正则表达式,只有匹配的组件会被缓存
             exclude: 字符串或正则表达式,任何匹配的组件都不会被缓存
    -->
    <keep-alive exclude="Detail,profileAbout,profileFeedback,profileNews">
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar></main-tab-bar>

    <!--  个人中心的图片 -->
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import MainTabBar from "components/content/maintabbar/MainTabBar";
// 个人中心的图片
import Icon from "components/content/Icon/Icon.vue";
import SvgIcon from "components/content/Icon/svg.vue";
export default {
  name: "app",
  components: {
    MainTabBar,
    Icon,
    SvgIcon
  }
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>
