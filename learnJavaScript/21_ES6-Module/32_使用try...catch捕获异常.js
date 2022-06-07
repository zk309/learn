/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-20 14:01:00
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-20 14:03:12
 * @FilePath: \21_ES6-Module\32_使用try...catch捕获异常.js
 */
// 使用 try...catch 捕获 Promise 异步任务中产生的异常错误，并在 catch 块中进行处理。
/*
  31.api接口案例 文件夹
  try { 
      const [rows] = await db.query('select * from users');  // db.query() 函数的返回值是 Promise 实例，可以使用 async/await 进行简化。
      // console.log(rows);
      res.send({
        status: 0,
        message: '获取用户列表数据成功!-_-!',
        data: rows
      })
    } catch (error) {
      res.send({
        status: 1,
        message: '获取用户列表数据失败!-_-!',
        data: error.message
      })
    }
*/