/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-26 21:03:00
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-27 17:31:00
 * @FilePath: \api_server\router\user.js
 */
// 导入 express 文件
const express = require('express');
// 导入用户处理函数模块
const userHandler = require('../router_handler/user');
// 导入验证表单数据的中间件, 自动验证
const expressJoi = require('@escook/express-joi');
// 导入需要的验证规则对象规则
const { reg_login_schema } = require('../schema/user');
 
// 建立路由实例
const router = express.Router();
 
// 在这里挂载对应的路由 
// 注册新用户路由
// 1. 在注册新用户的路由中，声明局部中间件，对当前请求中携带的数据进行验证;
// 2. 数据验证通过后，会把这次请求流转给后面的路由处理函数;
// 3. 数据验证失败后，终止后续代码的执行，并抛出一个全局的 Error 错误，进入全局错误级别中间件中进行处理;
router.post('/reguser', expressJoi(reg_login_schema) ,userHandler.regUser);

// 登录路由
router.post('/login', expressJoi(reg_login_schema) ,userHandler.login);

// 向外暴露 router 实例.
module.exports = router;