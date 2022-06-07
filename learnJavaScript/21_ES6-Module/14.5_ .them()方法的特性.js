/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 12:58:02
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 12:58:14
 * @FilePath: \21_ES6-Module\14.5_ .them()方法的特性.js
 */
// .then() 方法的特性:
// 如果上一个 .then() 方法中 return 返回了一个新的 Promise 实例对象, 则可以通过下一个 .then() 继续进行处理. 
// 通过 .then() 方法的链式调用, 就解决了回调地狱的问题.


// 基于 Promise 按顺序读取文件的内容
// Promise 支持链式调用, 从而解决回调地狱的问题.