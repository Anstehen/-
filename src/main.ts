import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入手机端适配方案---hotcss
import "./lib/hotcss/hotcss.js";
// 全局公共样式
import "./assets/common.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
