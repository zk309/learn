/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-18 14:13:55
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-18 14:19:23
 * @FilePath: \21_ES6 Module\03_ES6 MOdule默认导出.js
 */
// 默认导出:
// 默认导出的语法: export default 默认导出的成员

let a1 = '刘一'; // 定义模块私有成员
let a2 = '陈二';
function show() { console.log('!-_-! 好累~'); }  // 定义模块私有方法

export default {
  a1,
  show
}