/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 09:18:20
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 09:33:13
 * @FilePath: \21_ES6-Module\17_Pormise.all()方法.js
 */
// Promise.all() 等待机制:
// Promise.all() 方法会发起并行的 Promise 异步操作, 等所有的异步操作全部结束后才会执行下一步的 .then() 操作.

// 注意: 
// 1. 数组中的 Promise 实例的顺序就是最终结果的顺序.
// 2. 只要捕获到任何一个 Promise() 实例错误, 则会立即返回 .catch() 不会执行之后的 Promise() 实例;

import thenFs from 'then-fs'

let promiseArray = [
  thenFs.readFile('./files/1.text', 'utf8'),
  thenFs.readFile('./files/2.text', 'utf8'),
  thenFs.readFile('./files/3.text', 'utf8')
]

Promise.all(promiseArray)
  .then(result => {
     console.log(result);  // [ 'one', 'two\r\n', 'three' ]
  })
  .catch(err => {
    console.log(err);  // [Error: ENOENT: no such file or directory, open 'F:\ZKLearn\learnJavaScript\21_ES6-Module\files\121.text']
  })