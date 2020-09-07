<!-- 这是杂志的作者分类页面 -->
<template>
  <div class="magazine-author-item" @click="getAuthor(item)">
    <div class="author-pic">
      <img :src="imgauthor" alt />
    </div>
    <div class="author-text">
      <p class="author-title">{{item}}</p>
      <p class="author-introduce">生活美学指南</p>
    </div>
  </div>
</template>

<script>
import imgauthor from "../../assets/img/magazineImgs/a01.png";

export default {
  data() {
    return {
      imgauthor: imgauthor,
    };
  },
  props: ["item"],
  methods: {
    getAuthor(i) {
      this.$store.commit("magazine/ifmove");
      console.log(111);
      this.$store.commit("magazine/setAuthor", this.item);
    },
  },
};
</script>
<style lang="scss" scoped>
.magazine-author-item {
  height: 88px;
  width: calc(100% - 16px);
  margin-left: 16px;
  padding-top: 31px;
  padding-bottom: 11px;
  display: flex;
  background: #efefef;
  border-bottom: 1px solid #cfd2d5;
  &:nth-child(1) {
    height: 68px;
    padding-top: 11px;
  }
  .author-pic {
    width: 45px;
    height: 45px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .author-text {
    flex: 1;
    padding-left: 7px;
    padding-top: 9px;
    padding-bottom: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .author-title {
      font-size: 11px;
      color: #1f1f1f;
    }
    .author-introduce {
      font-size: 15px;
      color: #939393;
    }
  }
}
</style>
