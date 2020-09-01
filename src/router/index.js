import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//定义路由组
  const routes = [
  //重定向
  {
    path:"/",
    redirect:'/shop'
  },
  {
    path:"/home",
    redirect:'/shop'
  },
  //主要页面
  {
    path:"/home",
    component:() => import ("../views/Home.vue"),
    children:[
      {
        path:"/shop",
        component:() => import ("../components/home/Shop.vue")
      },
      {
        path:"/find",
        component:() => import ("../components/home/Find.vue")
      },
      {
        path:"/magazine",
        component:() => import ("../components/home/Magazine.vue")

      },
      {
        path:"/cart",
        component:() => import ("../components/home/Cart.vue")
      }, 
      {
        path:"/mine",
        component:() => import ("../components/home/Mine.vue")
      },
    ]
  },
  //配置详情页的动态路由
  {
    path:"/details/:id",
    component:()=> import ("../views/Details.vue")
  },
  //配置商品列表页的动态路由
  {
    path:"/shoplist/:id",
    component:()=> import ("../views/Shoplist.vue")
  },
  // 配置错误页面
  {
    path:"*",
    component:() => import ("../views/Notfound.vue")//路由懒加载
  },
]

const router = new VueRouter({
  routes
})

export default router
