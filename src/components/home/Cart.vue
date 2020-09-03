<template>
  <div class="cart">
    <!-- 购物车头部 -->
    <van-nav-bar title="购物车" right-text="编辑" @click-right="onClickRight" v-if="ed"/>
    <van-nav-bar title="购物车" right-text="完成" @click-right="onClickRight" v-else/>
    <!-- 商品列表 -->
    <div class="goodslist">
      <!-- 展示时的列表 -->
      <div class="goods" v-if="ed">
        <van-checkbox v-model="checked"></van-checkbox>
        <van-card
          :num="num"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          origin-price="80"
        />
      </div>
      <!-- 编辑时的列表 -->
      <div class="goodsEdit" v-else>
        <van-checkbox v-model="checked"></van-checkbox>
        <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
        <div class="goodsmsg">
          <div class="changenum">
            <span class="del" @click="del()">-</span>
            <em>{{goodsnum}}</em>
            <span class="num" @click="add()">+</span>
          </div>
          <div class="tit van-ellipsis">鞋子鞋子ewewewewewew</div>
          <div class="price">￥<i>333</i><span>￥<i>333</i></span></div>
        </div>
        <span class="shanchu">
          删除
        </span>
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
      // 编辑商品列表的标记
      ed:true,
      //商品数量
      goodsnum:33,
      //展示页商品数量
      num:3
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
    onClickRight() {
      this.ed = !this.ed
    },
    //点击减少数量按钮时
    del(){
      this.goodsnum--
    },
    //点击增加数量按钮时
    add(){
      this.goodsnum++
    },
    //点击结算按钮时触发
    onSubmit() {},
  },
};
</script>

<style lang="scss" scope>
.cart {
  width: 100%;
  height: 100%;
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
    margin-bottom: 50px;
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
    .goodsEdit {
      margin-top: 8px;
      width: 100%;
      height: 128px;
      padding: 20px 35px;
      position: relative;
      display: flex;
      position: relative;
      background: #FAFAFA;
      .van-checkbox {
        position: absolute;
        left: 10px;
        top: 50%;
        z-index: 10;
      }
      img {
        width: 88px;
        height: 88px;
      }
      .changenum {
        width: 140px;
        height: 40px;
        font-size: 24px;
        display: flex;
        align-items: center;
        span {
          width: 23px;
          height: 23px;
          line-height: 23px;
          text-align: center;
          color: #fff;
          background: #000;
          font-size: 18px;
        }
        em {
          width: 26px;
          height: 26px;
          border: 1px solid #999;
          font-size: 12px;
          font-weight: normal;
          line-height: 28px;
          text-align: center;
          margin: 0 16px;
        }
      }
      .tit{
        width: 110px;
        margin-top: 6px;
        font-size: 14px;
      }
      .price{
        margin-top: 12px;
        font-size: 14px;
        color: #6296CE;
        font-weight: normal;
        span{
            text-decoration: line-through;
            margin-left: 6px;
          i{
            color: #999;
          }
        }
      }
      .shanchu{
        font-size: 18px;
        height: 88px;
        position: absolute;
        right: 1px;
        line-height: 88px;
        width: 50px;
        text-align: center;
        background: crimson;
        color: #fff;
      }
    }
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
}
</style>