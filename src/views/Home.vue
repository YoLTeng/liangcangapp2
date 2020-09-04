<template>
  <div class="home">
    <router-view></router-view>
    <!-- 底部按钮 -->
    <van-tabbar
      v-model="active"
      placeholder
      active-color="#000"
      inactive-color="#CBCBCB"
      route
      z-index="10"
      v-show="!ifdisplay"
    >
      <van-tabbar-item icon="bag" to="/shop">商店</van-tabbar-item>
      <van-tabbar-item icon="browsing-history" to="/find">发现</van-tabbar-item>
      <van-tabbar-item icon="column" to="/magazine">杂志</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to="/cart" badge="3"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="manager" to="/mine">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    ifdisplay() {
      return this.$store.state.magazine.moveMagazine;
    },
  },
};
</script>

<style lang="scss">
.van-info {
  color: #fff;
  background: #6e98c3;
}
</style>
