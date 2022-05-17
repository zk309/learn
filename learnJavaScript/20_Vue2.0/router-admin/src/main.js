/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 19:37:34
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-15 15:45:38
 * @FilePath: \router-admin\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

// 导入 router 路由模块
import router from '@/router/index.js'

// 导入 bootstrap 样式
import './assets/css/bootstrap.css'
import './index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
