/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-25 10:34:06
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-25 10:57:41
 * @FilePath: \19_Node.js\80_查询和插入数据.js
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

// 查询 users 表中所有的数据
// db.query('select * from users', (err, results) => {
//     if (err) return console.log(err.message); // 查询失败

//     console.log(results);  // 查询成功
//     // 注意:
//     // 如果执行的是 select 查询语句, 则返回的结果是数组.
// });

// ------------------------------------------------------------------------------------------

// 插入数据
// const user = {userName: '赵六', password: '9876543210'};  // 要插入到 users 表中的数据
// // 在 sql 语句中, ? 表示占位符, 使用数组的形式依次为 ? 占位符指定具体的值.
// db.query('insert into users (userName, password) values (?, ?)', [user.userName, user.password], (err, results) => {
//      if (err) return console.log(err.message);  // 失败

//     // 如果执行的是 insert into 插入语句, 则 results 是一个对象, 可以通过 affectedRows 属性, 来判断是否插入数据成功.
//     // 插入的数据中, id 名具有唯一性.
//      console.log(results); 
//      if (results.affectedRows === 1) {  // 成功
//          console.log('插入数据成功!-_-!');
//      }
// });

// -------------------------------------------------------------------------------------------

// 插入数据的便捷方式
// 向表中新增数据时, 如果数据对象的每个属性和数据表的字段一一对应.
// 要插入到 users 表中的数据
const user = {
    userName: '孙七', 
    password: '9876543210'
};  
// 在 sql 语句中, ? 表示占位符, 使用数组的形式依次为 ? 占位符指定具体的值.
db.query('insert into users set ?', user, (err, results) => {
     if (err) return console.log(err.message);  // 失败
    //  console.log(results); 
     if (results.affectedRows === 1) {  // 成功
         console.log('插入数据成功!-_-!');
     }
});