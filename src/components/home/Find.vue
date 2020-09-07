<template>
  <div class="find">
    <!-- 搜索栏 -->
    <van-search
      v-model="value"
      placeholder="搜索商品、品牌"
      input-align="center"
    />
    <!-- 商店-品牌 -->
    <van-tabs
      v-model="active"
      title-active-color="#000"
      title-inactive-color="#666"
      color="#000"
    
    >
      <!-- 商店 -->
      <van-tab title="商店" to=""  class="shop-brand">
        <findshop></findshop>
      </van-tab>

      <van-tab title="品牌">
        <findBrand/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
//引入组件
import findshop from "../find/shop";
import findBrand from "../find/brand";

//使用辅助函数
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: "",
      active: 0, //商品品牌默认下标
    };
  },
  //组件
  components: {
    findshop,
    findBrand
  },
  mounted() {
    //在这里调用actions里的函数
    //例子:this.$store.dispatch("getBannerinfo")
  },
  computed: {
    //在这里使用辅助函数获取state里的数据
    //例子 ...mapState(["baninfo"])
  },
  methods: {
    // //点击左侧切换数据
    // tabChange(id) {
    //   this.type = id;
    //   //    this.$store.dispatch("getClassifyList2", {
    //   //   type: this.type,
    //   // });
    //   console.log(this.classifyList);
    // },
  },
};
</script>
<style lang="scss" scoped>
.find {
  //顶部搜索
  .van-search__content {
    background: #f2f0f3ff;
    height: 30px;
  
  }
  
}
</style>
