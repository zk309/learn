/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-29 10:34:58
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-29 10:58:12
 * @FilePath: \vuex_demo\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
