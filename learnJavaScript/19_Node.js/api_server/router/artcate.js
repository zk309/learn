/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-28 20:26:14
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-29 15:32:06
 * @FilePath: \api_server\router\artcate.js
 */
// 导入 express 文件
const express = require('express');
// 获取文章分类管理的处理函数
const artCate_handler = require('../router_handler/artcate');
// 导入验证数据的中间件
const expressJoi = require('@escook/express-joi');
// 导入验证规则对象:
//    添加分类的验证规则   删除分类的验证规则   跟据id获取分类验证规则  更新分类的验证规则
const { add_cate_schema, delete_cate_schema, get_cate_schema, update_cate_schema } = require('../schema/artcate');
 
// 建立路由实例
const router = express.Router();
 
// 在这里挂载对应的路由
// 获取文章分类的列表数据路由
router.get('/cates', artCate_handler.getArtCleCate);

// 新增文章分类的路由
router.post('/addcates', expressJoi(add_cate_schema) ,artCate_handler.addArtCleCate);

// 删除文章分类的路由
router.get('/deletecate/:id', expressJoi(delete_cate_schema) , artCate_handler.deleteCateById);

// 根据 id 获取文章分类的路由
router.get('/cates/:id', expressJoi(get_cate_schema) ,artCate_handler.getCateById);

// 根据 Id 更新文章分类数据的路由
router.post('/updatecate', expressJoi(update_cate_schema) ,artCate_handler.updateCateById);

// 向外暴露 router 实例.
module.exports = router;