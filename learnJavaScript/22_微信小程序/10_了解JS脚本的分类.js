/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-21 14:38:42
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-21 14:45:40
 * @FilePath: \22_微信小程序\10_了解js文件的分类.js
 */
// 小程序中的 .js 文件:
// 一个项目仅仅提供界面展示是不够的, 在小程序中, 我们通过 .js 文件来处理用户的操作.例如响应用户的点击,
// 获取用户的位置等等.

// 小程序中 .js 文件的分类:
// 1. app.js  整个小程序项目的入口文件, 通过调用 App() 函数来启动整个小程序;
// 2. 页面的 .js 文件  单个页面的入口文件, 通过调用 Page() 函数来创建并运行页面;
// 3. 普通的 .js 文件  功能模块文件, 常用来封装公共的函数或属性供页面来使用;