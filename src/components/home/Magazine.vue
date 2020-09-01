<template>
    <div class="magazine">
        杂志页
    </div>
</template>

<script>
//使用辅助函数
import {mapState} from "vuex"
export default {
    data(){
        return{}
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