/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 08:01:02
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 12:58:08
 * @FilePath: \21_ES6-Module\15_基于Promise按顺序读取文件的内容.js
 */

import thenFs from 'then-fs'

thenFs.readFile('./files/1.text', 'utf8')  // 1. 返回值是 Promise 实例对象
  .then((res1) => {  // 2. 通过 .then() 为第一个 Promise 实力指定成功之后的回调函数
    console.log(res1);
    return thenFs.readFile('./files/2.text', 'utf8')  // 3. 在第一个 .then() 中返回一个新的 Promise 实例对象
  })
  .then((res2) => {  // 4. 继续调用 .then() 为上一个 .then 的返回值 (新的 Promise 实例) 指定成功之后的回调函数
    console.log(res2);
    return thenFs.readFile('./files/3.text', 'utf8')  // 5. 在第二个 .then() 中返回一个新的 Promise 实例对象
  })
  .then((res3) => {  // 6. 继续调用 .then() 为上一个 .then 的返回值 (新的 Promise 实例) 指定成功之后的回调函数
    console.log(res3);
  })