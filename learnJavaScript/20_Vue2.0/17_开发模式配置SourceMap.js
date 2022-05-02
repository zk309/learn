/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-02 10:43:59
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-02 10:55:00
 * @FilePath: \20_Vue2.0\17_开发模式配置SourceMap.js
 */
// Source Map 就是一个信息文件，里面储存着位置信息。也就是说，Source Map 文件中存储着压缩混淆后的
// 代码，所对应的转换前的位置。
// 有了它，出错的时候，出错工具将直接显示原始代码，而不是转换后的代码，能够极大地方便后期的调试。

// 默认 Source Map 的问题：
// 开发环境下默认生成的 Source Map，记录的是生成后的代码的位置，会导致运行时报错的行数与源代码的行数
// 不一致的问题。

// 解决默认 Source Map 的问题：
// 开发环境下，推荐在 webpack.config.js 中添加如下的配置，即可保证运行时报错的行数与源代码的行数保持一致。
// devtool: 'eval-source-map',  // 解决默认 Source Map 的问题.