/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-18 10:55:25
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-18 12:00:26
 * @FilePath: \19_Node.js\30_格式化日期的高级做法.js
 */
// 格式化时间的高级做法
// 1. 使用 npm 包管理工具, 在项目中安装格式化时间的包 moment;
// 2. 使用 require() 导入格式化时间的包;
// 3. 参考 moment 的官方 API 文档对时间进行格式化;

// 1. 导入moment 包
const moment = require('moment');

// 2. 参考 moment 官方 API 文档, 调用对应的方法, 对时间进行格式化
// 2.1 调用 moment() 方法, 得到当前的时间
// 2.2 针对当前的时间, 调用 format() 方法, 按照指定的格式进行时间的格式化
const dt = moment().format("YYYY-MM-DD HH:mm:ss X");
console.log(dt); // 2022-04-18 11:38:35 1650253115