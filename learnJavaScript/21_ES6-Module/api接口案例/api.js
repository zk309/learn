/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-20 08:01:27
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-20 13:20:19
 * @FilePath: \api接口案例\api.js
 */
// 导入 express 文件
import express from 'express'
import userRouter from './router/user_router.js'

// 建立服务器实例
const app = express();

// 中间件
app.use('/api', userRouter);

// 建立端口号
app.listen(8020, () => {
  console.log('express server running at http://127.0.0.1:8020 !-_-!');
});