/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 17:20:31
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 17:24:40
 * @FilePath: \21_ES6-Module\28_什么是宏任务和微任务.js
 */
// 什么是宏任务和微任务?
// JavaScript 把异步任务又作了进一步的划分, 异步任务又分为两类. 分别是:

// 1. 宏任务 (macrotask)
// 1.1 异步 Ajax 请求;
// 1.2 setTimeout, setInterval;
// 1.3 文件操作;
// 1.4 其他宏任务;

// 2. 微任务 (microtask)
// 2.1 Promise.then, .catch, .finally;
// 2.2 process.nextTick;
// 2.3 其他微任务;