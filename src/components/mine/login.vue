<template>
  <div class="login">
    <div class="login-box1">
      <button class="login-box1-btn" @click="back">
        <p>X</p>
      </button>
    </div>
    <div class="login-box2">
      <img src="../../assets/img/login/login-box2-logo.png" alt />
    </div>
    <div class="login-box3">
      <div class="login-box3-font">
        <p>手机登录</p>
      </div>
    </div>
    <div class="login-box4">
      <van-field type="tel" placeholder="请输入手机号" input-align="left" />
    </div>
    <div class="login-box5">
      <button class="login-box5-btn">
        <img src="../../assets/img/login/login-box5-btn.png" alt />
      </button>
    </div>
    <div class="login-box6">
      <van-field type="tel" placeholder="6位验证码" input-align="left" />
    </div>
    <div class="login-box7">
      <div class="login-box7-font">
        <p>登录即表示您同意 良仓用户协议 和 隐私政策</p>
      </div>
    </div>
    <div class="login-box8">
      <button class="login-box8-btn">
        <img src="../../assets/img/login/login-box8-btn.png" alt />
      </button>
    </div>
    <div class="login-box9">
      <div class="login-box9-font">
        <p>——首次登录自动创建良仓账户——</p>
      </div>
    </div>
    <div class="login-box10">
      <div class="login-box10-font">
        <p>已有账号登录 ></p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Image as VanImage, Button, Icon, Field } from "vant";
Vue.use(VanImage);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Field);
//使用辅助函数
//import {mapState} from "vuex"
export default {
  data() {
    return {};
  },
  mounted() {
    //在这里调用actions里的函数
    //例子:this.$store.dispatch("getBannerinfo")
  },
  methods: {
    back() {
      this.$router.push("./mine");
    },
  },
  computed: {
    //在这里使用辅助函数获取state里的数据
    //例子 ...mapState(["baninfo"])
  },
};
document.body.addEventListener(
  "touchmove",
  function (e) {
    e.preventDefault();
    e.stopPropagation();
  },
  { passive: false }
);
</script>
<style lang="scss" scoped>
.login {
  width: 375px;
  height: 667px;
  position: relative;
  background: url(../../assets/img/login/login-background.png);
}
.login .login-box1 .login-box1-btn {
  width: 18px;
  height: 18px;
  background: transparent;
  border: none;
  position: absolute;
  left: 338px;
  top: 29px;
}
.login .login-box1 .login-box1-btn p {
  color: red;
}
.login .login-box2 {
  width: 129px;
  height: 57px;
  position: absolute;
  left: 123px;
  top: 73px;
}
.login .login-box3 {
  width: 55px;
  height: 14px;
  position: absolute;
  left: 160px;
  top: 148px;
}
.login .login-box3 .login-box3-font p {
  font-size: 13px;
  color: white;
}
.login .login-box4 {
  widows: 190px;
  height: 38px;
  position: absolute;
  left: 28px;
  top: 191px;
}
.login .login-box4 .van-cell {
  background: transparent;
}
.login .login-box5 {
  width: 115px;
  height: 38px;
  position: absolute;
  left: 232px;
  top: 191px;
}
.login .login-box5 .login-box5-btn {
  background: transparent;
  border: none;
}
.login .login-box6 {
  widows: 319px;
  height: 24px;
  position: absolute;
  left: 28px;
  top: 257px;
}
.login .login-box6 .van-cell {
  background: transparent;
}
.login .login-box7 {
  width: 274px;
  height: 13px;
  position: absolute;
  left: 28px;
  top: 334px;
}
.login .login-box7 .login-box7-font p {
  font-size: 13px;
  color: white;
}
.login .login-box8 {
  width: 319px;
  height: 53px;
  position: absolute;
  left: 18px;
  top: 363px;
}
.login .login-box8 .login-box8-btn {
  background: transparent;
  border: none;
}
.login .login-box9 {
  width: 241px;
  height: 11px;
  position: absolute;
  left: 68px;
  top: 448px;
}
.login .login-box9 .login-box9-font p {
  font-size: 11px;
  color: white;
}
.login .login-box10 {
  width: 89px;
  height: 12px;
  position: absolute;
  left: 143px;
  top: 710px;
}
.login .login-box10 .login-box10-font p {
  font-size: 12px;
  color: white;
}
</style>