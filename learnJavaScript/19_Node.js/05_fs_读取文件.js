/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-14 12:46:29
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-14 14:42:22
 * @FilePath: \19_Node.js\05_fs_读取文件.js
 */
// 什么是 fs 文件系统模块?
// fs 模块是 Node.js 官方提供的, 用来操作文件的模块, 它提供了一系列的方法和属性, 用来满足用户对文件的操作需求.
// 例如:
// 1. fs.readFile() 方法, 用来读取指定文件中的内容;
// 2. fs.writeFile() 方法, 用来向指定的文件中写入内容;
// 如果要在 JavaScript 代码中, 使用 fs 模块来操作文件, 则需要使用如下的方式先导入它:
// const fs = require('fs');

// 使用 fs.readFile() 方法, 可以读取指定文件中的内容, 语法格式如下:
// fs.readFile(path[, options], callback);
// 参数1: 必选参数, 字符串, 表示文件的路径;
// 参数2: 可选参数, 表示以什么编码格式来读取文件;
// 参数3: 必选参数, 文件读取完成之后, 通过回调函数拿到读取的结果;

// fs.readFile() 的示例代码:
// 以 utf8 的编码格式, 读取文件的内容, 并打印 err 和 dataStr 的值:

const fs = require('fs');
fs.readFile('./file/离骚.txt', 'utf8', function(err, result) {
    // console.log(err); // null ? '读取成功' : '读取失败, 返回错误对象.'
    // console.log('----------------');
    // console.log(data); // 如果读取失败, 返回 undefined;

    // 判断文件是否读取成功: 判断 err 对象是否为 null;
    if (err) {
        return console.log('文件读取失败:' + err);
    }
    console.log('文件读取成功:' + result);
});