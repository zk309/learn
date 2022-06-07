/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 16:49:47
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 17:02:22
 * @FilePath: \21_ES6-Module\27_EventLoop的基本概念.js
 */
// EventLoop 的基本概念:
// JavaScript 主线程从 '任务队列' 中读取异步任务的回调函数, 放到执行栈中依次执行.
// 这个过程是循环不断的, 所以整个的这种运行机制又称为 EventLoop (事件循环)

// demo: 面试题
import thenFs from 'then-fs'

console.log('A');
thenFs.readFile('./files/1.text', 'utf8').then(dataStr => {
  console.log('B');
})
setTimeout(() => {
  console.log('C');
}, 0)

console.log('D');
// AB 属于同步任务, CB 属于异步任务.
// A D C B