/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-26 01:07:26
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-26 12:33:55
 * @FilePath: \19_Node.js\01.session案例\app.js
 */
// 导入 express 模块
const express = require('express');
// 导入 session 中间件
const session = require('express-session');


// 创建 express 的服务器实例
const app = express();


// TODO_01：请配置 Session 中间件
// 配置 session 中间件
app.use(session({
    secret: 'keyboard cat',   // secret 属性的值可以为任意字符串
    resave: false,  // 固定写法
    saveUninitialized: true  // 固定写法
}))

// 托管静态页面
app.use(express.static('./pages'))
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }));


// 登录的 API 接口
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  console.log(req.body);
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败' });
  }
  // TODO_02：请将登录成功后的用户信息，保存到 Session 中
  req.session.userInfo = req.body;  // 将用户的信息, 存储到 session 中
  req.session.isLogin = true;  // 将用户的登录状态, 存储到 session 中

  res.send({ status: 0, msg: '登录成功' });
});

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  // TODO_03：请从 Session 中获取用户的名称，响应给客户端
  // 判断用户是否登录
  if (!req.session.isLogin) {
      return res.send({ status:1, msg:'fail' })
  }
  res.send({
      status: 0,
      msg: 'success',
      userInfo: req.session.userInfo.username
  })
});

// 退出登录的接口
app.post('/api/logout', (req, res) => {
  // TODO_04：清空 Session 信息
  // 清空当前客户端对应的 session 信息
  req.session.destroy();
  res.send({
      status: 0,
      msg: '退出登录成功!-_-!'
  });
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(85, function () {
  console.log('Express server running at http://127.0.0.1:85');
})