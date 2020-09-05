<template>
    <div class="detail-container">
        <!-- 1.轮播图 -->
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
        <!-- 2.轮播图上的返回栏 -->
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
        <!-- 3.商品信息 -->
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
                    <p class="fav-num" ref="aixinNum">921</p>
                </div>
                 <!-- 9.弹出层-分享 -->
                <van-cell @click="showShare = true">
                    <div class="share">
                        <span class="iconfont icon-fenxiang_2"></span>
                        <p class="share-words">分享</p>
                    </div>
                </van-cell>
                <van-share-sheet
                v-model="showShare"
                @select="onSelect"
                :overlay=false
                :options="options"
                />
            </div>
           
        </div>
        <!-- 4.tips:免运费，正品授权。。。-->
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
        <!-- 5.主要内容区 -->
        <main>
            <!-- 选择颜色、尺码、数量 -->
            <div class="choice">
                <van-cell 
                title="选择颜色、尺码、数量" 
                icon="completed"  
                is-link 
                @click="showPopup"
               />  
            </div>         
            <!-- 查看无恙商品 -->
            <div class="more-products" @click="showWuyang">
                <img src="../assets/img-details/无 ｜ 恙.png" alt="">
                <van-cell title="查看 无恙 商品" is-link />
            </div>
            <!-- 用户评价 -->
            <div class="comments"  @click="showComments">
                <van-cell title="用户评价" is-link value="查看更多评价" />
                <div class="person-comments">
                    <img src="../assets/img-details/图层 22.png" alt="">
                    <span class="pc-name">一**野</span>
                    <van-rate 
                    v-model="starvalue"
                    color='#333'
                    readonly
                     />
                </div>
                <div class="pc-label">
                    <span>实物太美</span>
                    <span>做工精致</span>
                </div>               
            </div>      
        </main> 
        <!-- 6.商品详情  购物须知-->
        <div class="details-notice">
                <van-tabs 
                type="card"
                color= "#333"
                title-active-color="#fff"	
                >
                    <van-tab 
                    title="商品详情" 
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
        <!-- 7.底部加入购物车 -->
        <van-goods-action>
            <!-- 8.弹出层-客服 -->
            <van-cell @click="showService = true">
                <van-goods-action-icon icon="service-o" text="客服" color="#333" /> 
            </van-cell>
            <van-share-sheet
                v-model="showService"
                @select="onSelect"
                :overlay=false
                :options="options2"
                />
            <van-goods-action-button color="#fff" text="立即购买"  square @click="showPopup"/>
            <van-goods-action-button color="#333"  text="加入购物车" square  @click="showPopup"/>
        </van-goods-action>
        <!-- 10.弹出层：商品规格 -->
        <van-popup 
        v-model="showst" 
        position="bottom"
        :style="{height:'80%'}"
        closeable
        close-icon-position="top-right"
        >
            <!-- 突出的图片 -->
            <img src="../assets/img-details/故宫联名古法琉璃茶器套装  纯手工打造 藏品级器皿.良仓－生活美学指南.png" alt="" class="standard-pic">
            <!-- 内容区 -->
            <div class="popup-words">
                <p class="popup-title">故宫联名古法琉璃茶器套装</p>
                <p class="popup-tag">无恙</p>
                <p class="popup-price">￥<span>880</span></p>
            </div>
            <!-- 规格区 -->
            <div class="popup-standard">
                <p class="ps-color">颜色</p>
                <p class="ps-color-classify">
                    <span 
                    v-for="(item,index) in colorList" :key="index" 
                    :class="{active:index===isActive}"
                    @click="isActive=index"
                    >{{item}}</span>
                   
                </p>
                <p class="ps-num">数量</p>
                <van-stepper v-model="value" step="1"/>
            </div>
            <!-- 弹出层-底部确定按钮 -->
            <van-button type="primary" size="large" color="#272727">确定</van-button>
        </van-popup>

    </div>
</template>
<script>
import { Toast } from 'vant';
    export default {
        data() {
            return {
                id:'',
                current: 0,
                showst:false,
                value:1,
                isActive:true,
                colorList:['琉璃色','白色','黑色','琥珀色'],
                showShare:false,
                options: [
                    { name: '分享到微信好友' },
                    { name: '分享到微信朋友圈'},
                    { name: '分享到微信新浪微博' },
                    { name: '分享到QQ好友' },
                ],
                showService:false,
                options2: [
                    { name: '在线客服', icon: 'comment' },
                    { name: '电话客服', icon: 'phone' },
                    { name: '投诉建议', icon: 'records' }, 
                ],
                starvalue:5,
            }
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
                this.$refs.aixin1.style.display='block';
                this.$refs.aixinNum.innerHTML=+(this.$refs.aixinNum.innerHTML)+1;
            },
            toBlack(){
                this.$refs.aixin.style.display='block';
                this.$refs.aixin1.style.display='none';
                this.$refs.aixinNum.innerHTML=+(this.$refs.aixinNum.innerHTML)-1;
            },
            // 弹出层-分享显示
            onSelect(option) {
                Toast(option);
                this.showShare = false;
            },
             //弹出层-商品规格显示
            showPopup(){
                this.showst=true;//变量得不同才可以互不影响
            },
            //查看更多无恙产品
            showWuyang(){
                this.$router.push('/wuyang')
            },
            //查看更多评论
            showComments(){
                this.$router.push('/comments')
            },
            //售后须知返回
            showNotice(){
                this.$router.push('/notice')
            },
            //弹出层-客服显示
            onSelect(option) {
                Toast(option.name);
                this.showService = false;
            },
            
        },
    }
