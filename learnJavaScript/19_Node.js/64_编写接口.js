/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-22 18:44:31
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-23 14:48:58
 * @FilePath: \19_Node.js\64_编写接口.js
 */
// 导入 express 文件
const express = require('express');
// 导入路由模块
const router = require('./65_apiRouter');
// 导入 cors 中间件, 解决接口跨域问题
const cors = require('cors');

// 建立服务器实例
const app = express();

// 中间件
// 如果项目中已经配置了 CORS 跨域资源共享, 为了防止冲突, 必须在配置 CORS 中间件之前声明 JSONP 的接口.
// 否则 JSONP 接口会被处理成开启了 CORS 的接口.
app.get('/api/jsonp', (req, res) => {
    const funcName = req.query.callback;  // 获取客户端发送过来的回调函数的名字;
    const data = {name: '李四', age: 3};  // 得到要通过 JSONP 形式发送给客户端的数据;
    const scriptStr = `${funcName}(${JSON.stringify(data)})`;  // 根据前两步得到的数据, 拼接出一个函数调用的字符串;
    res.send(scriptStr);  // 把上一步拼接得到的字符串, 响应给客户端的 <script> 标签进行解析执行;
});
// 注册 cors 中间件, 解决接口跨域问题.
app.use(cors());  // 我的天, Ajax 得不到任何的返回数据, 找了半天的问题, 是因为没有加括号 cors();
// /通过 express.urlencoded() 这个中间件, 解析表单中的 URL-encoded 格式的请求体数据.
app.use(express.urlencoded({ extended:false }));
// 注册路由模块
app.use('/api', router);

// 建立端口号
app.listen(8064, () => {
console.log('express server running at http://127.0.0.1:8064/api');
});