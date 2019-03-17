  /*
   * Created Date: Saturday, December 29th 2018, 11:13:05 am
   * Author: WenQing
   * -----
   * Last Modified: Saturday, 29th December 2018 11:13:06 am
   * Modified By: WenQing (3319843257@qq.com)
   */

  module.exports = {
    // 被抛弃的 baseUrl
    // baseUrl:'./',
    publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
    configureWebpack: {
      resolve: {
        alias: {
          'views': '@/views',
          'components': '@/components',
          'network': '@/network',
          'common': '@/common',
          'assets': '@/assets',
        }
      }
    }
  }
