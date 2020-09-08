<template>
  <div class="wish">
    <div class="wish-nav">
      <van-nav-bar title="我的心愿单" left-arrow @click-left="onClickLeft"/>
    </div>
    <div class="wish-list">
      <div class="item">demo</div>
      <div class="item">demo</div>
      <div class="item">demo</div>
      <div class="item">demo</div>
      <div class="item">demo</div>
      <div class="item">demo</div>
    </div>
  </div>
</template>
<script>
//使用辅助函数
//import {mapState} from "vuex"
export default {
  data() {
    return {};
  },
  mounted() {
    //在这里调用actions里的函数
    //例子:this.$store.dispatch("getBannerinfo")
  },
  methods:{
    onClickLeft() {
     this.$router.push("./mine");
    },
  },
  computed: {
    //在这里使用辅助函数获取state里的数据
    //例子 ...mapState(["baninfo"])
  },
};
</script>
<style lang="scss" scoped>
.wish {
  width: 375px;
  position: relative;
}
.wish .wish-nav {
  width: 100%;
  height: 41px;
  position: absolute;
  left: 0px;
  top: 0px;
}
.wish .wish-list {
  width: 362px;
  position: absolute;
  left: 6.5px;
  top: 54px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-content: center;
  align-content: center;
}
.wish .wish-list .item {
  background-color: #f1f1f1;
  width: 168px;
  height: 168px;
  margin: 6.5px;
}
</style>