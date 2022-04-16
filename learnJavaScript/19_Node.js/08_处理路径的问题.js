/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-15 07:56:08
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-15 09:09:49
 * @FilePath: \19_Node.js\08_处理路径的问题.js
 */
// fs 模块 - 路径动态拼接的问题
// 在使用 fs 模块操作文件时, 如果提供的操作路径是以 ./ 或 ../ 开头的相对路径, 很容易出现路径动态拼接错误的问题.
// 原因: 代码在运行的时候, 会以执行 node 命令所处的目录, 动态拼接出操作文件的完整路径.

// 解决方案：
// 1. 在使用 fs 模块操作文件的时候，直接提供完整的路径，不要提供 ./ 或 ../ 开头的相对路径，从而防止路径动态拼接的问题。
const fs = require('fs');
//  注意：使用绝对路径，要以盘符开头，要使用转义符对 \ 转义；
fs.readFile('F:\\ZKLearn\\learnJavaScript\\19_Node.js\\file\\谏太宗十思疏.txt', 'utf8', function(err, data) {
    if (err) return console.log('获取文件失败!' + err);

    console.log('获取文件成功!' + data);
});

// 2. 使用 __dirname 拼接文件的完整路径；
// __dirname 表示当前文件所处的目录，
// const fs = require('fs');
// //  注意：使用绝对路径，要以盘符开头，要使用转义符对 \ 转义；
// fs.readFile(__dirname +'/file/谏太宗十思疏.txt', 'utf8', function(err, data) {
//     if (err) return console.log('获取文件失败!' + err);

//     console.log('获取文件成功!' + data);
// });