/*
 * Created Date: Wednesday, January 2nd 2019, 4:47:51 pm
 * Author: WenQing
 * -----
 * Last Modified: Wednesday, 2nd January 2019 4:47:51 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

import {
  request
} from './network'

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}