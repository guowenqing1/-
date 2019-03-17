/*
 * Created Date: Saturday, February 16th 2019, 4:26:26 pm
 * Author: WenQing
 * -----
 * Last Modified: Saturday, 16th February 2019 4:26:26 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

 // backTop: 返回顶部
import backTop from "components/content/backtop/backTop.vue";
// NavBar: 顶部导航栏
import NavBar from "components/common/navbar/NavBar";

// 返回顶部图标
export const backTopItem ={
  components:{
    backTop
  }
}

// 顶部导航栏
export const backNabBar = {
   components:{
    NavBar
   }
}