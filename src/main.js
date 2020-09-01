import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入css重置代码
import "./assets/style/reset.css";

// 引入适配rem文件
import "amfe-flexible";

//按需引入组件
import { Button, Tabbar, TabbarItem, Icon, Lazyload } from "vant";

Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Lazyload);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");