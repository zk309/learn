/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-20 13:13:06
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-20 13:19:07
 * @FilePath: \api接口案例\router\user_router.js
 */
import express from 'express'; // 导入 express
import { getAllUser } from '../controller/user_ctrl.js'

const router = new express.Router(); // 创建路由实例
router.get('/user', getAllUser);  

export default router