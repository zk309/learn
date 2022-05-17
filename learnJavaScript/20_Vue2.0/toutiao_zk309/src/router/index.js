/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-15 14:28:51
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-17 18:05:45
 * @FilePath: \toutiao\src\router\index.js
 */
// 导入 vue 和 vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Home from '@/views/Home/Home.vue'
import Users from '@/views/Users/Users.vue'

// 把 VueRouter 安装为插件
Vue.use(VueRouter)

// 路由规则
const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: Home, meta: { isRecord: true, top: 0 } },
  { path: '/users', component: Users }
]

// 创建 VueRouter 的实例对象
const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 1. return 期望滚动到哪个位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: to.meta.top || 0 }
    }
  }
})

// 向外导出 router
export default router
