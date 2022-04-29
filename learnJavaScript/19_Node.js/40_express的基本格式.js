/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 21:06:07
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-19 21:29:20
 * @FilePath: \19_Node.js\40_express地基本使用.js
 */

// 安装：
// 在项目所处的目录中，运行如下的终端命令，即可将 express 安装到项目中使用：
// npm i express@4.17.1

// 建立基本的 web 服务器
// 1. 导入 express
const express = require('express');
// 2. 创建 web 服务器
const app = express();
// 3. 调用 app.listen(端口号， 启动成功后的回调函数)，启动服务器。
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
});