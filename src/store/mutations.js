/*
 * Created Date: Sunday, February 17th 2019, 9:20:24 am
 * Author: WenQing
 * -----
 * Last Modified: Sunday, 17th February 2019 9:20:24 am
 * Modified By: WenQing (3319843257@qq.com)
 */

import * as types from './action-types'
export default {
  //  vuex中 mutations 的设计原则:每一个方法的完成的事情尽可能的单一(不进行复杂的操作)
  [types.ADD_CART_ITEM](state, info) {
    info.cound += 1;
  },
  [types.CART_LIST_PUSH](state, info) {
    state.cartList.push(info);
  },
  // 显示登录界面
  showLogin(state) {
    state.user.loginStatus = true
    state.user.registerStatus = false
  },
  // 显示注册界面
  showRegister(state) {
    state.user.registerStatus = true
    state.user.loginStatus = false
  },
  // 隐藏登录界面
  hideLogin(state) {
    state.user.loginStatus = false
  },
  // 隐藏注册界面
  hideRegister(state) {
    state.user.registerStatus = false
  },
  // 显示用户登录信息
  showUserbar(state) {
    state.user.userbarStatus = true
  },
  // 隐藏用户登录信息
  hideUserbar(state) {
    state.user.userbarStatus = false;
  },
  // 让底部的TabBar隐藏
  showTabBar(state) {
    return state.tabbar = true
  },
  // 让底部的TabBar显示
  hideTabBar(state) {
    return state.tabbar = false
  }
}