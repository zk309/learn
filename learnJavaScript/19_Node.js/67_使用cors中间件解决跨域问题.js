/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-22 20:31:23
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-23 09:09:04
 * @FilePath: \19_Node.js\67_使用cors中间件解决跨域问题.js
 */
// 使用 CORS 中间件解决跨域问题
// cors 是 Express 的一个第三方中间件. 通过安装和配置 cors 中间件, 可以很方便地解决跨域问题.
// 使用步骤分为如下 3 步:
// 1. 运行 npm install cors 命令安装中间件;
// 2. 使用 const cors = require('cors'); 导入中间件;
// 3. 在路由之前调用 app.use(cors()) 配置中间件, 注意 cors() 要加括号.


// 什么是 CORS?
// CORS (Cross-origin Resource Sharing, 跨域资源共享) 由一系列 HTTP 响应头组成, 这些 HTTP 响应头决定
// 浏览器是否阻止前端 JS 代码跨域获取资源.
// 浏览器的同源安全策略默认会阻止网页 "跨域" 获取资源. 但如果接口服务器配置了 CORS 相关的 HTTP 响应头,
// 就可以解除浏览器端的跨域访问限制.
// 1. 响应头的结果被浏览器拦截, 网页无法获取到跨域响应的数据.
// 2. 在服务器端, 配置 cors 相关的响应头, 从而解除浏览器端的跨域访问限制.


// CORS 的注意事项:
// 1. CORS 主要在服务器端进行配置. 客户端浏览器无需做任何额外的配置, 即可请求开启了 CORS 的接口;
// 2. CORS 在浏览器中有兼容性. 只有支持 XMLHttpRequest Level2 的浏览器, 才能正常访问开启了 CORS 的
// 服务端接口 (例如: IE10+, Chrome4+, FileFox3.5+);