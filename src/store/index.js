import Vue from "vue";
import Vuex from "vuex";

//  解构赋值引入api.js里的方法
//例子 import {} from "../utils/api";

// //引入详情页
// import { postDetailInfo, } from '../utils/api'

Vue.use(Vuex)

const magazine = {
    namespaced: true, //添加命名空间，不同模块相同变量名不冲突
    state: {
        monthList: ['JUL.31', 'JUL.30', 'JUL.23', 'JUL.21', 'JUL.20', 'JUL.18', 'JUL.17', 'JUL.13', 'JUL.03'],
        authorList: ['良仓', 'Voicer', '《 新视线》', 'Amcreative', '摩根族', '山形', '理想生活实验室', '日本设计小站'],
        classifyList: ['我的收藏', '所有杂志', '趣物', '数码', '汽车', '文化', '时尚', '美食', '建筑', '空间', '圈子', '清单', '视频', '活动'],
        moveMagazine: false,
        index: 0,
        authorName: '',
    },
    mutations: {
        ifmove(state) {
            state.moveMagazine = !state.moveMagazine;
        },
        isactive(state, n) {
            state.index = n;
        },
        setAuthor(state, name) {
            state.authorName = name;
        },
        // setClassify(state, name) {
        //     state.authorName = name;
        // }
    }
}

export default new Vuex.Store({
    state: {
        //state例子
        //baninfo:""
        tjs: "",

        // //详情页数据
        // detailInfo: {},

    },
    mutations: {
        //mutation例子
        // getbann(state,payload){
        //   state.baninfo = payload.info
        // },

        // //详情页
        // changeDetailInfo(state, payload) {
        //     state.detailInfo = payload.info
        // }

    },
    actions: {
        // 请求接口例子
        //getBannerinfo---actions的方法名，payload参数
        //await---后面的getBannerinfo，为api.js里的方法名
        //getbann---mutations里面的方法名

        // async getBannerinfo({commit},payload){
        //   const data = await getBannerinfo();
        //   commit('getbann',{
        //     info:data.result.list
        //   })
        // },


        // //获取详情页的数据
        // async getDetail({ commit }, payload) {
        //     const data = await postDetailInfo({
        //         productId: payload.id
        //     });
        //     commit('changeDetailInfo', {
        //         info: result.result
        //     })
        // },
    },
    modules: {
        magazine: magazine,
    }
})