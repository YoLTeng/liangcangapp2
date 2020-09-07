<template>
  <div class="brand">
    <div class="brand-list" v-for="index in 10" :key="index"
    @click="toBrandStory(index)">
      <img
        src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
        alt=""
      />
      <van-cell title="品牌名" size="large" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    //跳转到商品
    toBrandStory(id){     
      this.$router.push('/brandstory/' + id)

    }
  },
};
</script>
<style lang="scss" scoped>
.brand {
  .brand-list {
    display: flex;
    height: 80px;
    padding-left: 30px;
    padding-right: 16px;
    align-items: center;

    box-shadow: 0px 1px 0px 0px #f2f2f2;
    img {
      width: 56px;
      height: 56px;
    }
    .van-cell {
      height: 98%;
      align-items: center;
      padding-left: 22px;
    }
  }
}
</style>
