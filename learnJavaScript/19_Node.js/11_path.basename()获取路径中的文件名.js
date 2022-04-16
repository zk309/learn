/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-15 09:54:22
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-15 10:58:34
 * @FilePath: \19_Node.js\11_path.basename()获取路径中的文件名.js
 */
// path.basename() 的语法格式
// 使用 path.basename() 方法， 可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下：
// path.basename(path[, ext]);
// 参数：
// path <string> 必选参数，表示一个路径的字符串；
// ext <string> 可选参数，表示文件扩展名；
// 返回：<string> 表示路径中的最后一部分；

const path = require('path');

const fPath = '/a/b/c/index.html'; // 文件的存放路径

var fullName = path.basename(fPath);
console.log(fullName); // index.html

var nameWithoutExt = path.basename(fPath, '.html');
console.log(nameWithoutExt); // index