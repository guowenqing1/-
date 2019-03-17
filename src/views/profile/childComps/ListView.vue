/*
 * Created Date: Monday, February 18th 2019, 5:07:50 pm
 * Author: WenQing
 * -----
 * Last Modified: Monday, 18th February 2019 5:07:50 pm
 * Modified By: WenQing (3319843257@qq.com)
 */
<template>
    <div id="list">
      <div v-for="(item, index) in listData" :key="index" class="item" @click='listClick(index)'>
        <span class="icon">
          <svg :fill="item.iconColor"><use :xlink:href="item.icon"></use></svg>
        </span>
        <div class="info">{{item.info}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ListView",
  props: {
    listData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods:{
    listClick(index){
      switch(index){
        case 0:
        this.$router.push('/profileNews')
        break
        case 1:
        console.log('点击了积分商城');
        break
        case 2:
        this.$router.push('/profileMember');
        break
        case 3:
        this.$router.push('/cart');
        break
        default:
        console.error('点击错误')
      }
    }
  }
};
</script>

<style scoped>
  #list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
  }

  #list .item {
    height: 44px;
    line-height: 44px;
    position: relative;
  }

  .icon svg {
    width: 18px;
    height: 18px;
  }

  .item .icon {
    margin-top: 10px;
    position: absolute;
    left: 16px;
    top: -7px;
  }

  .item .info {
    margin-left: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }

  .item:last-of-type .info {
    border-bottom: none;
  }
</style>
