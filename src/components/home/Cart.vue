<template>
  <div class="cart">
    <!-- 购物车头部 -->
    <van-nav-bar
      title="购物车"
      right-text="编辑"
      @click-right="onClickRight"
      v-if="ed"
      :fixed="true"
      z-index="10"
    />
    <van-nav-bar
      title="购物车"
      right-text="完成"
      @click-right="onClickRight"
      v-else
      :fixed="true"
      z-index="10"
    />
    <!-- 商品列表 -->
    <div class="goodslist">
      <div class="goodwrap" v-for="(item,index) in arr" :key="item.id">
        <!-- 展示时的列表 -->
        <div class="goods" v-if="ed">
          <input
            type="checkbox"
            v-model="checkGroup"
            :value="item"
            class="goodsCheck"
            @change="checked"
          />
          <van-card
            :num="item.num"
            :price="item.price"
            desc="描述信息"
            :title="item.tit"
            :thumb="item.img"
            :origin-price="item.cost"
          />
        </div>
        <!-- 编辑时的列表 -->
        <div class="goodsEdit" v-else>
          <input type="checkbox" v-model="checkGroup" :value="item" class="goodsCheck" />
          <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
          <div class="goodsmsg">
            <div class="changenum">
              <span class="del" @click="del(item)">-</span>
              <em>{{item.num}}</em>
              <span class="num" @click="add(item)">+</span>
            </div>
            <div class="tit">{{item.tit}}</div>
            <div class="price">
              ￥
              <i>{{item.price}}</i>
              <span>
                ￥
                <i>{{item.cost}}</i>
              </span>
            </div>
          </div>
          <span class="shanchu" @click="shanchu(index)">删除</span>
        </div>
      </div>
      <!-- 提交订单栏 -->
      <van-submit-bar
        :price="getsum()*100"
        button-text="结算"
        @submit="onSubmit"
        button-color="#000"
        label="总价:"
      >
        <input type="checkbox" v-model="Allcheck" @change="allchange" />
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
      Allcheck: false,
      goodsnum: 2,
      // 编辑商品列表的标记
      ed: true,
      //单选框数组
      checkGroup: [],
      //复选框的数组
      arr: [
        {
          id: 1,
          img: "https://img.yzcdn.cn/vant/ipad.jpeg",
          tit: "鞋子",
          num: 1,
          price: 12,
          cost: 67,
        },
        {
          id: 2,
          img: "https://img.yzcdn.cn/vant/ipad.jpeg",
          tit: "帽子",
          num: 2,
          price: 15,
          cost: 19,
        },
        {
          id: 3,
          img: "https://img.yzcdn.cn/vant/ipad.jpeg",
          tit: "裤子",
          num: 3,
          price: 87,
          cost: 106,
        },
        {
          id: 4,
          img: "https://img.yzcdn.cn/vant/ipad.jpeg",
          tit: "袜子",
          num: 4,
          price: 6,
          cost: 9,
        },
      ],
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
      this.ed = !this.ed;
    },
    // 点击单选按钮时触发的方法
    getsum() {
      let sum = 0;
      for (var i in this.checkGroup) {
        sum += this.checkGroup[i].num * this.checkGroup[i].price;
      }
      return sum;
    },
    //点击单选按钮时触发
    checked() {
      if (this.checkGroup.length === this.arr.length) {
        this.Allcheck = true;
      } else {
        this.Allcheck = false;
      }
    },
    //点击全选按钮时触发的方法
    allchange() {
      if (this.Allcheck) {
        this.checkGroup = this.arr;
      } else {
        this.checkGroup = [];
      }
    },
    //点击减少数量按钮时
    del(item) {
      if (item.num == 1) {
        item.num == 1;
      } else {
        item.num--;
      }
    },
    //点击增加数量按钮时
    add(item) {
      item.num++;
    },
    //点击删除按钮时
    shanchu(index){
      console.log(1);
      this.arr.splice(index,1);
    },
    //点击结算按钮时触发
    onSubmit() {},
    //点击全选按钮时触发
  },
};
</script>

<style lang="scss" scoped>
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
    margin-top: 40px;
    .goodsEdit {
      margin-top: 8px;
      width: 100%;
      height: 128px;
      padding: 20px 35px;
      position: relative;
      display: flex;
      position: relative;
      background: #fafafa;
      .goodsCheck {
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
      .tit {
        width: 110px;
        margin-top: 6px;
        font-size: 14px;
      }
      .price {
        margin-top: 12px;
        font-size: 14px;
        color: #6296ce;
        font-weight: normal;
        span {
          text-decoration: line-through;
          margin-left: 6px;
          i {
            color: #999;
          }
        }
      }
      .shanchu {
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
    .goodsCheck {
      position: absolute;
      left: 10px;
      top: 50%;
      z-index: 10;
      border: 1px solid #000;
      border-radius: 50%;
    }
  }
}
</style>