/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 15:11:06
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 15:13:05
 * @FilePath: \21_ES6-Module\22_async和await的注意事项.js
 */
// async/await 的使用注意事项:
// 1. 如果在 function 中使用 await, 则 function 必须被 async 修饰;
// 2. 在 async 方法中, 第一个 await 之前的代码会同步执行, await 之后的代码会异步执行;