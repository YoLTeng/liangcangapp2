<template>
   <div class="details-wuyang-wrap">
       <!-- 标题 -->
        <van-nav-bar
        title="品牌产品"
        left-arrow
        @click-left="onClickLeft"
        />
        <!-- 背景图 -->
        <img src="../assets/img-details/wuyang.jpg" alt="" class="wy-pic">
        <!-- tab切换区 -->
        <van-tabs 
        type="card" 
        color="#666"
        background="#ddd"
        >
            <van-tab title="品牌故事">
                无恙是与北京故宫独家打造的故宫高端文创品牌。琉璃系列是联手故宫设计的第一款中国风系列产品，同时也是故宫冰窖唯一的衍生品。该系列与国内顶尖独立的琉璃大师周刚合作设计，以“冰”为设计理念，47道纯手工工艺独创器型，每一件都是对一无二，品相独绝。琉璃系列产品致力于传承东方古典文化，融合传统艺术与当代审美的全新探索。
            </van-tab>
            <van-tab title="品牌产品">
                <ul>
                    <li @click="toDetails">
                        <img src="../assets/img-details/故宫联名古法琉璃茶器套装  纯手工打造 藏品级器皿.良仓－生活美学指南.png" alt="">
                        <h5>故宫联名古法琉璃茶器套装</h5>
                        <h6>纯手工打造 藏品级器皿</h6>
                        <p>公道杯一个、琉璃茶盏两只，通透优雅，耐高温不含铅</p>
                        <strong>￥880</strong>
                    </li>
                    <li>
                        <img src="../assets/img-details/故宫联名古法琉璃茶器套装  纯手工打造 藏品级器皿.良仓－生活美学指南.png" alt="">
                        <h5>故宫联名古法琉璃茶器套装</h5>
                        <h6>纯手工打造 藏品级器皿</h6>
                        <p>公道杯一个、琉璃茶盏两只，通透优雅，耐高温不含铅</p>
                        <strong>￥880</strong>
                    </li>
                    <li>
                        <img src="../assets/img-details/故宫联名古法琉璃茶器套装  纯手工打造 藏品级器皿.良仓－生活美学指南.png" alt="">
                        <h5>故宫联名古法琉璃茶器套装</h5>
                        <h6>纯手工打造 藏品级器皿</h6>
                        <p>公道杯一个、琉璃茶盏两只，通透优雅，耐高温不含铅</p>
                        <strong>￥880</strong>
                    </li>
                </ul>
            </van-tab>
        </van-tabs>
   </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        toDetails(){
            this.$router.push('/details/:id')
        }
    },
}
</script>
<style lang="scss">
.details-wuyang-wrap{
    // 标题
    .van-icon-arrow-left{
        color: #333;
    }
    // 无恙背景图
    .wy-pic{
        width: 100%;
        height: 180px;
    }
    // tab切换
    .van-tabs--card{
        height: 40px;
        margin-top: -5px;
        .van-tabs__wrap{
            height: 40px;
            .van-tabs__nav--card{
                height: 40px;
                border: none;
                border-radius: none;
                margin: 0;
            }
        }
        .van-tabs__content{
            padding: 10px;
            .van-tab__pane{
                font-size: 12px;
                line-height: 30px;
                ul{
                    width: 355px;
                    line-height: 25px;
                    li{
                        width: 160px;
                        height: 300px;
                        margin: 0 10px 10px 7px;
                        float: left;
                        img{
                            width: 160px;
                            height: 160px;
                        }
                    }
                }
            }
            
        }
    }
}
</style>