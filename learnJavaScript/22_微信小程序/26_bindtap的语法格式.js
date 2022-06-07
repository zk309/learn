/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-23 17:33:55
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-23 17:43:04
 * @FilePath: \22_微信小程序\26_bindTap的语法格式.js
 */
// 在小程序中，不存在 HTML 中的 onclick 鼠标点击事件，而是通过 tap 事件来响应用户的触摸行为。

// 1. 通过 bindtap, 可以为组件绑定 tap 触摸事件。
//   <button type="primary" bind:tap="btnTapHandler">按钮</button>

// 2. 在页面的 .js 文件中定义对应的事件处理函数，事件参数通过形参 event (一般简写成 e) 来接收。我个人喜欢 evt.
// Page({
//   btnTapHandler(evt) {
//     console.log(evt);
//   },
// })