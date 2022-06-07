/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 07:22:45
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 07:35:01
 * @FilePath: \21_ES6-Module\14_基于then-fs读取文件内容.js
 */
// 由于 node.js 官方提供的 fs 仅支持以回调函数的方式读取文件, 不支持 Promise 的调用方式. 因此,
// 需要先运行如下的命令, 安装 then-fs 这个第三方包, 从而支持我们基于 Promise 的方式读取文件的内容.

// npm install then-fs

// 基于then-fs读取文件内容:
// 调用 then-fs 提供的 readFile() 方法, 可以异步地读取文件的内容, 它的返回值是 Promise 的实例对象.
// 因此可以调用 .then() 方法为每个 Promise 异步操作指定成功和失败之后的回调函数.

// 注意: 下述无法保证文件的读取顺序, 需要作进一步的改进.

import thenFs from 'then-fs'

thenFs.readFile('./files/1.text', 'utf8').then(res1 => { console.log(res1); });
thenFs.readFile('./files/2.text', 'utf8').then(res2 => { console.log(res2); });
thenFs.readFile('./files/3.text', 'utf8').then(res3 => { console.log(res3); });