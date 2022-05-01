/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-01 12:57:16
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-02 07:25:02
 * @FilePath: \20_Vue2.0\09_了解loder加载器.js
 */
// 在实际开发中, webpack 默认只能打包处理以 .js 后缀名结尾的模块. 其他非 .js 后缀名结尾的模块,
// webpack 默认处理不了, 垃圾, 需要调用 loader 加载器才可以正常打包, 否则会报错.

// loader 加载器的作用: 协助 webpack 打包处理特定的文件模块. 比如:
// 1. css-loader  可以打包处理 .css 相关的文件;
// 2. less-loader  可以打包处理 .less 相关的文件;
// 3. babel-loader  可以打包处理 webpack 无法处理的高级语法;
// 4. url-loader  可以打包处理 图片文件;