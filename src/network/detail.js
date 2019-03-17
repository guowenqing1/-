/*
 * Created Date: Saturday, December 29th 2018, 4:53:05 pm
 * Author: WenQing
 * -----
 * Last Modified: Saturday, 29th December 2018 4:53:05 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

import {
  request
} from './network'


export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title; // 标题
    this.price = itemInfo.price; // 价格
    this.oldPrice = itemInfo.oldPrice; // 旧价格
    this.lowPrice = itemInfo.lowPrice; // 低价
    this.lowNowPrice = itemInfo.lowNowPrice; // 最低价格
    this.discountBgColor = itemInfo.discountBgColor; // 折扣颜色
    this.discountDesc = itemInfo.discountDesc; // 折扣
    this.itemInfo = itemInfo; // 项目信息
    this.columns = columns; // 销量,收藏,默认快递
    this.services = services; // 退货补运费
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.cFans = shopInfo.cFans // 粉丝
    this.name = shopInfo.name; // 店名
    this.shopLogo = shopInfo.shopLogo; // 店的图片
    this.shopUrl = shopInfo.shopUrl; // 店的路径
    this.cGoods = shopInfo.cGoods; // 没卖出的数量
    this.cSells = shopInfo.cSells; // 卖出的数量
    this.shopInfo = shopInfo; // 购物信息

  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables
  }
}

