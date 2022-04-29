/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-21 11:02:30
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-21 11:05:53
 * @FilePath: \19_Node.js\52_全局生效的中间件.js
 */
// 客户端发起的任何请求, 到达服务器之后, 都会触发的中间件, 叫做全局生效的中间件.
// 通过调用 app.use(中间件函数), 即可定义一个全局生效的中间件, 示例代码如下:

// 常量 mv 所指向的, 就是一个中间件.
const mv = (req, res, next) => {
    console.log('这是一个简单的中间件.');
    // 注意: 在当前中间件的业务处理完毕之后, 必须调用 next() 函数.
    // 表示把流转关系交给下一个中间件或路由.
    next();
}

// 定义全局生效的中间件
app.use(mv);