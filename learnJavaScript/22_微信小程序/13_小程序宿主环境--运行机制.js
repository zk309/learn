/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-21 17:07:03
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-21 17:11:59
 * @FilePath: \22_微信小程序\13_小程序宿主环境--运行机制.js
 */
// 小程序启动的过程:
// 1. 把小程序的代码下载到本地;
// 2. 解析 app.json 全局配置文件;
// 3. 执行 app.js 小程序入口文件, 调用 APP() 创建小程序实例;
// 4. 渲染小程序首页;
// 5. 小程序启动完成;

// 页面渲染的过程:
// 1. 加载解析页面的 .json 配置文件;
// 2. 加载页面的 .wxml 模板和 .wxss 样式;
// 3. 执行页面的 .js 文件, 调用 Page() 创建页面实例;
// 4. 页面渲染完成;