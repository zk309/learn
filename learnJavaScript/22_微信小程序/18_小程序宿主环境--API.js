/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-22 16:25:48
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-22 16:54:30
 * @FilePath: \22_微信小程序\18_小程序宿主环境--API.js
 */
// 小程序 API 概述:
// 小程序中的 API 是由宿主环境提供的, 通过这些丰富的小程序 API, 开发者可以方便的调用微信提供的能力.
// 例如, 获取用户信息, 本地存储, 支付功能等...

// 分类:
// 1. 事件监听 API
//    特点: 以 on 开头, 用来监听某些事件的触发
//    例子: wx.onWindowResize(function callback) 监听窗口尺寸变化的事件.

// 2. 同步 API
//    特点1: 以 Sync 结尾的 API 都是同步 API
//    特点2: 同步 API 的执行结果, 可以通过函数返回值直接获取, 如果执行出错会抛出异常.
//    例子: wx.setStorageSync('key', 'value') 向本地存储中写入内容.

// 3. 异步 API
//    特点: 类似于 jQuery 中的 $.ajax(options) 函数, 需要通过 success, fail, complete 接收调用的结果.
//    例子: wx.request() 发起网络数据请求, 通过 success 回调函数接收数据.