import Vue from "vue";
import Vuex from "vuex";

//  解构赋值引入api.js里的方法
//例子 import {} from "../utils/api";

// //引入详情页
// import { postDetailInfo, } from '../utils/api'

// 引入杂志页分类

import {
    postMagazineClassify,
    postMagazineAuthor,
    postAllMagazine,
} from "../utils/api";
// import BScroll from "better-scroll";

Vue.use(Vuex);

const magazine = {
    namespaced: true, //添加命名空间，不同模块相同变量名不冲突
    state: {
        // monthList: [
        //     "JUL.31",
        //     "JUL.30",
        //     "JUL.23",
        //     "JUL.21",
        //     "JUL.20",
        //     "JUL.18",
        //     "JUL.17",
        //     "JUL.13",
        //     "JUL.03",
        // ],
        authorList1: [],
        classifyList1: [],
        allMagazineList: [],
        // showMagazineList: [],
        moveMagazine: false,
        index: 0,
        authorName: "",
        // vuethis: ""
    },
    mutations: {
        ifmove(state) {
            state.moveMagazine = !state.moveMagazine;
        },
        first(state) {
            state.index = 0;
            state.authorName = "";
        },
        isactive(state, n) {
            state.index = n;
        },
        setAuthor(state, name) {
            state.authorName = name;
        },

        getMagazineClassify(state, payload) {
            state.classifyList1 = payload.result;
        },
        getMagazineAuthor(state, payload) {
            state.authorList1 = payload.result;
        },
        // setClassify(state, name) {
        //     state.authorName = name;
        // }
        getAllMagazine(state, payload) {
            state.allMagazineList = payload.result;
            // let length = state.allMagazineList.length;
            // for (let i = 0; i < length; i++) {
            //     for (let j = 0; j < length - i - 1; j++) {
            //         if (
            //             state.allMagazineList[j].time < state.allMagazineList[j + 1].time
            //         ) {
            //             [state.allMagazineList[j], state.allMagazineList[j + 1]] = [
            //                 state.allMagazineList[j + 1],
            //                 state.allMagazineList[j],
            //             ];
            //         }
            //     }
            // }
        },
        // getShowMagazine(state, payload) {
        //     state.showMagazineList = [];
        //     if (payload.typeId) {
        //         for (let i = 0; i < state.allMagazineList.length; i++) {
        //             if (state.allMagazineList[i].typeId === payload.typeId) {
        //                 state.showMagazineList.push(state.allMagazineList[i]);
        //             }
        //         }
        //     } else if (payload.authorId) {
        //         for (let i = 0; i < state.allMagazineList.length; i++) {
        //             if (state.allMagazineList[i].authorId === payload.authorId) {
        //                 state.showMagazineList.push(state.allMagazineList[i]);
        //             }
        //         }
        //     } else {
        //         for (let i = 0; i < state.allMagazineList.length; i++) {
        //             state.showMagazineList.push(state.allMagazineList[i]);
        //         }
        //     }
        //     console.log(state.showMagazineList);
        // },
    },
    actions: {
        async getMagazineClassify({ commit }, payload) {
            const result = await postMagazineClassify(payload);
            // console.log(result.data);
            commit("getMagazineClassify", {
                result: result.data.result,
            });
        },
        async getMagazineAuthor({ commit }, payload) {
            const result = await postMagazineAuthor(payload);
            // console.log(result.data);
            commit("getMagazineAuthor", {
                result: result.data.result,
            });
        },
        async getAllMagazine({ commit }, payload) {
            const result = await postAllMagazine(payload);
            console.log(result.data);
            commit("getAllMagazine", {
                result: result.data.result,
            });
        },
    },
};

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
    },
});