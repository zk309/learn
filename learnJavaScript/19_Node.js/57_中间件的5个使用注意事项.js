/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-21 14:14:10
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 14:19:03
 * @FilePath: \19_Node.js\57_中间件的5个使用注意事项.js
 */
// 了解中间件的 5 个使用注意事项:
// 1. 一定要在路由之前注册中间件;
// 2. 客户端发送给过来的请求, 可以连续调用多个中间件进行处理;
// 3. 执行完中间件的业务代码之后, 不要忘记调用 next() 函数;
// 4. 为了防止代码逻辑混乱, 调用 next() 函数后不要再写额外的代码;
// 5. 连续调用多个中间件时, 多个中间件和路由之间, 共享 req 和 res 对象;
