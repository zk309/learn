/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-17 13:29:21
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-17 13:34:50
 * @FilePath: \19_Node.js\26_CommonJS模块规范.js
 */
// Node.js 遵循了 CommonJS 模块化规范, CommonJS 规定了模块的特性和各模块之间如何相互依赖.
// CommonJS 规定:
// 1. 每个模块内部, module 变量代表当前模块;
// 2. module 变量是一个对象, 它的 exports 属性 (即 module.exports) 是对外的接口;
// 3. 加载某个模块, 其实是加载该模块的 module.exports 属性. require() 方法用于加载模块.