/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-17 12:34:55
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-17 13:24:38
 * @FilePath: \19_Node.js\25_exports对象和module.exports对象.js
 */
// 由于 module.exports 单词写起来比较复杂, 为了简化向外共享成员的代码, Node 提供了 exports 对象. 默认情况下, 
// exports 和 module.exports 指向同一个对象, 最终共享的结果, 还是以 module.exports 指向的对象为准.

const custom = require('./20_模块化概念');

console.log(custom);
console.log(module.exports === exports); // true

// 注意:
// 1. 时刻谨记, require() 模块时, 得到的永远是 module.exports 指向的对象; 注意是完整对象, 而不是属性.
// 2. 建议在同一个的模块中, 不要同时使用 exports 和 module.exports;