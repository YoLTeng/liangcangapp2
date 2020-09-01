<template>
  <div class="home">
    <router-view></router-view>
    <!-- 底部按钮 -->
    <van-tabbar v-model="active" placeholder active-color="#FF7F2A" inactive-color="#000" route z-index="10">
     <van-tabbar-item
        v-for="(value,index) in btns"
        :key="index"
        :icon="value.icon"
        :to="value.to"
      >{{value.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      btns: [
        {
          icon: "home-o",
          text: "商店",
          to: "/shop"
        },
        {
          icon: "search",
          text: "发现",
          to: "/find"
        },
        {
          icon: "friends-o",
          text: " 杂志",
          to: "/magazine"
        },
         {
          icon: "friends-o",
          text: "购物车",
          to: "/cart"
        },
        {
          icon: "setting-o",
          text: "个人",
          to: "/mine"
        }
      ]
    };
  }
}
</script>