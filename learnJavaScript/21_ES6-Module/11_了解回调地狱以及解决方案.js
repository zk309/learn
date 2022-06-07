/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-18 19:17:27
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-27 14:08:33
 * @FilePath: \learnJavaScript\21_ES6-Module\11_了解回调地狱以及解决方案.js
 */

// 多层回调函数的相互嵌套，就形成了回调地狱。
setInterval(() => {
  console.log('one');

  setInterval(() => {
    console.log('two');

    setInterval(() => {
      console.log('three');
    }, 3000);
  }, 2000);
}, 1000);  // 其结果无规律。

// 回调地狱的缺点：
// 1. 代码耦合性太强，牵一发而动全身，难以维护。
// 2. 大量冗余的代码相互嵌套，代码的可读性变差。

// 如何解决回调函数的问题：
// ES6 (ECMAScript 2015) 中新增了 Promise 的概念。