/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-14 17:46:45
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-14 17:49:40
 * @FilePath: \20_Vue2.0\97_next函数的3种调用方式.js
 */
// next 函数的 3 种调用方式:
// 当前用户拥有后台主页的访问权限, 直接放行: next()
// 当前用户没有后台主页的访问权限, 强制其跳转到登录页面: next('/login')
// 当前用户没有后台主页的访问权限, 不允许跳转到后台主页: next(false)