</script>
<style lang="scss">
@import '../assets/font-details/iconfont.css';
.detail-container{
    //1.轮播图
    .my-swipe{
        width: 100%;
        height: 375px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    // 2.轮播图上的标签
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
    //3.商品信息
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
            // 9.弹出层-分享
            .van-cell{
                padding: 0;
                .van-cell__value--alone{
                    width: 30px;
                    height: 50px;
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
            .van-share-sheet{
                width: 335px;
                margin: 20px;
                border-radius: 0;
                .van-share-sheet__options{
                    width: 335px;
                    height:240px ;
                    display: block;
                    padding: 0;
                    overflow-x: none;
                    .van-share-sheet__option{
                        width: 335px;
                        height:47px ;
                        border-bottom:1px solid #ccc ;
                        .van-share-sheet__icon{
                            display: none;
                        }
                        .van-share-sheet__name{
                            display: block;
                            font-size: 16px;
                            text-align: center;
                            width: 335px;
                            height:47px ;
                            line-height: 30px;
                        }
                    }
                }
                .van-share-sheet__cancel{
                    position: fixed;
                    bottom: 20px;
                    left: 0;
                }
            }
            
        }
    }
    //4.tips:免运费，正品授权。。。
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
    //5.主要内容区
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
            }
            // 评论标签
            .pc-label{
                width: 351px;
                height: 40px;
                font-size: 14px;
                color: #383838;
                line-height: 30px;
                margin-left: 20px;
                span{
                    width: 50px;
                    height: 25px;
                    // font-size: 14px;
                    // color: #383838;
                    border: 1px dashed #383838;
                    margin-right:10px ;
                }
            }
        }
    }
    // 6.商品详情  购物须知 tab切换
   .details-notice{
       width: 351px;
       margin-top: 20px;
       .van-tabs--card{
           width: 351px;
           height: 37px;
            .van-tabs__wrap{
                margin-left:15px ;
                width: 100%;
                height: 100%; 
                .van-tabs__nav--card{
                    width: 100%;
                    height: 37px;
                    margin: 0;
                    border:1px solid #333 ;
                }          
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
    // 7.底部购买，加入购物车
    .van-goods-action{
         .van-cell{
        width: 50px;
        padding: 0;
        .van-goods-action-icon{
        height: 40px;
        border-right: 1px solid #000;
            .van-icon-service-o{
                font-size: 24px;
            }
        }
    }
    // 弹出层-客服
    .van-share-sheet{
         width: 335px;
         margin: 20px;
         border-radius: 0;
         .van-share-sheet__option:first-child{
              background: #6F99C7;
         }
          .van-share-sheet__option:nth-of-type(2){
              background: #666;
         }
          .van-share-sheet__option:last-child{
              background: #272727;
         }
         .van-share-sheet__options{
            width: 335px;
            height:192px ;
            display: block;
            padding: 0;
            overflow-x: none;  
            .van-share-sheet__option{
                width: 335px;
                height:45px ;
                line-height: 40px;
                text-align: center;
                border-bottom:1px solid #ccc ;
                display: block;
                .van-share-sheet__icon{
                    width: 20px;
                    height: 20px;
                }
                .van-share-sheet__name{
                    font-size: 16px;
                    color: #ccc;
                }
            }     
        }
        .van-share-sheet__cancel{
                    position: fixed;
                    bottom: 20px;
                    left: 0;
                    margin-top:20px ;
                }
    }
    .van-goods-action-button--first{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        .van-button__text{
            color: #333;
        }
    }
    .van-goods-action-button--last{
        border-top-right-radius:0;
        border-bottom-right-radius:0;
    }
    }
    //10.弹出层popup-商品规格
    .van-popup {
        //突出的图片
        .standard-pic{
            width: 147px;
            height: 146px;
            position: fixed;
            left: 114px;
            top: 73px;
            z-index: -1;
        }
        //内容区
        .popup-words{
            width: 335px;
            height: 100px;
            margin-top:90px ;
            margin-left:20px;
            border-bottom: 1px solid #272727;
            .popup-title{
                font-size: 20px;
                font-weight: 600;
                color: #272727;
                margin: 25px 0 10px;
            }
            .popup-tag{
                font-size: 12px;
                margin-bottom: 10px;
                color: #272727;
            }
            .popup-price{
                font-size: 27px;
                color: #7797BF;
            }
          
        }
        //规格区
        .popup-standard{
            width: 335px;
            height: 120px;
            margin-top:30px ;
            margin-left:20px;
            .ps-color,.ps-num{
                font-size: 14px;
                color: #272727; 
                margin-bottom: 15px;
            }
            .ps-color-classify{
                width: 335px;
                height: 35px;
                margin-bottom: 15px;
                span{
                    width: 50px;
                    height: 35px;
                    line-height: 35px;
                    text-align: center;
                    font-size: 12px;
                    color: #272727;
                    background:#eee ;
                    margin-right: 15px;
                    display: inline-block;
                }
                .active{
                    color: #eee;
                    background: #272727;
                }
            }
            .van-stepper{
                height: 35px;
                .van-stepper__input{
                    width: 50px;
                    height: 35px;
                    margin: 0 10px;
                }
                .van-stepper__plus,.van-stepper__minus {
                    width: 35px;
                    height: 35px;
                    background-color: #272727;
                    color: #fff;
                    border-radius:0;
                }
            } 
        }
        //确定按钮
        .van-button--large{
            position: fixed;
            bottom: 0;
            left: 0;
        }
    }
    
    
    
 
}
    
</style>
