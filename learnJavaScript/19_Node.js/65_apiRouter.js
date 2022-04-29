/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-22 18:45:00
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-23 15:02:21
 * @FilePath: \19_Node.js\65_apiRouter.js
 */
// 导入 express 文件
const express = require('express');
 
// 建立路由实例
const router = express.Router();
 
// 在这里挂载对应的路由
// GET 接口
router.get('/get', (req, res) => {
    const query = req.query;  // 获取到客户端通过查询字符串, 发送到服务器的数据.
    res.send({  // 调用 res.send(), 把数据响应给客户端.
        status: 0,  // 状态, 0 表示成功, 1 表示失败.
        msg: 'GET 请求成功!-_-!',  // 状态描述
        data: query  // 需要响应给客户端具体数据.
    });
});
// POST 接口
router.post('/post', (req, res) => {
    const body = req.body;  // 获取客户端通过请求体, 发送到服务器的 URL-encoded 数据.
    res.send({  // 调用 res.send(), 把数据响应给客户端.
        status: 0,  // 状态, 0 表示成功, 1 表示失败.
        msg: 'POST 请求成功!-_-!',  // 状态描述消息
        data: body  // 需要响应给客户端的具体数据.
    });
});
// DELETE 接口
router.delete('/delete', (req, res) => {
    res.send({  // 调用 res.send(), 把数据响应给客户端.
        status: 0,  // 状态, 0 表示成功, 1 表示失败.
        msg: 'DELETE 请求成功!-_-!',  // 状态描述消息
        data: req.body
    });
});

// PUT 接口

// 向外暴露 router 实例.
module.exports = router;