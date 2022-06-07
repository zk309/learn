/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-21 15:31:44
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-21 16:25:28
 * @FilePath: \22_微信小程序\11_了解宿主环境.js
 */
// 什么是宿主环境?
// 宿主环境 (host environment) 指的是程序运行所必需的依赖环境.
// Android 系统和 ios 系统是两个不同的宿主环境. 安卓版的微信 APP 是不能在 ios 环境下运行,
// 所以, Android 是安卓软件的宿主环境, 脱离了宿主环境的软件是没有任何意义的.

// 小程序的宿主环境:
// 手机微信是小程序的宿主环境.
// 小程序借助宿主环境提供的能力, 可以完成许多普通网页无法完成的功能. 例如, 微信扫码, 微信支付, 微信登录, 地理位置, etc...

// 小程序宿主环境包含的内容:
// 1. 通信模型;
// 2. 运行机制;
// 3. 组件;
// 4. API;