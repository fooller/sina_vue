// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import App from './App'
import router from './router/index';
import axios from 'axios';
import cookies from 'js-cookie';
import store from "./vuex/index";
import VueScroll from 'vue-scroll'
import emoji from './components/emoji/api/emoji'
import './static/iconfont/iconfont.css'
import {  ToastPlugin,ConfirmPlugin,LoadingPlugin,AlertPlugin } from 'vux';
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin);
Vue.use(VueScroll)
axios.defaults.baseURL = window.baseURL||"";
Vue.prototype.$axios = axios;
Vue.prototype.$cookie = cookies;
Vue.prototype.$emoji = emoji;

FastClick.attach(document.body)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
