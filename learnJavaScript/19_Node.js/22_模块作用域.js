/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-17 11:39:46
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-17 11:51:51
 * @FilePath: \19_Node.js\22_模块作用域.js
 */
// 什么是模块作用域?
// 和函数作用域类似, 在自定义模块中定义的变量, 方法等成员, 只能在当前模块内被访问, 这种模块级别的访问限制, 
// 叫做模块作用域.

// 模块作用域的好处: 防止全局变量污染的问题.
const custom = require('./20_模块化概念');
console.log(userName); // userName is not defined