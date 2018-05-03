// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from "./utils/httpInterceptor"
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// ie浏览器的不兼容性
// import 'babel-polyfill'

Vue.use(iView);

Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示。

Vue.prototype.$http = axios;

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  // components: { App }, //  vue1.0的写法
  render: h => h(App),  // vue2.0的写法
  template: '<App/>'
}).$mount('#app')

export default vm;
