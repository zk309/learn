/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 00:09:52
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-14 00:13:45
 * @FilePath: \20_Vue2.0\91_路由redirect重定向.js
 */
// 路由重定向:
// 路由重定向指的是: 用户在访问 地址A 的时候, 强制用户跳转到 地址C ,从而展示特定的组件页面.
// 通过路由规则的 redirect 属性, 指定一个新的路由地址, 可以很方便的设置路由的重定向:

/*
  创建路由的实例对象:
  const router = new VueRouter({
  // 配置 'hash 地址' 与组件之间的对应关系.
  // routes 是一个数组, 作用: 定义 'hash 地址' 与组件之间的对应关系.
  // 路由规则:
    routes: [
      // 当用户访问 / 的时候, 通过 redirect 属性跳转到 /Home 对应的路由规则.
      { path: '/', redirect: '/Home' },
      { path: '/Home', component: Home },
      { path: '/Movie', component: Movie },
      { path: '/About', component: About }
    ]
  })
*/
