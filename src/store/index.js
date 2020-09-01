import Vue from 'vue'
import Vuex from 'vuex'

//  解构赋值引入api.js里的方法
//例子 import {} from "../utils/api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //state例子
    //baninfo:""
    tjs:"",
  },
  mutations: {
    //mutation例子
    // getbann(state,payload){
    //   state.baninfo = payload.info
    // },
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
  },
  modules: {
  }
})
