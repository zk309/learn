/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-23 19:43:49
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-24 08:56:47
 * @FilePath: \19_Node.js\71_数据库的基本概念.js
 */
// 数据库的基本概念:

// 什么是数据库?
// 数据库 (database) 是用来组织, 存储和管理数据的仓库.

// 当今世界是一个充满着数据的互联网世界, 充斥着大量的数据. 数据的来源有很多, 比如出行记录, 消费记录, 
// 浏览的网页, 发送的消息等等. 除了文本类型的数据, 图像, 音乐, 声音都是数据.

// 为了方便管理互联网世界中的数据, 就有了数据库管理系统的概念(简称: 数据库). 用户可以对数据库中的数据
// 进行新增, 查询, 更新, 删除等操作.

// ------------------------------------------------------

// 常见的数据库及分类:
// 市面上的数据库有很多种, 最常见的数据库有如下几个:
// 1. MySQL 数据库 (目前使用最广泛, 流行度最高的开源免费数据库: Community + Enterprise);
// 2. Oracle 数据库(付费);
// 3. SQL Server 数据库 (付费, 微软);
// 4. Mongodb 数据库 (Community + Enterprise);

// 其中, MySQL, Oracle, SQL Server 属于传统型数据库 (又叫做: 关系型数据库 或 SQL 数据库), 这三者的设计理念相同,
// 用法比较类似.

// 而 Mongodb 属于新型数据库 (又叫做: 非关系型数据库 或 NoSQL 数据库), 它在一定程度上弥补了传统型数据库的缺陷
// 注意, 关系型数据库和非关系型数据库是互补的, 不是谁更改好.

//  ------------------------------------------------------

// 传统型数据库的数据组织结构

// 数据的组织机构: 指的就是数据以什么样的结构进行存储.
// 传统型数据库的数据组织结构, 与 Excel 中数据的组织结构比较类似.
// 因此, 我们可以对比着 Excel 来了解和学习传统型数据的数据组织结构.

// Excel 的数据组织结构:
// 每个 Excel 中, 数据的组织结构分别为工作簿, 工作表, 数据行, 列这 4 大部分.
// 1. 整个 Excel 叫做工作簿;
// 2. users 和 books 是工作表;
// 3. users 工作表中有 3 行数据;
// 4. 每行数据由 6 列信息组成;
// 5. 每列信息都有对应的数据类型;

// 传统型数据库的数据组织结构:
// 在传统型数据库中, 数据的组织结构分为数据库(database), 数据表(table), 数据行(row), 字段(filed)这 4 大部分组成.
// 1. 数据库类似于 Excel 的工作簿;
// 2. 数据表类似于 Excel 的工作表;
// 3. 数据行类似于 Excel 的每一行数据;
// 4. 字段类似于 Excel 的列;
// 5. 每个字段都有对应的数据类型; 

// 实际开发中库, 表, 行, 字段的关系:
// 1. 在实际项目开发中, 一般情况下, 每个项目都对应独立的数据库.
// 2. 不同的数据, 要存储到数据库的不同表中, 例如: 用户数据存储到 users 表中, 图书数据存储到 books 表中;
// 3. 每个表中具体存储哪些信息, 由字段来决定, 例如: 我们可以为 users 表中设计 id, username, passwords 这 3 个字段;
// 4. 表中的行, 代表每一条具体的数据;