/*
 * Created Date: Sunday, February 17th 2019, 9:20:41 am
 * Author: WenQing
 * -----
 * Last Modified: Sunday, 17th February 2019 9:20:41 am
 * Modified By: WenQing (3319843257@qq.com)
 */
import * as types from './action-types'

export default {
  addCart(content, info) {
    return new Promise((resolve, reject) => {

      // 第一种方式
      // let oldInfo = null;
      // for (let i = 0; i < content.state.cartList.length; i++) {
      //   if (state.cartList[i].iid == info.iid) {
      //     oldInfo = content.state.cartList[i];
      //   }
      // }
      // // 2.判断 oldInfo 是否有值
      // if (oldInfo) { // 已添加过的商品
      //   content.commit('addCartItem', oldInfo)
      // } else {// 新商品
      //   info.cound = 1;
      //   content.commit('cartListPush', info);
      // }

      // 第二种方式
      // 1.查看是否添加过
      let oldInfo = content.state.cartList.find(item => item.iid === info.iid);
      // 2.判断 oldInfo 是否有值
      if (oldInfo) { // 已添加过的商品
        content.commit(types.ADD_CART_ITEM, oldInfo)
        resolve('加入购物车已有商品,数量+1')
      } else { // 新商品
        info.cound = 1;
        info.checked = true;
        content.commit(types.CART_LIST_PUSH, info);
        resolve('加入购物车成功')
      }
    })
  },
}