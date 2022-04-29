/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-29 17:40:24
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-29 17:56:09
 * @FilePath: \api_server\schema\article.js
 */
// 实现思路：通过 express-joi 自动验证 req.body 中的文本数据；通过 if 判断手动验证 req.file 中的文件数据；
``
// 导入定义验证规则的模块
const joi = require('@hapi/joi');

// 定义 标题, 分类Id, 内容, 发布状态 的验证规则
const title = joi.string().required();
const cate_id = joi.number().integer().min(1).required();
const content = joi.string().required().allow('');
const state = joi.string().valid('已发布', '草稿').required();

// 验证规则对象 - 发布文章
module.exports.add_article_schema = {
    body: {
        title,
        cate_id,
        content,
        state
    }
}