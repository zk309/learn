/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 15:29:04
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 16:05:01
 * @FilePath: \21_ES6-Module\24_JS是单线程语言.js
 */
// JavaScript 是单线程的语言:
// JavaScript 是一门单线程执行的编程语言, 这意味着, 同一时间只能做同一件事.
// JavaScript 是单线程的, 它会把 耗时任务即异步任务 交托给宿主环境来执行, 本身还是单线程语言.

// 单线程执行任务队列的问题:
// 如果前一个任务非常耗时, 则后续的任务就不得不一直等待, 从而导致程序假死的问题.

// 为了防止某个耗时任务导致程序假死的问题, JS 把待执行的任务分为了两类.
// 1. 同步任务;
// 2. 异步任务;