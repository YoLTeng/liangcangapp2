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
        moveMagazine: false,
        index: 0,
    },
    mutations: {
        ifmove(state) {
            state.moveMagazine = !state.moveMagazine;
        },
        isactive(state, n) {
            state.index = n;
        }
    }
}

export default new Vuex.Store({
    state: {
        //state例子
        //baninfo:""
        tjs: "",
        historysearch: []
        // //详情页数据
        // detailInfo: {},

    },
    mutations: {
        increment (state, a) {

            // state.historysearch = JSON.parse(window.localStorage.getItem('logindata'))
            if(window.localStorage.getItem('logindata')) {
                state.historysearch = JSON.parse(window.localStorage.getItem('logindata'))
                // state.historysearch.push(a)
                window.localStorage.setItem('logindata',JSON.stringify(state.historysearch))
            }
            state.historysearch.push(a)
            window.localStorage.setItem('logindata',JSON.stringify(state.historysearch))
        }
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