/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 20:57:31
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 21:15:51
 * @FilePath: \21_ES6-Module\30_同步任务异步任务宏任务微任务面试题.js
 */
// 面试题1:
// setTimeout(function() {
//   console.log('1');
// })

// new Promise(function(resolve) {
//   console.log('2');
//   resolve()
// }).then(function() {
//   console.log('3');
// })

// console.log('4');
// 2 4 3 1
// 分析: 2 4 属于同步任务, 3 属于微任务, 1 属于宏任务



// 面试题2:
console.log('1');

setTimeout(function() {
  console.log('2');
  new Promise(function (resolve) {
    console.log('3');
    resolve();
  }).then(function() {
    console.log('4');
  })
})

new Promise(function(resolve) {
  console.log('5');
  resolve();
}).then(function() {
  console.log('6');
})

setTimeout(function() {
  console.log('7');
  new Promise(function(resolve) {
    console.log('8');
    resolve();
  }).then(function() {
    console.log('9');
  })
})
// 1 5 6 2 3 4 7 8 9
// 1 5 属于同步任务
// 2 3 属于异步任务
// 4 属于微任务
// 7 8 属于异步任务
// 9 属于微任务