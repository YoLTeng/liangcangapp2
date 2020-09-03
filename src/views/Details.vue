<template>
    <div class="detail-container">
        <!-- 轮播图 -->
        <van-swipe 
        class="my-swipe" 
        :autoplay="3000" 
        @change='swipeChange'>
            <!-- <van-swipe-item v-for="(item,index) in detailInfo.imgArr" :key="index">
                <img :src="item" alt="">
            </van-swipe-item> -->
            <van-swipe-item>
                <img src="../assets/img-details/故宫联名古法琉璃茶器套装  纯手工打造 藏品级器皿.良仓－生活美学指南.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/img-details/图层 2.png" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/img-details/图层 15.png" alt="">
            </van-swipe-item>
        </van-swipe>
        <!-- 轮播图上的返回栏 -->
        <van-nav-bar 
        left-arrow
        :border='false'
        @click-left="onClickLeft"
        @click-right="onClickRight"
        fixed
        >
            <template #right>
                <span class="iconfont icon-gouwuche"></span>
            </template>
        </van-nav-bar>
        <!-- 商品信息 -->
        <div class="productInfo">
            <div class="p-info">
                <p class="title">故宫联名古法琉璃茶器套装</p>
                <p class="desc">纯手工打造 藏品级器皿</p>
                <p class="price">￥ <span>880</span></p>
            </div>
            <div class="p-icon">
                <div class="fav">
                    <span class="iconfont icon-aixin" @click="toRed" ref="aixin"></span>
                    <span class="iconfont icon-aixin1" style="display:none" ref="aixin1" @click="toBlack"></span>
                    <p class="fav-num">921</p>
                </div>
                <div class="share">
                    <span class="iconfont icon-fenxiang_2"></span>
                    <p class="share-words">分享</p>
                </div>
            </div>
        </div>
        <!-- tips:免运费，正品授权。。。-->
        <div class="tips">
            <p>
                <span class="iconfont icon-listfeiji tips-icon"></span>
                <span class="tips-words">免运费</span>
                <span class="iconfont icon-zhengpin tips-icon"></span>
                <span class="tips-words">正品授权</span>
                <span class="iconfont icon-naozhong tips-icon"></span>
                <span class="tips-words">现货商品3个工作日内发货</span>
            </p>
        </div>
        <!-- 主要内容区 -->
        <main>
            <!-- 选择颜色、尺码、数量 -->
            <div class="choice">
                <van-cell title="选择颜色、尺码、数量" icon="completed"  is-link />  
            </div>
            <!-- 查看无恙商品 -->
            <div class="more-products">
                <img src="../assets/img-details/无 ｜ 恙.png" alt="">
                <van-cell title="查看 无恙 商品" is-link />
            </div>
            <!-- 用户评价 -->
            <div class="comments">
                <van-cell title="用户评价" is-link value="查看更多评价" />
                <div class="person-comments">
                    <img src="../assets/img-details/图层 22.png" alt="">
                    <span class="pc-name">一**野</span>
                    <span class="iconfont icon-star"></span>
                    <span class="iconfont icon-star"></span>
                    <span class="iconfont icon-star"></span>
                    <span class="iconfont icon-star"></span>
                    <span class="iconfont icon-star"></span>
                </div>
                <div class="pc-label">
                    <span>实物太美</span>
                    <span>做工精致</span>
                </div>               
            </div>      
        </main> 
         <!-- 商品详情  购物须知-->
            <div class="details-notice">
                <van-tabs 
                type="card"
                color= "#333"
                title-active-color="#fff"	
             
                >
                    <van-tab 
                    title="商品详情" 
                    title-style='font-size:16px;width:174px;height:35px;margin-left:-5px;'
                    >
                        <img src="../assets/img-details/故宫联名古法琉璃茶器套装  纯手工打造 藏品级器皿.良仓－生活美学指南.png" alt="">
                        <img src="../assets/img-details/图层 2.png" alt="">
                        <img src="../assets/img-details/图层 3.png" alt="">
                        <img src="../assets/img-details/图层 4.png" alt="">
                        <img src="../assets/img-details/图层 5.png" alt="">
                        <img src="../assets/img-details/图层 6.png" alt="">
                        <img src="../assets/img-details/图层 7.png" alt="">
                        <img src="../assets/img-details/图层 8.png" alt="">
                        <img src="../assets/img-details/图层 9.png" alt="">
                        <img src="../assets/img-details/图层 10.png" alt="">
                        <img src="../assets/img-details/图层 11.png" alt="">
                        <img src="../assets/img-details/图层 12.png" alt="">
                        <img src="../assets/img-details/图层 13.png" alt="">
                        <img src="../assets/img-details/图层 14.png" alt="">
                        <img src="../assets/img-details/图层 15.png" alt="">
                        <img src="../assets/img-details/图层 16.png" alt="">
                        <img src="../assets/img-details/图层 17.png" alt="">
                        <img src="../assets/img-details/图层 18.png" alt="">
                        <img src="../assets/img-details/图层 19.png" alt="">
                        <img src="../assets/img-details/图层 20.png" alt="">
                        <img src="../assets/img-details/图层 21.png" alt="">
                    </van-tab>
                    <van-tab 
                    class="notice-words"
                    title="购物须知"
                    title-style='font-size:16px;width:174px;height:35px;margin-left:-5px;'
                    >
                        <p>所有商品均为正品保证。</p>
                        <br>
		                <p>中国大陆地区免运费，默认商家合作快递。</p>
                        <br>
		                <p>蜡烛、液态品、手表等含电池产品无法空运，运输时间相较普通空运件会更久。</p>
                        <br>
		                <p>如出现产品质量问题请在签收后72小时内联系客服。</p>
                        <!-- <router-link to="/notice"></router-link> -->
                        <button @click="showNotice">售后须知</button>
                        <br>
                    </van-tab>                  
                </van-tabs>
            </div>   
    </div>
