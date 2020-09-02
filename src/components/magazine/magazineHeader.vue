<!-- 这是杂志页面的头部的分类以及作者页面 -->
<template>
  <div class="magazine-header">
    <div class="magazine-header-top">
      <div
        class="header-classify"
        :class="{ active: isactive === 0 }"
        @click="sendIndex(0)"
      >
        <p>分类</p>
      </div>
      <div
        class="header-author"
        :class="{ active: isactive === 1 }"
        @click="sendIndex(1)"
      >
        <p>作者</p>
      </div>
      <div
        class="move-underline"
        :style="{ left: 92 + isactive * 164 + 'px', transition: 1 + 's' }"
      ></div>
    </div>
    <main>
      <section :style="{ left: -100 * isactive + 'vw', transition: 1 + 's' }">
        <div class="container-classify"></div>

        <div class="container-author"></div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    isactive() {
      return this.$store.state.magazine.index;
    },
  },
  methods: {
    sendIndex(i) {
      this.index = i;
      this.$store.commit("magazine/isactive", this.index);
    },
  },
};
</script>
<style lang="scss" scoped>
.magazine-header {
  width: 100%;
  height: calc(100vh - 39px);
  background: lightblue;
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
      justify-content: flex-end;
      padding-bottom: 9px;
    }
    .header-author {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-bottom: 9px;
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
    }
  }

  main {
    position: absolute;
    top: 66px;
    left: 0;
    right: 0;
    bottom: 100vh;
    overflow: hidden;
    section {
      position: absolute;
      display: flex;
      top: 0;
      flex-direction: row;
      height: 100%;
      .container-classify {
        height: 100%;
        width: 100vw;
        background: lightcoral;
      }
      .container-author {
        height: 100%;
        width: 100vw;
        background: lightcyan;
      }
    }
  }
}
</style>
