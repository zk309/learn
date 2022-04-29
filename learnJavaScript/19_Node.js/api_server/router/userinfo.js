/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-27 15:20:09
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-28 20:50:19
 * @FilePath: \api_server\router\userinfo.js
 */
// 导入 express 文件
const express = require('express');
// 导入个人信息处理函数模块
const userInfo_handler = require('../router_handler/userinfo');
// 导入验证表单数据的中间件, 自动验证
const expressJoi = require('@escook/express-joi');
// 导入更新用户基本信息的验证规则对象
const { update_userInfo_schema } = require('../schema/user');
// 导入重置密码的验证规则
const { update_password_schema } = require('../schema/user');
// 导入更换用户头像的验证规则
const { update_avatar_schema } = require('../schema/user');
 
// 建立路由实例
const router = express.Router();
 
// 在这里挂载对应的路由

// 获取用户的基本信息路由
router.get('/userinfo', userInfo_handler.getUserInfo);

// 更新用户的基本信息路由
router.post('/userinfo', expressJoi(update_userInfo_schema) ,userInfo_handler.updateUserInfo);

// 重置密码的路由
router.post('/updatepwd', expressJoi(update_password_schema) ,userInfo_handler.updatePassword);

// 更换用户头像的路由
router.post('/update/avatar', expressJoi(update_avatar_schema) ,userInfo_handler.updateAvatar);

// 向外暴露 router 实例.
module.exports = router;