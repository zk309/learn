/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 17:38:51
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-14 17:42:04
 * @FilePath: \20_Vue2.0\96_全局前置守卫beforEach.js
 */
// 导航守卫可以控制路由的访问权限.

// 全局前置守卫:
// 每次发生路由的导航跳转时, 都会触发全局前置守卫, 因此, 在全局前置守卫, 程序员可以对每个路由进行权限的控制.

// 创建路由实例对象
// const router = new VueRouter({ ... })

// 调用路由实例对象的 beforeEach 方法, 即可声明 '全局前置守卫'
// 每次发生路由导航跳转的时候, 都会自动触发 fn 这个回调函数
// router.beforeEach(function(to, from, next) {
//   console.log(to)
//   console.log(from)
//   next()
// })
