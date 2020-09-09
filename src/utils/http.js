//封装axios
import axios from "axios";
import { Toast } from "vant";
import qs from "qs";

//创建一个axios实例
var instance = axios.create({
    baseURL: 'https://www.baidu.com/',
    //发现页数据模拟请求
    // baseURL: 'https://www.fastmock.site/mock/46cbf22e474d8f42c5ce39bd6e34342a/api',
    //后端接口地址
    baseURL: "http://10.31.155.30:8090/lc",

    // mock接口地址
    // baseURL: "https://www.fastmock.site/mock/482b3b28d9c87cfcac248d698f0e420e/magazine",

    // // 详情页的虚拟数据地址
    // baseURL: 'https://www.fastmock.site/mock/7b5cf26e94f623c6469346f4392c1842/',
    timeout: 200000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset = utf-8",
    },
});

// 添加请求拦截器
instance.interceptors.request.use(
    function(config) {
        // 在发送请求之前做些什么
        return config;
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么
        return response;
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

const http = {
    //get请求
    get(url, params) {
        return new Promise((resolve, reject) => {
            instance
                .get(url, {
                    params: params,
                })
                .then((res) => {
                    console.log(res);
                    resolve(res);
                })
                .catch((err) => {
                    Toast("请求超时");
                });
        });
    },
    //post请求
    post(url, params) {
        return new Promise((resolve, reject) => {
            //qs转化数据格式
            instance
                .post(url, qs.stringify(params))
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    Toast("请求超时");
                });
        });
    },
};

export default http;