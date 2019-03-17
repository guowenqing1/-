/*
 * Created Date: Sunday, February 17th 2019, 9:20:09 am
 * Author: WenQing
 * -----
 * Last Modified: Sunday, 17th February 2019 9:20:09 am
 * Modified By: WenQing (3319843257@qq.com)
 */
export default {
  // 当前购物车商品的信息
  cartList(state) {
    return state.cartList;
  },
  // 当前购物车添加了几个商品
  cartCount(state) {
    return state.cartList.length;
  }
}