/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 16:10:05
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 16:45:22
 * @FilePath: \21_ES6-Module\26_同步任务和异步任务的执行过程.js
 */
// 同步任务和异步任务的执行过程:
// 1. 同步任务由 JavaScript 主线程 按次序执行;
// 2. 异步任务委托给 宿主环境 执行;
// 3. 已完成的异步任务对应的回调函数, 会被加入到 任务队列 中等待执行;
// 4. JavaScript 主线程的 执行栈 被清空后会读取任务队列中的回调函数, 按次序执行;
// 5. JavaScript 主线程是不断重复上面第四步;