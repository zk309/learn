/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-17 10:55:11
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-19 11:25:34
 * @FilePath: \19_Node.js\20_模块化概念.js
 */
// 什么是模块化?
// 模块化是指解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程。对于整个系统来说，
// 模块是可组合，分解和更换的单元。

// 编程领域中的模块化:
// 编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并互相依赖的多个小模块。
// 把代码进行模块化拆分的好处：
// 1. 提高了代码的复用性；
// 2. 提高了代码的可维护性；
// 3. 可以实现按需加载；

// 模块化规范：
// 模块化规范就是对代码进行模块化的拆分与组合时，需要遵守的那些规则。
// 例如：
// 1. 使用什么样的语法来引用模块;
// 2. 在模块中使用什么样的语法格式向外暴露成员;
// 模块化规范的好处:大家都遵守同样的模块化规范写代码, 降低了沟通的成本, 极大方便了各个模块之间的相互调用, 利人利己.

console.log('我是20_模块化概念.js -_-');

const userName = '刘一';

// 22_模块作用域
// (function get() {
//     console.log(userName);
// }());

// console.log('------------------');

// 24_module.exports对象
module.exports.userName = userName;

// \25_exports对象.js
exports.age = 12;
module.exports = {
    address: '天津',
    userName: userName
}

const zk309 = require('./zk309');
console.log(zk309);
console.log(zk309.dateFormat(new Date()));