/*
 * Created Date: Saturday, December 29th 2018, 4:52:47 pm
 * Author: WenQing
 * -----
 * Last Modified: Saturday, 29th December 2018 4:52:47 pm
 * Modified By: WenQing (3319843257@qq.com)
 */
 
import {request} from './network'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getMultiData() {
  return request({
    url:'home/multidata'
  })
}

export function getProductData(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

