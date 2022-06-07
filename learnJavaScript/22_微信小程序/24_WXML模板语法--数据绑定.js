/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-23 09:26:27
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-23 12:11:34
 * @FilePath: \22_微信小程序\24_数据绑定.js
 */
// 数据绑定的基本原则：
// 1. 在 data 中定义数据；
// 2. 在 .WXML 中使用数据；

// Mustache 语法格式：
// 把 data 中的数据绑定到页面中渲染，使用 Mustache 语法(双大括号) 将变量包起来即可。
// <view>{{ info }}</view>

// Mustache 语法的应用场景：
// Mustache 语法的主要应用场景如下：
// 1. 绑定内容；    <view>绑定内容: {{ msgInfo[0].msg }}</view>
// 2. 绑定属性；    <image src="{{ tupian }}"></image>
// 3. 运算 (三元运算， 算术运算 etc)    