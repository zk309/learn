/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-21 13:22:55
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 13:30:39
 * @FilePath: \19_Node.js\54_定义多个中间件.js
 */
// 定义多个全局中间件:
// 可以使用 app.use() 连续定义多个全局中间件, 客户端请求到达服务器之后, 会按照中间件定义的先后顺序依次进行调用.

// 导入 express
const express = require('express');
// 导入路由模块
const router = require('./router/user');

// 建立服务器
const app = express();

// 定义多个全局中间件
app.use((req, res, next) => {
    console.log('我是第一个中间件.');
    next();
});
app.use((req, res, next) => {
    console.log('我是第二个中间件.');
    next();
});
app.use((req, res, next) => {
    console.log('我是第三个中间件.');
    next();
});

// 注册路由模块
app.use(router);

// 建立端口号
app.listen(8054, () => {
    console.log('express server running at http://127.0.0.1:8054');
});