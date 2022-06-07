/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 09:35:45
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 09:39:05
 * @FilePath: \21_ES6-Module\18_Promise.race()方法赛跑机制.js
 */
// Promise.race() 方法 赛跑机制:
// Promise.race() 方法会发起并行的 Promise 异步操作, 只有任何一个异步操作完成, 就立即执行下一步的 .then() 操作.

// 注意:
// 1. 只有任何一个异步操作完成, 就立即执行下一步的 .then() 操作.

import thenFs from 'then-fs'

let promiseArray = [
  thenFs.readFile('./files/12.text', 'utf8'),
  thenFs.readFile('./files/2.text', 'utf8'),
  thenFs.readFile('./files/3.text', 'utf8')
]

Promise.race(promiseArray)
  .then(result => {
     console.log(result);  // one
  })
  .catch(err => {
    console.log(err);  // [Error: ENOENT: no such file or directory, open 'F:\ZKLearn\learnJavaScript\21_ES6-Module\files\12.text']
  })