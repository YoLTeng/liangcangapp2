import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入css重置代码
import "./assets/style/reset.css";
//引入公共icon文件
import "../src/assets/font/font_public/iconfont.css"
// 引入适配rem文件
import "amfe-flexible";

//按需引入组件
import {Button,
        Tabbar,
        TabbarItem,
        NavBar,
        SubmitBar,
        Checkbox, 
        CheckboxGroup,
        Card,
        Search,
        Tab,
        Tabs,
        Sidebar,
        SidebarItem,
        Grid,
        GridItem,
        Swipe,
        SwipeItem,
        Cell,
        Icon, 
        Lazyload
      } from "vant";

        Vue.use(Button)
        Vue.use(Tabbar);
        Vue.use(TabbarItem);
        Vue.use(NavBar);
        Vue.use(SubmitBar);
        Vue.use(Checkbox);
        Vue.use(CheckboxGroup);
        Vue.use(Card);
        Vue.use(Search);
        Vue.use(Tab);
        Vue.use(Tabs);
        Vue.use(Sidebar);
        Vue.use(SidebarItem);
        Vue.use(Grid);
        Vue.use(GridItem);
        Vue.use(Swipe);
        Vue.use(SwipeItem);
        Vue.use(Icon);
        Vue.use(Lazyload);
        //详情页引入
        Vue.use(Cell);


Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
