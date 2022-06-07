/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 17:26:54
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 17:28:03
 * @FilePath: \21_ES6-Module\29_宏任务和微任务的执行顺序.js
 */
// 宏任务和微任务的执行顺序:
// 每个宏任务执行完之后, 都会检查是否存在待执行的微任务.
// 如果有, 则执行完所有微任务之后, 再继续执行下一个宏任务.