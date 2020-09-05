<template>
    <div class="details-comments-wrap">
        <!-- 标题 -->
        <van-nav-bar
        title="更多评论"
        left-arrow
        @click-left="onClickLeft"
        />
        <!-- 评论区 -->
        <div class="person-comments-wrap">
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
        <div class="person-comments-wrap">
            <div class="person-comments">
                <img src="../assets/img-details/图层 22.png" alt="">
                <span class="pc-name">易**玺</span>
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
        <div class="person-comments-wrap">
            <div class="person-comments">
                <img src="../assets/img-details/图层 22.png" alt="">
                <span class="pc-name">上**水</span>
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
        
    </div>
</template>
<script>
import { Toast } from 'vant';

export default {
    data(){
        return{
            starvalue:5
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
    },
}
</script>
<style lang="scss">
.details-comments-wrap{
    // 标题
    .van-icon-arrow-left{
        color: #333;
    }
     // 一片田野评论
    .person-comments-wrap{
         width: 351px;
         margin: 5px 0 10px 15px;
         height: 100px;
         background: #eee;
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
                    border: 1px dashed #383838;
                    margin-right:10px ;
                }
            }
     }
            
}
</style>