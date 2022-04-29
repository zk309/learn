/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-17 07:47:49
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-17 08:05:05
 * @FilePath: \19_Node.js\18_根据不同的url相应不同的html内容.js
 */
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    const str = `亲爱的! Your request url is ${req.url}, and request method is ${req.method}`;
    console.log(str);
    
    const url = req.url; // 1. 获取请求的 url 地址
    let content = '<h1>404 Not found!-_-!</h1>'; // 2. 设置默认的内容为 404 Not Found
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'; // 3. 用户请求的是首页
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'; // 4. 用户请求的是关于页面
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8'); // 5. 设置 Content-Type 响应头，防止中文乱码。
    res.end(content); // 6. 把内容发送给客户端；
});

server.listen(8081, () => {
    console.log('http server running at http://127.0.0.1:8081');
});