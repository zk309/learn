/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-21 09:18:30
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 10:34:58
 * @FilePath: \19_Node.js\50_中间件的概念.js
 */
// 什么是中间件?
// 中间件 (Middleware), 特指业务流程的中间处理环节.

// 现实生活中的例子:
// 在处理污水的时候, 一般要经过三个处理环节, 从而保证处理过后的废水, 达到排放标准.
// 处理污水的这三个中间处理环节, 就可以叫做中间件.

// Express 中间件的调用流程:
// 在一个请求到达 Express 的服务器之后, 可以连续调用多个中间件, 从而对这次请求进行预处理.

// Express 中间件的格式:
// Express 的中间件, 本质上就是一个 function 处理函数, Express 中间件的格式如下:
// app.get('/', (req, res, next) => {
//     next();
// });
// 注意: 中间件函数的形参列表中, 必须包含 next 参数, 而路由处理函数只包含 req 和 res.

// next 函数的作用:
// next 函数是实现多个中间件连续调用的关键, 它表示把流转关系转交给下一个中间件或路由.