<!-- 这是杂志的内容显示页面 -->
<template>
  <div class="magazine-container">
    <div class="van-nav-bar">
      <div class="nav-bar-left">
        <span class="left-month" v-show="!ifshow">{{monthStr}}</span>
      </div>
      <div class="nav-bar-title">
        <p :class="{ 'after-style': ifshow }">杂志 {{authorName}}</p>
      </div>
      <div class="nav-bar-right" @click="moveMagazine">
        <van-icon name="wap-nav" color="#000" />
      </div>
    </div>
    <main>
      <div>
        <magazineContentItem v-for="item in monthList" :key="item" :item="item" ref="scroll" />
      </div>
    </main>
  </div>
</template>

<script>
import magazineContentItem from "../magazine/magazineContentItem";

import BScroll from "better-scroll";

export default {
  data() {
    return {
      index: 0,
      monthStr: this.$store.state.magazine.monthList[0],
    };
  },
  components: {
    magazineContentItem,
  },
  computed: {
    ifshow() {
      return this.$store.state.magazine.moveMagazine;
    },

    authorName() {
      return this.$store.state.magazine.authorName;
    },

    monthList() {
      return this.$store.state.magazine.monthList;
    },
  },
  mounted() {
    this.$nextTick(() => {
      let bScroll = new BScroll(".magazine-container main", {
        // 滚动部分允许点击
        click: true,
        // 允许上拉加载
        pullUpLoad: true,
      });
      bScroll.on("scroll", (a) => {
        let index = parseInt(-a.y / 250) <= 0 ? 0 : parseInt(-a.y / 250);
        // console.log(index);
        this.monthStr = this.$store.state.magazine.monthList[index];
        console.log(this.monthStr);

        // console.log(a.y);
      });
    });
  },
  methods: {
    moveMagazine() {
      this.$store.commit("magazine/ifmove");
    },
    scrolltop() {
      console.log(111);
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
      position: absolute;
      top: 50%;
      left: 50%;
      // margin: auto;
      // width: 240px;
      transform: translate(-50%, -50%);
      // transform: translateY(-50%);
      p {
        // position: relative;
        &::after {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 5px 3px 5px;
          border-color: #000 transparent transparent;
          position: absolute;
          right: -12px;
          top: 10px;
        }
      }
      .after-style {
        position: relative;
        &::after {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 5px 3px 5px;
          border-color: transparent transparent #000;
          position: absolute;
          right: -12px;
          top: 3px;
        }
      }
    }
    .nav-bar-right {
      font-size: 12px;
      .van-icon {
        position: static;
        font-size: 14px;
      }
    }
  }
  main {
    position: absolute;
    top: 39px;
    left: 0px;
    right: 0px;
    bottom: 50px;
    overflow: hidden;
  }
}
</style>
