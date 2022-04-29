/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-21 22:35:58
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 23:04:45
 * @FilePath: \19_Node.js\60_内置中间件express.json()的使用.js
 */
// 导入 express 文件
const express = require('express');

// 建立服务器实例
const app = express();

// 中间件
// 注意, 除了错误级别的中间件, 其余的中间件, 必须在路由之前进行配置.
// /通过 express.json() 这个中间件, 解析表单中的 JSON 格式的数据.
app.use(express.json());

app.post('/', (req, res) => {
    // 在服务器, 可以使用 req.body 这个属性, 来接收客户端发送过来的请求体数据.
    // 默认情况下, 如果不配置解析表单数据的中间件, 则 req.body 默认等于 undefined
    console.log(req.body); // { userName: '刘一', age: 20 }
    res.send('增加用户成功!-_-!');
})

// 建立端口号
app.listen(8060, () => {
console.log('express server running at http://127.0.0.1:8060');
});