/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-15 14:28:51
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-17 16:32:27
 * @FilePath: \toutiao\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入 vant 组件, 使用组件库, 感觉两个字:'舒服'.
import Vant from 'vant'
// import 'vant/lib/index.css'  // 舍弃 .css 文件, 引入 .less 文件, 开始自定义主题.
// 引入 vant 的 .less 文件, 自定义主题样式
import 'vant/lib/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
