<template>
  <div class="magazine-wrap">
    <div class="magazine" @click="aa" :class="{ move: magmove }">
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
      return this.$store.state.moveMagazine;
    },
  },
  mounted() {
    //在这里调用actions里的函数
    //例子:this.$store.dispatch("getBannerinfo")
  },
  methods: {
    aa() {
      console.log(this.$store.state.moveMagazine);
    },
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
  .magazine {
    width: 100%;
    position: absolute;
    transition: 1s;
    top: 0;
  }
  .move {
    transition: 1s;
    top: calc(-100vh + 100px);
  }
}
</style>
