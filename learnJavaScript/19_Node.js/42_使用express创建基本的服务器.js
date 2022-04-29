/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 22:06:13
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-20 12:40:51
 * @FilePath: \19_Node.js\42_使用express创建基本的服务器.js
 */
// 1. 导入 express
const express = require('express');
// 2. 建立 web 服务器
const app = express();

// 4. 监听客户端的 GET 和 POST 请求，并向客户端返回具体的内容
// send() 方法很强大，轻松返回请求的数据。
app.get('/user', (req, res) => {
    res.send({name: '刘一', age: 20, gender: '男'});
});
app.post('/user', (req, res) => {
    res.send('请求成功!-_-!');
});

app.get('/query', (req, res) => {
    res.send(req.query);
});
app.get('/query/:id/:userName', (req, res) => {
    res.send(req.params);
});

// 3. 启动服务器
app.listen(82, () => {
    console.log('express server running at http://127.0.0.1:82');
});