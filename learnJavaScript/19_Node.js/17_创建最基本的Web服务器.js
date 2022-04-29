/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-16 16:45:48
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-16 17:40:21
 * @FilePath: \19_Node.js\17_创建最基本的Web服务器.js
 */
// 创建 Web 服务器的基本步骤：
// 1. 导入 http 模块；
const http = require('http');

// 2. 创建 web 服务器实例；
const server = http.createServer();

// 3. 为服务器实例绑定 request 事件， 监听客户端的请求；
server.on('request', (req, res) => {
    // console.log('Someone visit our web server!-_-!');

    // req 是请求对象，它包含了与客户端相关的数据和属性，例如：
    // req.url 是客户端请求的 URL 地址
    // req.method 是客户端的 method 请求类型
    const str = `亲爱的! Your request url is ${req.url}, and request method is ${req.method}`;
    console.log(str);
    console.log('------------------');

    // res 是响应对象，它包含了与服务器相关的数据和属性；
    // res.end() 方法的作用：
    // 向客户端发送指定的内容，并结束这次请求的处理过程
    // 如果发送的内容包含中文，为了防止中文显示乱码的问题，需要设置响应头, 设置后，字体也会发生变化。s
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(str);
});

// 4. 启动服务器；
server.listen(8080, () => {
    console.log('http server running at http://127.0.0.1:8080');
});