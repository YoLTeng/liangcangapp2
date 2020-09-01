import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入css重置代码
import "./assets/style/reset.css"

// 引入适配rem文件
import 'amfe-flexible'

//按需引入组件
import {Button,
        Tabbar,
        TabbarItem,
        NavBar,
        SubmitBar,
        Checkbox, 
        CheckboxGroup,
        Card
      } from "vant";

Vue.use(Button)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Card);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
