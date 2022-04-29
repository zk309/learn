/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-20 17:55:57
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 12:48:08
 * @FilePath: \19_Node.js\49_路由的模块化.js
 */
// 模块化路由
// 为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块，
// 将路由抽离为单独的模块的步骤如下:
// 1. 创建路由模块对应的 .js 文件;
// 2. 调用 express.Router() 函数创建路由对象;
// 3. 向路由对象上挂载具体的路由;
// 4. 使用 modules.express 向外共享路由对象;
// 5. 使用 app.use() 函数注册路由模块;

// 导入 express
const express = require('express');
// 建立服务器
const app = express();

// 1. 导入路由模块
const router = require('./router/user');
// 2. 注册路由模块
app.use('/api', router);

// 注意: 
// 1. app.use() 是用来注册全局中间件.
// 2. 为路由模块添加前缀, 类似于托管静态资源, 为静态资源统一挂载前缀一样, 路由模块添加前缀的方式也非常简单.

// 建立端口号:
app.listen(8049, () => {
    console.log('express server running at http://127.0.0.1:8049/api');
});