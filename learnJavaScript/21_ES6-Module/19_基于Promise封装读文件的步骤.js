/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-19 12:03:43
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-19 12:46:31
 * @FilePath: \21_ES6-Module\19_基于Promise封装读文件的步骤.js
 */
// 步骤: 
// 1. 封装一个 getFile() 函数;
// 2. 在 getFile() 返回 Promise 实例对象;
// 2.5 Promise 实例对象定义一个回调函数;
// 3. 在 Promise 实例对象回调函数, 使用 fs 模块读取文件;
// 4. 在 Promise 实例对象回调函数定义 resolve 和 reject 形参;
// 5. 如果读取成功, 则调用 resolve();  如果读取失败, 则调用 reject();


// getFile() 方法的封装要求:
// 1. 方法的名称要定义为 getFile;
// 2. 方法接收一个新参 fpath, 表示要读取的文件路径;
// 3. 方法的返回值为 Promise 实例对象;