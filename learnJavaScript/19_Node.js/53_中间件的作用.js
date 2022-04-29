/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-21 12:09:10
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 13:15:56
 * @FilePath: \19_Node.js\53_中间件的作用.js
 */

// 中间件的作用:
// 多个中间件和路由之间, 共享同一份 req 和 res, 基于这样的特性, 我们可以在上游的中间件中, 统一为 req 或 res 
// 对象自定义的属性或方法, 供下游的中间件或路由进行使用.

// 导入 express:
const express = require('express');
// 第三方包:
const zk309 = require('zk309');
// 导入路由模块
const router = require('./router/user');

// 建立服务器:
const app = express();

// 定义全局生效的中间件:
app.use((req, res, next) => {
    const dt = zk309.dateFormat(new Date());
    req.startTime = dt;
    next();
});

// 注册路由模块
app.use(router);

// 建立端口号:
app.listen(8053, () => {
    console.log('express server running at http://127.0.0.1:8053');
});
