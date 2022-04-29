/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-22 11:54:54
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-22 13:41:13
 * @FilePath: \19_Node.js\63_自定义中间件body-parse.js
 */
// body-parse 自定义中间件:
// 自己手动模拟一个类似于 express.urlencoded 这样的中间件, 来解析 POST 提交到服务器的表单数据.
// 实现步骤:
// 1. 定义中间件;
    // 使用 app.use() 来定义全局生效的中间件
// 2. 监听 req 的 data 事件;
    // 在中间件中, 需要监听 req 对象的 data 事件, 来获取客户端发送到服务器的数据.
    // 如果数据比较大, 无法一次性发送完毕, 则客户端会把数据切割后, 分批发送到服务器. 所以 data 事件可能会触发
    // 多次, 每一次触发 data 事件时, 获取到数据只是完整数据的一部分, 需要手动对接收的数据进行拼接.
// 3. 监听 req 的 end 事件;
    // 当请求体数据接收完毕之后, 会自动触发 req 的 end 事件.
    // 因此, 我们可以在 req 的 end 事件中, na拿到并处理完整的请求体数据.
// 4. 使用 querystring 模块解析请求体数据;
    // Node.js 内置了一个 querystring 模块, 专门用来处理查询字符串. 通过这个模块提供的 parse() 函数, 可以轻松把
    // 查询字符串, 解析成对象的格式.
// 5. 将解析出来的数据对象挂载为 req.body;
    // 上游的中间件和下游的中间件及路由之间, 共享同一份 req 和 res. 因此, 我们可以将解析出来的数据, 挂载为 req 
    // 的自定义属性, 命名为 req.body, 供下游使用.
// 6. 将自定义中间件封装为模块;
    // 为了优化代码的结构, 我们可以把自定义的中间件函数, 封装为独立的模块.
//



// 导入 express 文件
const express = require('express');
// 导入自定义中间件模块
const bodyParse = require('zk309-body-parse');

// 建立服务器实例
const app = express();

// 中间件
// 1. 定义中间件;
app.use(bodyParse);

app.post('/user', (req, res) => {
    res.send(req.body);
})

// 建立端口号
app.listen(8063, () => {
console.log('express server running at http://127.0.0.1:8063');
});