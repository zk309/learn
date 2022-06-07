/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-23 22:00:44
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-23 22:04:20
 * @FilePath: \22_微信小程序\27_在事件处理函数中为 data 中的数据赋值.js
 */
// 在事件处理函数中为 data 中的数据赋值
// 通过调用 this.setData(dataObject) 方法，可以给页面 data 中的数据重新赋值。

// demo: 
// 页面的 .js 文件
// Page({
//   data: {
//     count: 0
//   },
//   修改 count 的值
//   add(evt) {
//     this.setData({
//       count: this.data.count + 1
//     })
//   },
// })