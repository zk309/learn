/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-22 00:39:44
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-22 01:02:14
 * @FilePath: \19_Node.js\62_body-parser第三方中间件的使用.js
 */
// 例如: 在 express@4.16.0 之前的版本中, 经常使用 body-parser 这个第三方中间件, 来解析请求体数据. 使用
// 步骤如下:
// 5.1 运行 npm install body-parser 命令安装中间件;
// 5.2 使用 require() 导入中间件;
// 5.3 调用 app.use() 注册并使用中间件;

// 导入 express 文件
const express = require('express');
// 2. 使用 require() 导入 body-parse;
const parser = require('body-parser');

// 建立服务器实例
const app = express();

// 中间件
//  调用 app.use() 注册并使用中间件;
app.use(parser.urlencoded({ extended:false }));

app.post('/user', (req, res) => {
    console.log(req.body); // [Object: null prototype] { userName: '红楼梦', publish: '天津图书出版社' }
    res.send('OK!-_-!');
})

// 建立端口号
app.listen(8062, () => {
console.log('express server running at http://127.0.0.1:8062');
});