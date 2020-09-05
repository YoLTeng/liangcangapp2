<template>
  <div class="shoplist">
    <!-- 头部 -->
    <van-nav-bar
      title="家居"
      fixed
      placeholder
      z-index="10"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 商品列表顶部tab切换 -->
    <div class="tabswitch">
      <ul>
        <li
          v-for="(item, index) in sidebarList"
          :key="index"
          @click="tabClick(index)"
          :class="{ active: index === isActive }"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>

    <!-- 商品内容 -->
    <van-swipe
      class="my-swipe"
      :loop="false"
      :show-indicators="false"
      ref="changebanner"
      @change="onChange"
    >
      <van-swipe-item v-for="item in 6" :key="item">
        <div class="list-wrap">
          <ul>
            <li v-for="item in 10" :key="item" @click="toDetails">
              <img src="../assets/findimg/img4.png" alt="" />
              <div class="shop-info">
                <p class="title">全身按摩床垫升级款</p>
                <p class="effect">升级颈椎揉捏加大热敷面积</p>
                <p class="sketch">颈部正反按摩 要被大面积热敷 海燕包赠送</p>
                <p class="price">￥999</p>
              </div>
            </li>
          </ul>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //顶部title数据
      sidebarList: [
        {
          title: "家具",
          id: "1",
        },
        {
          title: "文具",
          id: "2",
        },
        {
          title: "数码",
          id: "3",
        },
        {
          title: "玩乐",
          id: "4",
        },
        {
          title: "餐厨",
          id: "5",
        },
        {
          title: "美食",
          id: "6",
        },
        {
          title: "服装",
          id: "7",
        },
        {
          title: "鞋包",
          id: "8",
        },
      ],
      isActive: 0,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    //头部返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    //点击切换商品列表
    tabClick(i) {
      //自定义属性，跳转到下标i
      this.$refs.changebanner.swipeTo(i);
    },
    //左右滑动active样式跟着改变
    onChange(i) {
      this.isActive = i;
    },
    //点击跳转详情页
     toDetails(id){     
      this.$router.push('/details/' + 12)

    }
  },
};
</script>
<style lang="scss" scoped>
.shoplist {
  // 发现页tab切换
  .tabswitch {
    display: flex;
    width: 375px;
    height: 46px;
    ul {
      background: white;
      z-index: 2;
      position: fixed;
      top: 44px;
      left: 0;
      display: flex;
      white-space: nowrap;
      overflow: auto;
      width: 100%;
      border-bottom: 1px solid #e1e1e1;
      li {
        font-size: 15px;
        color: #999999;
        font-weight: PingFang-SC-Medium;
        height: 43px;
        width: 50px;
        line-height: 46px;
        margin: 0 16px 0 16px;
      }
      .active {
        color: #171717;
        border-bottom: 3px solid;
      }
    }
  }

  //商品列表
  .van-swipe {
    margin-top: 46px;
    .van-swipe-item {
      .list-wrap {
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 14px 17px 0 17px;
          li {
            height: 300px;
            width: 166px;
            background: #f0f0f0;
            margin-bottom: 7px;
            img {
              width: 166px;
              height: 165px;
            }
            .shop-info {
              width: 100%;
              height: 134px;
              display: flex;
              flex-direction: column;
              font-size: 11px;
              padding-left: 6px;
              .title {
                font-size: 13px;
                color: #1e1e1e;
                height: 20px;
                line-height: 34px;
              }
              .effect {
                height: 23px;
                line-height: 28px;
                color: #1e1e1e;
                font-weight: 400;
                margin-bottom: 5px;
              }
              .sketch {
                height: 34px;
                font-weight: 400;
                color: #939393;
                line-height: 17px;
              }
              .price {
                margin-top: 8px;
                font-size: 15px;
                font-family: PingFang SC;
                font-weight: 600;
                color: #7292bc;
              }
            }
          }
        }
      }
    }
  }
}
</style>
