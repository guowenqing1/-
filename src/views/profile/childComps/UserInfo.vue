/*
 * Created Date: Monday, February 18th 2019, 4:55:30 pm
 * Author: WenQing
 * -----
 * Last Modified: Monday, 18th February 2019 4:55:30 pm
 * Modified By: WenQing (3319843257@qq.com)
 */
<template>
  <div id="user-info">
    <a href="#" class="clear-fix" @click="loginClick">
      <!-- 头像框 -->
      <slot name="user-icon">
        <!-- 头像框里面的头像 -->
        <img :src="userImg" alt class="login-img left" v-if="$store.state.user.userbarStatus">
        <!-- 用户没有登录是的默认头像 -->
        <svg class="privateImage-svg left" v-else>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
        </svg>
      </slot>
      <!-- login/register -->
      <div class="login-info left">
        <slot name="user-nickname">
          <div v-if="$store.state.user.userbarStatus">账号:{{currentUser.username}}</div>

          <div v-else>登录/注册</div>
        </slot>
        <!-- 暂无绑定手机号 -->
        <div class="phone">
          <span>
            <!-- 小手机图片 -->
            <!-- <svg data-v-735ff1be fill="#fff" class="icon-mobile"> -->
            <!-- <use data-v-735ff1be xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use> -->
            <!-- </svg> -->
          </span>
          <slot
            name="user-phone"
            class="user-phone"
            v-if="!$store.state.user.userbarStatus"
          >个性签名: 登录可填写</slot>

          <slot name="user-phone" class="user-phone" v-else>个性签名: {{currentUser.words}}</slot>
        </div>
      </div>
      <!-- 箭头图片 -->
      <svg data-v-735ff1be fill="#fff" class="arrow-svg right">
        <use data-v-735ff1be xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
      </svg>
    </a>

    <div class="login-wrapper" @click="loginBtnClick" v-show="this.$store.state.user.loginStatus">
      <!-- 点击登录页面阻止事件冒泡 -->
      <div class="login-box" @click="stopProp">
        <img src="./img/logo.jpg" alt class="login-img">
        <h3>用户登录</h3>
        <form action name="login" ref="login">
          <input type="text" placeholder="请输入用户名" class="username" @input="username">
          <input type="password" placeholder="请输入密码" class="password" @input="password">
          <input type="button" value="立即登录" @click="login">
          <input type="button" value="立即注册" @click="showRegister" class="blueBtn">
        </form>
      </div>
    </div>

    <!-- 注册模版 -->
    <div
      class="login-wrapper"
      @click="registerBtnClick"
      v-show="this.$store.state.user.registerStatus"
    >
      <!-- 点击注册页面阻止事件冒泡 -->
      <div class="login-box" @click="stopProp">
        <img src="./img/logo.jpg" alt class="login-img">
        <h3>用户注册</h3>
        <form action name="register" ref="register">
          <input type="text" placeholder="请输入用户名" class="username" @input="username">
          <input type="password" placeholder="请输入密码" class="password" @input="password">
          <input type="button" value="立即注册" @click="register" class="blueBtn">
          <input type="button" value="立即登录" @click="showLogin">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "UserInfo",
  data() {
    return {
      // 用来存储用户输入的账号和密码
      usernameInput: "",
      passwordInput: "",
      // 原始数据
      users: [],
      // 当前用户信息
      currentUser: {
        username: "",
        password: "",
        userimg: "user01.jpg",
        words: "今天天气很好适合敲代码"
      }
    };
  },
  methods: {
    ...mapMutations(["hideUserbar", "hideLogin", "showUserbar"]),
    // 点击登录
    login() {
      let localObj = JSON.parse(localStorage.getItem("local"));
      // 用来做标记,方便判断当前的状态
      let flag = false;
      let loginUsername = this.usernameInput;
      let loginPassword = this.passwordInput;
      // 判断是否输入了内容
      if (
        loginUsername == "" || loginPassword == ""
      ) {
        // 用户的内容没有填完
        this.$toast("请将信息填毕完整!!",1500);
        return;
      } else {
        // 内容填写完毕
        for (const key in localObj) {
          const ele = localObj[key];
          // 判断账号或者密码是否正确;
          if (
            ele.username === loginUsername &&
            ele.password === loginPassword
          ) {
            // 登录成功
            flag = true;
            this.$toast("登录成功",1500);
            // 用户登录框消失
            this.hideLogin();
            // 用户登录信息显示
            this.showUserbar();
            // 更新用户的信息
            this.currentUser.username = ele.username;
            this.currentUser.userimg = ele.userimg;
            this.currentUser.words = ele.words;
          }
        }
      }

      if (!flag) {
        this.$toast("您输入的账号或密码不正确!!",1500);
        // 重置 from 表单
        this.$refs.login.reset();
      }
    },
    // 点击注册
    register() {
      var obj = {}; // 创建用户账号密码容器
      var flag = false; // 用来做标记,方便判断当前的状态
      // 获取输入的账号和密码
      let registerUsername = this.usernameInput;
      let registerPassword = this.passwordInput;
      let localObj = JSON.parse(localStorage.getItem("local"));
      // 判断账号和密码是否已经存在
      for (const key in localObj) {
        const ele = localObj[key];
        if (ele.username === registerUsername) {
          // 账号已存在
          this.$toast("该用户名已经被注册了!!",1500);
          return;
        }
      }

      // 判断用户是否输入了内容
      if (
        registerUsername == "" || registerPassword == ""
      ) {
        // 用户的内容没有填完
        this.$toast("请将信息填毕完整!!",1500);
        return;
      } else {
        // 账号没有被注册
        // Math.floor : 向下取整
        // Math.random: 获取 0~1 之间的随机小数
        let randomNum = Math.floor(Math.random() * 17) + 1;
        // 生成随机头像
        let randomImg = `user0${randomNum}.jpg`;
        obj.username = registerUsername;
        obj.password = registerPassword;
        obj.userimg = randomImg;
        obj.words = "这个人很懒,什么也没留下";
        this.users.push(obj);
        this.$toast("注册账号成功",1500);
      }
    },
    loginClick() {
      // 重置 form 表单
      this.$refs.login.reset()
      if (this.$store.state.user.userbarStatus === true) {
        this.$toast("你已经登录了!!",1500);
        return;
      } else {
        this.$store.commit("showLogin");
      }
    },
    // 监听用户账号的输入
    username(event) {
      this.usernameInput = event.target.value;
    },
    // 监听用户密码的输入
    password(event) {
      this.passwordInput = event.target.value;
    },
    // 切换到登录框
    showLogin() {
      // 重置 form 表单
      this.$refs.login.reset();
      this.$store.commit("showLogin");
    },
    // 切换到注册框
    showRegister() {
      // 重置 form 表单
      this.$refs.register.reset();
      this.$store.commit("showRegister");
    },
    // 登录蒙版点击事件
    loginBtnClick() {
      this.$store.commit("hideLogin");
    },
    // 注册蒙版点击事件
    registerBtnClick() {
      this.$store.commit("hideRegister");
    },
    // 点击登录、注册框时阻止冒泡
    stopProp(e) {

      let randomNum = Math.floor(Math.random() * 17) + 1;
        console.log(randomNum)
      // 兼容写法
      e = e || window.event;
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
      }
    }
  },
  computed: {
    // 用户随机头像
    userImg() {
      return require(`./img/${this.currentUser.userimg}`);
    }
  },
  // 监听事件的改变
  watch: {
    users(newValue) {
      localStorage.setItem("local", JSON.stringify(newValue));
      let localObj = localStorage.getItem("local");
    }
  }
};
</script>

