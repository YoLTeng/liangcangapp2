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

    <van-swipe
      class="my-swipe"
      :loop="false"
      :show-indicators="false"
      ref="changebanner"
    >
      <van-swipe-item>
        <div class="list-wrap">
          <ul>
            <li v-for="item in 10" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </van-swipe-item>
      <van-swipe-item>2asdasd</van-swipe-item>
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
          title: "家具",
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
        // {
        //   title: "餐厨",
        //   id: "5",
        // },
        // {
        //   title: "美食",
        //   id: "6",
        // },
        // {
        //   title: "服装",
        //   id: "7",
        // },
        // {
        //   title: "鞋包",
        //   id: "8",
        // },
      ],
      isActive: 0,
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
.shoplist {
  // 发现页tab切换
  .tabswitch {
    background: white;
    z-index: 2;
    position: fixed;
    top: 44px;
    left: 0;
    display: flex;
    width: 375px;
    height: 46px;
    border-bottom: 1px solid #e1e1e1;
    li {
      font-size: 15px;
      color: #999999;
      font-weight: PingFang-SC-Medium;
      height: 43px;
      line-height: 46px;
      margin: 0 16px 0 16px;
    }
    .active {
      color: #ff9180;
      border-bottom: 3px solid;
    }
  }
  .my-swipe .van-swipe-item {
    font-size: 20px;
    line-height: 150px;
    text-align: center;
  }
}
</style>
