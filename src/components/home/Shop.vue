<template>
  <div class="shop">
    <van-search placeholder="搜索商品、品牌" input-align="center" />
    <van-tabs color="black" line-width="20px" title-active-font-size="64px">
      <van-tab v-for="(item, index) in tab" :title="item.name" :key="index">
        <van-swipe :width="300" indicator-width="16px" autoplay="3000">
          <van-swipe-item>
            <img class="img" src="../../assets/img/良仓.生活美学平台.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img class="img" src="../../assets/img/1@3x.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img class="img" src="../../assets/img/良仓.生活美学平台 (2).jpg" alt />
          </van-swipe-item>
          <!-- <van-swipe-item><img class="img" src="../../assets/img/良仓.生活美学平台.jpg" alt=""></van-swipe-item> -->
        </van-swipe>
        <div class="good">
          <div class="left">
            <div class="top">
              <section>
                <p class="title">小王子金属款OTR收音机</p>
                <p class="detail">复古嬉皮金属色</p>
              </section>
              <img class="img1" src="../../assets/img/1@3x(1).png" alt />
            </div>
            <div class="top">
                <section>
                    <p class="title">新款挂耳咖啡 超级澎湃装</p>
                    <p class="detail">一包喝遍世界好咖啡</p>
              </section>
              <img class="img3" src="../../assets/img/新款挂耳咖啡 超级澎湃装  一包喝遍世界好咖啡.良仓－生活美学指南@3x.png" alt />
            </div>
          </div>
          <div class="right">
            <div class="top">
                <section>
                    <p class="title">粉饼一样可爱的蓝牙耳机</p>
                    <p class="detail">元气少女的口袋萌物</p>
                </section>
              <img class="img2" src="../../assets/img/潮无线Lucky蓝牙耳机  潮玩人气IP.良仓－生活美学指南@3x.png" alt />
            </div>
            <div class="top">
                <section>
                    <p class="title">神秘撩人的香气-蓝影</p>
                    <p class="detail">调香师与摄影师联袂创作</p>
                </section>
              <img class="img4" src="..\..\assets\img\神秘撩人的香气-蓝影  调香师与摄影师联袂创作.良仓－生活美学指南@3x.png" alt />
            </div>
          </div>
        </div>
        <ShopList>
        </ShopList>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
//使用辅助函数
import { mapState } from "vuex";
import banner1 from "../../assets/img/1@3x.png";
import ShopList from "../../components/home/ShopList"
export default {
  data() {
    return {
      img: [],
      tab: [
        {
          name: "首页",
        },
        {
          name: "大赏",
        },
        {
          name: "水具",
        },
        {
          name: "家居",
        },
        {
          name: "美护",
        },
        {
          name: "美食",
        },
        {
          name: "出行",
        },
        {
          name: "玩乐",
        },
      ],
    };
  },
  components:{
      ShopList
  },
  mounted() {
    //在这里调用actions里的函数
    //例子:this.$store.dispatch("getBannerinfo")
  },
  computed: {
    //在这里使用辅助函数获取state里的数据
    //例子 ...mapState(["baninfo"])
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/shop.css";
.van-search__content {
  background: #f9f9f9;
}
.van-tabs__line {
  background-color: #000;
  width: 0.6rem;
}
.van-tab--active {
  font-size: 24px;
  color: red;
}
.van-swipe {
  padding: 17px;
  background: #f9f9f9;
}
.van-swipe__indicator {
  width: 0.3rem;
  height: 0.06rem;
}
.img {
  width: 7.6rem;
  height: 204px;
  /* margin-left: 30px; */
  border-radius: 10px;
}
.img1 {
  width: 166px;
  height: 215px;
}
.img2 {
  width: 166px;
  height: 166px;
}
.img3 {
  width: 166px;
  height: 166px;
}
.img4 {
  width: 166px;
  height: 215px;
}
.good {
  img {
    margin-bottom: 10px;
  }
  padding: 18px;
  display: flex;
  justify-content: space-between;
  .left {
      .top {
      position: relative;
          section {
              .title {
                  padding-left: 5px;
                  margin-top: 5px;
                  font-size: 14px;
                  font-weight: 900;
              }
              .detail {
                  padding-left: 5px;
                  margin-top: 5px;
                  font-size: 12px;
              }
            position: absolute;
            z-index: 10;
          }
    }
    display: flex;
    flex-direction: column;
  }
.right {
      .top {
      position: relative;
          section {
              .title {
                  padding-left: 5px;
                  margin-top: 5px;
                  font-size: 14px;
                  font-weight: 900;
              }
              .detail {
                  padding-left: 5px;
                  margin-top: 5px;
                  font-size: 12px;
              }
            position: absolute;
            z-index: 10;
          }
    }
    display: flex;
    flex-direction: column;
  }
}
</style>
