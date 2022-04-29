/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-21 13:41:27
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 13:56:10
 * @FilePath: \19_Node.js\55_局部生效的中间件.js
 */
// 导入 express
const express = require('express');

// 建立服务器实例
const app = express();

// 局部生效的中间件
const mv = (req, res, next) => {
    console.log('我是一个局部生效的中间件.');
    // 必须要写 next();
    next();
};

// 路由实例:
app.get('/', mv, (req, res) => {
    res.send('Home Page.');
});
app.get('/user', (req, res) => {
    res.send('List Page.')
})

// 建立端口号
app.listen(8055, () => {
    console.log('express server running at http://127.0.0.1:8055');
});