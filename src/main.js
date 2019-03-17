import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import store from './store'
import toast from './components/common/toast'

Vue.config.productionTip = false

Vue.use(toast)

Vue.use(VueLazyLoad,{
  preLoad: 1,
  loading: require('assets/img/common/placeholder.png')
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
