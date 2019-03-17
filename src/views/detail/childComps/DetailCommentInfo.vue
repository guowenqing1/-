/*
 * Created Date: Saturday, January 5th 2019, 4:53:57 pm
 * Author: WenQing
 * -----
 * Last Modified: Saturday, 5th January 2019 4:53:57 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt>
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-content">
      <p class>{{commentInfo.content}}</p>
      <div class='info-close'>
        <span class="info-data">{{commentInfo.created | showDate}}</span>
        <span class="info-style">{{commentInfo.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils/utils.js'
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(Value) {
      let data = new Date(Value * 1000);
      return formatDate(data,'yyyy-MM-dd')
    }
  }
};
</script>

<style scoped>
.detail-comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.header-title {
  float: left;
  font-size: 15px;
}
.header-more {
  float: right;
  font-size: 13px;
  margin-right: 10px;
}

.info-user {
  padding: 10px 0 5px;
}
.info-user img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.info-user span {
  position: relative;
  top: -18px;
  margin-left: 10px;
  font-size: 16px;
  vertical-align: middle;
}
.info-content {
  padding: 0 5px 20px;
}
.info-content p {
  font-size: 14px;
}
.info-close{
  font-size: 13px;
  padding: 20px 5px 0;
  color: #999;
}
.info-style {
  margin-left: 16px;
}
</style>
