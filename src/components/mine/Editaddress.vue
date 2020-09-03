<template>
  <div class="editaddress">
    <!-- 顶部 -->
    <van-nav-bar title="编辑收货地址" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>


<style lang="scss">
.van-nav-bar {
  .van-icon-arrow-left {
    color: #000;
  }
}
</style>