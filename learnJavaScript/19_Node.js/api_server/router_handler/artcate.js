/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-28 20:47:08
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-29 16:15:54
 * @FilePath: \api_server\router_handler\artcate.js
 */
// 导入数据库模块
const db = require('../db/index');

// 获取文章分类列表
// 4.2.0 实现步骤
// 初始化路由模块
// 初始化路由处理函数模块
// 获取文章分类列表数据
// 获取文章分类列表数据的处理函数:
module.exports.getArtCleCate = (req, res) => {
    // res.send('!-_-!');  
    const sql = `select * from ev_article_cate where is_delete=0 order by id asc`;  // 根据分类的状态, 获取所有未被删除的分类列表数据. 这个 sql 语句很妙!排除了标记为删除的分类.
    db.query(sql, (err, results) => {
        if (err) return res.cc(err);  // 执行 sql 语句失败
        res.send({   // 执行 sql 语句成功
            status: 0,
            message: '获取文章分类列表成功!-_-!',
            data: results,
        })
    });
};

// 新增文章分类
// 4.3.0 实现步骤
// 定义路由和处理函数
// 验证表单数据
// 查询 分类名称 与 分类别名 是否被占用
// 实现新增文章分类的功能
// 新增文章分类的处理函数:
module.exports.addArtCleCate = (req, res) => {
    // res.send('!-_-!');  
    // 1. 查询分类名称与别名是否被占用
    const sql = `select * from ev_article_cate where name=? or alias=?`;  // 定义查询 分类名称 与 分类别名 是否被占用的 SQL 语句
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err);  // 执行 sql 语句失败
        // 分类名称 和 分类别名都被占用
        if (results.length === 2) return res.cc('分类名称与别名被占用, 请更换后重试!-_-!');
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称与别名被占用, 请更换后重试!-_-!'); 
        // 分类名称 或 分类别名被占用
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用, 请更换后重试!-_-!');
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用, 请更换后重试!-_-!');
        // 2. 新增文章分类的功能:
        const sqlArt = `insert into ev_article_cate set ?`;
        db.query(sqlArt, req.body, (err, results) => {
            if (err) return res.cc(err);  // 执行 sql 语句失败
            if (results.affectedRows !== 1)  return res.cc('新增文章分类失败!-_-!');  // 执行 sql 语句成功, 但是影响行数不等于 1
            res.cc('新增文章分类成功!-_-!', 0);  // 新增文章分类成功  
        });
    });
};

// 根据 Id 删除文章分类
// 4.4.0 实现步骤
// 定义路由和处理函数
// 验证表单数据
// 实现删除文章分类的功能
// 删除文章分类的处理函数:
module.exports.deleteCateById = (req, res) => {
    // res.send('!-_-!');  
    const sql = `update ev_article_cate set is_delete=1 where id=?`;
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err);  // 执行 sql 语句失败
        if (results.affectedRows !== 1)  return res.cc('删除文章分类失败!-_-!');  // 执行 sql 语句成功, 但是影响行数不等于 1
        res.cc('删除文章分类成功!-_-!', 0);
    });
};

// 根据 Id 获取文章分类数据
// 4.5.0 实现步骤
// 定义路由和处理函数
// 验证表单数据
// 实现获取文章分类的功能
// 根据 Id 获取文章分类的处理函数:
module.exports.getCateById = (req, res) => {
    // res.send('!-_-!');
    const sql = `select * from ev_article_cate where id=? && is_delete!=1`;  // 定义根据 id 获取文章分类的 sql 语句
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err);  // 执行 sql 语句失败
        if (results.length !== 1) return res.cc('获取文章分类数据失败, id名错误或id已被删除!-_-!');  // 执行 sql 语句成功, 但是没有查到任何数据. 
        res.send({  // 把数据响应给客户端
            status: 0,
            message: '获取文章分类数据成功!-_-!',
            data: results[0]
        })
    });
};

// 根据 Id 更新文章分类数据
// 4.6.0 实现步骤
// 定义路由和处理函数
// 验证表单数据
// 查询 分类名称 与 分类别名 是否被占用
// 实现更新文章分类的功能
// 根据 Id 更新文章分类数据处理函数:
module.exports.updateCateById = (req, res) => {
    // res.send('!-_-!');  
    // 1. 查询分类名称与别名是否被占用
    const sql = `select * from ev_article_cate where Id<>? and (name=? or alias=?)`;  // 先查询除了这条数据以外的所有数据, 查看 name 或者 alias 被占用了.
    db.query(sql, [req.body.Id, req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err);  //  sql 语句执行失败
        // 分类名称 和 分类别名 都被占用
        if (results.length === 2) return res.cc('分类与别名已经被其他数据被占用, 请更换!-_-!');
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) {
            return res.cc('分类与别名已经被其他数据被占用, 请更换!-_-!');
        }
        // 分类名称 或 分类别名 被占用
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称重复, 请更换!-_-!');
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别重复, 请更换!-_-!');
        // 2. 实现更新文章分类的功能
        const sqlId = `update ev_article_cate set ? where Id=? && is_delete!=1`;  // 定义更新文章分类的 sql 语句
        db.query(sqlId, [req.body, req.body.Id], (err, results) => {
            if (err) return res.cc(err);  // sql 语句执行失败
            if (results.affectedRows !== 1) return res.cc('更新文章分类失败!-_-!');   // 执行 sql 语句成功, 但是影响行数不等于 1
            res.cc('更新文章成功!-_-!', 0);
        });
    });
};