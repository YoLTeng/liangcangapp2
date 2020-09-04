<template>
  <div class="orderform">
    <div class="orderform-top">
      <van-nav-bar title="我的订单" right-text="客服" left-arrow />
    </div>
    <div>
      <van-tabs v-model="active">
        <van-tab title="全部">全部</van-tab>
        <van-tab title="待付款">待付款</van-tab>
        <van-tab title="待发货">待发货</van-tab>
        <van-tab title="已发货">已发货</van-tab>
        <van-tab title="待评价">待评价</van-tab>
        <van-tab title="售后">售后</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Image as VanImage, Button, Icon, NavBar, Tab, Tabs } from "vant";
Vue.use(VanImage);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
//使用辅助函数
//import {mapState} from "vuex"
export default {
  data() {
    return { active: 2 };
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
.orderform {
  width: 375px;
  height: 811px;
  background: pink;
  position: relative;
}
</style>