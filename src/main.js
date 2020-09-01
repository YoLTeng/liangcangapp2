import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入css重置代码
import "./assets/style/reset.css"

// 引入适配rem文件
import 'amfe-flexible'

//按需引入组件
import {Button,Tabbar, TabbarItem,Search,Tab,Tabs,Sidebar,SidebarItem,Grid,GridItem,NavBar,Swipe,SwipeItem} from "vant";

Vue.use(Button)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
