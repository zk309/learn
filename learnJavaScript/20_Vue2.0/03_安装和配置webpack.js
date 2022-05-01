/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-01 08:10:04
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-01 12:03:15
 * @FilePath: \20_Vue2.0\03_安装和配置webpack.js
 */
//安装 webpack 目的是: 打包压缩文件, 兼容浏览器的 JavaScript 语法.

// 安装 webpack:
// 终端运行如下的命令:
// npm install webpack@5.42.1 webpack-cli@4.9.2 --save-dev
// -S 是 --save 的简写
// -D 是 --save-dev 的简写


// 配置 webpack:
// 1. 在项目的根目录中, 创建名为 webpack.config.js 的 webpack 的配置文件, 并初始化如下的基本配置:
// module.export = {
//      mode: 'development'  //mode 用来指定构建模式, 可选只有 development 和 production
// }
// 2. 在 package.json 的 scripts 节点下, 新增 dev 脚本如下:
// "scripts": {
//     "dev": "webpack"
// }
// 3. 在终端中运行 npm run dev 命令, 启动 webpack 进行项目的打包构建;