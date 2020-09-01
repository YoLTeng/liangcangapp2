<!-- 这是杂志的内容显示页面 -->
<template>
  <div class="magazine-container">
    <div class="van-nav-bar">
      <div class="nav-bar-left">
        <span class="left-month">JUL.27</span>
      </div>
      <div class="nav-bar-title">
        <p>杂志</p>
      </div>
      <div class="nav-bar-right" @click="moveMagazine">
        <van-icon name="wap-nav" size="14" />
      </div>
    </div>
    <main>
      <div>
        <magazineContentItem v-for="item in 9" :key="item" />
      </div>
    </main>
  </div>
</template>

<script>
import magazineContentItem from "../magazine/magazineContentItem";

import BScroll from "better-scroll";

export default {
  data() {
    return {};
  },
  components: {
    magazineContentItem,
  },
  mounted() {
    let bScroll = new BScroll("main", {
      // 滚动部分允许点击
      click: true,
      // 允许上拉加载
      pullUpLoad: true,
    });
  },
  methods: {
    moveMagazine() {
      this.$store.commit("ifmove");
    },
  },
};
</script>
<style lang="scss" scoped>
.magazine-container {
  width: 100%;
  height: 100vh;
  position: relative;
  .van-nav-bar {
    height: 39px;
    padding: 15px 12px 10px;
    display: flex;
    justify-content: space-between;
    color: #000;
    font-family: PingFangSC-Light;
    background: #ffffff;
    position: relative;
    z-index: 1;
    // border-bottom: 1px solid #000;
    .nav-bar-left {
      font-size: 12px;
    }
    .nav-bar-title {
      font-size: 14px;
      p {
        position: relative;
        &::after {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 5px 3px 5px;
          border-color: #000 transparent transparent;
          position: absolute;
          right: -12px;
          top: 6px;
        }
      }
    }
    .nav-bar-right {
      font-size: 12px;
      .van-icon {
        position: static;
      }
    }
  }
  main {
    position: absolute;
    top: 29px;
    left: 0px;
    right: 0px;
    bottom: 50px;
    overflow: hidden;
  }
}
</style>
