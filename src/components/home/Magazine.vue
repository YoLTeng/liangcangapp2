<template>
  <div class="magazine-wrap">
    <div class="magazine" :class="{ move: magmove }">
      <magazineHeader />
      <magazineContent />
    </div>
  </div>
</template>

<script>
//使用辅助函数
import { mapState } from "vuex";

import magazineHeader from "../magazine/magazineHeader";

import magazineContent from "../magazine/magazineContent";

export default {
  data() {
    return {};
  },
  components: {
    magazineHeader,
    magazineContent,
  },
  computed: {
    magmove() {
      return this.$store.state.magazine.moveMagazine;
    },
  },
  mounted() {
    //在这里调用actions里的函数
    //例子:this.$store.dispatch("getBannerinfo")
    if (
      this.$store.state.magazine.index ||
      this.$store.state.magazine.authorName
    ) {
      this.$store.commit("magazine/first");
    }
  },
  methods: {
    // aa() {
    //   console.log(this.$store.state.magazine.moveMagazine);
    // },
  },
};
</script>

<style lang="scss" scoped>
.magazine-wrap {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  .magazine {
    width: 100%;
    position: absolute;
    transition: 1s;
    top: calc(-100vh + 39px);
  }
  .move {
    transition: 1s;
    top: 0;
  }
}
</style>
