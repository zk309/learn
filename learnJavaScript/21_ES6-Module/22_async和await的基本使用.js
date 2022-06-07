/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 14:29:00
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 15:28:25
 * @FilePath: \21_ES6-Module\22_async和await的基本使用.js
 */
// 使用 fs.readFile() 效果不行, 为什么? 因为 fs.readFile() 返回的不是不是 Promise 实例 可以使用 then-fs 第三方包.

// import fs from 'fs'

// async function getFile() {
//   await fs.readFile('./files/1.text', 'utf-8', (err, res) => {
//     if (err) return console.log(err);;
//     return console.log(res);;
//   });

//   await fs.readFile('./files/2.text', 'utf-8', (err, res) => {
//     if (err) return console.log(err);;
//     return console.log(res);;
//   });

//   await fs.readFile('./files/3.text', 'utf-8', (err, res) => {
//     if (err) return console.log(err);;
//     return console.log(res);;
//   });
// }

// getFile();

// --------------------------------------------------------------------

import thenFs from 'then-fs'

console.log('A');
(async function getFile() {

  console.log('C');
  const r1 = await thenFs.readFile('./files/1.text', 'utf8');
  console.log(r1);
  const r2 = await thenFs.readFile('./files/2.text', 'utf8');
  console.log(r2);
  const r3 = await thenFs.readFile('./files/3.text', 'utf8');
  console.log(r3);
  console.log('D');

}())
console.log('B');

// A
// C
// B
// one
// two
// three
// D