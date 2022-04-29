/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-21 22:57:36
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 23:05:40
 * @FilePath: \19_Node.js\61_内置中间件express.urlencoded()的使用.js
 */
// 导入 express 文件
const express = require('express');

// 建立服务器实例
const app = express();

// 中间件
// /通过 express.urlencoded() 这个中间件, 解析表单中的 URL-encoded 格式的请求体数据.
app.use(express.urlencoded({ extended:false }));

app.post('/', (req, res) => {
    // 在服务器, 可以使用 req.body 这个属性, 来接收客户端发送过来的请求体数据.
    console.log(req.body); // [Object: null prototype] { bookName: '西游记', publish: '北京图书出版社\n' }
    res.send('OK!-_-!')
})

// 建立端口号
app.listen(8061, () => {
console.log('express server running at http://127.0.0.1:8061');
});