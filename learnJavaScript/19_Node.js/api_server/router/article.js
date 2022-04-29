/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-29 16:57:44
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-29 18:01:09
 * @FilePath: \api_server\router\article.js
 */
// 发布新文章
// 5.2.0 实现步骤
// 初始化路由模块
// 初始化路由处理函数模块
// 使用 multer 解析表单数据
// 验证表单数据
// 实现发布文章的功能

// 导入 express 文件
const express = require('express');
// 发布新文章路由的处理函数模块
const article_handler = require('../router_handler/article');
// 导入解析 formdata 格式表单数据的包
const multer = require('multer');
// 导入处理路径的核心模块
const path = require('path');
// 导入验证数据的中间件
const expressJoi = require('@escook/express-joi');
// 导入文章的验证模块
const { add_article_schema } = require('../schema/article');

// 创建 multer 的实例对象，通过 dest 属性指定文件的存放路径
const upload = multer({ dest:path.join(__dirname, '../uploads') });
 
// 建立路由实例
const router = express.Router();
 
// 在这里挂载对应的路由
// 发布新文章的路由
//  upload.single() 是一个局部生效的中间件, 用来解析 FormData 格式的表单数据
// 将文件类型的数据, 解析并挂载到 req.file 属性中
// 将文本类型的数据, 解析并挂载到 req.body 属性中
router.post('/add', upload.single('cover_img') , expressJoi(add_article_schema) ,article_handler.addArticle);

// 向外暴露 router 实例.
module.exports = router;