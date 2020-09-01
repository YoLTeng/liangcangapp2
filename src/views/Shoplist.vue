<template>
  <div class="shoplist">
    <!-- 头部 -->
    <van-nav-bar
      title="家居"
      fixed
      placeholder
      z-index="10"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 商品列表顶部tab切换 -->
    <ul class="tabswitch">
      <li
        v-for="(item, index) in sidebarList"
        :key="index"
        @click="tabClick(index)"
        :class="{ active: index === isActive }"
      >
        {{ item.title }}
      </li>
    </ul>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //顶部title数据
      sidebarList: [
        {
          title: "家居",
          id: "1",
        },
        {
          title: "文具",
          id: "2",
        },
        {
          title: "数码",
          id: "3",
        },
        {
          title: "玩乐",
          id: "4",
        },
        {
          title: "餐厨",
          id: "5",
        },
        {
          title: "美食",
          id: "6",
        },
        {
          title: "服装",
          id: "7",
        },
        {
          title: "鞋包",
          id: "8",
        },
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    //头部返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    //点击切换商品列表
    tabClick(i) {
      this.isActive = i;
      this.$refs.changebanner.swipeTo(i);
    },
  },
};
</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
