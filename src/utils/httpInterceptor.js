/**
 * http配置
 */
import axios from 'axios'
import vm from '../main'
import qs from "qs";
// 超时时间
axios.defaults.timeout = 10000
// 全局的 axios 默认值
// axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// http请求拦截器
axios.interceptors.request.use(config => {
  // var secretKey = "\x50\x64\x50\x43\x49\x6c\x71\x41\x54\x66\x59\x6a\x59\x63\x69\x53\x44\x52\x63\x54\x7a\x78\x73\x58";
  // var iv = "\x31\x76\x69\x63\x32\x7a\x63\x62";
  window.localStorage.juid && (config.headers.juid = window.localStorage.juid);
  window.localStorage.customerId && (config.headers.customerId = window.localStorage.customerId);
  config.params == undefined && (config.params = {});
  config.data   == undefined && (config.data = {});

  // if ("get" === config.method) {
  //   window.localStorage.customerId && (config.params.customerBaseId = window.localStorage.customerId);
  //   // config.params = { record: DES3.encrypt(secretKey, JSON.stringify(config.params), iv) }
  //   config.params = JSON.stringify(config.params)
  // } else if ("post" === config.method) {
  //   window.localStorage.customerId && (config.data.customerBaseId = window.localStorage.customerId);
  //   config.data = qs.stringify({
  //     // record: DES3.encrypt(secretKey, JSON.stringify(config.data), iv)
  //     JSON.stringify(config.data)
  //   });
  // }
  return config
}, error => {
  vm.$Notice.error({ desc: '加载超时' });
  // vm.$toast({ message: "加载超时", position: "bottom", duration: 2000 });
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
  if(data.data.code == "0002"){
    vm.$Notice.error({ desc: data.data.message });
    // vm.$messagebox.alert(data.data.message);
  }
  if(data.data.code == "0006"){
    console.log(6)
    window.localStorage.clear();
    vm.$Notice.error({ desc: data.data.message }).then(action =>{
      vm.$router.push({name:"register"});
    });
    // vm.$messagebox.alert(data.data.message).then(action =>{
    //   vm.$router.push({name:"login"});
    // });
  }
  return data
}, error => {
  let message = /timeout/gi.test(error) ? '加载超时，请重试!' : '网络异常，请重试!'
  vm.$Notice.error({ desc: message })
  // vm.$toast({
  //   message:message,
  //   position:"bottom",
  //   duration:2000
  // })
  return Promise.reject(error)
})

export default axios
