/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-21 08:47:11
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 17:38:46
 * @FilePath: \19_Node.js\router\user.js
 */
// 创建路由模块

// 1. 导入 express
const express = require('express');
// 2. 创建路由对象
const router = express.Router();

// 3. 挂载路由
router.get('/user/list', (req, res) => {
    res.send('Get user list');
});
router.post('/user/add', (req, res) => {
    res.send('Add new user');
});

router.get('/', (req, res) => {
    console.log('调用了 / 路由');
    res.send('Home Page!-_-! ' + req.startTime);
});
router.get('/list', (req, res) => {
    console.log('调用了 /list 路由');
    res.send('List Page!-_-! ' + req.startTime);
});

// 4. 向外导出路由对象
module.exports = router;