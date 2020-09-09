import http from "./http";

//get 请求模板
// export function getBannerinfo(params){
//     return http.get("/home/banner",params)
// }

//post 请求模板
// export function postDetails(params){
//     return http.post("/detail",params)
// }

// //post详情页
// export function postDetailInfo(params) {
//     return http.post("/details", params)
// }

// 请求杂志的类型

export function postMagazineClassify(params) {
    // console.log(111);
    return http.post("/magazine/getAllType", params);
}

// 请求杂志作者

export function postMagazineAuthor(params) {
    // console.log("author");
    return http.post("/author/getAllAuthor", params);
}

//  请求所有杂志

export function postAllMagazine(params) {
    // console.log("/all");
    return http.post("/magazine/getMagazine", params);
}