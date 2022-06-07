/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-21 09:27:25
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-21 09:36:00
 * @FilePath: \22_微信小程序\06_了解项目的基本结构.js
 */

// 项目的基本组成结构:
// pages 用来存放所有小程序的页面;
// utils 用来存放工具性质的模块 (例如: 格式化时间的自定义模块);
// app.js 小程序项目的入口文件;
// app.json 小程序项目的全局配置文件;
// app.wxss 小程序项目的全局样式文件;
// project.config.json 项目的配置文件;
// sitemap.json 用来配置小程序及其页面是否允许被微信索引;

// pages 文件夹的组成部分:
// 小程序官方建议把所有小程序的页面, 都存放在 pages 目录中, 以单独的文件夹存在.
// 其中, 每个页面由 4 个基本文件组成, 它们分别是:
// 1. .js 文件 (页面的脚本文件, 存放页面的数据, 事件处理函数.);
// 2. .json 文件 (当前页面的配置文件, 配置窗口的外观, 表现等.);
// 3. .wxml 文件 (页面的模板结构文件);
// 4. .wxss 文件 (当前页面的样式表文件);