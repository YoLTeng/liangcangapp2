<template>
  <div class="cart">
    <!-- 购物车头部 -->
    <van-nav-bar title="购物车" right-text="编辑" @click-right="onClickRight" />
    <!-- 商品列表 -->
    
    <div class="goodslist">
      <!-- 展示时的列表 -->
      <div class="goods">
        <van-checkbox v-model="checked"></van-checkbox>
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          origin-price="80"
        />
      </div>
      <!-- 编辑时的列表 -->
      <div class="goodsEdit"> 
        1
      </div>


      <!-- 提交订单栏 -->
      <van-submit-bar
        :price="3050"
        button-text="结算"
        @submit="onSubmit"
        button-color="#000"
        label="总价:"
      >
        <van-checkbox v-model="checked" shape="square">全选</van-checkbox>
      </van-submit-bar>
    </div>

    
  </div>
</template>

<script>
//使用辅助函数
import { mapState } from "vuex";
export default {
  data() {
    return {
      //复选框默认值
      checked: false,
    };
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
    //点击编辑按钮时触发
    onClickRight() {},
    //点击结算按钮时触发
    onSubmit() {},
  },
};
</script>

<style lang="scss" scope>
.cart {
  .van-submit-bar__bar {
    width: 100%;
    height: 58px;
    padding-right: 0;
    display: flex;
  }
  .van-nav-bar__title {
    font-size: 16px;
    color: #2a2a2a;
  }
  .van-nav-bar__text {
    font-size: 14px;
    color: #698bb8;
  }
  .van-checkbox__label {
    font-size: 17px;
    text-indent: 15px;
    color: #1f1f1f;
  }
  .van-submit-bar {
    margin-bottom: 46px;
  }
  .van-button {
    border-radius: 0;
    height: 58px;
  }
  .van-submit-bar__text {
    text-align: left;
    padding-left: 20px;
  }
  .van-submit-bar__price {
    color: #7797bf;
    font-size: 17px;
  }
  .van-submit-bar__price {
    margin-left: 4px;
  }
  .van-card {
    padding: 20px 35px;
  }
  .goodslist {
    padding-bottom: 58px;
  }
  .goods {
    position: relative;
    .van-checkbox {
      position: absolute;
      left: 10px;
      top: 50%;
      z-index: 10;
    }
  }
  .goodsEdit{
    width: 100%;
    height: 128px;
    background: lightblue;
  }
}
</style>