/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-06-01 10:26:16
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-01 10:37:34
 * @FilePath: \22_微信小程序\76_组件和页面的区别.js
 */
// 组件和页面的区别:
// 从表面来看, 组件和页面都是由 .js, .json, .wxml 和 .wxss 这四个文件组成.
// 但是, 组件和页面的 .js 与 .json 文件有明显的不同:

// 1. 组件的 .json 文件中需要声明 "component": true 属性, 而页面 .json 文件中不需要声明;
// 2. 组件的 .js 文件中调用的是 Component() 函数, 而页面的 .js 文件中调用的是 Page() 函数;
// 3. 组件的事件处理函数需要定义到 methods 节点下, 而页面的事件处理函数与 data 平级;