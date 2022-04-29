/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-18 10:28:42
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-18 10:49:02
 * @FilePath: \19_Node.js\29_传统方式格式化日期.js
 */
// 格式化时间的传统做法:
// 1. 创建格式化时间的自定义模块;
// 2. 定义格式化时间的方法;
// 3. 创建补零函数;
// 4. 从自定义模块中导出格式化时间的函数;
// 5. 导入格式化时间的自定义模块;
// 6. 调用格式化时间的函数;

const time = require('./28_TimeFormatting');

// console.log(time); // { TimeFormat: [Function: TimeFormat] }

const dt = new Date();
const newDate = time.TimeFormat(dt);

console.log(newDate);