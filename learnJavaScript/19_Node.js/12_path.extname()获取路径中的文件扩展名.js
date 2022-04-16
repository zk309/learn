/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-15 11:03:23
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-15 11:09:01
 * @FilePath: \19_Node.js\12_path.extname()获取路径中的文件扩展名.js
 */
// 使用 path.extname() 方法， 可以获取路径中的扩展名部分，语法格式如下：
// path.extname(path)
// 参数：
// path <string> 必选参数，表示一个路径的字符串
// 返回：<string> 返回得到的扩展名字符串

const path = require('path');

const fPath = '/a/b/c/index.html';
const fExt = path.extname(fPath);
console.log(fExt); // .html