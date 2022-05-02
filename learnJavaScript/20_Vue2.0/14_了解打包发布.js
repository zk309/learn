/*
 * @Descripttion: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @version: April 2021 (version 1.56)
 * @Author: ZhangKe
 * @Date: 2022-05-02 08:00:34
 * @LastEditors: ZhangKe
 * @LastEditTime: 2022-05-02 16:29:37
 * @FilePath: \20_Vue2.0\14_了解打包发布.js
 */
// 为什么要打包发布？
// 项目开发完成之后，需要使用 webpack 对项目进行打包发布，主要原因有以下两点：
// 1. 开发环境下，打包生成的文件存放于内存中，无法获取到最终打包生成的文件；
// 2. 开发环境下，打包生成的文件不会进行代码压缩和性能优化；

// 为了让项目能够在生产环境中高性能的运行，因此需要对项目进行打包发布；

// ---------------------------------------------------------------

// 配置 webpack 的打包发布：
// 在 package.json 文件的 scripts 节点下，新增 build 命令如下：
//  "scripts": {
//     "dev": "webpack server",  // 开发环境中，运行 dev 命令
//     "build": "webpack --mode production"  // 项目发布时，运行 build 命令
//   },

// --mode 是一个参数项，用来指定 webpack 的运行模式。production 代表生产环境，会对打包生成的文件
// 进行代码压缩和性能优化。

// 注意：通过 --mode 指定的参数项，会覆盖 webpack.config.js 中的 mode 选项。