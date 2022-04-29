/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-26 20:53:20
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-29 19:01:46
 * @FilePath: \api_server\app.js
 */
// 导入 express 文件
const express = require('express');
// 导入 cors 中间件
const cors = require('cors');
//  导入 @hapi/joi 包,为表单中携带的每个数据项，定义验证规则
const joi = require('@hapi/joi');
// 导入 jwtSecretKey 关键字字符串配置文件.
const config = require('./config');
// 导入解析 token 的中间件
const expressJWT = require('express-jwt');

// 导入登录和注册的路由模块
const router = require('./router/user');
// 导入个人中心的路由模块
const userInfoRouter = require('./router/userinfo');
// 导入文章分类的路由模块
const artCateRouter = require('./router/artcate');
// 导入新文章路由模块
const articleRouter = require('./router/article');

// 建立服务器实例
const app = express();

// 中间件
// 将 cors 注册为全局中间件
app.use(cors());
// 内置中间件, express.urlencoded() 配置解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended:false }));
// 在处理函数中，需要多次调用 res.send() 向客户端响应 处理失败 的结果，为了简化代码，可以手动封装一个 res.cc() 函数
app.use( (req, res, next) => {
   res.cc = (err, status=1) => {  // status=0 成功, status=1 失败, 默认为1
       res.send({
           status,  // 状态
           message: err instanceof Error ? err.message : err  // 状态描述, 判断 err 是错误对象还是字符串.s
       })
   }; 
   next();
});
// 全局注册解析 token 的中间件
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }));


// 登陆和注册路由模块
app.use('/api', router);
// 个人信息路由模块  注意：以 /my 开头的接口，都是有权限的接口，需要进行 Token 身份认证
app.use('/my', userInfoRouter);
// 文章分类管理的路由模块
app.use('/my/article', artCateRouter);
// 新文章路由模块
app.use('/my/article', articleRouter);
// 将 uploads 目录中的图片托管为静态资源
app.use('/uploads', express.static('./uploads/'));

// app.js 中的错误级别中间件
app.use( (err, req, res, next) => {
    // 注册验证规则错误的中间件
    if (err instanceof joi.ValidationError) return res.cc(err);  // 数据验证失败
    res.cc(err);  // 未知错误

    // 捕获身份认证失败的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败!-_-!')
});

// 建立端口号
app.listen(3007, () => {
console.log('express server running at http://127.0.0.1:3007');
});