/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-30 12:26:51
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-30 13:22:49
 * @FilePath: \vuex_todolist\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index.js'

// 1、导入ant-design-vue 组件库
import Antd from 'ant-design-vue'

// 2、导入组件库的样式表
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
// 3、安装组件库
Vue.use(Antd)

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