<style scoped>
#user-info {
  background-color: var(--color-tint);
  padding: 15px;
  margin-top: -5px;
}

/* 头像框里面的头像 */
#user-info .privateImage-svg {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
}

.left {
  float: left;
}

/* 箭头图片 */
#user-info .arrow-svg {
  width: 11px;
  height: 22px;
  margin-top: 18px;
}

/* login/register */
#user-info .login-info {
  color: #fff;
  margin: 10px 0 0 10px;
}

#user-info .login-info .phone {
  position: relative;
  font-size: 14px;
  margin-top: 5px;
  margin-left: 15px;
  font-weight: 500;
}

#user-info .login-info .phone .icon-mobile {
  position: absolute;
  width: 12px;
  height: 18px;
  left: -15px;
  top: 0px;
  color: #fff;
}

/* 用户登录后的头像样式 */
.login-img {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
}

/* 登录页面 */
.login-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: -44px;
  left: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-box {
  width: 85%;
  padding: 40px 20px 30px 20px;
  background: linear-gradient(
    0deg,
    #395ecb 0%,
    #3657be 35%,
    #242161 85%,
    #1a0531 100%
  );
  text-align: center;
}
.login-box h3 {
  padding: 8px 0;
  font-size: 16px;
  color: #fff;
}
.login-wrapper .login-box form {
  text-align: center;
}
.login-wrapper .login-box input {
  height: 30px;
  width: 90%;
  margin: 5px 0;
  border-radius: 5px;
  padding: 0px 10px;
  font-size: 12px;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.4);
  color: aliceblue;
  border: 0px;
}
.login-wrapper .login-box input[type="button"] {
  border: 1px solid darksalmon;
  background-color: darksalmon;
  color: #fff;
  font-family: "微软雅黑";
}
.login-wrapper .login-box input[type="button"].blueBtn {
  background-color: #157ad6;
  border: 1px solid #157ad6;
}
</style>
