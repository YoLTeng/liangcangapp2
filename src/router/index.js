import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//定义路由组
const routes = [
    //重定向
    //修改/重定向到/welcome
    {
        path: "/",
        redirect: '/welcome'
    },
    {
        path: "/home",
        redirect: '/shop'
    },
    //主要页面
    {
        path: "/home",
        component: () =>
            import ("../views/Home.vue"),
        children: [{
                path: "/shop",
                component: () =>
                    import ("../components/home/Shop.vue")
            },
            {
                path: "/search",
                component: () =>
                    import ("../components/home/search.vue")
            },
            {
                path: "/find",
                component: () =>
                    import ("../components/home/Find.vue")
            },
            {
                path: "/magazine",
                component: () =>
                    import ("../components/home/Magazine.vue")

            },
            {
                path: "/cart",
                component: () =>
                    import ("../components/home/Cart.vue")
            },
            {
                path: "/mine",
                component: () =>
                    import ("../components/home/Mine.vue")
            },
        ]
    },
    //配置详情页的动态路由
    {
        path: "/details/:id",
        component: () =>
            import ("../views/Details.vue"),
    },
    //详情页跳转到更多无恙商品
    {
        path: "/wuyang",
        component: () =>
            import ("../views/DetailsWuyang.vue")
    },
    //详情页跳转到更多评论
    {
        path: "/comments",
        component: () =>
            import ("../views/DetailsComments.vue")
    },
    //详情页跳转到购物须知
     //配置品牌的动态路由
     {
        path: "/brandstory/:id",
        component: () =>
            import ("../views/BrandStory.vue")
    },
    {
        path: "/notice",
        component: () =>
            import ("../views/DetailsNotice.vue")
    },
    //配置地址页路由
    {
        path: "/side",
        component:()=>
        import ("../components/mine/Site.vue")
    },
    //配置新增地址页的路由
    {
        path:"/addside",
        component:()=>
        import("../components/mine/Addsite.vue")
    },
    //配置编辑地址页的路由
    {
        path:"/editass/:ass",
        component:()=>
        import("../components/mine/Editaddress.vue")  
    }
    ,
    //配置商品列表页的动态路由
    {
        path: "/shoplist/:id",
        component: () =>
            import ("../views/Shoplist.vue")
    },

    //游柳腾配置欢迎页面
    {
        path: "/welcome",
        component: () =>
            import ("../views/Welcome.vue")
    },
    //个人详情页的跳转路由
    {//登录注册
        path:"/login",
        component:()=>
        import("../components/mine/login.vue")

    },
    {//订单
        path:"/orderform",
        component:()=>
        import("../components/mine/orderform.vue")
    },
    {//心愿单
        path:"/wish",
        component:()=>
        import("../components/mine/wish.vue")
    },
    // 配置错误页面
    {
        path: "*",
        component: () =>
            import ("../views/Notfound.vue") //路由懒加载
    },

]

const router = new VueRouter({
    routes
})

export default router