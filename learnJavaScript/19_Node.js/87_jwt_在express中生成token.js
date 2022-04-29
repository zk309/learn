/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-26 15:10:46
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-26 16:27:37
 * @FilePath: \19_Node.js\87_jwt_在express中生成token.js
 */
// 1. 安装 jwt 相关的包
// 运行如下的命令, 安装如下两个 jwt 相关的包.
// npm install jsonwebtoken express-jwt
// 其中:
// 1. jsonwebtoken 用于生成 jwt 字符串;
// 2. express-jwt 用于将 jwt 字符串解析还原成 JSON 对象;

// -------------------------------------------------------

// 2. 导入 jwt 相关的包
// 使用 require() 函数, 分别导入 jwt 相关的包.
// TODO_01：安装并导入 JWT 相关的两个包，分别是 jsonwebtoken 和 express-jwt
const jwt = require('jsonwebtoken');  // 导入用于生成 jwt 字符串的包
const expressJWT = require('express-jwt');  // 导入用于将客户端发送过来的 JWT 字符串, 解析还原成 JSON 对象的包.

// ------------------------------------------------------

// 3. 定义 secret 密钥
// 为了保证 jwt 字符串的安全性, 防止 jwt 字符串在网络传输过程中被别人误解, 我们需要专门定义一个
// 用于加密和解密的 secret 密钥:
// 1. 当生成 jwt 字符串的时候, 需要使用 secret 密钥对用户的信息进行加密, 最终得到加密好的 jwt 字符串;
// 2. 当把 jwt 字符串解析还原成 JSON 对象的时候, 需要使用 secret 密钥进行解密
// TODO_02：定义 secret 密钥，建议将密钥命名为 secretKey
const secretKey = 'zk309!-_-!';

// ------------------------------------------------------------------------

// 4. 在登陆成功后生成 jwt 字符串
// 调用 jsonwebtoken 包提供的 sign() 方法, 将用户的信息加密成 jwt 字符串, 响应给客户端:
  // TODO_03：在登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端
  res.send({
    status: 200,
    message: '登录成功!-_-!',
    // 调用 jwt.sign() 生成 jwt 字符串, 三个参数分别是: 用户信息对象, 加密密钥, 配置对象.
    token: jwt.sign({username: userinfo.username}, secretKey, { expiresIn: '30s' }) // 要发送给客户端的 token 字符串
  });

// --------------------------------------------------------------------------

// 5. 将 jwt 字符串还原为 JSON 对象
// 客户端每次访问那些有权限接口的时候, 都需要主动通过请求头中的 Authorization 字段, 将 token 字符串
// 发送到服务器进行身份认证.
// 此外, 服务器可以通过 express.jwt 这个中间件, 自动将客户端发送过来的 token 解析还原成 JSON 对象.
// TODO_04：注册将 JWT 字符串解析还原成 JSON 对象的中间件
// 使用 app.use() 来注册中间件
// expressJWT({ secret: secretKey }) 就是用来解析 token 的中间件;
// .unless({ path: [/^\/api\//] })  用来指定哪些接口不需要访问权限;
// 注意, 一定要用 5.3.3 版本的 express-jwt, 否则会报错.
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }));

// ----------------------------------------------------------------------

// 6. 使用 req.user 获取用户信息
// 当 express-jwt 这个中间件配置成功之后, 即可在那些有权限的接口中, 使用 req.user 对象, 来访问从 jwt
// 字符串中解析出来的用户信息.
 // TODO_05：使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
  console.log(req.user);
  res.send({
    status: 200,
    message: '获取用户信息成功！',
    data: req.user // 要发送给客户端的用户信息
  });
  
// ---------------------------------------------------------------------------

// 7. 捕获解析 jwt 失败后产生的错误
// 当使用 express-jwt 解析 token 字符串时, 如果客户端发送过来的 token 字符串过期或不合法, 会产生一个解析失败的错误,
// 影响项目的正常运行. 我们可以通过 express 的错误中间件, 捕获这个错误并进行相关的处理.
// TODO_06：使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误
app.use( (err, req, res, next) => {
   // token 解析失败导致的错误
   if(err.name === 'UnauthorizedError') {
       return res.send({ status: 401, message: '无效的token!-_-!' });
   } 
   // 其他原因导致的错误
   res.send({ status:500, message: '未知错误!-_-!' })
});