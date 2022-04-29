/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-27 15:47:11
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-28 19:53:47
 * @FilePath: \api_server\router_handler\userinfo.js
 */
// 导入数据库模块:
const db = require('../db/index');
// 导入第三方包, 来对密码进行加密存储.
const bcrypt = require('bcryptjs');

// 获取用户信息
// 实现步骤
// 1. 初始化 路由 模块;
// 2. 初始化 路由处理函数 模块;
// 3. 获取用户的基本信息;
module.exports.getUserInfo = (req, res) => {
    //   res.send('ok!-_-!');  
    // 3. 获取用户的基本信息;
    // 根据用户的 id, 查询用户的基本信息, 为了防止用户的密码泄露, 需要排除 password 字段.
    const sqlUser = `select id, username, nickname, email, user_pic from ev_users where id=?`;
    // 查询数据库
    // req.user 属性, 是 Token 解析成功后, express-jwt 中间件帮我们挂载上去的.
    db.query(sqlUser, req.user.id, (err, results) => {
       if (err) return res.cc(err);  // 执行 sql 语句失败
       if (results.length !== 1) return res.cc('获取用户信息失败!-_-!');  // 执行 sql 语句成功, 但是查询到的数据条数不等于1
       res.send({  // 将用户的信息响应给客户端
           status: 0,
           message: '获取用户基本信息成功!-_-!',
           data: results[0]
       })
    });
};

// 更新用户的基本信息
// 实现步骤
// 1. 定义路由和处理函数;
// 2. 验证表单数据;
// 3. 实现更新用户基本信息的功能;
module.exports.updateUserInfo = (req, res) => {
    // res.send('post !-_-!');  
    // 3. 实现更新用户基本信息的功能;
    const sql = `update ev_users set ? where id=?`;  // 定义 sql 语句
    db.query(sql, [req.body, req.body.id], (err, results) => {  // 执行 sql 语句
        if (err) return res.cc(err);  // 执行 sql 语句失败
        if (results.affectedRows !== 1) {  // sql 语句执行成功, 但影响行数不为 1
            return res.cc('修改用户基本信息失败, 请稍后再试!-_-!');
        }
        return res.cc('修改用户基本信息成功!-_-!', 0);
    });
};

// 重置密码
// 实现步骤
// 1. 定义路由和处理函数;
// 2. 验证表单数据;
// 3. 实现重置密码的功能;
module.exports.updatePassword = (req, res) => {
    // res.send('!-_-!');  
    // 1. 根据 id 查询用户是否存在：
    const sql = `select * from ev_users where id=?`;  // 根据 id 查询用户数据的 sql 语句, 修改密码, 只能修改自己的密码.
    db.query(sql, req.user.id, (err, results) => {  // 执行 sql 语句查询用户是否存在
        if (err) return res.cc(err);  // 执行 sql 语句失败
        if (results.length !== 1) return res.cc('用户不存在!-_-!');  // 检查指定的 id 用户是否存在.
        // res.send(results[0]);
        // 2. 判断提交的 旧密码 是否正确;
        // 在头部区域导入 bcryptjs 后，即可使用 bcrypt.compareSync(提交的密码，数据库中的密码) 方法验证密码是否正确
        // compareSync() 函数的返回值为布尔值，true 表示密码正确，false 表示密码错误
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password);
        if (!compareResult) return res.cc('原密码错误!-_-!');
        // 3. 对新密码进行 bcrypt 加密之后，更新到数据库中;
        const sqlPwd = `update ev_users set password=? where id=?`;  // 定义更新用户密码的 sql 语句
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10);  // 对新密码进行 bcrypt 加密处理
        db.query(sqlPwd, [newPwd, req.user.id], (err, results) => { 
            if (err) return res.cc(err);  // 执行 sql 语句失败
            if (results.affectedRows !== 1) {  // sql 语句执行成功, 但影响行数不为 1
                return res.cc('修改密码失败, 请稍后再试!-_-!');
            }
            res.cc('更新密码成功!-_-!', 0);
        });
    });
};

// 更换头像
// 实现步骤
// 1. 定义路由和处理函数;
// 2. 验证表单数据;
// 3. 实现更新用户头像的功能;
module.exports.updateAvatar = (req, res) => {
    // res.send('!-_-!');  
    const sql = `update ev_users set user_pic=? where id=?`;  // 定义更换头像的 sql 语句
    db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
        if (err) return res.cc(err);  // 执行 sql 语句失败
        if (results.affectedRows !== 1) {  // sql 语句执行成功, 但影响行数不为 1
            return res.cc('更换头像失败, 请稍后再试!-_-!');
        }
        return res.cc('更换头像成功!-_-!', 0);
    });
};