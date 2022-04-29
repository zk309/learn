/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-17 09:16:56
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-20 17:17:47
 * @FilePath: \19_Node.js\19_http_时钟web服务器案例.js
 */
// 核心思路：
// 把文件的实际存放路径，作为每个资源的请求 url 地址。

// 1. 导入需要的模块;
const http = require('http');
const fs = require('fs');
const path = require('path');

// 2. 创建基本的 web 服务器；
// 2.1 创建 web 服务器
const server = http.createServer();

// 2.2 监听 web 服务器的 request 事件
server.on('request', function(req, res) {
    // 3. 将资源的请求 url 地址映射为文件的存放路径；
    // 获取到客户端请求的 url 地址
    const url = req.url;
    // 预定义空白的文件存放路径
    let fPath = '';

    // 5. 优化资源的请求路径；
    if (url === '/') {
        fPath = path.join(__dirname, './clock/index.html');
    } else {
        fPath = path.join(__dirname, './clock/',url);
    };

    // res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
    
    console.log(fPath);
    // 4. 读取文件内容并响应给客户端；
    // 4.1 根据映射过来的文件路径读取文件；
    fs.readFile(fPath, 'utf8', (err, dataStr) => {
        // 4.2 读取文件失败后，向客户端响应固定的 '错误信息'；
        if (err) return res.end('404 Not fount -_-');
        // 4.3 读取文件成功后，将 '读取成功后的内容' 响应给客户端；
        res.end(dataStr);
    });
});

// 2.3 启动 web 服务器
server.listen(8019, () => {
    console.log('server listen at http://127.0.0.1:8019');
});