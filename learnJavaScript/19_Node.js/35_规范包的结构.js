/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 09:29:55
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-19 09:36:30
 * @FilePath: \19_Node.js\35_规范包的结构.js
 */
// 规范的包结构
// 再清楚了包的概念, 以及如何下载和使用包之后, 接下来, 我们深入了解一下包的内部结构.

// 一个规范的包, 它的组成结构, 必须符合以下 3 点要求:
// 1. 包必须以单独的目录而存在;
// 2. 包的顶级目录下要必须包含 package.json 这个包管理配置文件;
// 3. package.json 中必须包含 name, version, main 这三个属性, 分别代表报的名字,版本号,包的入口;

// 注意: 以上 3 点的要求是一个规范的包结构必须遵守的格式. 关于更多的约束, 可以参考如下网址:
// https://yarnpkg.com/zh-Hans/docs/package-json