/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-25 09:46:12
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-25 10:04:35
 * @FilePath: \19_Node.js\79_在项目中操作MySQL.js
 */
// 在项目中操作数据库的步骤:
// 1. 安装操作 MqSQL 数据库的第三方模块 (mysql);
// 2. 通过 mysql 模块连接到 MySQL 数据库;
// 3. 通过 mysql 模块执行 SQL 语句;

// 1. 安装 mysql 模块
// mysql 模块是托管于 npm 上的第三方模块. 它提供了在 Node.js 项目中连接和操作 MySQL 数据库的能力.
// 想要在项目中使用它, 需要先运行如下命令, 将 mysql 安装为项目的依赖包:
// npm install mysql

// 2. 配置 mysql 模块
// 在使用 mysql 模块操作 MySQL 数据库之前, 必须先对 mysql 模块进行必要的配置.

// 3. 测试 mysql 模块能正常工作
// 调用 db,query() 函数, 指定要执行的 SQL 语句, 通过回调函数拿到执行的结果.

// -----------------------------------------------------------

// 导入 mysql 模块
const mysql = require('mysql');
// 建立与 MySQL 数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',  // 数据库的 IP 地址
    user: 'root',  // 登录数据库的账号
    password: 'admin123',  // 登录数据库的密码
    database: 'zk309_01'  // 指定要操作哪个数据库
});

// 检测 mysql 模块能正常工作
db.query('select 1', (err, results) => {
    if (err) return console.log(err.message);

    console.log(results);
});