<template>
  <div class="mini">
    <!--上半部-->
    <div class="top">
      <div class="top-box1">
        <div class="top-box1-font">
          <p>我的账户</p>
        </div>
        <div class="top-box1-btn">
          <button>
            <img src="../../assets/img/mini/mini-top-box1-btn.png" alt />
          </button>
        </div>
      </div>
      <div class="top-box2">
        <div class="top-box2-logo">
          <img src="../../assets/img/mini/mini-top-box2-logo.png" alt />
        </div>
      </div>
      <div class="top-box3">
        <div class="top-box3-btn">
          <van-button type="default">
            <p>注册|登录</p>
          </van-button>
        </div>
      </div>
      <div class="top-box4">
        <div class="top-box4-btn1">
          <van-button type="default">
            <p>我的订单</p>
          </van-button>
        </div>
        <div class="top-box4-btn2">
          <van-button type="default">
            <p>我的红包</p>
          </van-button>
        </div>
      </div>
    </div>
    <!--下半部-->
    <div class="foot">
      <div class="foot-box1">
        <button class="foot-box1-btn">
          <div class="foot-box1-btn-img">
            <img src="../../assets/img/mini/mini-foot-box1-btn.png" alt />
          </div>
          <div class="foot-box1-btn-font">
            <p>我的心愿单</p>
          </div>
        </button>
      </div>
      <div class="foot-box2">
        <button class="foot-box2-btn">
          <div class="foot-box2-btn-img">
            <img src="../../assets/img/mini/mini-foot-box2-btn.png" alt />
          </div>
          <div class="foot-box2-btn-font">
            <p>我的消息</p>
          </div>
        </button>
      </div>
      <div class="foot-box3">
        <button class="foot-box3-btn">
          <div class="foot-box3-btn-img">
            <img src="../../assets/img/mini/mini-foot-box3-btn.png" alt />
          </div>
          <div class="foot-box3-btn-font">
            <p>地址管理</p>
          </div>
        </button>
      </div>
      <div class="foot-box4">
        <button class="foot-box4-btn">
          <div class="foot-box4-btn-img">
            <img src="../../assets/img/mini/mini-foot-box4-btn.png" alt />
          </div>
          <div class="foot-box4-btn-font">
            <p>良仓客服</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Image as VanImage, Button, Icon } from "vant";
Vue.use(VanImage);
Vue.use(Button);
Vue.use(Icon);
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
  computed: {
    //在这里使用辅助函数获取state里的数据
    //例子 ...mapState(["baninfo"])
  },
};
</script>
<style lang="scss" scoped>
.mini {
  width: 375px;
  //height: 811px;
}
.top {
  width: 100%;
  height: 262px;
  display: flex;
  flex-direction: column;
  background: pink;
}
.top .top-box1 {
  width: 100%;
  height: 19px;
  position: relative;
}
.top .top-box1 .top-box1-font {
  position: absolute;
  left: 154px;
  top: 13px;
}
.top .top-box1 .top-box1-font p {
  font-size: 16px;
  color: white;
}
.top .top-box1 .top-box1-btn {
  position: absolute;
  left: 339px;
  top: 13px;
}
.top .top-box1 .top-box1-btn button {
  border: none;
  background: transparent;
}
.top .top-box2 {
  width: 100%;
  height: 125px;
  position: relative;
}
.top .top-box2 .top-box2-logo {
  position: absolute;
  left: 152px;
  top: 26px;
}
.top .top-box3 {
  width: 100%;
  height: 38px;
  position: relative;
}
.top .top-box3 .top-box3-btn {
  position: absolute;
  left: 132px;
}
.top .top-box3 .top-box3-btn .van-button {
  width: 110px;
  height: 38px;
}
.top .top-box3 .top-box3-btn .van-button--default {
  background: #7797bf;
}
.top .top-box3 .top-box3-btn .van-button--normal {
  color: white;
}
.top .top-box4 {
  width: 100%;
  height: 82px;
  position: relative;
}
.top .top-box4 .van-button {
  width: 167px;
  height: 36px;
}
.top .top-box4 .van-button--default {
  background: transparent;
}
.top .top-box4 .van-button--normal {
  color: white;
}
.top .top-box4 .top-box4-btn1 {
  position: absolute;
  left: 14px;
  top: 24px;
}
.top .top-box4 .top-box4-btn2 {
  position: absolute;
  left: 194px;
  top: 24px;
}
.foot {
  width: 100%;
  position: relative;
}
.foot .foot-box1 {
  position: absolute;
  left: 61px;
  top: 80px;
}
.foot .foot-box1 .foot-box1-btn {
  width: 65px;
  height: 68px;
  border: none;
  background: transparent;
  position: relative;
}
.foot .foot-box1 .foot-box1-btn .foot-box1-btn-img {
  width: 23px;
  height: 22px;
  position: absolute;
  left: 21px;
  top: 0px;
}
.foot .foot-box1 .foot-box1-btn .foot-box1-btn-font {
  position: absolute;
  left: 0px;
  top: 56px;
}
.foot .foot-box1 .foot-box1-btn .foot-box1-btn-font p {
  font-size: 12px;
}
.foot .foot-box2 {
  position: absolute;
  left: 255px;
  top: 80px;
}
.foot .foot-box2 .foot-box2-btn {
  width: 52px;
  height: 68px;
  border: none;
  background: transparent;
  position: relative;
}
.foot .foot-box2 .foot-box2-btn .foot-box2-btn-img {
  width: 19px;
  height: 22px;
  position: absolute;
  left: 16px;
  top: 0px;
}
.foot .foot-box2 .foot-box2-btn .foot-box2-btn-font {
  position: absolute;
  left: 0px;
  top: 56px;
}
.foot .foot-box2 .foot-box2-btn .foot-box2-btn-font p {
  font-size: 12px;
}
.foot .foot-box3 {
  position: absolute;
  left: 61px;
  top: 224px;
}
.foot .foot-box3 .foot-box3-btn {
  width: 52px;
  height: 73px;
  border: none;
  background: transparent;
  position: relative;
}
.foot .foot-box3 .foot-box3-btn .foot-box3-btn-img {
  width: 17px;
  height: 23px;
  position: absolute;
  left: 17px;
  top: 0px;
}
.foot .foot-box3 .foot-box3-btn .foot-box3-btn-font {
  position: absolute;
  left: 0px;
  top: 57px;
}
.foot .foot-box3 .foot-box3-btn .foot-box3-btn-font p {
  font-size: 12px;
}
.foot .foot-box4 {
  position: absolute;
  left: 255px;
  top: 224px;
}
.foot .foot-box4 .foot-box4-btn {
  width: 50px;
  height: 69px;
  border: none;
  background: transparent;
  position: relative;
}
.foot .foot-box4 .foot-box4-btn .foot-box4-btn-img {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 13px;
  top: 0px;
}
.foot .foot-box4 .foot-box4-btn .foot-box4-btn-font {
  position: absolute;
  left: 0px;
  top: 57px;
}
.foot .foot-box4 .foot-box4-btn .foot-box4-btn-font p {
  font-size: 12px;
}
</style>