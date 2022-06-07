/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 15:37:35
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 18:02:35
 * @FilePath: \21_ES6-Module\25_同步任务和异步任务.js
 */
// 为了防止某个耗时任务导致程序假死的问题, JS 把待执行的任务分为了两类.
// 1. 同步任务;(synchronous)
// 1.1 又叫做非耗时任务, 指的是在主线程上排队执行的任务;
// 1.2 只有前一个任务执行完毕, 才能执行后一个任务;

// 2. 异步任务;(asynchronous)
// 2.1 又叫做耗时任务, 异步任务由 JavaScript 委托给宿主环境进行执行;
// 2.2 当异步任务执行完成后, 会通知 JavaScript 主线程执行异步任务的回调函数;
// 3.3 new Promise(function () {}) 里面的回调函数也是同步任务, 后面的 .then .catch .finally 属于异步任务中的微任务.