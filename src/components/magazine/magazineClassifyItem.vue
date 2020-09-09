<!-- 这是杂志分类页面的组件 -->
<template>
  <div
    class="magazine-classify-item"
    :style="{ background: 'url(' + item1.pic + ')', backgroundSize: '100%' }"
    @click="getClassify(item1.name)"
  >
    <p>{{ item1.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["item1"],
  methods: {
    getClassify(i) {
      this.$store.commit("magazine/ifmove");
      console.log(111);
      this.$store.commit("magazine/setAuthor", i);
      this.$store.dispatch("magazine/getAllMagazine", {
        typeId: this.item1.id,
      });
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
