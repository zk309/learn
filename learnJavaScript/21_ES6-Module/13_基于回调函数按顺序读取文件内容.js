/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 07:14:17
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 07:21:57
 * @FilePath: \21_ES6-Module\13_基于回调函数按顺序读取文件内容.js
 */
// 回调地狱:

import * as fs from 'fs';

// 读取文件 1
fs.readFile('./files/1.text', 'utf8', (err1, res1) => {
  if (err1) return console.log(err1.message);
  console.log(res1);

  // 读取文件 2
  fs.readFile('./files/2.text', 'utf8', (err2, res2) => {
    if (err2) return console.log(err2.message);
    console.log(res2);

    // 读取文件 3
    fs.readFile('./files/3.text', 'utf8', (err3, res3) => {
      if (err3) return console.log(err3.message);
      console.log(res3);
    })
  })
})