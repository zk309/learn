/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-29 17:14:34
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-29 18:37:50
 * @FilePath: \api_server\router_handler\article.js
 */

// 使用 express.urlencoded() 中间件无法解析 multipart/form-data 格式的请求体数据。
// 当前项目，推荐使用 multer 来解析 multipart/form-data 格式的表单数据。https://www.npmjs.com/package/multer

// 实现思路：通过 express-joi 自动验证 req.body 中的文本数据；通过 if 判断手动验证 req.file 中的文件数据；
``
// 导入处理路径的 path 核心模块:
const path = require('path');
const db = require('../db');
// 发布新文章路由的处理函数
module.exports.addArticle = (req, res) => {
    // console.log(req.body);  // 文本类型的数据
    // console.log('---------------------');
    // console.log(req.file);  // 文件类型的数据
    // res.send('!-_-!');  
    // 1. 在 /router_handler/article.js 模块中的 addArticle 处理函数中，通过 if 判断客户端是否提交了 封面图片：
    if (!req.file || req.file.fieldname !== 'cover_img') return res.cc('文章封面是必选参数!-_-!');  // 手动判断是否上传了文章封面
    // res.send('!-_-!');  

    // 实现发布文章的功能:
    const articleInfo = {
        ...req.body,  // 标题, 内容, 状态, 所属的分类Id
        cover_img: path.join('/uploads/', req.file.filename),  // 文章封面在服务器端的存放路径
        pub_date: new Date(),  // 文章发布的时间
        author_id: req.user.id  // 文章作者的 Id
    }
    const sql = `insert into ev_articles set ?`;  // 定义发布文章的 sql 语句
    db.query(sql, articleInfo, (err, results) => {
        if (err) return res.cc(err);  // 执行 sql 语句失败
        if (results.affectedRows !== 1) return res.cc('发布文章失败!-_-!');
        res.cc('发布文章成功!-_-!', 0);
    });
};