/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-23 11:33:31
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-23 14:43:19
 * @FilePath: \19_Node.js\70_测试JSONP.js
 */
// 使用 express.static() 静态托管资源的方式, 来托管文件.

// 导入 express 文件
const express = require('express');

// 建立服务器实例
const app = express();

// 中间件
app.use('/static', express.static('./clock/'));

// 建立端口号
app.listen(8070, () => {
console.log('express server running at http://127.0.0.1:8070/static');
});

// -----------------------------------------------------------

// 回顾 JSONP 的概念与特点:
// 概念: 浏览器通过 <script> 标签的 src 属性, 请求服务器上的数据, 同时, 服务器返回一个函数的调用.
// 这种请求数据的方式叫做 JSONP.
// 特点:
// 1. JSONP 不属于真正的 Ajax 请求, 因为它没有使用 XMLHttpRequest 这个对象;
// 2. JSONP 仅支持 GET 请求, 不支持 POST, PUT, DELETE 等请求;

// -----------------------------------------------------------------------

// 实现 JSONP 接口的步骤:
// 1. 获取客户端发送过来的回调函数的名字;
// 2. 得到要通过 JSONP 形式发送给客户端的数据;
// 3. 根据前两步得到的数据, 拼接处一个函数调用的字符串;
// 4. 把上一步拼接得到的字符串, 响应给客户端的 <script> 标签进行解析执行;