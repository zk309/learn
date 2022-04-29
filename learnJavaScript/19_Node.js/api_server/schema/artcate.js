/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-29 09:17:22
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-29 15:35:59
 * @FilePath: \api_server\schema\artcate.js
 */
// 导入定义验证规则的模块
const joi = require('@hapi/joi');

// 定义 分类名称 和 分类别名 的校验规则
const name = joi.string().required();
const alias = joi.string().alphanum().required();

// 定义 分类 id 的校验规则
const id = joi.number().integer().min(1).required();

// 校验规则对象 - 添加分类
module.exports.add_cate_schema = {
    body: {
        name,
        alias
    }
}

// 校验规则对象 - 删除分类
module.exports.delete_cate_schema = {
    params: {
        id
    }
}

// 校验规则对象 - 根据 id 获取分类
module.exports.get_cate_schema = {
    params: {
        id
    }
}

// 校验规则对象 - 更新分类
module.exports.update_cate_schema = {
    body: {
        Id: id,
        name,
        alias
    }
}