/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-20 08:25:56
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-20 08:42:36
 * @FilePath: \api接口案例\db\index.js
 */
import mysql from 'mysql2';

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  database: 'zk309_01', // 操作数据库的名称
  user: 'root', // 用户名
  password: 'admin123' // 密码
})

export default pool.promise(); // 默认导出一个支持 Promise API 的 pool.