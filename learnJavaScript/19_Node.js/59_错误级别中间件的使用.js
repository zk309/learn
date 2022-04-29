/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-21 18:02:12
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 19:37:20
 * @FilePath: \19_Node.js\59_错误级别中间件的使用.js
 */
// 导入 express 文件
const express = require('express');

// 建立服务器实例
const app = express();

// 中间件
app.get('/',  (req, res) => {
    throw new Error('服务器内部出现错误!-_-!');
    res.send('Home Page');
});

// 错误类别的中间件
app.use( (err, req, res, next) => {
    // 向服务器打印错误消息
    console.log(err.message);
    // 向客户端发送错误信息
    res.send(err.message);
    // next();
})

// 建立端口号
app.listen(8059, () => {
console.log('express server running at http://127.0.0.1:8059');
});