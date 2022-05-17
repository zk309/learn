/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-12 15:57:37
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-13 11:35:59
 * @FilePath: \demo_eslint\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios' // 导入 axios

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.liulongbin.top:3006' // 全局配置 axios 请求的根路径.
Vue.prototype.$http = axios // 把 axios 挂载到 Vue 原型上. 今后,在每个 .vue 组件中发起请求,直接调用 this.$http 即可.

new Vue({
  render: (h) => h(App)
}).$mount('#app')
