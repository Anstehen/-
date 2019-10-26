import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant';
import 'vant/lib/index.css';

// 引入手机端适配方案---hotcss
import "./lib/hotcss/hotcss.js";
// 全局公共样式
import "./assets/common.css";
import axios from 'axios';
import Qs from 'qs';


Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://api.mzzghxz.com/mzzg';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//=>设置在POST请求中基于请求主体向服务器发送内容的格式，默认是RAW，项目中常用的是URL-ENCODEED格式
// axios.defaults.headers['Content-Type'] = 'appliction/x-www-form-urlencoded';
// axios.defaults.transformRequest = data => {
//   //=>DATA:就是请求主体中需要传递给服务器的内容（对象）
//   let str = ``;
//   for (let attr in data) {
//       if (data.hasOwnProperty(attr)) {
//           str += `${attr}:${data[attr]}&`;
//       }
//   }
//   return str.substring(0, str.length - 1);
// };
axios.defaults.transformRequest = data => {
  //=>DATA:就是请求主体中需要传递给服务器的内容（对象）
  let str = Qs.stringify(data);
  return str;
};


Vue.config.productionTip = false;
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
