/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-13 20:41:07
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-14 00:02:14
 * @FilePath: \20_Vue2.0\90_vue-router的安装和配置.js
 */
// 什么是 vue-router:
// vue-router 是 vue.js 官方给出的路由解决方案. 它只能结合 vue 项目进行使用, 能够轻松管理 SPA 项目中组件的切换.

// 官方文档: https://router.vuejs.org/zh/

// vue-router 安装和配置的步骤:
// 1. 安装 vue-router 包;
// 2. 创建路由模块;
// 3. 导入并挂载路由模块
// 4. 声明路由链接和占位符;

// 1. 安装 vue-router 包;
// 在 vue2 项目中, 安装 vue-router:
// npm i vue-router@3.5.2 -S

// 2. 创建基本路由模块;
// 在 src 源代码目录下, 新建 router/index.js 路由模块, 并初始化如下的代码:
/*
  // 1. 导入 Vue 和 VueRouter 的包
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  // 2. 调用 Vue.use() 函数, 把 VueRouter 安装为 Vue 的插件
  Vue.use(VueRouter)

  // 3. 创建路由的实例对象
  const router = new VueRouter()

  // 4. 向外共享路由的实例对象
  export default router
*/

// 3. 导入并挂载路由模块;
// 在 main.js 进行如下的配置:
/*
  // 1. 导入 router 路由模块
  import router from '@/router/index.js'

  new Vue({
  render: h => h(App),
  // 2. 在 vue 项目中, 要想把路由用起来, 必须把路由实例对象, 通过下面的方式进行挂载.
  // router: router, 简写:
  router
}).$mount('#app')
*/

// 4. 声明路由链接和占位符;
/*
  app.vue文件:
  <!-- 当安装和配置了 vue-router 后, 就可以使用 router-link 来替换普通的 a 链接. -->
  <router-link to="/Home">首页</router-link>
  <router-link to="/Movie">电影</router-link>
  <router-link to="/About">关于</router-link>
  <hr />
  <!-- 只要在项目中安装和配置了 vue-router, 就可以使用 router-view 这个组件. -->
  <!-- router-view 作用: 占位符 -->
  <router-view></router-view>

  配置 index.js, src/router/index.js 就是当前项目的路由模块:
  // 创建路由的实例对象
  const router = new VueRouter({
  // 配置 'hash 地址' 与组件之间的对应关系.
  // routes 是一个数组, 作用: 定义 'hash 地址' 与组件之间的对应关系.
    routes: [
        { path: '/Home', component: Home },
        { path: '/Movie', component: Movie },
        { path: '/About', component: About }
      ]
  });

*/
