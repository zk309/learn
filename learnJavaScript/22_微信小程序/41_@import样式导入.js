/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-24 14:30:32
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-06-01 02:07:28
 * @FilePath: \22_微信小程序\41_@import样式导入.js
 */
// 什么是样式导入?
// 使用 WXSS 提供的 @import 语法, 可以导入外联的样式表.

// @import 的语法格式:
// @import 后跟需要导入的外联样式表的相对路径, 然后 ';' 结束语句. (要注意 ';' 结尾.)

// common.wxss:
// .font {
//   font-family: '隶书'
// }

// index.wxss:
// @import "/common/common.wxss";