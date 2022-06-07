/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-21 13:25:18
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-21 13:31:19
 * @FilePath: \22_微信小程序\08_了解wxml模板.js
 */
// 什么是 WXML ?
// WXML (WeiXin Markup Language) 是小程序框架设计的一套标签语言, 用来构建小程序页面的结构,
// 类似于网页开发中的 HTML.

// WXML 和 HTML 的区别:
// 1. 标签名称不同
//    HTML (div, span, img, a)
//    WXML (view, text, image, navigator)
// 2. 属性节点不同
//    <a href-"#">超链接</a>
//    <navigator url="/pages/home/home"></navigator>
// 3. WXML 提供了类似于 Vue 中的模板语法: 数据绑定, 列表渲染, 条件渲染.