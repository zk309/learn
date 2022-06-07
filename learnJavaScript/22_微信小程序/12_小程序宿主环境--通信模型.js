/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-21 16:46:27
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-21 16:53:09
 * @FilePath: \22_微信小程序\12_小程序宿主环境提供的通信模型.js
 */
// 通信主体:
// 1. 渲染层: WXML 模板和 WXSS 样式;
// 2. 逻辑层: JS 脚本;

// 小程序中的通信模型分为两部分:
// 1. 渲染层和逻辑层之间的通信: 由微信客户端 (Native) 进行转发;
// 2. 逻辑层和第三方服务器之间的通信: 由微信客户端 (Native) 进行转发;