</template>
<script>
import { Toast } from 'vant';
    export default {
        data() {
            return {
                id:'',
                current: 0
            }
        },
        mounted() {
            
        },
        methods: {
            swipeChange(index) {
                this.current = index
            },
            onClickLeft(){
                this.$router.go(-1)
            },
            onClickRight() {
               this.$router.replace('/cart')
            },
            // 点击收藏动作前后
            toRed(){
                this.$refs.aixin.style.display='none';
                this.$refs.aixin1.style.display='block'
            },
            toBlack(){
                this.$refs.aixin.style.display='block';
                this.$refs.aixin1.style.display='none'
            },
            showNotice(){
                this.$router.push('/notice')
            }
        },
    }
</script>
<style lang="scss">
@import '../assets/font-details/iconfont.css';
.detail-container{
    // 轮播图
    .my-swipe{
        width: 100%;
        height: 375px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    // 轮播图上的标签
    .van-nav-bar{
        background: transparent;
       .van-icon-arrow-left {
            font-size: 20px;
            color: #000;
        }
        .icon-gouwuche{
            font-size: 24px;
            color: #000;
        } 
    } 
    // 商品信息
    .productInfo{
        width: 351px;
        height: 130px;
        padding: 0  12px;
        border-bottom: 1px solid #F6F4F6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .p-info{
            width: 300px;
            height: 100%;
            color:#272727 ;
            font-family: PingFang SC;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            .title{
                font-size: 19px;
                font-weight: 600;
                margin-top: 15px;
            }
            .desc{
                font-size: 14px;
                font-weight: 400;
                margin: 10px 0 35px;
            }
            .price{
                font-size: 20px;
                font-weight: 700;
                color:#6F99C7
            }
        }
        .p-icon{
            width: 51px;
            height: 100%;
            font-size: 14px;
            color:#272727 ;
            font-family: PingFang SC;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            .fav{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                .icon-aixin{
                    font-size:30px;
                }
                .icon-aixin1{
                    font-size:30px;
                    color: red;
                }
            }
            .share{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                .icon-fenxiang_2{
                    font-size:30px;
                }
            }

            
        }
    }
    //tips:免运费，正品授权。。。
    .tips{
        width: 351px;
        height: 36px;
        margin-left:12px ;
        p{
            height: 100%;
            line-height: 36px;
            .tips-icon{
                color: #6F99C7;
                font-size: 20px;
                margin-right:5px;
            }
            .tips-words{
                color: #979497;
                font-size:12px ;
                margin-right:10px;
            }
        }
    }
    main{
        width: 351px;
        font-family: PingFang SC;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        //选择颜色、尺码、数量
        .choice{
            width: 351px;
            height: 40px;
            line-height: 40px;
            margin-bottom: 7px;
            .van-cell__title{
                span{
                    color: #413F41;
                    font-size: 14px;                  
                    font-weight: 400;
                }
            }
            .van-icon-completed{
                font-size: 24px;
                margin-right: 15px;
                margin-left:-5px ;
            } 
        }
        .more-products{
            width: 351px;
            height: 58px;
            line-height: 58px;
            margin-bottom: 7px;
            display: flex;
            align-items: center;
            color: #ABA9AB;
            font-size:14px;
            img{
                width: 35px;
                height: 18px;
                display: inline-block;
                margin-left: 15px;
            }
        }
        .comments{
            width: 351px;
            height: 150px;
            line-height: 150px;
            margin-bottom: 7px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            // 一片田野评论
            .person-comments{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 351px;
                height: 60px;
                 img{
                     width: 35px;
                     height: 35px;
                     margin-right: 10px;
                 }
                 .pc-name{
                     font-size: 14px;
                     color: #383838;
                     margin-right: 140px;
                 }
                 .icon-star{
                     margin-left: 2px;
                 }

            }
            // 评论标签
            .pc-label{
                width: 351px;
                height: 30px;
                line-height: 30px;
                margin-left: 20px;
                span{
                    width: 78px;
                    height: 25px;
                    font-size: 14px;
                    color: #383838;
                    border: 1px dashed #383838;
                    margin-right:10px ;
                }
            }
        }
    }
    // tab切换
   .details-notice{
       width: 351px;
       margin-top: 20px;
      
       .van-tabs{
           width: 351px;
           height: 37px!important;//????
            .van-tabs_wrap{
                height: 37px;           
            }
           
            .van-tabs__content{
                width: 351px;
                margin-top: 20px;
                margin-left: 15px;
                img{
                    width: 351px;
                }
               
            }
            .notice-words{
                width: 350px;
                height: 500px;
                 p{
                    font-size:16px;
                }
                button{
                    width: 80px;
                    height: 25px;
                    font-size:16px;
                    background: #333;
                    color: #fff;
                }
            }
       }
   }
    


    

}
    
</style>
