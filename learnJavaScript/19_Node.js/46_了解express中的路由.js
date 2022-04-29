/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-20 17:05:07
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 10:39:20
 * @FilePath: \19_Node.js\46_了解express中的路由.js
 */
// Express 中的路由：
// 在 Express 中， 路由指的是客户端的请求与服务器处理函数之间的映射关系。
// Express 中的路由分 3 部分组成，分别是请求的类型，请求的 URL 地址，处理函数，格式如下：
// app.METHOD(PATH, HANDLER);
//     类型   URL地址 处理函数

// 以下例子，便是 Express 中的路由：
// 匹配 GET 请求
app.get('/', function(req, res) {
    res.send('Hello!');
});

// 匹配 POST 请求
app.post('/', function(req, res) {
    res.send('Hello!');
});