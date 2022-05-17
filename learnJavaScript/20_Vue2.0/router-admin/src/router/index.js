/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 19:48:29
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-15 11:59:49
 * @FilePath: \router-admin\src\router\index.js
 */
// 1. 导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import MyLogin from '@/components/MyLogin.vue'
import MyHome from '@/components/MyHome.vue'

// 导入嵌套路由
import MyGoods from '@/components/menus/MyGoods.vue'
import MyOrders from '@/components/menus/MyOrders.vue'
import MyRights from '@/components/menus/MyRights.vue'
import MySettings from '@/components/menus/MySettings.vue'
import MyUsers from '@/components/menus/MyUsers.vue'
import MyUsersInfo from '@/components/user/MyUserDetail.vue'

// 2. 调用 Vue.user() 函数, 把 VueRouter 安装为 Vue 的插件.
Vue.use(VueRouter)

// 3. 创建路由的实例对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: MyLogin },
    {
      path: '/home',
      component: MyHome,
      children: [
        { path: '', redirect: 'users' },
        { path: 'goods', component: MyGoods },
        { path: 'orders', component: MyOrders },
        { path: 'rights', component: MyRights },
        { path: 'settings', component: MySettings },
        { path: 'users', component: MyUsers },
        // 详情页
        { path: 'usersInfo/:id', component: MyUsersInfo, props: true }
      ]
    }
  ]
})

// 全局前置守卫
router.beforeEach(function(to, from, next) {
  // console.log(to.path)
  // console.log(to.path.substring(0, 5))
  if (to.path.substring(0, 5) === '/home') {
    // 严格检查 hash , 防止跳转到其他页面
    const token = localStorage.getItem('token')
    if (token) {
      next() // 访问的是后台主页, 且有 token 的值
    } else {
      next('/login') // 访问的是后台主页, 但是没有 token 的值
      alert('token 过期或失效!-_-!, 请重新登录. ')
    }
  } else {
    next() // 访问的不是后台主页
  }
})

// 4. 向外共享路由的实例对象
export default router
