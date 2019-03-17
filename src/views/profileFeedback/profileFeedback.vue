<template>
  <div id="feedback">
    <!-- 头部标签栏 -->
    <nav-bar class="feedback-nav">
      <img src="./img/arrow-left.png" alt slot="nav-left" class="left-img" @click="LIClick">
      <div slot="nav-center">反馈中心</div>
    </nav-bar>
    <!-- 反馈内容 -->
    <div class="feedback-input">
      <textarea class="textarea" name="请输入内容" cols="30"
        rows="10"
        placeholder="说出你需要解决问题的详细描述, 或期待我们改进的地方" @input="problem" ref='problem'
      ></textarea>
      <textarea
        class="textarea" name="请输入内容" cols="30" rows="2"
        placeholder="请填写您的联系方式 (手机号/微信号/QQ号), 有助于我们沟通和解决问题, 资料绝对保密" @input="contack"
        ref='contack'
      ></textarea>
    </div>
    <div class="feedback-btn">
      <!-- 提交按钮 -->
      <div class="submit" @click="submitClick">提交</div>
      <!-- 取消按钮 -->
      <div class="cancel" @click="cancelClick">取消</div>
    </div>
  </div>
</template>

<script>
// mixins(混合)
import { backNabBar } from "common/mixins/mixins.js";
import { mapMutations } from "vuex";
export default {
  name: "profileFeedback",
  data() {
    return {
      problemInput: "",
      contackInput: ""
    };
  },
  // mixins(混合)
  mixins: [backNabBar],
  methods: {
    ...mapMutations(["showTabBar"]),
    // 点击返回箭头
    LIClick() {
      history.back();
      this.showTabBar();
    },
    // 点击提交
    submitClick() {
      if (this.problemInput == "" || this.contackInput == "") {
        this.$toast("请输入反馈内容,内容不能为空");
      } else {
        this.$toast("非常感谢您的反馈",500);
        setTimeout(() => {
          history.back();
          this.showTabBar();
        }, 500);
      }
    },
    // 点击取消
    cancelClick() {
       if (this.problemInput == "" || this.contackInput == "") {
        this.$toast("请输入反馈内容,内容不能为空");
      } else {
        this.$toast("反馈取消成功");
        // 清空输入的内容
        this.$refs.problem.value = '';
        this.$refs.contack.value = '';
      }
    },
    // 监听输入框的改变
    problem(event) {
      this.problemInput = event.target.value;
    },
    contack(event) {
      this.contackInput = event.target.value;
    }
  },
  created() {
    this.$store.commit("hideTabBar");
  }
};
</script>

<style scoped>
#feedback {
  position: relative;
  height: 100vh;
}
/* 顶部的NavBar */
.feedback-nav {
  background-color: #eee;
  color: #000;
  position: relative;
  z-index: 11;
}
/* 左边的箭头 */
.left-img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

/* 输入框 */
.feedback-input {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* 反馈内容 */
.feedback-input .textarea {
  margin-top: 20px;
  border: 1.3px solid #eee;
  resize: none;
  width: 90%;
  font-size: 13px;
  padding: 5px 10px;
}
.feedback-input .textarea:focus {
  outline: none;
}
.feedback-btn {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 17px;
}
.submit {
  background-color: orange;
  color: #fff;
}
.cancel {
  border: 1px solid orange;
  color: orange;
}
.submit,
.cancel {
  padding: 7px 20px;
  border-radius: 10px;
}
</style>
