/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-25 07:44:21
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-25 08:05:09
 * @FilePath: \19_Node.js\77_SQL的order_by子句.js
 */
// SQL 的 order by 子句
// 语法:
// order by 语句用于根据指定的列对结果进行排序.
// order by 语句默认按照升序对记录进行排序.
// 如果你希望按照降序对记录进行排序, 可以使用 desc 关键字.

// -- order by 子句 --- 升序排序
// -- 对 users 表中的数据, 按照 status 字段进行升序排序, 示例如下:
// -- 注意: 如下两条 SQL 语句是等价的,
// --       因为 order by 默认进行升序排序;
// --       其中, asc 关键字代表升序排序;
// select * from users order by status;
// select * from users order by status asc;

// -----------------------------------------------

// -- order by 子句 --- 降序排序
// -- 对 users 表中的数据, 按照 status 字段进行降序排序, 示例如下:
// -- 注意: desc 代表降序排序
// select * from users order by status desc;

// -----------------------------------------------

// -- order by 子句 --- 多重排序
// -- 对 users 表中的数据, 先按照 status 字段进行降序排序, 再按照 userName 的字母顺序, 进行升序排序 示例如下:
// -- 注意: desc 代表降序排序
// select * from users order by status desc, userName asc