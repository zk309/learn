/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-26 15:33:45
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-20 10:14:35
 * @FilePath: \02.jwt案例\app.js
 */
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// TODO_01：安装并导入 JWT 相关的两个包，分别是 jsonwebtoken 和 express-jwt
const jwt = require('jsonwebtoken');  // 导入用于生成 jwt 字符串的包
const expressJWT = require('express-jwt');  // 导入用于将客户端发送过来的 JWT 字符串, 解析还原成 JSON 对象的包.

// 允许跨域资源共享
const cors = require('cors')
app.use(cors())

// 解析 post 表单数据的中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// TODO_02：定义 secret 密钥，建议将密钥命名为 secretKey
const secretKey = 'zk309!-_-!';

// TODO_04：注册将 JWT 字符串解析还原成 JSON 对象的中间件
// 使用 app.use() 来注册中间件
// expressJWT({ secret: secretKey }) 就是用来解析 token 的中间件;
// .unless({ path: [/^\/api\//] })  用来指定哪些接口不需要访问权限;
// 注意, 一定要用 5.3.3 版本的 express-jwt, 否则会报错.
// 只要配置成功了 express-jwt 中间件, 就可以把解析出来的用户信息, 挂载到 req.user 属性上.
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }));

// 登录接口
app.post('/api/login', function (req, res) {
  // 将 req.body 请求体中的数据，转存为 userinfo 常量
  const userinfo = req.body
  // 登录失败
  if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
    return res.send({
      status: 400,
      message: '登录失败!'
    })
  }
  // 登录成功
  // TODO_03：在登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端
  res.send({
    status: 200,
    message: '登录成功!-_-!',
    // 调用 jwt.sign() 生成 jwt 字符串, 三个参数分别是: 用户信息对象, 加密密钥, 配置对象(配置当前 token 的有效期。).
    // 为了安全性, 千万不要把密码加密到 token 字符中.
    token: jwt.sign({username: userinfo.username}, secretKey, { expiresIn: '30s' }) // 要发送给客户端的 token 字符串
  });
});

// 这是一个有权限的 API 接口
app.get('/admin/getinfo', function (req, res) {
  // TODO_05：使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
  console.log(req.user);
  res.send({
    status: 200,
    message: '获取用户信息成功！',
    data: req.user // 要发送给客户端的用户信息
  });
})

// TODO_06：使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误
app.use( (err, req, res, next) => {
   // token 解析失败导致的错误
   if(err.name === 'UnauthorizedError') {
       return res.send({ status: 401, message: '无效的token!-_-!' });
   } 
   // 其他原因导致的错误
   res.send({ status:500, message: '未知错误!-_-!' })
});

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8888, function () {
  console.log('Express server running at http://127.0.0.1:8888')
})
