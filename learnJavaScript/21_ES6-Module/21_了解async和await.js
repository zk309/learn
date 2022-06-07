/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 14:24:05
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 14:28:22
 * @FilePath: \21_ES6-Module\21_了解async和await.js
 */
// 什么是 async/await?
// async/await 是 es8(ECMAScript 2017) 引入的新语法, 用来简化 Promise 异步操作. 
// 在 async/await 出现之前, 开发者只能通过 链式.then() 的方式处理 Promise 异步操作.

// .then 链式调用的优点: 解决了回调地狱的问题.
// .then 链式调用的缺点: 代码冗余, 阅读性差, 不易理解.