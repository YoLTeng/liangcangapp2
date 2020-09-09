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
              <div
                class="magazine-classify-item"
                v-if="classifyMy"
                :style="{ background: 'url(' + classifyMy.pic + ')', backgroundSize: '100%' }"
              >
                <p>{{ classifyMy.name }}</p>
              </div>
              <div
                class="magazine-classify-item"
                v-if="classifyHead"
                :style="{ background: 'url(' + classifyHead.pic + ')', backgroundSize: '100%' }"
                @click="getClassify('')"
              >
                <p>{{ classifyHead.name }}</p>
              </div>
              <magazineClassifyItem
                v-for="(item, index) in classifyList"
                :key="index"
                :item1="item"
              />
            </div>
          </div>
        </van-swipe-item>

        <van-swipe-item>
          <div class="container-author">
            <div>
              <magazineAuthorItem v-for="(item, index) in authorList" :key="index" :item="item" />
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
      bScroll: "",
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
    classifyMy() {
      return this.$store.state.magazine.classifyList1[0];
    },
    classifyHead() {
      return this.$store.state.magazine.classifyList1[1];
    },
    classifyList() {
      return this.$store.state.magazine.classifyList1.slice(2);
    },
    authorList() {
      return this.$store.state.magazine.authorList1;
    },
  },
  watch: {
    authorList() {
      if (this.bScroll) {
        //重新计算高度
        this.bScroll.refresh();
        //当数据加载完毕以后通知better-scroll
        this.bScroll.finishPullUp();
      }
    },
    // classifyList
  },
  mounted() {
    // this.$store.dispatch("magazine/getMagazineClassify");
    // this.$store.dispatch("magazine/getMagazineAuthor");
    this.myscroll();
    // this.bScroll = new BScroll(".container-author", {
    //   // 滚动部分允许点击
    //   click: true,
    //   // 允许上拉加载
    //   pullUpLoad: true,
    // });
    // this.bScroll1 = new BScroll(".container-classify", {
    //   // 滚动部分允许点击
    //   click: true,
    //   // 允许上拉加载
    //   pullUpLoad: true,
    // });
    // console.log("scroll");
    // this.$nextTick(() => {
    //   this.bScroll.refresh();
    // });
    // this.bScroll.finishPullUp();
    // this.bScroll.refresh();
  },
  // updated() {
  //   //重新计算高度
  //   this.bScroll1.refresh();
  //   //当数据加载完毕以后通知better-scroll
  //   this.bScroll1.finishPullUp();
  // },
  methods: {
    async myscroll() {
      await this.$store.dispatch("magazine/getMagazineClassify");
      await this.$store.dispatch("magazine/getMagazineAuthor");
      this.$nextTick(() => {
        this.bScroll = new BScroll(".container-author", {
          // 滚动部分允许点击
          click: true,
          // 允许上拉加载
          pullUpLoad: true,
        });
        this.bScroll1 = new BScroll(".container-classify", {
          // 滚动部分允许点击
          click: true,
          // 允许上拉加载
          pullUpLoad: true,
        });
      });
    },
    sendIndex(i) {
      this.index = i;
      this.$store.commit("magazine/isactive", this.index);
      this.$refs.moveBox.swipeTo(i);
    },
    onChange(index) {
      this.index = index;
      this.$store.commit("magazine/isactive", this.index);
    },

    getClassify(i) {
      this.$store.commit("magazine/ifmove");
      console.log(111);
      this.$store.commit("magazine/setAuthor", i);
      this.$store.dispatch("magazine/getAllMagazine", {});
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
        .magazine-classify-item {
          width: 163px;
          height: 116px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 17px;
          background-size: 100%;
          p {
            font-size: 15px;
            color: #ffffff;
            letter-spacing: 1px;
          }
        }
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
