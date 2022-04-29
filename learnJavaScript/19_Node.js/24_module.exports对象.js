/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-17 12:13:25
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-17 12:33:00
 * @FilePath: \19_Node.js\24_module.exports对象.js
 */
// module.exports 对象
// 在自定义模块中, 可以使用 module.exports 对象, 将模块内的成员共享出去, 供外界使用.
// 外界用 require() 方法导入自定义模块时, 得到的就是 module.exports 所指向的对象.

// 注意:
// 使用 require() 导入模块时, 导入的结果, 永远以 module.exports 指向的对象为准.

const custom = require('./20_模块化概念');

console.log(custom);
console.log(custom.userName);