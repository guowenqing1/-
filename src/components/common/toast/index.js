/*
 * Created Date: Sunday, February 17th 2019, 6:59:33 pm
 * Author: WenQing
 * -----
 * Last Modified: Sunday, 17th February 2019 6:59:33 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

import Toast from './Toast.vue'

const plugin = {};

plugin.install = function (Vue) {
  // 封装所有关于 Toast,我想封装的代码
  // 1.通过 Vue.extend (组件对象),创建一个组件构造器
  const ToastConstructor = Vue.extend(Toast);
  // 2.通过组件构造器创建组件
  const toast = new ToastConstructor();
  // 3.通过组件构造器创建出来的组件必须挂载在某一个元素上
  toast.$mount(document.createElement('div'))
  // 4.将 toast.$el -> 组件的根元素,将组件的根元素添加到 body 中
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = function (title = '我是默认的内容', durection = 1000,color = '#fff',backgroundColor='#000') {
    // 5.使用 toast
    toast.message = title
    toast.isShow = true;
    // toast的字体颜色 || toast的背景颜色
    toast.titleStyle.color = color;
    toast.titleStyle.backgroundColor = backgroundColor;
    // 定时器
    setTimeout(() => {
      toast.isShow = false;
    }, durection)

  }
}

export default plugin