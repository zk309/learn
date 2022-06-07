/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-18 17:31:56
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-18 18:05:01
 * @FilePath: \21_ES6-Module\07_ES6 Module按需导入.js
 */
// 按需导入：
// 按需导入的语法： import { s1 } from '模块化标识符'

import info, { s1 as str, s2, say } from './06_ES6 Module按需导出.js'

console.log(str);  // 刘一
console.log(s2);  // 陈二
console.log(say);  // [Function: say]

console.log(info());  // "!-_-!"