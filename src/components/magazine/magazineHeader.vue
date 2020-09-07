<!-- 这是杂志页面的头部的分类以及作者页面 -->
<template>
  <div class="magazine-header">
    <div class="magazine-header-top">
      <div class="header-classify" :class="{ active: isactive === 0 }" @click="sendIndex(0)">
        <div class="classify-img" :class="{ iffocus: isactive === 0 }"></div>
        <p>分类</p>
      </div>
      <div class="header-author" :class="{ active: isactive === 1 }" @click="sendIndex(1)">
        <div class="author-img" :class="{ iffocus: isactive === 1 }"></div>
        <p>作者</p>
      </div>
      <div class="move-underline" :class="{ 'underline-move': isactive }"></div>
    </div>
    <main>
      <!-- <section :style="{ left: -100 * isactive + 'vw', transition: 1 + 's' }"> -->
      <van-swipe
        id="van-move"
        class="my-swipe"
        autoplay="false"
        :loop="false"
        indicator-color="white"
        @change="onChange"
        :class="{ 'van-move': isactive }"
        height="100%"
        ref="moveBox"
        :show-indicators="false"
        :stop-propagation="false"
      >
        <van-swipe-item>
          <div class="container-classify">
            <div>
              <magazineClassifyItem v-for="item in classifyList" :key="item" :item1="item" />
            </div>
          </div>
        </van-swipe-item>

        <van-swipe-item>
          <div class="container-author">
            <div>
              <magazineAuthorItem v-for="item in authorList" :key="item" :item="item" />
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
      <!-- </section> -->
    </main>
  </div>
</template>

<script>
import magazineAuthorItem from "./magazineAuthorItem";

import magazineClassifyItem from "./magazineClassifyItem";

import xuebi from "../../assets/img/magazineImgs/magazinexuebitu.png";

import BScroll from "better-scroll";

export default {
  data() {
    return {
      xuebi: xuebi,
      index: 0,
      authorList: this.$store.state.magazine.authorList,
      classifyList: this.$store.state.magazine.classifyList,
    };
  },
  components: {
    magazineAuthorItem,
    magazineClassifyItem,
  },
  computed: {
    isactive() {
      return this.$store.state.magazine.index;
    },
  },
  mounted() {
    let bScroll = new BScroll(".container-author ", {
      // 滚动部分允许点击
      click: true,
      // 允许上拉加载
      pullUpLoad: true,
    });
    let bScroll1 = new BScroll(".container-classify", {
      // 滚动部分允许点击
      click: true,
      // 允许上拉加载
      pullUpLoad: true,
    });
  },
  methods: {
    sendIndex(i) {
      this.index = i;
      this.$store.commit("magazine/isactive", this.index);
      this.$refs.moveBox.swipeTo(i);
    },
    onChange(index) {
      this.index = index;
      this.$store.commit("magazine/isactive", this.index);
    },
  },
};
</script>
<style lang="scss" scoped>
.magazine-header {
  width: 100%;
  height: calc(100vh - 39px);
  // background: lightblue;
  .magazine-header-top {
    width: 100%;
    height: 66px;
    background: #ecedf2;
    padding: 0 90px;
    display: flex;
    justify-content: space-between;
    position: relative;
    color: #9b9da1;
    font-size: 14px;
    letter-spacing: 2px;
    .header-classify {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding-top: 15px;
      padding-bottom: 9px;
      .classify-img {
        width: 16px;
        height: 16px;
        background: url(../../assets/img/magazineImgs/magazinexuebitu.png)
          no-repeat;
        background-size: 150%;
        background-position: -6px -3px;
      }
      .iffocus {
        background-position: -6px -25px;
      }
    }
    .header-author {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding-top: 15px;
      padding-bottom: 9px;
      .author-img {
        width: 16px;
        height: 16px;
        background: url(../../assets/img/magazineImgs/magazinexuebitu.png)
          no-repeat;
        background-size: 150%;
        background-position: -6px -53px;
      }
      .iffocus {
        background-position: -6px -75px;
      }
    }

    .active {
      color: #000;
    }

    .move-underline {
      position: absolute;
      bottom: 0;
      left: 92px;
      width: 24px;
      height: 2px;
      background: #ddd1d7;
      transition: 1s;
    }
    .underline-move {
      left: 256px;
    }
  }

  main {
    position: absolute;
    top: 66px;
    left: 0;
    right: 0;
    bottom: 100vh;
    overflow: hidden;
    .container-classify {
      position: absolute;
      height: 100%;
      width: 100vw;
      background: #efefef;
      z-index: 9999;
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 20px 0 17px;
      }
    }
    .container-author {
      position: absolute;
      height: 100%;
      width: 100vw;
      // background: lightcyan;
      background: #efefef;
    }
    #van-move {
      // height: 100px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      .van-swipe-item {
        height: 100%;
      }
    }
  }
}
</style>
