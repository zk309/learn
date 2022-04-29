/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-25 09:11:12
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-25 09:27:13
 * @FilePath: \19_Node.js\78_SQL语句的count函数和as关键字.js
 */
// SQL 的 count(*) 函数
// 语法:
// count(*) 函数用于返回查询结果的总数据条数. 语法格式如下:
// select count(*) from 表名称

// -- 查询 users 表中的 status=0 的总数据条数
// select count(*) from users where status=0

// -----------------------------------------------

// 使用 as 为列设置别名, 别名不会改变原有的名字.
// 如果希望给查询出来的列名称设置别名, 可以使用 as 关键字, 示例如下:
// select count(*) as total from users where status=0