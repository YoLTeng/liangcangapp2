<template>
  <div class="brandstoty">
    <!-- 头部 -->
    <van-nav-bar
      title="品牌产品 "
      fixed
      placeholder
      z-index="10"
      left-arrow
      @click-left="onClickLeft"
    />
    <main>
      <div class="banner">
        <img src="../assets/findimg/img1.png" alt="" />
      </div>
      <van-tabs
        v-model="active"
        background="#999999"
        title-active-color="#000"
        title-inactive-color="#fff"
        color="#999999"
      >
        <van-tab title="品牌故事">
          <div class="story">
            1992年，第一台以ThinkPad命名的笔记本电脑诞生，ThinkPad自问世以来一直保持着黑色的经典外观，并对技术有着独到的见解。
            ThinkPad自诞生之日起，就将”思考“融入血液，流淌在每一丝细节中。这种思考的精神，与梵高、海明威、毕加索源同一脉。正是偏执地坚持着这种”从不止于想“的品牌理念，我们见到了一代又一代经典机型。
          </div>
        </van-tab>
        <van-tab title="品牌产品">
          <ul >
            <li v-for="item in 4" :key="item">
              <img src="../assets/findimg/img4.png" alt="" />
              <div class="shop-info">
                <p class="title">全身按摩床垫升级款</p>
                <p class="effect">升级颈椎揉捏加大热敷面积</p>
                <p class="sketch">颈部正反按摩 要被大面积热敷 海燕包赠送</p>
                <p class="price">￥999</p>
              </div>
            </li>
          </ul></van-tab
        >
      </van-tabs>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return { active: 2 };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    //头部返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.brandstoty {
  main {
    .banner {
      width: 375px;
      height: 175px;
      img {
        width: 100%;
      }
    }
    .van-tabs {
      // color: #ffffff;
      .story {
        font-size: 15px;
        padding: 20px 10px;
      }
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
</style>
