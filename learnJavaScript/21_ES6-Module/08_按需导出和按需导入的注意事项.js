/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-18 18:06:02
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-18 18:11:04
 * @FilePath: \21_ES6-Module\08_按需导出和按需导入的注意事项.js
 */
// 按需导出与按需导入的注意事项：
// 1. 每个模块中可以使用多次按需导出；
// 2. 按需导入的成员名称必须和按需导出的名称保持一致;
// 3. 按需导入时，可以使用 as 关键字进行重命名；
// 4. 按需导入可以和默认导入一起使用；