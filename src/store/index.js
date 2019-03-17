/*
 * Created Date: Saturday, February 16th 2019, 7:25:54 pm
 * Author: WenQing
 * -----
 * Last Modified: Saturday, 16th February 2019 7:25:55 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import modules from './modules'
import mutations from './mutations'

// 1.安装vuex
Vue.use(Vuex);

const state = {
  // 用来存储购物车数据
  cartList: [],
  // 用来记录登录状态
  user:{
    // 登录框显示或隐藏状态
    loginStatus: false,
    // 注册框显示或隐藏状态
    registerStatus: false,
    // 用户登录信息
    userbarStatus:false
  },
  // 用来决定底部的TabBar是否需要显示
  tabbar: true
}

// 2.创建 Vuex 实例(仓库)
const store = new Vuex.Store({
  state,
  // mutations: 用来修改状态(可以用来修改 state,不可以用来做️异步处理)
  mutations,
  // getters: 当我们需要对 store 里面的数据做一些调整,可以使用
  getters,
  // actions: 用来修改状态(可以用来修改 state,可以用来异步处理) 
  actions,
  // modules: 模块,可以把 state,getters,mutations,actions 封装成模块
  modules: {

  }
})

// 3.导出实例对象
export default store