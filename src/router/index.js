/*
 * Created Date: Saturday, December 29th 2018, 11:12:19 am
 * Author: WenQing
 * -----
 * Last Modified: Saturday, 29th December 2018 11:12:19 am
 * Modified By: WenQing (3319843257@qq.com)
 */
import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')
const profileAbout = () => import('views/profileAbout/profileAbout')
const profileFeedback = () => import('views/profileFeedback/profileFeedback')
const profileNews = () => import('views/profileNews/profileNews')
const profileMember = () => import('views/profileMember/profileMember');


// 1.安装路由(插件)
Vue.use(Router)

// 2.配置路由的映射
const routes = [{
  path: '/',
  // redirect: 重定向
  redirect: '/home'
}, {
  path: '/home',    // 路径
  component: Home,  // 组件
},,
{
  path:'/detail/:iid',
  component:Detail
},
 {
  path: '/category',
  component: Category
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/profile',
  component: Profile,
},{
  path:'/profileAbout',
  component: profileAbout
},{
  path:'/profileFeedback',
  component: profileFeedback
},{
  path:'/profileNews',
  component: profileNews
},{
  path:'/profileMember',
  component: profileMember
}

]

const router = new Router({
  routes
})

// 3.导出实例
export default router