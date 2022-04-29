/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 10:22:07
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-19 12:59:34
 * @FilePath: \19_Node.js\zk309\index.js
 */
// 导入格式化时间函数
const date = require('./src/dateFormat');

// 导入转义 和 还原 HTML 函数
const escape = require('./src/htmlEscape');

// 向外暴露函数
module.exports = {
    ...date,
    ...escape
};