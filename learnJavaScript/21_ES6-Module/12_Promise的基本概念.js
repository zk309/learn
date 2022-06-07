/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-18 19:24:39
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 13:05:04
 * @FilePath: \21_ES6-Module\12_Promise的基本概念.js
 */
// 这些看看就行，很乱~~~，因为我加了一点我的理解。

// Promise 的基本概念：

// 1. Promise 是一个构造函数
// 1.1 我们可以创建 Promise 的实例 const p = new Promise();
// 1.2 new 出来的 Promise 实例对象，代表一个异步操作；
// 1.3 利用 Promise 构造函数创建 Promise 实例的过程称为 对象的实例化;

// 2. Promise.prototype 上包含一个 .then() 方法
// 2.1 每一次 new Promise() 构造函数得到的实例对象;
// 2.2 都可以通过原型链的方式访问到 .then() 方法，例如 p.then();
// 2.3 构造函数原型链 prototype 上的方法直接挂载到实例对象上；

// 3. .then() 方法用来预先指定成功和失败的回调函数
// 3.1 p.then(成功的回调函数， 失败的回调函数);
// 3.2 p.then(result =>{}, error => {});
// 3.3 调用 .then() 方法时，成功的回调函数是必选的，失败的回调函数是可选的。
// 3.4 axios() 返回的是 Promise实例, 所以需要调用 .then();

// -----------------------------------