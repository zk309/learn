/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-20 17:44:27
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 12:47:49
 * @FilePath: \19_Node.js\48_路由最简单的用法.js
 */
// 在 Express 中使用路由最简单的方式，就是把路由挂载到 app 上，示例代码如下：
// 1. 导入 express 
const express = require('express');
// 2. 建立服务器
const app = express();

// 简单的路由:
app.get('/', (req, res) => { res.send('GET 请求') });
app.post('/', (req, res) => { res.send('POST 请求') });

// 3. 建立端口号
app.listen(8048, () => {
    console.log('express server running at http://127.0.0.1:8048');
})