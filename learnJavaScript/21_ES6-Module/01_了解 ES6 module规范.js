/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-18 08:43:58
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-18 13:34:01
 * @FilePath: \21_ES6模块化与异步编程高级用法\了解 ES6 module.js
 */
// 回顾: node.js 如何实现模块化
// node.js 遵循了 CommonJS 的模块化规范, 其中:
// 1. 导入其他模块使用 require() 方法;
// 2. 模块化对外共享成员使用 model.exports 对象;
// 模块化的好处:
// 大家都遵循同样的模块化规范写代码, 降低了沟通的成本, 极大方便了各个模块之间的相互调用. 利人利己.

// 前端模块化规范的分类:
// 在 es6 模块化规范诞生之前, JavaScript 社区已经尝试并提出了 AMD, CMD, CommonJS 等模块化规范.
// 但是, 这些由社区提出的模块化标准, 还是存在一定的差异性和局限性, 并不是浏览器与服务器通用的模块化标准.
// 1. AMD 和 CMD 适用于浏览器端的 JavaScript 模块化;
// 2. COmmonJS 适用于服务端的 JavaScript 模块化;
// 太多的模块化规范给开发者增加了学习的难度与开发成本. 因此, 大一统的 es6 模块规范诞生了!

// 什么是 ES6 模块化规范 ?
// ES6 模块化规范是浏览器端与服务器端通用的模块化开发规范. 它的出现极大地降低了前端开发者的模块化学习成本, 
// 开发者不需额外学习 AMD, CMD, 或 CommonJS 等模块化规范.
// ES6 模块化规范中的定义:
// 1. 每个 js 文件都是一个独立的模块;
// 2. 导入其他模块成员使用 import 关键字;
// 3. 向外共享成员使用 export 关键字;