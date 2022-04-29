/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-27 10:43:05
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-28 17:28:52
 * @FilePath: \api_server\schema\user.js
 */
//  @hapi/joi 包，为表单中携带的每个数据项，定义验证规则
const joi = require('@hapi/joi');

/**
 * string()  值必须是字符串
 * alphanum()  值只能包含 a-zA-Z0-9 的字符串
 * min(length)  最小长度
 * max(length)  最大长度
 * required()  值是必填项, 不能为 undefined
 * pattern(正则表达式)  值必须符合正则表达式的规则
 * dataUri()  指的是如有所示的字符串数据: data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=
 */

// 用户名的验证规则
const username = joi.string().alphanum().min(1).max(10).required();

// 密码的验证规则
const password = joi.string().pattern(/^[\S]{6,12}$/).required();

// 定义 id, nickname, email 的验证规则
const id = joi.number().integer().min(1).required();
const nickname = joi.string().required();
const email = joi.string().email().required();

// 更换用户头像的验证规则
const avatar = joi.string().dataUri().required();

// 注册和登录的验证规则对象
module.exports.reg_login_schema = {
    // 表示需要对 req.body 中的数据进行验证
    body: {
        username,
        password
    }
}

// 更新用户基本信息的验证规则对象
module.exports.update_userInfo_schema = {
    body: {
        id,
        nickname,
        email
    }
}

//  重置密码的验证规则
module.exports.update_password_schema = {
    body: {
        // 使用 password 这个规则, 验证 req.body.oldPwd 的值
        oldPwd: password,
        // 使用 joi.not(joi.ref('oldPwd')).concat(password) 规则, 验证 req.body.newPwd 的值;
        // 解读:
        // 1. joi.ref('oldPwd')  表示 newPwd 的值必须和 oldPwd 得知保持一致;
        // 2. joi.not(joi.ref('oldPwd'))  表示 newPwd 的值不能等于 oldPwd 的值;
        // 3. .concat() 用于合并 joi.not(joi.ref('oldPwd')) 和 password 这两条验证规则;
        newPwd: joi.not(joi.ref('oldPwd')).concat(password)
    }
}

// 更换用户头像的验证规则
module.exports.update_avatar_schema = {
    body: {
        avatar
    }
}