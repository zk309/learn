/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 08:43:58
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 08:51:00
 * @FilePath: \21_ES6-Module\16_通过.catch()捕获错误.js
 */
// 通过 .catch() 捕获错误:
// 1. 可以放在所有 .then() (即 Promise 的链式操作)之后, 但是一旦发生错误, 就不再执行之后的 .then();
// 2. 可以将 .catch() 提前调用, 后续的 .then() 可以正常执行.

import thenFs from 'then-fs'

thenFs.readFile('./files/101.text', 'utf8') 
  .catch((err) => {
    console.log(err);  // [Error: ENOENT: no such file or directory, open 'F:\ZKLearn\learnJavaScript\21_ES6-Module\files\101.text'] 
  })
  .then((res1) => {  
    console.log(res1);
    return thenFs.readFile('./files/2.text', 'utf8')  
  })
  .then((res2) => { 
    console.log(res2);
    return thenFs.readFile('./files/3.text', 'utf8') 
  })
  .then((res3) => {
    console.log(res3);
  })
