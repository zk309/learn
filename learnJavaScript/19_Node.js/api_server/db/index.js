/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-26 21:39:32
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-26 21:49:04
 * @FilePath: \api_server\db\index.js
 */
// 导入 mysql 模块
const mysql = require('mysql');

// 建立与 MySQL 数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',  // 数据库的 IP 地址
    user: 'root',  // 登录数据库的账号
    password: 'admin123',  // 登录数据库的密码
    database: 'zk309_01'  // 指定要操作哪个数据库  
});

// 向外共享 db 数据库连接的对象
module.exports = db;