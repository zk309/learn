/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-27 23:46:59
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-31 19:23:27
 * @FilePath: \22_微信小程序\67_了解WXS脚本.js
 */
// 什么是 WXS?
// WXS (WeiXin Script) 是小程序独有的一套脚本语言, 结合 WXML, 可以构建出页面的结构.

// WXS 的应用场景:
// WXML 中无法调用在页面的 .js 中定义的函数, 但是,  WXML 中可以调用 WXS 中调用的函数. 因此, 小程序中
// WXS 的典型应用场景就是 "过滤器";

// WXS 和 JavaScript 的关系:
// 虽然 WXS 的语法类似于 JavaScript, 但是 WXS 和 JavaScript 是完全不同的两种语言:
// 1. WXS 有自己的数据类型:
//    number 数据类型, string 字符串类型, boolean 布尔类型, object 对象类型, function 函数类型,
//    array 数组类型, data 日期类型, regexp 正则
// 2. WXS 不支持类似于 ES6 及以上的语法形式:
//    不支持: let, const, 解构赋值, 展开运算符, 箭头函数, 对象属性简写, etc...
//    支持:   var 定义变量, 普通 function 函数等类似于 ES5 的语法
// 3. WXS 遵循 CommonJS 规范:
//    module 对象, require() 函数, module.exports 对象

