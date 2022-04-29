/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-24 18:39:43
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-24 19:45:32
 * @FilePath: \19_Node.js\75_SQL语句.js
 */
// SQL 语句:

// SELECT 语句用于从表中查询数据. 执行的结果被存储在一个结果表中(称为结果集). 语法格式如下:
// -- 这是注释
// -- 从 form 指定的 [表中], 查询出 [所有的] 数据, * 表示 [所有列];
// select * form 表名称

// -- 从 form 指定的 [表中], 查询出指定 列名称(字段) 的数据;
// select 列名称 form 表名称

// 注意: SQL 语句中的关键字对大小写不敏感. select 等效于 SELECT, form 等效于 FORM;

// ---------------------------------------------------------------

// insert into 语句用于向数据表中插入新的数据行, 语法格式如下:
// -- 语法解读: 向指定的表中, 插入如下几列数据, 列的值通过 values 一一指定;
// -- 注意: 列和值要一一对应, 多个列和多个值之间, 使用英文的逗号分隔.
// insert into table_name (列1, 列2, ...) values (值1, 值2, ...);

// 向 users 表中, 插入一条 userName 为 李四, password 为 123456 的用户数据:
// insert into users (userName, password) values ('李四', '123456')

// ----------------------------------------------------------------

// update 语句用于修改表中的数据. 语法格式如下:
// -- 语法解读:
// -- 1. 用 update 指定要更新那个表中的数据
// -- 2. 用 set 指定列对应的新值;
// -- 3. 用 where 指定更新的条件
// update 表名称 set 列名称=新值 where 列名称=某值

// update 示例--更新某一行中的某一个列
// 把 users 表中 id 为 7 的用户密码, 更新为 8888888, 示例如下
// update users set password='8888888' where id=7

// update 示例--更新某一行中的若干列
// 把 users 表中 id 为 7 的用户密码更新为 8888888, 用户状态更新为 1 , 示例如下
// update users set password='8888888', status=1 where id=7

// -------------------------------------------------------

// delete 语句用于删除表中的行. 语法格式如下:
// -- 语法解读:
// -- 从指定的表中, 根据 where 条件, 删除对应的数据行
// delete from 表名称 where 列名称=值

// 从 users 表中, 删除 id 为 4 的用户, 示例如下:
// delete from users where id=4