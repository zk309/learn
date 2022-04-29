/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-04-21 17:45:35
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-04-22 00:59:54
 * @FilePath: \19_Node.js\58_中间件的分类.js
 */
// 中间件的分类:
// 为了方便大家理解和记忆中间件的使用, Express 官方把常见的中间件用法, 分成了 5 大类, 分别是:
// 1. 应用级别的中间件;
// 2. 路由级别的中间件;
// 3. 错误级别的中间件;
// 4. Express 内置的中间件;
// 5. 第三方的中间件;


// 1. 应用级别的中间件:
// 通过 app.use() 或 app.get() 或 app.post(), 绑定到 app 实力上的中间件, 叫做应用级别的中间件.


// 2. 路由级别的中间件;
// 绑定到 express.Router() 实例上的中间件, 叫做路由级别的中间件. 它的用法和应用级别的中间件没有任何区别. 
// 只不过, 应用级别的中间件是绑定到 app 实例上, 路由级别中间件绑定到 router 实例上.


// 3. 错误级别的中间件;
// 错误级别中间件的作用: 专门用来捕获整个项目中发生的异常错误, 从而防止项目异常奔溃的问题.
// 格式: 错误级别中间件的 function 处理函数中, 必须有 4 个形参, 形参顺序从前到后, 分别是(err, req, res, next);
// 注意: 错误级别的中间件, 必须注册在所有路由之后.


// 4. Express 内置的中间件;
// 自 Express 4.16.0 版本开始, Express 内置了 3 个常用的中间件, 极大地提高了 Express 项目的开发效率和体验:
// 4.1. express.static()  快速托管静态资源的内置中间件, 例如: HTML文件, 图片, CSS样式等 (无兼容性);
// 4.2. express.json()  解析 JSON 格式的请求体数据(有兼容性, 仅在 4.16.0+ 版本中可用);
// 4.3. express.urlencoded() 解析 URL-encoded 格式的请求体数据 (有兼容性, 仅在 4.16.0+ 版本中可用);
// 配置解析 application/json 格式数据的内置中间件
// app.use(express.json());
// 配置解析 application/x-www-form-urlencoded 格式数据的内置中间件
// app.use(express.urlencoded({ extended:false }));


// 5. 第三方的中间件;
// 非 Express 官方内置的, 而是由第三方开发出来的中间件, 叫做第三方中间件. 在项目中, 大家可以按需下载并配置
// 第三方中间件, 从而提高项目的开发效率.
// 例如: 在 express@4.16.0 之前的版本中, 经常使用 body-parser 这个第三方中间件, 来解析请求体数据. 使用
// 步骤如下:
// 5.1 运行 npm install body-parser 命令安装中间件;
// 5.2 使用 require() 导入中间件;
// 5.3 调用 app.use() 注册并使用中间件;
// 注意: Express 内置的 express.urlencoded 中间件, 就是基于 body-parse 这个第三方中间件进一步封装出来的.