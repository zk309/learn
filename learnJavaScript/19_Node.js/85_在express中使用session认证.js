/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-26 01:13:35
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-26 11:03:36
 * @FilePath: \19_Node.js\85_在express中使用session认证.js
 */
// 1. 安装 express-session 中间件
// 在 express 项目中, 只需要安装 express-session 中间件, 即可在项目中使用 session 认证:
// npm install express-session

//-------------------------------------------------------

// 2. 配置 express-session 中间件
// express-session 中间件安装成功后, 需要通过 app.use() 来注册 session 中间件.

// 导入 session 中间件
// const session = require('express-session');

// 配置 session 中间件
// append.use(session({
//     secret: 'keyboard cat',  // secret 属性的值可以为任意字符串
//     resave: false,  // 固定写法
//     saveUninitialized: true  // 固定写法
// }))

//--------------------------------------------------------

// 3. 向 session 中存数据
// 当 express-session 中间件配置成功后, 即可通过 req.session 来访问和使用 session 对象, 从而存储
// 用户关键信息.

//   // TODO_02：请将登录成功后的用户信息，保存到 Session 中
//   req.session.userInfo = req.body;  // 将用户的信息, 存储到 session 中
//   req.session.isLogin = true;  // 将用户的登录状态, 存储到 session 中

//   res.send({ status: 0, msg: '登录成功' })


// ------------------------------------------------------

// 4. 从 session 中取数据
// 可以直接从 req.session 对象上获取之前存储的数据, 获取用户姓名的接口

//   // TODO_03：请从 Session 中获取用户的名称，响应给客户端
//   // 判断用户是否登录
//   if (!req.session.isLogin) {
//       return res.send({ status:1, msg:'fail' })
//   }
//   res.send({
//       status: 0,
//       msg: 'success',
//       userInfo: req.session.userInfo.username
//   })

// ----------------------------------------------------------

// 5. 清空 session
// 调用 req.session.destroy() 函数, 即可清空服务器保存的 session 信息.
//  // TODO_04：清空 Session 信息
//   // 清空当前客户端对应的 session 信息
//   req.session.destroy();
//   res.send({
//       status: 0,
//       msg: '退出登录成功!-_-!'
//   });


// 案例在 ./01.session案例