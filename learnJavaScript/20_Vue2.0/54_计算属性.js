/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-05 15:05:15
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-09 11:28:22
 * @FilePath: \20_Vue2.0\54_计算属性.js
 */
// 计算属性

// 特点：
// 1. 定义的时候，要被定义为 '方法';
// 2. 在使用计算属性的时候，当普通的属性使用即可;
// 3. 要 return 返回值;
// 4. 只要计算属性中依赖的数据源变化了，则计算属性会自动重新求值;

// 优点:
// 1. 实现了代码的复用;
// 2. 只要计算属性中依赖的数据源变化了，则计算属性会自动重新求值.