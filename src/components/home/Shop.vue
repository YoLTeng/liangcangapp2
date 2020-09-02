<template>
    <div class="shop">
        <van-search
            placeholder="搜索商品、品牌"
            input-align="center"
        />
        <van-tabs 
        color="black" 
        line-width="20px" 
        title-active-font-size="64px"
        >
            <van-tab 
            v-for="(item, index) in tab" 
            :title="item.name" 
            :key="index" 
            >
                <van-swipe :width="300" indicator-width="16px">
                    <van-swipe-item><img class="img" src="../../assets/img/良仓.生活美学平台.jpg" alt=""></van-swipe-item>
                    <van-swipe-item><img class="img" src="../../assets/img/1@3x.png" alt=""></van-swipe-item>
                    <van-swipe-item><img class="img" src="../../assets/img/良仓.生活美学平台 (2).jpg" alt=""></van-swipe-item>
                    <!-- <van-swipe-item><img class="img" src="../../assets/img/良仓.生活美学平台.jpg" alt=""></van-swipe-item> -->
                </van-swipe>
                <div class="good">
                    <div class="left">
                        <img class="img1" src="../../assets/img/1@3x(1).png" alt="">
                        <img class="img3" src="../../assets/img/新款挂耳咖啡 超级澎湃装  一包喝遍世界好咖啡.良仓－生活美学指南@3x.png" alt="">
                    </div>
                    <div class="right">
                        <img class="img2" src="../../assets/img/潮无线Lucky蓝牙耳机  潮玩人气IP.良仓－生活美学指南@3x.png" alt="">
                        <img class="img4" src="..\..\assets\img\神秘撩人的香气-蓝影  调香师与摄影师联袂创作.良仓－生活美学指南@3x.png" alt="">
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>


<script>
//使用辅助函数
import {mapState} from "vuex"
import banner1 from "../../assets/img/1@3x.png"
export default {
    data(){
        return{
            img:[
            ],
            tab:[
                {
                    name:'首页'
                },
                {
                    name:'大赏'
                },
                {
                    name:'水具'
                },
                {
                    name:'家居'
                },
                {
                    name:'美护'
                },
                {
                    name:'美食'
                },
                {
                    name:'出行'
                },
                {
                    name:'玩乐'
                }
            ]
        }
    },
    mounted() {
        //在这里调用actions里的函数
        //例子:this.$store.dispatch("getBannerinfo")  

    },
    computed: {
        //在这里使用辅助函数获取state里的数据 
        //例子 ...mapState(["baninfo"])

    },   
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/shop.scss';
  .van-search__content {
    background: #F9F9F9;
  }
  .van-tabs__line {
      background-color: #000;
      width: .6rem;
  }
.van-tab--active {
    font-size: 24px;
    color: red;
}
.van-swipe {
    padding: 17px;
    background: #F9F9F9;
}
.van-swipe__indicator {
    width: 0.3rem;
    height: 0.06rem;
}
</style>
