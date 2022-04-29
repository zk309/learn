/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-25 12:11:39
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-25 12:47:44
 * @FilePath: \19_Node.js\81_更新和删除数据.js
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

// // 更新数据
// const user = {
//     id:34,
//     userName: '孙七',
//     password: '1234567890'
// };
// // 使用数组依次为占位符指定具体的值
// db.query('update users set userName=?, password=? where id=?', [user.userName, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message);  // 失败

//     if (results.affectedRows === 1) {  // 成功  
//         console.log('更新数据成功!-_-!');
//     }
// });

// --------------------------------------------------------

// 更新数据的便捷方式
// 更新数据时, 如果数据对象的每个属性和数据表的字段一一对应, 可以采取便捷的写法.
// const user = {
//     id:26,
//     userName: '郑十',
//     password: '1234567890'
// };
// // 使用数组依次为占位符指定具体的值
// db.query('update users set ? where id=?', [user, user.id], (err, results) => {
//     if (err) return console.log(err.message);  // 失败

//     if (results.affectedRows === 1) {  // 成功  
//         console.log('更新数据成功!-_-!');
//     }
// });

// ---------------------------------------------------------

// 删除数据
// 在删除数据时, 推荐根据 id 这样的唯一标识, 来删除对应的数据.
// 注意: 如果 sql 语句中有多个占位符, 则必须使用数组为每个占位符指定具体的值;
//       如果 sql 语句中只有一个占位符, 则可以省略数组;
// db.query('delete from users where id=?', 34, (err, results) => {
//     if (err) return console.log(err.message);  // 失败

//     if (results.affectedRows === 1) {  // 成功  
//         console.log('删除数据成功!-_-!');
//     }
// });

// -------------------------------------------------------

// 使用 delete 语句, 会真正把数据从表中删除掉, 为了保险起见, 推荐使用标记删除的形式, 来模拟删除的动作,
// 所谓的标记删除, 就是在表中设置类似于 status 这样的状态字段, 来标记当前这条数据是否被删除.

// 当用户执行删除的动作时, 我们并没有执行 delete 语句把数据删除掉, 而是执行了 update 语句, 将这条数据对应的 status 字段表记为删除即可.

// 把所有用户的状态
// db.query('update users set status=0 where status!=0', (err, results) => {
//    if (err) return console.log(err.message);  // 失败
//     if (results.affectedRows === 1) {  // 成功  
//         console.log('删除数据成功!-_-!');
//     }
// });

// 标记删除: 使用 update 语句替代 delete 语句; 只更新数据的状态, 并没有真正的删除
db.query('update users set status=1 where id=?', 2, (err, results) => {
    if (err) return console.log(err.message);  // 失败
    if (results.affectedRows === 1) {  // 成功  
        console.log('删除数据成功!-_-!');
    }
});