/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-19 20:53:26
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-20 12:01:39
 * @FilePath: \19_Node.js\39_了解express.js
 */
// 什么是 express?
// 官方给出的概念: express 是基于 Node.js 平台, 快速,开放,极简的 web 开发框架.
// 通俗的理解是: express 的作用和 Node.js 内置的 http 模块类似, 是专门用来创建 web 服务器的.
// express 的本质: 就是一个 npm 上的第三方包, 提供了快速创建 web 服务器的便捷方法.

// Express 的中文官网： http://www.expressjs.com.cn/


// 进一步了解 express?
// 思考：不使用 Express 能否创建 Web 服务器？
// 答案：能，使用 Node.js 提供的原生 http 模块即可。

// 思考：既生瑜何生亮（有了 http 内置模块，为什么还有用 Express）？
// 答案：http 内置模块用起来很复杂，开发效率低；Express 是基于内置的 http 模块进一步封装出来的，能够极大的提高开发效率。

// 思考：http 内置模块与 Express 是什么关系？
// 答案：类似于浏览器中 Web API 和 jQuery 的关系。后者是基于前者进一步封装出来的。


// express 能做什么？
// 对于前端程序员来说，最常见的两种服务器，分别是：
//  1. Web 网站服务器：专门对外提供 Web 网页资源的服务器。
//  2. API 接口服务器：专门对外提供 API 接口的服务器。
// 使用 Express，我们可以方便、快速的创建 Web 网站的服务器或 API 接口的服务器。
