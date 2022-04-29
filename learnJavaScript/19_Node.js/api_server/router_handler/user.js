/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-26 21:16:39
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-28 10:14:07
 * @FilePath: \api_server\router_handler\user.js
 */
// 为了保证 路由模块 的纯粹性，所有的 路由处理函数，必须抽离到对应的 路由处理函数模块 中
// 在这里定义和用户相关的路由处理函数, 供 /router/user.js 模块进行调用.

// 导入数据库模块:
const db = require('../db/index');
// 导入第三方包, 来对密码进行加密存储.
const bcrypt = require('bcryptjs');
// 导入第三方包, 生成 JWT 的 Token 字符串.
const jwt = require('jsonwebtoken');
// 导入 jwtSecretKey 关键字字符串配置文件.
const config = require('../config');

// 注册用户的处理函数
// 实现步骤:
    // 1. 检测表单数据是否合法;
    // 2. 检测用户名是否被占用;
    // 3. 对密码进行加密处理;
    // 4. 插入新用户;
module.exports.regUser = (req, res) => {
    // res.send('reguser OK!-_-!');
    // 1. 判断用户名和密码是否为空
    const userInfo = req.body;  //  接收表单数据
    // if (!userInfo.username || !userInfo.password) {  // 判断数据是否合法
    //     // return res.send({ status: 1, message: '用户名或密码不能为空!-_-!' });
    //     return res.cc('用户名或密码不能为空!-_-!');
    // }
    // res.send('!-_-!');

    // 2. 检测用户名是否被占用
    const sqlUser = `select * from ev_users where username=?`;  // 定义 sql 语句
    db.query(sqlUser, [userInfo.username], function(err, results) {
        if (err) return res.cc(err);  // 执行 sql 语句失败
        if (results.length > 0) {  // 用户名被占用
            return res.cc('用户名被占用, 请更换其他用户名!-_-!');
        }
        // res.send('!-_!');

        // 3. 对密码进行加密处理;
        // 调用 bcrypt.hashSync(明文密码, 随机盐的长度) 方法, 对用户的密码进行加密处理, 返回的是加密之后的密码字符串.
        userInfo.password = bcrypt.hashSync(userInfo.password, 10);

        // 4. 插入新用户;
        const sqlInto = `insert into ev_users set ?`;
        db.query(sqlInto, { username: userInfo.username, password: userInfo.password }, function (err, results) {
            if (err) return res.cc(err);  // 执行 sql 语句失败
            if (results.affectedRows !== 1) {  // sql 语句执行成功, 但影响行数不为 1
                return res.cc('注册用户失败, 请稍后再试!-_-!');
            }
            res.cc('注册成功!-_-!', 0);  // 注册成功
        });
    })
}



// 登陆用户的处理函数
// 实现步骤
// 1. 检测表单数据是否合法;
// 2. 根据用户名查询用户的数据;
// 3. 判断用户输入的密码是否正确;
// 4. 生成 JWT 的 Token 字符串;
module.exports.login = (req, res) => {
    // res.send('login OK!-_-!');
    // 1. 检测表单数据是否合法;
    
    // 2. 根据用户名查询用户的数据;
    const userInfo = req.body;  // 接受表单数据
    const sqlUser = `select * from ev_users where username=?`;  // 定义 sql 语句
    // 数据表查询用户的数据
    db.query(sqlUser, userInfo.username, (err, results) => {  
       if (err) return res.cc(err); 
       if (results.length !== 1) return res.cc('登陆失败, 用户名错误!-_-!');  // 执行 SQL 语句成功，但是查询到数据条数不等于 1

       // 3. 判断用户输入的密码是否正确;
       // 拿着用户输入的密码,和数据库中存储的密码进行对比
       const compareResult = bcrypt.compareSync(userInfo.password, results[0].password);
       if (!compareResult) {  // 如果对比的结果等于 false, 则证明用户输入的密码错误
           return res.cc('登陆失败, 密码错误!-_-!');
       }

    //    res.cc('login OK!-_-!', 0);
       console.log(results);  // 登录的用户信息后台导出

       // 4. 生成 JWT 的 Token 字符串;
       // 通过 ES6 的高级语法，快速剔除 密码 和 头像 的值
       const user = { ...results[0], password: '', user_pic: '' };
       // 生成 Token 字符串
       const tokenStr = jwt.sign(user, config.jwtSecretKey, {
           expiresIn: '7h',  // token 有效期为 7 个小时.
       });
       res.send({  // 将生成的 Token 字符串响应给客户端
           status: 0,
           message: '登陆成功!-_-!',
           token: 'Bearer ' + tokenStr
       })

    });

}