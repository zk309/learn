/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-23 23:18:03
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-23 23:54:21
 * @FilePath: \22_微信小程序\29_bindinput的语法格式.js
 */
// bindinput 的语法格式
// 在小程序中，通过 input 事件来响应文本框的输入事件。
// 注意： evt.detail.value 是变化过后的文本框最新的值.

// demo:
//   <input type="text" bind:input="inputHandler" />

// inputHandler(evt) {
  // evt.detail.value 是变化过后的文本框最新的值.
//   console.log(evt.detail.value);
// },