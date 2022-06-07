/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-20 07:25:26
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-20 13:43:27
 * @FilePath: \21_ES6-Module\31_api接口案例分析.js
 */
// 案例需求:
// 基于 MySQL 数据库 + Express 对外提供用户列表的 API 接口服务. 用到的的技术点如下:
// 1. 第三方包 express 和 mysql2;
// 2. ES6 模块化;
// 3. Promise;
// 4. async/await;

// 主要实现步骤:
// 1. 搭建项目的基本结构;
// 2. 创建基本的服务器;
// 3. 创建 db 数据库操作模块;
// 4. 创建 user_ctrl 业务模块；
// 5. 创建 user-router 路由模块；

// 搭建项目的基本结构：
// 1. 启用 ES6 模块化支持；
//    在 package.json 中声明 "type":"module"
// 2. 安装第三方依赖包；
//    运行 npm install express@4.17.1 mysql2@2.2.5

// 创建基本的服务器:
/*
// 导入 express 文件
import express from 'express'
// 建立服务器实例
const app = express();
// 中间件
// 建立端口号
app.listen(8020, () => {
console.log('express server running at http://127.0.0.1:8020');
});
*/

// 创建 db 数据库操作模块:
/*
import mysql from 'mysql2';

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  database: 'my_db-01', // 操作数据库的名称
  user: 'root', // 用户名
  password: 'admin123' // 密码
})

export default pool.promise(); // 默认导出一个支持 Promise API 的 pool.
*/

// 创建 user_ctrl 业务模块；
/*
  \router\user_router.js 文件夹:
  import express from 'express'; // 导入 express
  import { getAllUser } from '../controller/user_ctrl.js'

  const router = new express.Router(); // 创建路由实例
  router.get('/user', getAllUser);  

  export default router
*/
/*
  api.js 文件夹:
  import userRouter from './router/user_router.js'

  中间件
  app.use('/api', userRouter);
*/