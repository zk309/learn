/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-18 17:27:46
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-18 18:04:48
 * @FilePath: \21_ES6-Module\06_ES6 Module按需导出.js
 */
// 按需导出：
// 按需导出的语法： export 按需导出的成员

export let s1 = '刘一';  // 向外接收变量
export let s2 = '陈二';
export function say() {  // 向外按需导出方法
  console.log('!-_-!');
}

export default function() {
  // console.log('!-_-!');
  return '!-_-!';
}