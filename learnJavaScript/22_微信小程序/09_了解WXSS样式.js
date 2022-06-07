/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-21 13:56:03
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-21 14:06:14
 * @FilePath: \22_微信小程序\09_了解WXSS样式.js
 */
// 什么是 WXSS ?
// WXSS (WeiXin Style Sheets) 是一套样式语言, 用于描述 WXML 的组件样式, 类似于网页开发中的 CSS.

// WXSS 和 CSS 的区别:
// 1. WXSS 新增 rpx 尺寸单位;
//    1.1 CSS 中需要手动进行像素单位换算, 例如 rem;
//    1.2 WXSS 在底层支持新的尺寸单位 rpx, 不同大小的屏幕上小程序会自动进行换算;
// 2. WXSS 提供了全局的样式和局部样式;
//    小程序项目的根目录中的 app.wxss 会作用于小程序所有页面. 局部页面的 .wxss 样式仅对当前页面生效;
// 3. WXSS 仅支持部分 CSS 选择器;
//    类型、类和ID选择器, 并集选择器, 后代选择器, ::after 和 ::before 等伪类选择器.