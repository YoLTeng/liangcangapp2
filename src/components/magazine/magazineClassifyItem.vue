<!-- 这是杂志分类页面的组件 -->
<template>
  <div
    class="magazine-classify-item"
    :style="{ background: 'url(' + bg + ')', backgroundSize: '100%' }"
    @click="getClassify(item1)"
  >
    <p>{{item1}}</p>
  </div>
</template>

<script>
import bg from "../../assets/img/magazineImgs/t01.png";

export default {
  data() {
    return {
      bg: bg,
    };
  },
  props: ["item1"],
  methods: {
    getClassify(i) {
      this.$store.commit("magazine/ifmove");
      console.log(111);
      this.$store.commit("magazine/setAuthor", this.item1);
    },
  },
};
</script>
<style lang="scss" scoped>
.magazine-classify-item {
  width: 163px;
  height: 116px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 17px;
  p {
    font-size: 15px;
    color: #ffffff;
    letter-spacing: 1px;
  }
}
</style>
