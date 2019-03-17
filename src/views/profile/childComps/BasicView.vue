<template>
  <div id="basic">
    <div
      v-for="(item,index) in basicList"
      :key="index"
      class="item-basic"
      @click="basicClick(index)"
    >
      <img :src="item.icon" alt>
      <div class="basic-info">{{item.info}}</div>
    </div>
    <!-- 注销账号 -->
    <div v-show='this.$store.state.user.userbarStatus'>
      <div class="item-delete">
        <div class="delete-info" @click="loginOut">注销账号</div>
      </div>

      <div class="item-clear">
        <div class="clear-info" @click="removeRegister">清除登录记录</div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  name: "deleteView",
  data() {
    return {
      basicList: [
        { icon: require("./img/feedback.png"), info: "反馈" },
        { icon: require("./img/about.png"), info: "关于" }
      ]
    };
  },
  methods: {
    ...mapMutations(["hideUserbar"]),
    basicClick(index) {
      console.log(index);
      if (index === 0) {
        this.$router.push("/profileFeedback");
        console.log("点击了反馈");
      } else if (index === 1) {
        this.$router.push("/profileAbout");
        console.log("点击了关于");
      } else if (index === 2) {
        console.log("点击了设置");
      }
    },
    // 清除注册记录
    removeRegister() {
      let R = confirm("警告: 你确认要清除所有注册记录!!!");
      setTimeout(() => {
        if (R) {
          if (JSON.parse(localStorage.getItem("local")) == null) {
            this.$toast("数据没有任何数据可清楚!", 1500);
          } else {
            localStorage.removeItem("local");
            this.$toast("删除成功", 1500);
            this.hideUserbar();
          }
        } else {
          this.$toast("清除数据失败!", 1500);
        }
      }, 300);
    },
    // 注销账号
    loginOut() {
      // 判断是否已经登录了账号
      setTimeout(() => {
        if (this.$store.state.user.userbarStatus) {
          this.hideUserbar();
          this.$toast("注销成功!", 1500);
        } else {
          this.$toast("请登录账号!", 1500);
        }
      }, 300);
    }
  }
};
</script>

<style scoped>
#basic {
  background-color: #fff;
  font-size: 15px;
  color: #333;
}
.item-basic {
  height: 44px;
  line-height: 44px;
  position: relative;
}
.item-basic img {
  margin-top: 10px;
  position: absolute;
  left: 16px;
  top: 50%;
  width: 17px;
  height: 17px;
  margin-top: -8.5px;
}
.basic-info {
  margin-left: 40px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding-left: 5px;
}
/* 删除按钮 */
.clear-info,
.delete-info {
  text-align: center;
}

.item-delete {
  background-color: #e0e0e0;
}
.item-clear {
  background-color: red;
}
/* 共同资源 */
.item-delete,
.item-clear {
  margin-top: 10px;
  color: #fff;
  border-radius: 10px;
  width: 90%;
  font-weight: 600;
  margin-left: 5%;
  height: 44px;
  line-height: 44px;
}
</style>
