/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-17 11:20:25
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-17 13:42:35
 * @FilePath: \19_Node.js\21_模块的分类&require的使用.js
 */
// 加载模块
// 使用强大的 require() 方法, 可以加在需要的内置模块, 用户自定义模块, 第三方模块进行使用, 例如:
// 1. 加载内置的 fs 模块
const fs = require('fs');

// 2. 加载用户的自定义模块, 可以省略 .js 的后缀名.
const custom = require('./20_模块化概念');

// 3. 加载第三方模块
// const moment = require('moment');