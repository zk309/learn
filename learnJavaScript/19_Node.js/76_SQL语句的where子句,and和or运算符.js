/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-24 22:44:19
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-24 23:22:26
 * @FilePath: \19_Node.js\76_SQL语句_where子句,and和or运算符.js
 */
// where 子句:
// 语法:
// where 子句用于限定选择的标准. 在select, update, delete 语句中, 皆可使用 where 子句来限定选择的标准.
// -- 查询语句中的 where 条件
// select 列名称 from 表名称 where 列 运算符 值
// -- 更新语句中的 where 条件
// update 表名称 set 列=新值 where 列 运算符 值
// -- 删除语句中的 where 条件
// delete from 表名称 where 列 运算符 值

// 可在 where 子句中使用的运算符
// =  等于
// <>  不等于  注意,在某些版本的SQL中, <> 可以写为 !=
// >  大于
// <  小于
// >=  大于等于
// <=  小于等于
// between  在某个范围内
// like  搜索某种模式 

// -- 查询 status 为 1 的所有用户
// select * from users where status=1
// -- 查询 id 大于 2 的所有用户
// select * from users where id>2
// -- 查询 userName 不等于 admin 的所有用户
// select * from users where userName!='admin'

// ---------------------------------------------------------------

// SQL 的 and 和 or  运算符
// 语法:
// and 和 or 可在 where 子语句中把两个或多个条件结合起来.
// and 表示必须同时满足多个条件, 相当于 javaScript 中的 && 运算符, 例如 if(a !== 10 && a !== 20);
// or 表示只要满足任意一个条件即可,相当于 javaScript 中的 || 运算符, 例如 if(a !== 10 || a !== 20);

// -- 使用 and 来显示所有 status=0 , 并且 id<3 的用户.
// select * from users where status=0 and id<3

// -- 使用 or 来显示所有 status=1, 或者 userName=zs 的用户.
// select * from users where status=1 or userName='张三'