/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-21 10:42:43
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 12:55:12
 * @FilePath: \19_Node.js\51_定义最简单的中间件函数.js
 */
// 导入 express
const express = require('express');
// 导入路由模块
const router = require('./router/user');

// 建立服务器
const app = express();

// 常量 mv 所指向的, 就是一个中间件.
const mv = (req, res, next) => {
    console.log('这是一个简单的中间件.');
    // 注意: 在当前中间件的业务处理完毕之后, 必须调用 next() 函数.
    // 表示把流转关系交给下一个中间件或路由.
    next();
}

// 定义全局生效的中间件
app.use(mv);

// 注册路由模块:
app.use(router);

// 建立端口号:
app.listen(8051, () => {
    console.log('express server running at http://127.0.0.1:8051');
});


// console.log('-------------------------------------------------------------');

// // 导入 express
// const express = require('express');
// // 导入路由模块
// const router = require('./router/user');

// // 建立服务器
// const app = express();

// // 全局中间件的简写形式:
// app.use((req, res, next) => {
//     console.log('这是一个简单的中间件.');
//     // 注意: 在当前中间件的业务处理完毕之后, 必须调用 next() 函数.
//     // 表示把流转关系交给下一个中间件或路由.
//     next();
// });

// // 注册路由模块:
// app.use(router);

// // 建立端口号:
// app.listen(8051, () => {
//     console.log('express server running at http://127.0.0.1:8051');
// });
