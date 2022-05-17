/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-01 10:22:03
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-06 09:15:03
 * @FilePath: \20_Vue2.0\08_安装配置html-webpack-plugin插件.js
 */
// 安装 html-webpack-plugin 的目的: 
// 1. 通过 HTML 插件复制到项目根目录中的 index.html 页面, 也被放到内存中;
// 2. HTML 插件在生成的 index.html 页面, 自动注入了打包的 bundle.js 文件;

// 安装:
// 运行如下的命令, 安装:
// npm install html-webpack-plugin@5.3.2 -D

// 配置 html-webpack-plugin:
// 1. 导入 HTML 插件, 得到一个构造函数:
// const HtmlPlugin = require('html-webpack-plugin');

// 2. 创建 HTML 插件的实例对象:
// const htmlPlugin = new HtmlPlugin({
//     template: './src/index.html',  // 指定原文件的存放路径
//     filename: './index.html'  // 指定生成的文件的存放路径
// })

// 3. 在 webpack.config.js 文件下配置:
// module.exports = {
//     mode: 'development',
//     plugins: [htmlPlugin], // 3. 通过 plugins 节点, 使 htmlPlugin 插件生效.
// }